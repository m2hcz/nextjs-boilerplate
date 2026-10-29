import { NextResponse } from "next/server";

export const revalidate = 3600;
const UNIVERSE_ID = "9830176316";
const ALLOWED_IMAGE_HOST = /(^|\\.)rbxcdn\\.com$/i;

type Thumbnail = { imageUrl?: string | null; state?: string };
type GameThumbnailResponse = { data?: Array<{ thumbnails?: Thumbnail[] }> };
type GameIconResponse = { data?: Thumbnail[] };

async function getRobloxArt(): Promise<string | null> {
  const queries = [
    {
      url: `https://thumbnails.roblox.com/v1/games/multiget/thumbnails?universeIds=${UNIVERSE_ID}&countPerUniverse=1&defaults=true&size=768x432&format=Png&isCircular=false`,
      parse: (payload: GameThumbnailResponse) => payload.data?.[0]?.thumbnails?.find((item) => item.state === "Completed" && item.imageUrl)?.imageUrl,
    },
    {
      url: `https://thumbnails.roblox.com/v1/games/icons?universeIds=${UNIVERSE_ID}&size=512x512&format=Png&isCircular=false`,
      parse: (payload: GameIconResponse) => payload.data?.find((item) => item.state === "Completed" && item.imageUrl)?.imageUrl,
    },
  ];
  for (const query of queries) {
    try {
      const response = await fetch(query.url, { next: { revalidate: 3600 }, signal: AbortSignal.timeout(6000) });
      if (!response.ok) continue;
      const payload = await response.json();
      const url = query.parse(payload);
      if (typeof url !== "string") continue;
      const parsed = new URL(url);
      if (parsed.protocol === "https:" && ALLOWED_IMAGE_HOST.test(parsed.hostname)) return url;
    } catch {
      // Try the game icon when a thumbnail isn't available.
    }
  }
  return null;
}

export async function GET() {
  try {
    const imageUrl = await getRobloxArt();
    if (imageUrl) {
      const response = await fetch(imageUrl, { next: { revalidate: 3600 }, signal: AbortSignal.timeout(7000) });
      const contentType = response.headers.get("content-type") ?? "";
      if (response.ok && contentType.startsWith("image/")) {
        return new NextResponse(await response.arrayBuffer(), {
          headers: {
            "Content-Type": contentType,
            "Cache-Control": "public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400",
            "X-Game-Art": "roblox",
          },
        });
      }
    }
  } catch {
    // Fall through to the local artwork when Roblox is unavailable.
  }
  return new NextResponse(`<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="900" viewBox="0 0 1200 900"><rect width="1200" height="900" fill="#121712"/><path d="M0 610L1200 340M0 800L1200 530" stroke="#365a3b" stroke-width="170" opacity=".45"/><rect x="60" y="80" width="1080" height="740" rx="18" fill="none" stroke="#c5e8bf" stroke-width="5" opacity=".5"/><path d="M600 80v740" stroke="#c5e8bf" stroke-width="5" opacity=".5"/><circle cx="600" cy="450" r="165" stroke="#c5e8bf" stroke-width="5" fill="none" opacity=".5"/><circle cx="610" cy="375" r="170" fill="#f0f0e9"/><path d="M610 260l95 70-36 112H548l-36-112zM481 335l-38 70 58 105 67-28-30-77zM740 405l-38 105-72-28 31-77z" fill="#171717"/><path d="M535 215l-30 58 42 38 63-51 63 51 42-38-30-58" fill="#171717"/><text x="75" y="720" fill="#fff" font-family="Arial,Helvetica,sans-serif" font-weight="900" font-size="105" letter-spacing="-6">SUPER HEAD</text><text x="75" y="812" fill="#fff" font-family="Arial,Helvetica,sans-serif" font-weight="900" font-size="105" letter-spacing="-6">SOCCER</text><text x="77" y="145" fill="#d8f7d0" font-family="Arial,Helvetica,sans-serif" font-weight="700" font-size="26" letter-spacing="6">ATLANTIC INTERACTIVE</text></svg>`, { headers: { "Content-Type": "image/svg+xml; charset=utf-8", "Cache-Control": "public, max-age=300, s-maxage=300", "X-Game-Art": "local-fallback" } });
}
