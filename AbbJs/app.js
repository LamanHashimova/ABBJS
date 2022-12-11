let search =document.querySelector('.search1')
let sectionjs= document.getElementById('Sectionjs')
let section2=document.getElementById('Section2')
let section3=document.getElementById('Section3')
let langbox = document.querySelector('.language')
let lang=document.querySelector('.language-dropdown')
let icon=document.querySelector('.iconn')
let downicon=document.querySelector('.down')
icon.addEventListener('click',()=>{
    sectionjs.classList.toggle('active')
    section2.classList.toggle('activeblock')
    section3.classList.toggle('activeblock')
    
})


langbox.addEventListener('click',()=>{
    lang.classList.toggle('active')
 if(downicon.style.transform==='rotate(-180deg)'){
    downicon.style.transform='rotate(0deg)'    
 }else{
    downicon.style.transform='rotate(-180deg)'    
 }
})

search.addEventListener('click',()=>{
 sectionjs.classList.toggle('active')
 section2.classList.toggle('activeblock')
 section3.classList.toggle('activeblock')
})
/*GameTask*/
// let item=document.querySelector('.item')
// let area=document.querySelector('.area')
// let lft=0
// let tp=0
// document.body.onkeyup=function(e){
// if(e.keyCode===39){
//    lft+=20
// item.style.left=`${lft}px`
// }
// else if(e.keyCode===40){
//    tp+=20
//    item.style.top=`${tp}px`
// }else if(e.keyCode==37){
//    lft-=20
//    item.style.left=`${lft}px`
// }else if(e.keyCode==38){
//    tp-=20
//    item.style.top=`${tp}px`
// }
// console.log(item.style.left);
// console.log(item.style.top);
// if(item.style.left=='780px'&& item.style.top=='400px'){
//    area.style.background='green'
//    document.querySelector('.game').style.display='block'
// }else{
//    area.style.background='blue'
//    document.querySelector('.game').style.display='none'
// }
// }
