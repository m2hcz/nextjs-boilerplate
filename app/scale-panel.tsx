import Link from "next/link";
import LiveMetrics from "./live-metrics";

export default function ScalePanel() {
  return (
    <section className="scale-panel" id="performance" aria-labelledby="scale-title">
      <div className="wrap scale-layout">
        <div className="scale-bento">
          <article className="scale-card scale-card-growth">
            <div className="scale-card-top"><span className="scale-tag">01 / STUDIO PERFORMANCE</span><span className="scale-cross" aria-hidden="true">✳</span></div>
            <div className="scale-main-number">150K<span>+</span></div>
            <h3>Studio Peak Average</h3>
            <p>A historical portfolio milestone reported by Atlantic Interactive.</p>
            <div className="growth-chart" role="img" aria-label="Illustrative growth curve, not a historical measurement.">
              <div className="growth-grid" aria-hidden="true" />
              <svg viewBox="0 0 580 245" fill="none" preserveAspectRatio="none" aria-hidden="true">
                <defs><linearGradient id="atl-growth" x1="0" y1="0" x2="0" y2="1"><stop stopColor="#298bff" stopOpacity=".25"/><stop offset="1" stopColor="#298bff" stopOpacity="0"/></linearGradient></defs>
                <path className="graph-fill" d="M0 238 C90 237 155 229 215 211 S325 164 378 108 S489 23 580 7 L580 245 L0 245 Z" fill="url(#atl-growth)" />
                <path className="graph-line" d="M0 238 C90 237 155 229 215 211 S325 164 378 108 S489 23 580 7" stroke="#278cff" strokeWidth="3" vectorEffect="non-scaling-stroke"/>
                <circle className="graph-pulse" cx="580" cy="7" r="6" fill="#2a92ff"/>
                <circle className="graph-pulse graph-halo" cx="580" cy="7" r="16" fill="#2a92ff" fillOpacity=".15"/>
              </svg>
            </div>
            <span className="graph-disclaimer">ILLUSTRATIVE CURVE · HISTORICAL PEAK</span>
          </article>
          <article className="scale-card scale-card-milestone">
            <div className="scale-card-top"><span className="scale-tag">02 / FEATURED MILESTONE</span><span className="scale-up" aria-hidden="true">↗</span></div>
            <div className="scale-detail-number">100K<span>+</span></div>
            <h3>Zombie Defense Tower</h3>
            <p>Historical peak concurrent players.</p>
            <div className="scale-mini-bars" aria-hidden="true">{[26,42,34,61,50,75,58,89,72,100,86,96].map((v,i)=><span key={i} style={{height:v+"%"}}/>)}</div>
          </article>
          <article className="scale-card scale-card-current">
            <div className="scale-card-top"><span className="scale-tag">03 / LIVE PULSE</span><span className="live-dot" aria-hidden="true"/></div>
            <LiveMetrics />
          </article>
          <article className="scale-card scale-card-small">
            <div className="scale-card-top"><span className="scale-tag">04 / NEW EXPERIENCE</span><span className="scale-up" aria-hidden="true">↗</span></div>
            <div className="scale-detail-number">8K<span>+</span></div>
            <h3>Super Head Soccer</h3>
            <p>Historical peak concurrent players.</p>
          </article>
        </div>
        <div className="scale-copy">
          <p className="scale-eyebrow"><span/> BUILT TO SCALE</p>
          <h2 id="scale-title">BETTER<br/>GAMES.<br/><span>BIG IMPACT.</span></h2>
          <p className="scale-lead">From the first prototype to high-concurrency moments, Atlantic develops and supports Roblox experiences built for the long run.</p>
          <div className="scale-features">
            <span>GAME DEVELOPMENT</span><span>LIVE OPERATIONS</span><span>GROWTH & ANALYTICS</span>
          </div>
          <div className="scale-actions"><Link href="/#contact" className="btn scale-primary">WORK WITH US <b>↗</b></Link><Link href="/games" className="btn scale-secondary">OUR GAMES <b>↗</b></Link></div>
        </div>
      </div>
    </section>
  );
}
