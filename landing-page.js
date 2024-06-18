// logic for mouse pointer & cursor
//cursor effect when mouse move
const cursor=document.querySelector(".cursor");
var timeout;
document.addEventListener("mousemove",(e)=>{
let x=e.pageX;
let y=e.pageY;

cursor.style.top=y+"px";
cursor.style.left=x+"px";
cursor.style.display="block";
//cursor effect when mouse stopped
function mousestopped()
{
cursor.style.display="none"
}

clearTimeout(timeout);
timeout=setTimeout(mousestopped,1000);
});

//cursor effect when mouse out
document.addEventListener("mouseout",()=>{
    cursor.style.display="none"
});

// logic for sliding image when user want

/*let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

//automatic image slider

let slideIndexAuto = 0;
showSlidesAuto();

function showSlidesAuto() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndexAuto++;
    if (slideIndexAuto > slides.length) { slideIndexAuto = 1 }
    slides[slideIndexAuto - 1].style.display = "block";

    setTimeout(showSlidesAuto, 5000);      // Change image every 5 seconds
}

// logic for scrolling the nav bar and adjust the nav bar

gsap.to("#nav-2", {

    backgroundColor: "#ffbf00",
    height: "100px",
    duration: 4,
    top: "0px",
    left:"0px",
    borderRadius: "0px",
    width:"100%",
    scrollTrigger: {
        trigger: "#nav-2",
        scroller: "body",
        // markers: true,
        start: "top -10%",
        end: "top -10%",
        scrub: 1
    }
})


//adjust the drop-down menu when scrolling 

gsap.to("#dropdown-content-1", {

    duration: 4,
    top: "100px",
    left:"265px",
    scrollTrigger: {
        trigger: "#nav-2",
        scroller: "body",
        // markers: true,
        start: "top -10%",
        end: "top -10%",
        scrub: 3
    }
})
gsap.to("#dropdown-content-2", {

    duration: 4,
    top: "100px",
    left:"830px",
    scrollTrigger: {
        trigger: "#nav-2",
        scroller: "body",
        // markers: true,
        start: "top -10%",
        end: "top -10%",
        scrub: 4
    }
})*/