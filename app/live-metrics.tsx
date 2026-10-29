"use client";
import {useEffect,useState} from "react";
type Pulse={players:number|null;visits:number|null;gameCount:number;gamesWithData:number;partial:boolean;updatedAt:string|null};
const format=(v:number|null)=>v===null?"—":new Intl.NumberFormat("en-US",{notation:"compact",maximumFractionDigits:1}).format(v);
export default function LiveMetrics({metric}:{metric:"players"|"visits"}){
  const [stats,setStats]=useState<Pulse|null>(null);
  useEffect(()=>{
    let active=true;
    let controller:AbortController|null=null;
    async function refresh(){
      controller?.abort();controller=new AbortController();
      try{
        const response=await fetch("/api/metrics",{cache:"no-store",signal:controller.signal});
        if(!response.ok)throw new Error("Metrics not available");
        const body=(await response.json()) as Pulse;
        if(active)setStats(body);
      }catch{
        if(active)setStats({players:null,visits:null,gameCount:10,gamesWithData:0,partial:true,updatedAt:null});
      }
    }
    void refresh();
    const timer=window.setInterval(()=>void refresh(),60000);
    return()=>{active=false;controller?.abort();window.clearInterval(timer)};
  },[]);
  const value=stats?.[metric]??null;
  const isPlayers=metric==="players";
  const coverage=stats?.partial?stats.gamesWithData+"/"+stats.gameCount+" GAMES REPORTED":"ALL "+(stats?.gameCount??10)+" GAMES";
  return <div className="scale-live">
    <div className="scale-detail-number scale-live-number" aria-live="polite" aria-label={value===null?"Metrics unavailable":value.toLocaleString("en-US")}>{format(value)}</div>
    <h3>{isPlayers?"Players online right now":"Total visits across our portfolio"}</h3>
    <p>{value===null?"Roblox metrics are temporarily unavailable.":stats?.partial?"Live totals for the games currently reporting data.":isPlayers?"Live concurrent players across all portfolio games.":"Combined lifetime visits of all portfolio games."}</p>
    <div className="scale-live-bottom"><span>{coverage}</span><span>{stats?.updatedAt?"UPDATES EVERY MINUTE":"AWAITING DATA"}</span></div>
  </div>;
}
