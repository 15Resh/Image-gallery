const menu = document.querySelector(".menu")
const menulist=document.querySelector("nav ul")

menu.addEventListener('click' ,() => {
    menulist.classList.toggle('showmenu')
})

const container=document.querySelector('.container');
const leftbtn =document.querySelector('.but-left');
const rightbtn=document.querySelector('.but-right');

// const btnTags=document.querySelectorAll('.btn');

const imglist=['1.jpg','2.png','3.png','4.png','5.png'];

let index= 0;

leftbtn.addEventListener("click",() => {
    index--;
    if(index < 0){
        index=imglist.length-1
    }
    container.style.background=`url("./image/${imglist[index]}") center fixed no-repeat`;
});

rightbtn.addEventListener("click",() =>{
    index++;
    if(index > imglist.length-1){
        index=0
    }
    container.style.background=`url("./image/${imglist[index]}") center fixed no-repeat`;
})



// btnTags.forEach((btn) => {
//     btn.addEventListener('click', () => {
//         if (btn.classList.contains('but-left')) {
//             index--;
//             if (index < 0) {
//                 index = imglist.length - 1;
//             }
//         } else if (btn.classList.contains('but-right')) {
//             index++;
//             if (index >= imglist.length) {
//                 index = 0;
//             }
//         }

//         container.style.background = `url("/image/${imglist[index]}")center/cover fixed no-repeat`;
//     });
// });

