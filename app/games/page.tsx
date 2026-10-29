import type { Metadata } from "next";
import { Nav, GameCards, Footer } from "../ui";
import Motion from "../motion";
export const metadata: Metadata = { title: "Games" };
export default function Games() {
  return <><Motion/><Nav/><main><section className="gameshero atl-gameshero"><div className="wrap"><p className="eyebrow">ATLANTIC INTERACTIVE / PORTFOLIO</p><h1>OUR<br/><em>GAMES.</em></h1><p>Explore our portfolio of experiences built, developed and operated with Atlantic Interactive.</p></div></section><section className="section paper"><div className="wrap"><div className="collectionhead">EXPLORE THE PORTFOLIO <span>10 EXPERIENCES</span></div><GameCards all/></div></section></main><Footer/></>;
}
