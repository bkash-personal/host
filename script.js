/* ==========================
   HOST WEBSITE
   SCRIPT PART 1
========================== */

/* Smooth Scroll */

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute("href"));

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});


/* Header Shadow */

window.addEventListener("scroll",()=>{

const header=document.querySelector("header");

if(window.scrollY>50){

header.style.boxShadow="0 10px 30px rgba(0,0,0,.35)";

}else{

header.style.boxShadow="none";

}

});


/* Copy bKash Number */

const copyBtn=document.getElementById("copyBkash");

if(copyBtn){

copyBtn.addEventListener("click",()=>{

const number="01XXXXXXXXX";

navigator.clipboard.writeText(number);

copyBtn.innerHTML="Copied ✓";

setTimeout(()=>{

copyBtn.innerHTML="Copy Number";

},2000);

});

}/* ==========================
   HOST WEBSITE
   SCRIPT PART 2
========================== */

/* Scroll To Top Button */

const topBtn=document.createElement("div");

topBtn.innerHTML="↑";

topBtn.id="topBtn";

document.body.appendChild(topBtn);

topBtn.style.cssText=`
position:fixed;
bottom:95px;
right:25px;
width:55px;
height:55px;
background:#22c55e;
color:#fff;
border-radius:50%;
display:flex;
align-items:center;
justify-content:center;
font-size:26px;
cursor:pointer;
opacity:0;
visibility:hidden;
transition:.3s;
z-index:999;
`;

window.addEventListener("scroll",()=>{

if(window.scrollY>400){

topBtn.style.opacity="1";
topBtn.style.visibility="visible";

}else{

topBtn.style.opacity="0";
topBtn.style.visibility="hidden";

}

});

topBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});


/* Fade Animation */

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

});

const elements=document.querySelectorAll(

".service-card,.price-card,.review-card,.contact-card,.payment-card,.feature-box,.stat-box"

);

elements.forEach(el=>{

el.style.opacity="0";

el.style.transform="translateY(40px)";

el.style.transition=".7s";

observer.observe(el);

});


/* Order Success */

const form=document.querySelector("form");

if(form){

form.addEventListener("submit",()=>{

alert("✅ Your order has been submitted successfully!");

});

}/* ==========================
   HOST WEBSITE
   SCRIPT PART 3 (FINAL)
========================== */

/* Loading Animation */

window.addEventListener("load",()=>{

document.body.classList.add("loaded");

});


/* Animated Counter */

const counters=document.querySelectorAll(".stat-box h2");

const speed=100;

counters.forEach(counter=>{

const update=()=>{

const target=counter.innerText.replace(/\D/g,"");

const count=+counter.getAttribute("data-count")||0;

const increment=target/speed;

if(count<target){

const next=Math.ceil(count+increment);

counter.setAttribute("data-count",next);

counter.innerText=next+"+";

setTimeout(update,20);

}else{

counter.innerText=target+"+";

}

};

update();

});


/* Button Hover Effect */

document.querySelectorAll(".btn,.btn2,.header-btn").forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.style.transform="scale(1.05)";

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform="scale(1)";

});

});


/* Service Card Hover */

document.querySelectorAll(".service-card").forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-10px)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0px)";

});

});


/* Pricing Card Hover */

document.querySelectorAll(".price-card").forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-10px)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0px)";

});

});


console.log("HOST Website Loaded Successfully");
