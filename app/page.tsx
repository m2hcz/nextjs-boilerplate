import Link from "next/link";
import { Nav, GameCards, Partners, Footer } from "./ui";
import Contact from "./contact";
import ScalePanel from "./scale-panel";
import Motion from "./motion";
import { games } from "./data";

const heroImages = [games[2], games[4], games[0], games[1], games[3], games[5]];

export default function Home() {
  return (
    <>
      <Motion />
      <Nav />
      <main>
        <section className="hero atl-hero" id="home">
          <div className="atl-hero-collage" aria-hidden="true">
            {heroImages.map((game) => <div className="atl-hero-image" key={game.title}><img src={game.img} alt="" /></div>)}
          </div>
          <div className="atl-hero-fade" aria-hidden="true" />
          <div className="wrap herobody atl-hero-content">
            <p className="eyebrow atl-hero-label">ATLANTIC INTERACTIVE <span>·</span> ROBLOX GAME STUDIO</p>
            <h1>GAMES<br />WORTH<br /><em>PLAYING.</em></h1>
            <p className="atl-hero-lead">We build, operate and grow Roblox experiences. Real games. Real players. Long-term thinking.</p>
            <div className="atl-hero-actions">
              <Link className="pill pill-blue" href="/games">EXPLORE GAMES <span aria-hidden="true">↗</span></Link>
              <Link className="pill pill-outline" href="/#contact">WORK WITH US <span aria-hidden="true">↗</span></Link>
            </div>
            <div className="atl-hero-bottom"><span>DEVELOPMENT / LIVEOPS / GROWTH</span><span>SCROLL TO EXPLORE ↓</span></div>
          </div>
        </section>
        <div className="atl-services-ticker" aria-label="Studio capabilities"><div>GAME DEVELOPMENT <span>✦</span> LIVE OPERATIONS <span>✦</span> ANALYTICS <span>✦</span> GROWTH <span>✦</span> GAME ACQUISITIONS <span>✦</span> GAME DEVELOPMENT <span>✦</span> LIVE OPERATIONS <span>✦</span> ANALYTICS</div></div>
        <Partners />
        <ScalePanel />
        <section className="section paper" id="games">
          <div className="wrap">
            <div className="sectiontitle">
              <div><p className="eyebrow">OUR WORK / SELECTED EXPERIENCES</p><h2>PLAY<br /><span className="accent-word">SOMETHING.</span></h2></div>
              <p>A growing portfolio of experiences developed and operated for millions of Roblox players.</p>
            </div>
            <GameCards />
            <div className="center"><Link className="pill pill-blue" href="/games">EXPLORE THE PORTFOLIO <span aria-hidden="true">↗</span></Link></div>
          </div>
        </section>
        <section className="section white" id="services">
          <div className="wrap split">
            <div><p className="eyebrow">CAPABILITIES</p><h2>MADE TO<br />LAST.</h2><p className="subcopy">The right game is just the beginning. We build the systems and operations behind it.</p></div>
            <div className="services">
              {[
                ["01","Development","Game engineering, systems and production."],
                ["02","LiveOps","Content, events and retention strategy."],
                ["03","Growth","Creative, marketing and audience development."],
                ["04","Analytics","Player insights and product decisions."],
              ].map(([n,title,description]) => <article className="service" key={n}><span>{n}</span><div><h3>{title}</h3><p>{description}</p></div><b>↗</b></article>)}
            </div>
          </div>
        </section>
        <section className="section charcoal" id="about">
          <div className="wrap about"><div><p className="eyebrow">ATLANTIC INTERACTIVE</p><h2>WE BUILD.<br />WE STAY.</h2></div><p>Atlantic is an independent Roblox studio. We work with game teams to create quality experiences and support them through every stage of growth.</p></div>
        </section>
        <section className="section grey" id="partnerships">
          <div className="wrap">
            <p className="eyebrow">PARTNER WITH ATLANTIC</p>
            <h2>LET'S BUILD<br />TOGETHER.</h2>
            <div className="partrows">
              {[
                ["01","Co-development","Production and engineering for ambitious experiences."],
                ["02","LiveOps & growth","Retention, monetization and player experience."],
                ["03","Partnerships & acquisitions","Explore a collaboration, investment or acquisition."],
              ].map(([n,title,description]) => <a className="partrow" href="/#contact" key={n}><span>{n}</span><h3>{title}</h3><p>{description}</p><b>↗</b></a>)}
            </div>
          </div>
        </section>
        <section className="section charcoal careers" id="careers">
          <div className="wrap"><p className="eyebrow">CAREERS</p><h2>WORK THAT<br />GETS PLAYED.</h2><p>We want to meet people who care about great games. Designers, engineers, artists, producers and operators.</p><Link href="/#contact" className="pill pill-blue">GET IN TOUCH ↗</Link></div>
        </section>
        <section className="section white" id="contact">
          <div className="wrap split"><div><p className="eyebrow">CONTACT</p><h2>WHAT'S<br />NEXT?</h2><p className="subcopy">Tell us about your game, idea, studio or portfolio.</p></div><Contact /></div>
        </section>
      </main>
      <Footer />
    </>
  );
}
