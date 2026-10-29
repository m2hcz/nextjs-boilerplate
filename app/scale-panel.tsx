import Link from "next/link";
import LiveMetrics from "./live-metrics";
import {games} from "./data";
export default function ScalePanel(){
 return <section className="insights" id="performance" aria-labelledby="insights-title">
   <div className="wrap insights-grid">
    <div className="insights-tiles atl-portfolio-stats">
     <article className="insight-tile insight-flagship atl-players-tile">
      <span className="insight-eyebrow"><i className="status-dot"/> ATLANTIC / LIVE PLAYERS</span>
      <LiveMetrics metric="players"/>
      <div className="insight-photo" aria-hidden="true"/>
     </article>
     <article className="insight-tile insight-live atl-visits-tile">
       <span className="insight-eyebrow">ATLANTIC / PORTFOLIO VISITS</span>
       <LiveMetrics metric="visits"/>
     </article>
     <article className="insight-tile atl-experiences-tile">
       <span className="insight-eyebrow">OUR PORTFOLIO</span>
       <strong className="insight-smaller">{games.length.toString().padStart(2,"0")}</strong>
       <p>Roblox experiences tracked</p>
       <Link href="/games" className="atl-stats-link">EXPLORE ALL GAMES ↗</Link>
     </article>
    </div>
    <div className="insights-copy">
      <span className="section-kicker">MORE THAN A STUDIO</span>
      <h2 id="insights-title">BUILT FOR<br/><span>WHAT'S</span><br/>NEXT.</h2>
      <p>Atlantic develops, acquires and operates Roblox games. From production to LiveOps, we stay involved after launch.</p>
      <div className="insights-actions">
       <Link href="/#contact" className="pill pill-blue">LET'S WORK TOGETHER <span aria-hidden="true">↗</span></Link>
       <Link href="/games" className="pill pill-outline">OUR GAMES <span aria-hidden="true">↗</span></Link>
      </div>
    </div>
   </div>
  </section>
}
