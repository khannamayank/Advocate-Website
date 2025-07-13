const submitbtn=document.querySelector(".submit-btn");
const fname=document.querySelector(".f-name");
const lname=document.querySelector(".l-name");
const email=document.querySelector(".email");
const msg=document.querySelector(".msg");
const mobileno=document.querySelector(".mobileno");
const contactform=document.querySelector(".contact-form");
let obj={};
submitbtn.addEventListener("click",(e)=>{
    e.preventDefault();
    obj={Name:fname.value+" "+lname.value,Email:email.value,MobileNo:mobileno.value,Message:msg.value};
    let data=obj;
    data=JSON.stringify(data);
    data = data.replace(/,/g, "%0A");
    console.log(data);
    // location.href=`mailto:mayankkhanna827@gmail.com?subject=${data}`;
    location.href=`mailto:advocatekohli@gmail.com?subject=${data}`;
})

const profiles=["./Assets/profile.png"];
let profile=document.querySelector(".profile-img");
setInterval(()=>{
    
},1000)
    
const intro = document.querySelector('.animate');

    // Wait until animation ends
    intro.addEventListener('animationend', () => {
        intro.style.display = 'none';
    });



