gsap.to("#main",{
    backgroundColor : "rgba(0, 0, 0, 0.85)",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        //markers:true,
        start:"top -10%",
        end:"top -60%",
        scrub:1
    }
})