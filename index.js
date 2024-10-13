(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&l(c)}).observe(document,{childList:!0,subtree:!0});function u(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=u(e);fetch(e.href,t)}})();const n=[{picture:"../img/myprojects-1.png",text:"power pulse webservice"},{picture:"../img/myprojects-2.png",text:"mimino website"},{picture:"../img/myprojects-3.png",text:"vyshyvanka vibes Landing"},{picture:"../img/myprojects-4.png",text:"green harvest online store"},{picture:"../img/myprojects-5.png",text:"wallet webservice"},{picture:"../img/myprojects-6.png",text:"chego jewelry website"},{picture:"../img/myprojects-7.png",text:"energy flow webservice"},{picture:"../img/myprojects-8.png",text:"fruitbox online store"},{picture:"../img/myprojects-9.png",text:"English excellence webservice"},{picture:"../img/myprojects-10.png",text:"starlight studio landing page"}],p=document.querySelector(".myprojects-list-galery"),s=document.querySelector(".myprojects-button-load");let o=3;function a(i){return i.map(r=>`
    <li class="myprojects-gallery-item">
    <div>
          <img class="myprojects-photo-card" src="${r.picture}" alt="${r.text}" />
        </div>
        <div class="myprojects-subtitle">
          <p class="myprojects-subtitle-text">React, JavaScript, Node JS, Git</p>
          <div class="myprojects-info">
            <h3 class="myprojects-info-title">${r.text}</h3>
            <button class="myprojects-info-button">visit
                <svg width="24" height="24">
                        <use href="../img/myprojects.svg#icon-visit"></use>
                </svg>
            </button>
        </div>
    </div>
    </li>
  `).join("")}function m(){const i=n.slice(0,o);p.innerHTML=a(i)}function d(){const i=s.querySelector("span");i&&(i.textContent="Loading..."),s.disabled=!0,setTimeout(()=>{o+=3;const r=n.slice(o-3,o);p.insertAdjacentHTML("beforeend",a(r)),i&&(i.textContent="Load More"),s.disabled=!1,o>=n.length&&s.classList.add("load-hide")},1e3)}m();s.addEventListener("click",d);
//# sourceMappingURL=index.js.map
