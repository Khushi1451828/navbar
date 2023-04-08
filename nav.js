"use strict"
const menubtn=document.querySelector(".hambg");
const searchbtn=document.querySelector(".search-icon");
const cancelbtn=document.querySelector(".cancel-icon");
const items=document.querySelector(".nav-items");
const form=document.querySelector("form");

menubtn.addEventListener("click",()=>{
    items.classList.add("active");
    menubtn.classList.add("hide");
    searchbtn.classList.add("hide");
    cancelbtn.classList.add("show");
    form.classList.remove("active");
    
})
cancelbtn.addEventListener("click",()=>{
    items.classList.remove("active");
    menubtn.classList.remove("hide");
    searchbtn.classList.remove("hide");
    cancelbtn.classList.remove("show");
    form.classList.remove("active");
    cancelbtn.style.color="black";
    
   
    
    
})
searchbtn.addEventListener("click",()=>{
    form.classList.add("active");
    searchbtn.classList.add("hide");
    cancelbtn.classList.add("show");
    cancelbtn.style.color="black";
})