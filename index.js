import{A as b}from"./assets/vendor-CTqzIL4Y.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))g(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const m of i.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&g(m)}).observe(document,{childList:!0,subtree:!0});function d(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function g(e){if(e.ep)return;e.ep=!0;const i=d(e);fetch(e.href,i)}})();const p=[{picture:"../img/myprojects-1.png",text:"power pulse webservice"},{picture:"../img/myprojects-2.png",text:"mimino website"},{picture:"../img/myprojects-3.png",text:"vyshyvanka vibes Landing"},{picture:"../img/myprojects-4.png",text:"green harvest online store"},{picture:"../img/myprojects-5.png",text:"wallet webservice"},{picture:"../img/myprojects-6.png",text:"chego jewelry website"},{picture:"../img/myprojects-7.png",text:"energy flow webservice"},{picture:"../img/myprojects-8.png",text:"fruitbox online store"},{picture:"../img/myprojects-9.png",text:"English excellence webservice"},{picture:"../img/myprojects-10.png",text:"starlight studio landing page"}],y=document.querySelector(".myprojects-list-galery"),n=document.querySelector(".myprojects-button-load");let l=3;function v(t){return t.map(o=>`
    <li class="myprojects-gallery-item">
    <div>
          <img class="myprojects-photo-card" src="${o.picture}" alt="${o.text}" />
        </div>
        <div class="myprojects-subtitle">
          <p class="myprojects-subtitle-text">React, JavaScript, Node JS, Git</p>
          <div class="myprojects-info">
            <h3 class="myprojects-info-title">${o.text}</h3>
            <button class="myprojects-info-button">visit
                <svg width="24" height="24">
                        <use href="../img/myprojects.svg#icon-visit"></use>
                </svg>
            </button>
        </div>
    </div>
    </li>
  `).join("")}function j(){const t=p.slice(0,l);y.innerHTML=v(t)}function x(){const t=n.querySelector("span");t&&(t.textContent="Loading..."),n.disabled=!0,setTimeout(()=>{l+=3;const o=p.slice(l-3,l);y.insertAdjacentHTML("beforeend",v(o)),t&&(t.textContent="Load More"),n.disabled=!1,l>=p.length&&n.classList.add("load-hide")},1e3)}j();n.addEventListener("click",x);new b(".accordion-container");const s={light:"light-theme",dark:"dark-theme"},L=document.querySelector(".theme-switch__toggle"),r=document.querySelector(".menu-header"),c=document.querySelector("body"),u=localStorage.getItem("theme");u?(c.classList.add(u),r.classList.add(u)):(c.classList.add(s.light),r.classList.add(s.light));u===s.dark&&(L.checked=!0);const S=t=>{t.currentTarget.checked?(c.classList.remove(s.light),c.classList.add(s.dark),r.classList.remove(s.light),r.classList.add(s.dark),localStorage.setItem("theme",s.dark)):(c.classList.remove(s.dark),c.classList.add(s.light),r.classList.remove(s.dark),r.classList.add(s.light),localStorage.setItem("theme",s.light))};L.addEventListener("change",S);const h=document.querySelector(".open-header-menu-button"),f=document.querySelector(".close-button"),a=document.querySelector(".menu-header"),w=document.querySelectorAll(".menu-header-link");h&&a&&h.addEventListener("click",function(){a.classList.add("is-open")});f&&a&&f.addEventListener("click",function(){a.classList.remove("is-open")});w.forEach(t=>{t.addEventListener("click",function(o){o.preventDefault();const d=document.querySelector(this.getAttribute("href"));d&&d.scrollIntoView({behavior:"smooth"}),a.classList.remove("is-open")})});
//# sourceMappingURL=index.js.map