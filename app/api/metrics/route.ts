import {NextResponse} from "next/server";
export const revalidate=60;
const ids=[10195887022,7677035096,10390310565,7661577083,10764948276,9889404689,8125244608,7761516673,9830176316,10421033356];
export async function GET(){
  try{
    const url="https://games.roblox.com/v1/games?universeIds="+ids.join(",");
    const response=await fetch(url,{next:{revalidate:60},signal:AbortSignal.timeout(8500)});
    if(!response.ok)throw Error("roblox unavailable");
    const body=await response.json() as {data?:Array<{id:number;playing:number;visits:number}>};
    const valid=(body.data??[]).filter(g=>ids.includes(g.id)&&Number.isFinite(g.playing)&&Number.isFinite(g.visits));
    if(valid.length===0)throw Error("empty metrics");
    return NextResponse.json({players:valid.reduce((n,g)=>n+g.playing,0),visits:valid.reduce((n,g)=>n+g.visits,0),gameCount:ids.length,updatedAt:new Date().toISOString(),partial:valid.length!==ids.length},{headers:{"Cache-Control":"public,s-maxage=60,stale-while-revalidate=120"}});
  }catch{return NextResponse.json({players:null,visits:null,gameCount:ids.length,updatedAt:null},{headers:{"Cache-Control":"public,s-maxage=20"}})}
}
