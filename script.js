// navigatorcss proprerty in scrool
window.addEventListener('scroll',()=>{
    const navbar=document.querySelector(".navbar");
    if(window.scrollY>100){
        navbar.classList.add("scrolled");
    }
    else{
        navbar.classList.remove("scrolled");
    }
});

// 

const profileicon=document.querySelector(".profile-icon");
profileicon.addEventListener("click",()=>{
    window.location.href="profilepage.html";
});

// movie card

const moviecard=document.querySelectorAll(".content-card");
moviecard.forEach((card)=>{
    card.addEventListener("mouseEvent",()=>{
    card.style.transform="scale(1.05)";
});

card.addEventListener("mouseleave",()=>{
    card.style.transform="scale(1)";
});
});

