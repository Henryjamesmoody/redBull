/* let anims = [...document.querySelectorAll("[anim]")];
console.log(anims);
let click = (el, cb) => el.addEventListener("click", cb);
let toggle = (el) => el.classList.toggle("toggled");
let clickTog = (el) => click(el, () => toggle(el));
anims.map(clickTog); */
var crsr = document.querySelector("#cursor")
var blu = document.querySelector("#cursor_yash")
document.addEventListener("mousemove",function(dets){
 crsr.style.left = dets.x-10+"px"
 crsr.style.top = dets.y-10+"px"
 blu.style.left = dets.x-145+"px"
 blu.style.top = dets.y-145+"px"
 
})

const functions = [
function a(){
    document.getElementById("apic").innerHTML= "<div class='ahero_pic3' style='background-image: url(../images/adv1.jpg);'><div class='text_ahero1'></div></div>"
},
function b(){
    document.getElementById("apic").innerHTML= "<div class='ahero_pic3' style='background-image: url(../images/adv2.jpg);'><div class='text_ahero1'></div></div>"
},
function c(){
    document.getElementById("apic").innerHTML= "<div class='ahero_pic3' style='background-image: url(../images/adv3.jpg);'><div class='text_ahero1'></div></div>"
},
function d(){
    document.getElementById("apic").innerHTML= "<div class='ahero_pic3' style='background-image: url(../images/adv4.jpg);'><div class='text_ahero1'></div></div>"
},
function e(){
    document.getElementById("apic").innerHTML= "<div class='ahero_pic3' style='background-image: url(../images/adv5.jpg);'><div class='text_ahero1'></div></div>"
},
function f(){
    document.getElementById("apic").innerHTML= "<div class='ahero_pic3' style='background-image: url(../images/adv6.jpg);'><div class='text_ahero1'></div></div>"
},
function g(){
    document.getElementById("apic").innerHTML= "<div class='ahero_pic3' style='background-image: url(../images/hero3.jpg);'><div class='text_ahero1'></div></div>"
}
];

let counter = 0;

    function mclick() {
      // Call the current function
      functions[counter]();

      // Move to the next function, reset if at the end
      counter = (counter + 1) % functions.length;
    

    let button = document.getElementById('but');

    // Function to simulate a button click
        button.click(); // Programmatically trigger a click event
    


    // Set an interval to click the button every 4 seconds
    setInterval(autoClickButton, 4000);
}

gsap.to("#main",{
    backgroundColor : "#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        //markers:true,
        start:"top -10%",
        end:"top -90%",
        scrub:1
    }
})

function smile(){
    document.getElementById("#smile").innerHTML= ":)"
}


gsap.to("#soda",{
    top:"55rem",left:"8rem",'--left':"0px",
     scrollTrigger:{
         trigger:"#soda",
         scroller:"body",
         //markers:true,
         start:"top -0%",
         end:"top -70%",
         scrub:2
     }
 })

 gsap.to("#about1",{
    backgroundColor : "#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        //markers:true,
        start:"top -10%",
        end:"top -90%",
        scrub:1
    }
})

gsap.to("#red",{
    strokeDashoffset:"0",top:"53rem",
    scrollTrigger:{
        trigger:"#red",
        scroller:"body",
        //markers:true,
        start:"top -10%",
        end:"top -50%",
        scrub:2
    }
})

gsap.to("#red",{
    fill:"white",
    scrollTrigger:{
        trigger:"#red",
        scroller:"body",
        //markers:true,
        start:"top -50%",
        end:"top -60%",
        scrub:2
    }
})

gsap.to(".red",{
    top:"53rem",
    scrollTrigger:{
        trigger:".red",
        scroller:"body",
        //markers:true,
        start:"top -10%",
        end:"top -50%",
        scrub:2
    }
})

gsap.to(".bull",{
    fill:"orange",stroke:"orange",
    scrollTrigger:{
        trigger:"#red",
        scroller:"body",
        //markers:true,
        start:"top -50%",
        end:"top -60%",
        scrub:2
    }
})

gsap.to("#info",{
    height:"40vh",paddingTop:"4rem",
    scrollTrigger:{
        trigger:".info",
        scroller:"body",
        //markers:true,
        start:"top -100%",
        end:"top -100%",
        scrub:2
    }
})

gsap.to("#bus",{
    left:"68vw",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        //markers:true,
        start:"top -220%",
        end:"top -250%",
        scrub:2
    }
})