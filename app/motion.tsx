"use client";
import {useEffect} from "react";
export default function Motion(){
 useEffect(()=>{
  const mq=window.matchMedia("(prefers-reduced-motion: reduce)");
  if(mq.matches)return;
  const items=[...document.querySelectorAll<HTMLElement>(".scale-card,.scale-copy,.sectiontitle,.gamecard,.service,.partrow,.about,.careers .wrap,.form")];
  const reveal=new IntersectionObserver((entries)=>{for(const e of entries){if(e.isIntersecting){e.target.classList.add("motion-visible");reveal.unobserve(e.target)}}},{rootMargin:"0px 0px -45px 0px",threshold:.05});
  for(const el of items){el.classList.add("motion-reveal");if(el.getBoundingClientRect().top<window.innerHeight*.8)el.classList.add("motion-visible");else reveal.observe(el)}
  return()=>reveal.disconnect();
 },[]);
 return <div aria-hidden="true" className="page-progress"/>;
}
