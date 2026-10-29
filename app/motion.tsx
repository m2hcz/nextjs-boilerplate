"use client";
import {useEffect} from "react";
export default function Motion(){
 useEffect(()=>{
  const mq=window.matchMedia("(prefers-reduced-motion: reduce)");
  if(mq.matches)return;
  const nodes=[...document.querySelectorAll<HTMLElement>(".insight-tile,.insights-copy,.sectiontitle,.gamecard,.service,.partrow,.about,.careers .wrap,.form")];
  const observer=new IntersectionObserver(entries=>{for(const entry of entries){if(entry.isIntersecting){entry.target.classList.add("motion-visible");observer.unobserve(entry.target)}}},{rootMargin:"0px 0px -30px 0px",threshold:.06});
  for(const element of nodes){element.classList.add("motion-reveal");if(element.getBoundingClientRect().top<window.innerHeight*.82)element.classList.add("motion-visible");else observer.observe(element)}
  return()=>observer.disconnect();
 },[]);
 return null;
}
