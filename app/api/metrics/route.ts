import {NextResponse} from "next/server";
import {games} from "../../data";
export const revalidate=60;
type RobloxGame={id:number;playing:number;visits:number};
export async function GET(){
  const ids=games.map(game=>game.universeId);
  try{
    const url="https://games.roblox.com/v1/games?universeIds="+ids.join(",");
    const response=await fetch(url,{next:{revalidate:60},signal:AbortSignal.timeout(8500),headers:{"Accept":"application/json"}});
    if(!response.ok)throw new Error("Roblox API status "+response.status);
    const body=await response.json() as {data?:RobloxGame[]};
    const seen=new Set<number>();
    const valid=(body.data??[]).filter(game=>{
      if(!ids.includes(game.id)||seen.has(game.id)||!Number.isFinite(game.playing)||!Number.isFinite(game.visits)||game.playing<0||game.visits<0)return false;
      seen.add(game.id);return true;
    });
    if(valid.length===0)throw new Error("No valid Roblox game statistics");
    return NextResponse.json({
      players:valid.reduce((total,game)=>total+game.playing,0),
      visits:valid.reduce((total,game)=>total+game.visits,0),
      gameCount:ids.length,gamesWithData:valid.length,partial:valid.length!==ids.length,
      updatedAt:new Date().toISOString()
    },{headers:{"Cache-Control":"public,s-maxage=60,stale-while-revalidate=120"}});
  }catch{
    return NextResponse.json({players:null,visits:null,gameCount:ids.length,gamesWithData:0,partial:true,updatedAt:null},{headers:{"Cache-Control":"public,s-maxage=20"}});
  }
}
