const $=id=>document.getElementById(id);
const url=$('shareUrl').value;
$('shareOpen').onclick=()=>$('shareDialog').showModal();
$('shareClose').onclick=()=>$('shareDialog').close();
async function copy(){try{await navigator.clipboard.writeText(url);$('shareNotice').textContent='คัดลอกลิงก์แล้ว!';}catch{$('shareUrl').focus();$('shareUrl').select();$('shareNotice').textContent='เลือกและคัดลอกลิงก์ด้วยตนเอง';}}
$('copyVillage').onclick=copy;
$('nativeShare').onclick=async()=>{if(!navigator.share)return copy();try{await navigator.share({title:'Christmas Wishing Village',url});}catch(e){if(e.name!=='AbortError')await copy();}};
$('wishJump').onclick=()=>{$('wishForm').scrollIntoView({block:'start'});$('studentName').focus({preventScroll:true});};
$('galleryJump').onclick=()=>$('snowGallery').scrollIntoView({block:'start'});
$('saveSnowHome').onclick=()=>{$('snowGame').click();$('snowDownload').click();};
