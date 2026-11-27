const $=id=>document.getElementById(id);
const defaults={name:'',hat:'santa',scarf:'#e994ae',face:'happy',accessory:'star',scene:'day'};
const fields={name:'snowName',hat:'snowHat',scarf:'snowScarf',face:'snowFace',accessory:'snowAccessory',scene:'snowScene'};
let state={...defaults};
try{const saved=JSON.parse(localStorage.getItem('villageSnowmanV1')||'{}');for(const [k,id] of Object.entries(fields)){const el=$(id);if(k==='name'&&typeof saved[k]==='string')state[k]=saved[k].slice(0,22);else if(el.tagName==='SELECT'&&[...el.options].some(o=>o.value===saved[k]))state[k]=saved[k];}}catch{}
import {drawSnowman as drawArt} from './snowman-art.js?v=51';
export function drawSnowman(c,x,y,size,background=false){drawArt(c,x,y,size,background,state)}
export function snowmanState(){return {...state}}
export function snowmanName(){return state.name;}
function render(){for(const [k,id] of Object.entries(fields))$(id).value=state[k];const c=$('snowCanvas').getContext('2d');c.clearRect(0,0,680,680);drawSnowman(c,0,0,680,true);$('snowGreeting').textContent=`Hello! My name is ${state.name||'Snowy'}. Nice to meet you!`;try{localStorage.setItem('villageSnowmanV1',JSON.stringify(state));}catch{}}
for(const [k,id] of Object.entries(fields))$(id).addEventListener('input',()=>{state[k]=$(id).value;render();});
$('snowRandom').onclick=()=>{for(const k of ['hat','scarf','face','accessory','scene']){const opts=$(fields[k]).options;state[k]=opts[Math.floor(Math.random()*opts.length)].value;}render();};$('snowReset').onclick=()=>{state={...defaults};render();};$('snowDownload').onclick=()=>{const a=document.createElement('a');a.download='my-snowman.png';a.href=$('snowCanvas').toDataURL('image/png');a.click();window.christmasNotice?.("Snowman ready!","เริ่มดาวน์โหลดภาพมนุษย์หิมะ PNG แล้ว");};render();
