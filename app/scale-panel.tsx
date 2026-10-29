import Link from "next/link";
import LiveMetrics from "./live-metrics";

export default function ScalePanel() {
  return (
    <section className="insights" id="performance" aria-labelledby="insights-title">
      <div className="wrap insights-grid">
        <div className="insights-tiles">
          <article className="insight-tile insight-flagship">
            <div className="insight-eyebrow">ATLANTIC / PERFORMANCE</div>
            <strong className="insight-big">150K<span>+</span></strong>
            <h3>Studio peak average</h3>
            <p>Reported historical performance across the studio portfolio.</p>
            <div className="insight-photo" aria-hidden="true" />
          </article>
          <article className="insight-tile insight-live">
            <span className="insight-eyebrow"><i className="status-dot" /> LIVE ON ROBLOX</span>
            <LiveMetrics />
          </article>
          <article className="insight-tile insight-zombie">
            <span className="insight-eyebrow">ZOMBIE DEFENSE TOWER</span>
            <strong className="insight-smaller">100K<span>+</span></strong>
            <p>Peak concurrent players</p>
          </article>
          <article className="insight-tile insight-soccer">
            <span className="insight-eyebrow">SUPER HEAD SOCCER</span>
            <strong className="insight-smaller">8K<span>+</span></strong>
            <p>Peak concurrent players</p>
          </article>
        </div>
        <div className="insights-copy">
          <span className="section-kicker">MORE THAN A STUDIO</span>
          <h2 id="insights-title">BUILT FOR<br /><span>WHAT'S</span><br />NEXT.</h2>
          <p>Atlantic develops, acquires and operates Roblox games. From production to LiveOps, we stay involved after launch.</p>
          <div className="insights-actions">
            <Link href="/#contact" className="pill pill-blue">LET'S WORK TOGETHER <span aria-hidden="true">↗</span></Link>
            <Link href="/games" className="pill pill-outline">OUR GAMES <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
      </div>
    </section>
  );
}
