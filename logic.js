function myMenuFunction(){
    var menuBth=document.getElementById("myNavMenu")
    if(menuBth.className=="nav-menu"){
        menuBth.className+="responsive";
    }
    else{
        menuBth.className="nav-menu";
    }
}
/*---active link--- */
const sections=decument.querySelectorAll(".section[id]");
function scrollActive(){
    const scrollY=window.scrollY;
    sections.forEach((current)=>{
        const sectionHeight=current.offsetHeight,
        sectionTop=current.offsetTop - 50,
        sectionId=current.getAttribute("id");

    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
        document.querySelector(".nav-menu a[href*="+ sectionId +"]")
        .classList.add("active-link")
    }
    else{
        document.querySelector(".nav-menu a[href+=" + sectionId + "]")
        .classList.add("active-link");
    }
    })
}
window.addEventListener("scroll",scrollActive);