(()=>{'use strict';
const key='christmasVillageEnteredV1',body=document.body,intro=document.getElementById('villageWelcome'),title=document.getElementById('welcomeTitle'),enterButtons=[document.getElementById('welcomeEnter'),document.getElementById('welcomeEnterBottom')];
const media=matchMedia('(prefers-reduced-motion: reduce)');
let entered=false,opening=false,returned=false,first=true;
const isWelcomeHash=()=>location.hash==='#welcomeActivities'||location.hash==='#welcome';
function seen(){try{return sessionStorage.getItem(key)==='true'}catch{return false}}
function remember(){try{sessionStorage.setItem(key,'true')}catch{}}
function removeIntroHash(){if(isWelcomeHash()){try{history.replaceState(history.state,'',location.pathname+location.search)}catch{}}}
function showWelcome(focus=false){if(opening)return;intro.hidden=false;intro.classList.remove('welcome-opening');body.classList.add('welcome-active');window.christmasVillageEntered=false;for(const b of enterButtons)b.disabled=false;if(focus){title.tabIndex=-1;title.focus({preventScroll:true});window.scrollTo(0,0)}}
function showVillage({focus=false,scroll=false}={}){opening=false;intro.hidden=true;intro.classList.remove('welcome-opening');body.classList.remove('welcome-active');for(const b of enterButtons)b.disabled=false;window.christmasVillageEntered=true;remember();if(!entered){entered=true;document.dispatchEvent(new Event('christmas:enter-village'))}if(returned){returned=false;document.getElementById('backToTree')?.click()}if(focus){const heading=document.getElementById('btTitle');if(heading){heading.tabIndex=-1;heading.focus({preventScroll:true})}}if(scroll)window.scrollTo(0,0)}
function enter(){if(opening)return;opening=true;for(const b of enterButtons)b.disabled=true;intro.classList.add('welcome-opening');const reduce=media.matches||document.documentElement.classList.contains('cv-motion-off');const finish=()=>{removeIntroHash();showVillage({focus:true,scroll:true})};if(reduce)finish();else setTimeout(finish,500)}
for(const b of enterButtons)b.addEventListener('click',enter);
if((!location.hash&&!seen())||isWelcomeHash()){showWelcome()}else{window.christmasVillageEntered=true;entered=true;intro.hidden=true;remember()}
window.christmasWelcomeBind=()=>{if(!first)return;first=false;document.getElementById('welcomeReturn')?.addEventListener('click',()=>{returned=true;removeIntroHash();const music=document.getElementById('musicToggle');if(music?.getAttribute('aria-pressed')==='true')music.click();document.getElementById('mcStop')?.click();document.getElementById('pgMiniStop')?.click();showWelcome(true)});window.addEventListener('hashchange',()=>{if(isWelcomeHash()){showWelcome(location.hash==='#welcome');return}if(location.hash&&body.classList.contains('welcome-active'))showVillage()})};
})();