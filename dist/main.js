(()=>{"use strict";[...document.querySelectorAll(".menu-list__link"),document.querySelector(".main__button"),document.querySelector(".main__scroll")].forEach((e=>{e.addEventListener("click",(t=>{t.preventDefault();const a=e.getAttribute("href").substring(1);document.getElementById(a).scrollIntoView({behavior:"smooth",block:"start"})}))})),(()=>{document.querySelector(".feature__link");const e=document.querySelectorAll(".feature__link"),t=document.querySelectorAll(".feature-sub");e.forEach(((a,s)=>{a.addEventListener("click",(()=>{a.classList.contains("feature__link_active")?(a.classList.remove("feature__link_active"),t[s].classList.add("hidden")):(e.forEach(((e,a)=>{e.classList.contains("feature__link_active")&&(e.classList.remove("feature__link_active"),t[a].classList.add("hidden"))})),a.classList.add("feature__link_active"),t[s].classList.remove("hidden"))}))}))})(),(()=>{const e=document.querySelector(".design-text"),t=document.querySelectorAll(".design-list__item"),a=document.querySelectorAll(".design__descr"),s=document.querySelectorAll(".design-images"),l=document.querySelectorAll(".design__title");e.addEventListener("click",(e=>{e.target.closest(".design-list__item")&&t.forEach(((t,r)=>{e.target===t?(t.classList.add("design-list__item_active"),a[r].classList.remove("hidden"),s[r].classList.remove("hidden"),l[r].classList.remove("hidden")):(t.classList.remove("design-list__item_active"),a[r].classList.add("hidden"),s[r].classList.add("hidden"),l[r].classList.add("hidden"))}))}))})(),(()=>{const e=document.querySelector(".modal");document.querySelectorAll(".more").forEach((t=>{t.addEventListener("click",(()=>{e.classList.remove("hidden")}))})),e.addEventListener("click",(t=>{t.target.closest(".modal-wrapper")&&!t.target.closest(".modal__close")||e.classList.add("hidden")}))})(),(()=>{const e=document.querySelector(".humburger-menu"),t=document.querySelector(".menu");e.addEventListener("click",(a=>{t.classList.toggle("menu-active"),e.classList.toggle("humburger-menu-active")})),t.addEventListener("click",(a=>{a.target.closest(".menu-list__item")&&(t.classList.remove("menu-active"),e.classList.remove("humburger-menu-active"))}))})(),document.querySelectorAll(".input").forEach((e=>{e.addEventListener("blur",(e=>{if(e.preventDefault(),"name"===e.target.name){const t=/[^а-яА-ЯёЁ]/g;e.target.value=e.target.value.replace(t,""),e.target.value=e.target.value.replace(/(\s|^)[а-яё]/g,(e=>e.toUpperCase()))}if("phone"===e.target.name){const t=/[^0-9\+\(\)\-]/g;e.target.value=e.target.value.replace(t,"")}if("mail"===e.target.name){const t=/[^a-zA-Z\0-9	\(\)\-\.\!\#\*\@\s]/g;e.target.value=e.target.value.replace(t,"")}}))})),(({formId:e})=>{e.forEach((e=>{const t=document.getElementById(e),a="Ошибка";let s=document.createElement("div");s.classList.add("prelouder"),s.innerHTML='<img src = "img/prelouder.gif"  alt = "prelouder">';let l=document.createElement("div");l.classList.add("style");t.addEventListener("submit",(e=>{e.preventDefault(),(()=>{const e=t.querySelectorAll("input"),r=new FormData(t),n={};var c;t.append(s),setTimeout((()=>{s.classList.add("hide-prelouder")}),1e3),t.append(l),r.forEach(((e,t)=>{n[t]=e})),(e=>{let t=!0;return e.forEach((e=>{var a;"name"===e.name?e.value.length<3&&(alert("Ошибка в имени!"),t=!1):"mail"===e.name?(a=e.value,/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(a)||(alert("Ошибка в почте!"),t=!1)):"phone"===e.name&&e.value.length<9&&(alert("Ошибка в номере телефоне!"),t=!1)})),t})(e)?(c=n,fetch("https://jsonplaceholder.typicode.com/posts",{method:"POST",body:JSON.stringify(c),headers:{"Content-type":"application/json"}}).then((e=>e.json()))).then((t=>{l.textContent="Успешно,с вами свяжется специалист!",e.forEach((e=>{e.value="",setTimeout((()=>{l.textContent=""}),3500)}))})).catch((e=>l.textContent=a)):(l.textContent=a,alert("Данные не валидны!"))})()}))}))})({formId:["form1","form2"]})})();