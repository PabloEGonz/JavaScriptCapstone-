"use strict";(self.webpackChunkjavascriptcapstone_=self.webpackChunkjavascriptcapstone_||[]).push([[826],{547:(n,r,e)=>{e.d(r,{Z:()=>s});var t=e(81),o=e.n(t),a=e(645),i=e.n(a)()(o());i.push([n.id,'.popUp-card {\r\n  align-items: center;\r\n  justify-content: center;\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  z-index: 2;\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n}\r\n\r\n.popUp-card::before {\r\n  content: "";\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 100%;\r\n  backdrop-filter: blur(10px);\r\n}\r\n\r\n.popUp-section {\r\n  justify-items: center;\r\n  gap: 0.7em;\r\n  width: 70%;\r\n  padding: 1% 2%;\r\n  height: 90vh;\r\n  grid-template-columns: repeat(2, 1fr);\r\n  grid-template-rows: 1fr;\r\n  position: relative;\r\n  background-color: #000000a9;\r\n  border-radius: 10px;\r\n}\r\n\r\n.box1 img {\r\n  height: 100%;\r\n}\r\n\r\n.xBttn {\r\n  position: absolute;\r\n  width: 30px;\r\n  top: 10px;\r\n  right: 10px;\r\n}\r\n\r\n.box2 {\r\n  flex-direction: column;\r\n  align-items: start;\r\n  justify-content: start;\r\n  gap: 0.5em;\r\n  background-color: #7e7e7e6e;\r\n  padding: 5%;\r\n  border-radius: 10px;\r\n  margin-right: 3%;\r\n}\r\n\r\n.serieTitle {\r\n  font-family: "Ubuntu", sans-serif;\r\n  font-weight: 600;\r\n  font-size: 1.4em;\r\n}\r\n\r\n.box2 p,\r\ni,\r\nb {\r\n  font-size: 0.8rem;\r\n}\r\n\r\n.serieData {\r\n  grid-template-columns: 1fr 1fr;\r\n  gap: 0.4em;\r\n}\r\n\r\n.serieData li {\r\n  font-size: 0.9rem;\r\n}\r\n\r\n.serieData li strong {\r\n  font-family: "Ubuntu", sans-serif;\r\n  font-size: 0.9rem;\r\n  font-weight: 600;\r\n}\r\n\r\n.box3 h3 {\r\n  text-align: start;\r\n  font-family: "Ubuntu", sans-serif;\r\n  font-weight: 550;\r\n}\r\n\r\n.viewComments,\r\n.viewComments > * {\r\n  font-size: 0.8rem;\r\n  margin-top: 5%;\r\n}\r\n\r\n.viewComments {\r\n  border-radius: 5px;\r\n  margin-top: 2%;\r\n  padding-right: 1%;\r\n  overflow-y: auto;\r\n  max-height: 140px;\r\n\r\n  --sb-track-color: #fff;\r\n  --sb-thumb-color: #484949;\r\n  --sb-size: 3px;\r\n\r\n  scrollbar-color: var(--sb-thumb-color) var(--sb-track-color);\r\n}\r\n\r\n.viewComments::-webkit-scrollbar {\r\n  width: var(--sb-size);\r\n}\r\n\r\n.viewComments::-webkit-scrollbar-track {\r\n  background: var(--sb-track-color);\r\n  border-radius: 15px;\r\n}\r\n\r\n.viewComments::-webkit-scrollbar-thumb {\r\n  background: var(--sb-thumb-color);\r\n  border-radius: 30px;\r\n}\r\n\r\n.box4 h4 {\r\n  text-align: center;\r\n  font-weight: 550;\r\n  font-family: "Ubuntu", sans-serif;\r\n}\r\n\r\n.newCommentForm {\r\n  margin-top: 1em;\r\n  flex-direction: column;\r\n  gap: 0.5em;\r\n  width: 25vw;\r\n}\r\n\r\n.newCommentForm input {\r\n  background-color: #fff;\r\n  border-radius: 5px;\r\n  padding: 1% 3%;\r\n  font-size: 0.9rem;\r\n  color: #000;\r\n}\r\n\r\n#Comment {\r\n  height: 50px;\r\n}\r\n\r\ninput:focus {\r\n  outline: none;\r\n}\r\n\r\n.addCommentBttn {\r\n  align-self: flex-start;\r\n  font-size: 0.9rem;\r\n  padding: 0.5em 1em;\r\n  border: solid 1px gray;\r\n  background-color: var(--clr-bg);\r\n}\r\n\r\n#errorMsg {\r\n  position: absolute;\r\n  top: 83%;\r\n  left: 68%;\r\n  font-size: 0.9rem;\r\n  color: rgb(255, 0, 0);\r\n  text-shadow: 5px 5px 10px black;\r\n}\r\n\r\n@media screen and (max-width: 600px) {\r\n  .popUp-section {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    gap: 0.4em;\r\n    width: 90%;\r\n    padding: 1%;\r\n    height: 90vh;\r\n  }\r\n\r\n  .box1 {\r\n    height: 30%;\r\n    margin-top: 5%;\r\n  }\r\n\r\n  .box1 img {\r\n    height: 100%;\r\n    border-radius: 5px;\r\n  }\r\n\r\n  .xBttn {\r\n    top: 6px;\r\n    right: 6px;\r\n  }\r\n\r\n  .box2 {\r\n    gap: 0.2em;\r\n    padding: 3%;\r\n    margin: 1%;\r\n  }\r\n\r\n  .serieTitle {\r\n    font-size: 1rem;\r\n  }\r\n\r\n  .box2 p,\r\n  i,\r\n  b {\r\n    display: none;\r\n  }\r\n\r\n  .serieData li {\r\n    font-size: 0.8rem;\r\n  }\r\n\r\n  .box3 {\r\n    order: 1;\r\n    width: 95%;\r\n  }\r\n\r\n  .box3 h3 {\r\n    font-size: 1rem;\r\n  }\r\n\r\n  .viewComments {\r\n    max-height: 100px;\r\n  }\r\n\r\n  .box4 {\r\n    width: 90%;\r\n  }\r\n\r\n  .box4 h4 {\r\n    font-size: 1.2rem;\r\n  }\r\n\r\n  .newCommentForm {\r\n    margin-top: 0.2em;\r\n    width: 100%;\r\n  }\r\n\r\n  .newCommentForm input {\r\n    padding: 2% 4%;\r\n    font-size: 1rem;\r\n  }\r\n\r\n  #Comment {\r\n    font-size: 0.9rem;\r\n  }\r\n\r\n  .addCommentBttn {\r\n    font-size: 0.9rem;\r\n    padding: 0.5rem 1.4em;\r\n    border: solid 1px #fff;\r\n  }\r\n\r\n  #errorMsg {\r\n    top: 66%;\r\n    left: 25%;\r\n  }\r\n}\r\n\r\n@media only screen and (min-width: 768px) {\r\n  .addCommentBttn:hover {\r\n    background-color: #f1c40f;\r\n    color: black;\r\n    font-weight: 550;\r\n  }\r\n}\r\n',""]);const s=i},426:(n,r,e)=>{e.d(r,{Z:()=>s});var t=e(81),o=e.n(t),a=e(645),i=e.n(a)()(o());i.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@300;400;600&family=Ubuntu:ital,wght@0,400;0,700;1,700&display=swap);"]),i.push([n.id,'* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  font-family: "Roboto+Slab", sans-serif;\r\n  line-height: 1em;\r\n  font-weight: 400;\r\n  font-size: 1.2rem;\r\n  color: var(--clr-text);\r\n}\r\n\r\n:root {\r\n  --clr-text: hsl(0, 0%, 100%);\r\n  --clr-bg: hsl(0, 0%, 31%);\r\n}\r\n\r\nbody {\r\n  background-image: linear-gradient(\r\n    to bottom,\r\n    rgba(121, 121, 121, 0.716),\r\n    rgba(37, 37, 37, 0.97)\r\n  );\r\n  display: flex;\r\n  flex-direction: column;\r\n  min-height: 100vh;\r\n}\r\n\r\n.disable-scroll {\r\n  overflow: hidden;\r\n}\r\n\r\n.hide {\r\n  display: none;\r\n}\r\n\r\n.pointer {\r\n  cursor: pointer;\r\n}\r\n\r\n.grid {\r\n  display: grid;\r\n}\r\n\r\n.flex {\r\n  display: flex;\r\n}\r\n\r\nli {\r\n  list-style: none;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n}\r\n\r\n/*  header */\r\n\r\n.header {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding: 1% 7%;\r\n  background-color: #000;\r\n  width: 100%;\r\n}\r\n\r\n.navbar {\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  gap: 3em;\r\n  margin: 0 5%;\r\n}\r\n\r\n.navbar li {\r\n  font-size: 1.2rem;\r\n  font-weight: 600;\r\n  cursor: pointer;\r\n  font-family: "Ubuntu", sans-serif;\r\n  padding-bottom: 1%;\r\n  color: #a7a3a3;\r\n}\r\n\r\n.active {\r\n  color: #fff !important;\r\n}\r\n\r\n.logo {\r\n  margin: 0 5%;\r\n  width: 80px;\r\n}\r\n\r\n/* section */\r\n\r\n.landing-page {\r\n  margin-top: 10%;\r\n  padding: 2% 5%;\r\n  grid-template-columns: repeat(3, 1fr);\r\n  grid-template-rows: repeat(2, 1fr);\r\n  justify-content: center;\r\n}\r\n\r\n.card {\r\n  width: 260px;\r\n  margin: 5%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding: 2%;\r\n  background-color: #000;\r\n  border-radius: 10px;\r\n  box-shadow: 0 5px 30px 5px #222;\r\n  place-self: center;\r\n}\r\n\r\n.card-img {\r\n  width: 100%;\r\n  border-radius: 5px;\r\n}\r\n\r\n.card-heading {\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  margin: 15% 0 1% 0;\r\n}\r\n\r\n.card-title {\r\n  font-size: 1rem;\r\n  font-weight: 750;\r\n  width: 80%;\r\n  font-family: "Ubuntu", sans-serif;\r\n}\r\n\r\n.card-icon {\r\n  width: 20px;\r\n  height: 20px;\r\n  margin: 2%;\r\n}\r\n\r\n.liked {\r\n  transform: scale(1.3);\r\n}\r\n\r\n.likes {\r\n  font-size: 0.7rem;\r\n  align-self: end;\r\n  margin-bottom: 15%;\r\n}\r\n\r\n.popUp-bttn {\r\n  font-size: 0.8rem;\r\n  margin: 3% auto;\r\n  padding: 3% 10%;\r\n  border: solid 2px gray;\r\n  background-color: var(--clr-bg);\r\n}\r\n\r\n.footer {\r\n  margin-top: auto;\r\n  padding: 4% 11%;\r\n  background-color: #000;\r\n}\r\n\r\n.footer-text {\r\n  font-size: 0.9rem;\r\n}\r\n\r\n@media screen and (max-width: 600px) {\r\n  .header {\r\n    padding: 1% 2%;\r\n  }\r\n\r\n  .logo {\r\n    margin: 1% 2%;\r\n    width: 70px;\r\n  }\r\n\r\n  .navbar {\r\n    gap: 1em;\r\n    margin: 0 1%;\r\n  }\r\n\r\n  .navbar li {\r\n    font-size: 1.1rem;\r\n  }\r\n\r\n  .landing-page {\r\n    display: flex;\r\n    flex-direction: column;\r\n    margin-top: 25%;\r\n    padding: 1%;\r\n  }\r\n\r\n  .card {\r\n    width: 320px;\r\n    margin: 2%;\r\n    padding: 3%;\r\n  }\r\n\r\n  .card-heading {\r\n    margin: 3% 0 1% 0;\r\n  }\r\n\r\n  .likes {\r\n    margin-bottom: 5%;\r\n  }\r\n\r\n  .popUp-bttn {\r\n    font-size: 0.9rem;\r\n    margin: 2% auto;\r\n    padding: 4% 15%;\r\n  }\r\n\r\n  .footer {\r\n    padding: 5% 5%;\r\n  }\r\n\r\n  .footer-text {\r\n    font-size: 0.8rem;\r\n  }\r\n}\r\n\r\n@media only screen and (min-width: 768px) {\r\n  .navbar li:hover {\r\n    box-shadow: 0 3px 0 0 #f1c40f;\r\n    font-size: 1.3rem;\r\n  }\r\n\r\n  .card:hover {\r\n    outline: 2px solid #f1c40f;\r\n  }\r\n\r\n  .popUp-bttn:hover {\r\n    background-color: #f1c40f;\r\n    color: black;\r\n    font-weight: 550;\r\n  }\r\n}\r\n',""]);const s=i},645:n=>{n.exports=function(n){var r=[];return r.toString=function(){return this.map((function(r){var e="",t=void 0!==r[5];return r[4]&&(e+="@supports (".concat(r[4],") {")),r[2]&&(e+="@media ".concat(r[2]," {")),t&&(e+="@layer".concat(r[5].length>0?" ".concat(r[5]):""," {")),e+=n(r),t&&(e+="}"),r[2]&&(e+="}"),r[4]&&(e+="}"),e})).join("")},r.i=function(n,e,t,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(t)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);t&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),e&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=e):l[2]=e),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),r.push(l))}},r}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var r=[];function e(n){for(var e=-1,t=0;t<r.length;t++)if(r[t].identifier===n){e=t;break}return e}function t(n,t){for(var a={},i=[],s=0;s<n.length;s++){var c=n[s],d=t.base?c[0]+t.base:c[0],l=a[d]||0,m="".concat(d," ").concat(l);a[d]=l+1;var p=e(m),u={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)r[p].references++,r[p].updater(u);else{var f=o(u,t);t.byIndex=s,r.splice(s,0,{identifier:m,updater:f,references:1})}i.push(m)}return i}function o(n,r){var e=r.domAPI(r);return e.update(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap&&r.supports===n.supports&&r.layer===n.layer)return;e.update(n=r)}else e.remove()}}n.exports=function(n,o){var a=t(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var s=e(a[i]);r[s].references--}for(var c=t(n,o),d=0;d<a.length;d++){var l=e(a[d]);0===r[l].references&&(r[l].updater(),r.splice(l,1))}a=c}}},569:n=>{var r={};n.exports=function(n,e){var t=function(n){if(void 0===r[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}r[n]=e}return r[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}},216:n=>{n.exports=function(n){var r=document.createElement("style");return n.setAttributes(r,n.attributes),n.insert(r,n.options),r}},565:(n,r,e)=>{n.exports=function(n){var r=e.nc;r&&n.setAttribute("nonce",r)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var r=n.insertStyleElement(n);return{update:function(e){!function(n,r,e){var t="";e.supports&&(t+="@supports (".concat(e.supports,") {")),e.media&&(t+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(t+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),t+=e.css,o&&(t+="}"),e.media&&(t+="}"),e.supports&&(t+="}");var a=e.sourceMap;a&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),r.styleTagTransform(t,n,r.options)}(r,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(r)}}}},589:n=>{n.exports=function(n,r){if(r.styleSheet)r.styleSheet.cssText=n;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(n))}}},232:(n,r,e)=>{var t=e(379),o=e.n(t),a=e(795),i=e.n(a),s=e(569),c=e.n(s),d=e(565),l=e.n(d),m=e(216),p=e.n(m),u=e(589),f=e.n(u),g=e(426),h={};h.styleTagTransform=f(),h.setAttributes=l(),h.insert=c().bind(null,"head"),h.domAPI=i(),h.insertStyleElement=p(),o()(g.Z,h),g.Z&&g.Z.locals&&g.Z.locals;var b=e(547),v={};v.styleTagTransform=f(),v.setAttributes=l(),v.insert=c().bind(null,"head"),v.domAPI=i(),v.insertStyleElement=p(),o()(b.Z,v),b.Z&&b.Z.locals&&b.Z.locals;const x=e.p+"3034196e06f655850cab.png";let y=[];const w=async()=>{const n=await fetch("https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/mJrjPcZ18WpbP2anfuWj/likes/"),r=await n.json();y=r},C=()=>y,k=[],z=e.p+"2066a883af545e9a78cf.png",T=e.p+"edd48da954110718d21a.png",E=async n=>{const r=document.querySelector(".viewComments"),e=await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/YNGIAvmuzfqw2IIpg60K/comments?item_id=${n}`),t=await e.json();r.innerHTML="",Array.isArray(t)?t.forEach((n=>{const e=document.createElement("p");e.className="newCreateComment",e.innerHTML=` ${n.creation_date} ${n.username}: ${n.comment}`,r.appendChild(e)})):r.textContent="No comments yet, be the first one to comment!";const o=(a=t,Array.isArray(a)?a.length:0);var a;document.querySelector(".commentTitle").innerHTML=`Comments (${o})`},S=document.getElementById("body"),$=async(n,r)=>{const e=k[n];document.body.classList.add("disable-scroll");const t=document.createElement("div");t.style.backgroundImage=`url(${e.image.medium})`,t.className="popUp-card flex",t.innerHTML=`\n    <section class="popUp-section grid">\n    <img src="${T}" alt="X button" class="xBttn">\n        <div class="box1">\n          <img src="${e.image.medium}" alt="Picture of ${e.name} class="serieImg">\n        </div>\n        <div class="box2 flex">\n          <h2 class="serieTitle">${e.name}</h2>\n          <ul class="serieData grid">\n            <li><strong>Rating:</strong> ${e.rating.average}/10</li>\n            <li><strong>Status:</strong> ${e.status}</li>\n            <li><strong>Language:</strong> ${e.language}</li>\n            <li><strong>Genres:</strong> ${e.genres}</li>\n          </ul>\n          <p class="SerieResume">${e.summary}</p>\n        </div>\n        <div class="box3">\n          <h3 class="commentTitle">Comments (0)</h3>\n          <div class="viewComments"></div>\n        </div>\n        <div class="box4">\n          <h4 class="commentSubtitle">Add a comment</h4>\n          <form class="newCommentForm flex">\n            <span id="errorMsg"></span>\n            <input type="text" name="name" id="Name" placeholder="Your name" required>\n            <input type="text" name="addcomment" id="Comment" placeholder="Your insights" required>\n            <button type="submit" class="addCommentBttn">Comment</button>\n          </form>\n        </div>\n    </section>\n    `,S.appendChild(t),await E(n),document.querySelector(".xBttn").addEventListener("click",(()=>{document.body.classList.remove("disable-scroll"),S.removeChild(t)}));((n,r)=>{const e=document.getElementById("Name"),t=document.getElementById("Comment"),o=document.getElementById("errorMsg");r.addEventListener("click",(async r=>{if(r.preventDefault(),""===e.value||""===t.value)o.textContent="Please fill out all fields",setTimeout((()=>{o.textContent=""}),3e3);else{const r={item_id:`${n}`,username:e.value,comment:t.value};await(async n=>{await fetch("https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/YNGIAvmuzfqw2IIpg60K/comments/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)})})(r),e.value="",t.value="",await E(n)}}))})(r,document.querySelector(".addCommentBttn")),await E(r)},L=["GOT","HOTD","EUPH","T100","ST","BM"],A=document.querySelector(".landing-page"),M=document.querySelector("#home-link"),U=async()=>{const n=C();var r;M.innerHTML=`Home (${r=n,r.length})`,A.innerHTML="",k.forEach(((r,e)=>{const t=document.createElement("div");t.classList.add("card"),t.innerHTML=`<img class="card-img" src='${r.image.medium}' alt="Picture of ${r.name}">\n        <div class='flex card-heading'><h4 class="card-title">${r.name}</h4>\n        <img class="card-icon" src='${z}' alt="Star icon"></div>\n        <p class="likes">${n[e].likes} Likes</p>\n        <button class="popUp-bttn" id="${r.id}" type="button">Comments</button>`,A.appendChild(t)})),Array.from(document.getElementsByClassName("popUp-bttn")).forEach(((n,r)=>{n.addEventListener("click",(()=>{$(r,n.id)}))})),Array.from(document.getElementsByClassName("card-icon")).forEach(((n,r)=>{n.addEventListener("click",(async()=>{n.classList.add("liked"),await(async n=>{const r={item_id:`${L[n]}`};await fetch("https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/mJrjPcZ18WpbP2anfuWj/likes/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)})})(r),await w(),n.classList.remove("liked");const e=C();Array.from(document.getElementsByClassName("likes"))[r].innerHTML=`${e[r].likes} Likes`}))}))},j=["tt0944947","tt11198330","tt8772296","tt2661044","tt4574334","tt2085059"];document.querySelector(".logo").src=x,document.addEventListener("DOMContentLoaded",void j.forEach((async n=>{await(async n=>{await w();const r=await fetch(n),e=await r.json();k.push(e)})(`https://api.tvmaze.com/lookup/shows?imdb=${n}`),U()})))}},n=>{n(n.s=232)}]);