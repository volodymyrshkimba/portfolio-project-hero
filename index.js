import{S as d,N as a,K as f,M as m}from"./assets/vendor-D3WBU4TD.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function u(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=u(e);fetch(e.href,r)}})();new d(".swiper-ab",{modules:[a,f,m],direction:"horizontal",loop:!0,grabCursor:!0,keyboard:{enabled:!0,onlyInViewport:!1},mousewheel:{enabled:!0,forceToAxis:!0,thresholdDelta:5},navigation:{nextEl:".swiper-button-next-ab"},breakpoints:{0:{slidesPerView:2,width:260},768:{slidesPerView:3,width:600},1440:{slidesPerView:6,width:1200}}});const p=document.querySelector(".burger-btn"),i=document.querySelector(".mob-menu"),c=document.querySelectorAll(".mob-link-js"),l=()=>{i.classList.remove("mob-menu-is-open"),c.forEach(t=>{t.removeEventListener("click",l)})},b=()=>{i.classList.add("mob-menu-is-open"),c.forEach(t=>{t.addEventListener("click",l)})};p.addEventListener("click",b);
//# sourceMappingURL=index.js.map
