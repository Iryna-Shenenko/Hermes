import{A as L}from"./assets/vendor-CTqzIL4Y.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))m(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const g of r.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&m(g)}).observe(document,{childList:!0,subtree:!0});function c(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function m(e){if(e.ep)return;e.ep=!0;const r=c(e);fetch(e.href,r)}})();const u=[{picture:"../img/my-projects/myprojects-1.png",text:"power pulse webservice"},{picture:"../img/my-projects/myprojects-2.png",text:"mimino website"},{picture:"../img/my-projects/myprojects-3.png",text:"vyshyvanka vibes Landing"},{picture:"../img/my-projects/myprojects-4.png",text:"green harvest online store"},{picture:"../img/my-projects/myprojects-5.png",text:"wallet webservice"},{picture:"../img/my-projects/myprojects-6.png",text:"chego jewelry website"},{picture:"../img/my-projects/myprojects-7.png",text:"energy flow webservice"},{picture:"../img/my-projects/myprojects-8.png",text:"fruitbox online store"},{picture:"../img/my-projects/myprojects-9.png",text:"English excellence webservice"},{picture:"../img/my-projects/myprojects-10.png",text:"starlight studio landing page"}],f=document.querySelector(".myprojects-list-galery"),a=document.querySelector(".myprojects-button-load"),b="https://github.com/Iryna-Shenenko/Hermes";let i=3;function v(t){return t.map(o=>`
    <li class="myprojects-gallery-item">
    <div>
          <img class="myprojects-photo-card" src="${o.picture}" alt="${o.text}" />
        </div>
        <div class="myprojects-subtitle">
          <p class="myprojects-subtitle-text">React, JavaScript, Node JS, Git</p>
          <div class="myprojects-info">
            <h3 class="myprojects-info-title">${o.text}</h3>
            <a href="${b}">
            <button class="myprojects-info-button">visit
                <svg width="24" height="24">
                        <use href="../img/my-projects/myprojects.svg#icon-visit"></use>
                </svg>
            </button>
            </a>
        </div>
    </div>
    </li>
  `).join("")}function S(){const t=u.slice(0,i);f.innerHTML=v(t)}function x(){const t=a.querySelector("span");t&&(t.textContent="Loading..."),a.disabled=!0,setTimeout(()=>{const o=u.length-i,c=o>=3?3:o;i+=c;const m=u.slice(i-c,i);f.insertAdjacentHTML("beforeend",v(m)),t&&(t.textContent="Load More"),a.disabled=!1,i>=u.length&&(a.style.display="none")},1e3)}S();a.addEventListener("click",x);new L(".accordion-container");const s={light:"light-theme",dark:"dark-theme"},j=document.querySelector(".theme-switch__toggle"),n=document.querySelector(".menu-header"),l=document.querySelector("body"),p=localStorage.getItem("theme");p?(l.classList.add(p),n.classList.add(p)):(l.classList.add(s.light),n.classList.add(s.light));p===s.dark&&(j.checked=!0);const w=t=>{t.currentTarget.checked?(l.classList.remove(s.light),l.classList.add(s.dark),n.classList.remove(s.light),n.classList.add(s.dark),localStorage.setItem("theme",s.dark)):(l.classList.remove(s.dark),l.classList.add(s.light),n.classList.remove(s.dark),n.classList.add(s.light),localStorage.setItem("theme",s.light))};j.addEventListener("change",w);const y=document.querySelector(".open-header-menu-button"),h=document.querySelector(".close-button"),d=document.querySelector(".menu-header"),I=document.querySelectorAll(".menu-header-link");y&&d&&y.addEventListener("click",function(){d.classList.add("is-open")});h&&d&&h.addEventListener("click",function(){d.classList.remove("is-open")});I.forEach(t=>{t.addEventListener("click",function(o){o.preventDefault();const c=document.querySelector(this.getAttribute("href"));c&&c.scrollIntoView({behavior:"smooth"}),d.classList.remove("is-open")})});
//# sourceMappingURL=index.js.map
