$(".your-class").slick({
    dots: false,
});




const bars=document.querySelector(".hamburger")
const nav_res=document.querySelector(".nav-res")


bars.addEventListener("click",function(){
    bars.classList.toggle("is-active");
})


const navBars=document.querySelector(".nav-bars")

navBars.addEventListener("click",function(){
    navBars.classList.toggle("open");
    nav_res.classList.toggle("nav-res")

    nav_res.style.height.toggle() ="150px";
   

})