(()=>{'use strict';
const labels={winter:'Winter · ฤดูหนาว',night:'Winter Night · คืนคริสต์มาส',spring:'Spring · ฤดูใบไม้ผลิ',summer:'Summer · ฤดูร้อน',autumn:'Autumn · ฤดูใบไม้ร่วง'};
const key='christmasVillageSeasonV1',root=document.documentElement,buttons=[...document.querySelectorAll('[data-season-choice]')],status=document.getElementById('seasonStatus');
function valid(value){return Object.prototype.hasOwnProperty.call(labels,value)}
function select(value,persist=false){if(!valid(value))value='winter';root.dataset.season=value;for(const b of buttons)b.setAttribute('aria-pressed',String(b.dataset.seasonChoice===value));status.textContent=labels[value];if(persist){try{localStorage.setItem(key,value)}catch{}}}
let initial='winter';try{initial=localStorage.getItem(key)||'winter'}catch{}select(initial);
for(const b of buttons)b.addEventListener('click',()=>select(b.dataset.seasonChoice,true));
})();