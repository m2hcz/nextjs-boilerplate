"use client";
import {useEffect,useState} from "react";
type Pulse={players:number|null;visits:number|null;gameCount:number;updatedAt:string|null};
const format=(v:number|null)=>v===null?"—":new Intl.NumberFormat("en-US",{notation:"compact",maximumFractionDigits:1}).format(v);
export default function LiveMetrics(){
  const [stats,setStats]=useState<Pulse|null>(null);
  useEffect(()=>{
    let active=true;
    const controller=new AbortController();
    async function refresh(){
      try{const resp=await fetch("/api/metrics",{cache:"no-store",signal:controller.signal});if(!resp.ok)throw Error("unavailable");
      const body=(await resp.json()) as Pulse;if(active)setStats(body);
      }catch{if(active)setStats({players:null,visits:null,gameCount:10,updatedAt:null})}
    }
    void refresh();
    const timer=window.setInterval(()=>void refresh(),60000);
    return()=>{active=false;controller.abort();window.clearInterval(timer)};
  },[]);
  return <div className="scale-live">
    <div className="scale-detail-number scale-live-number" aria-live="polite">{format(stats?.players??null)}</div>
    <h3>Players right now</h3>
    <p>{stats?.players!==null&&stats?.players!==undefined?"Currently active across the tracked games.":"Live Roblox data is unavailable right now."}</p>
    <div className="scale-live-bottom"><span>10 EXPERIENCES</span><span>{stats?.updatedAt?"REFRESHED AUTOMATICALLY":"NOT YET VERIFIED"}</span></div>
  </div>;
}
