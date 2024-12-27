
 // First animation (ends at top: "68rem")
 gsap.to("#ro1", {
    backgroundColor:"rgba(10, 123, 123, 0.834)",
    scrollTrigger: {
      trigger: "#r", 
      start: "top -10%",  // Starts when the top of the element hits the top of the viewport
      end: "top -20%",   // Ends when the top of the element reaches 60% up from the viewport
      scrub: 2,          // Smooth scroll animation
      markers: true,
    }   
  });

 gsap.to("#r1", {
    top: "70rem",
    left: "78rem",
    display:"block",
    rotate:"660deg",
    scrollTrigger: {
      trigger: "#r", 
      start: "top -10%",  // Starts when the top of the element hits the top of the viewport
      end: "top -120%",   // Ends when the top of the element reaches 60% up from the viewport
      scrub: 2,          // Smooth scroll animation
      markers: true,
    }   
  });

  gsap.to("#r1", {
    display:"none",
    scrollTrigger: {
      trigger: "#r", 
      start: "top -130%",  // Starts when the top of the element hits the top of the viewport
      end: "top -130%",   // Ends when the top of the element reaches 60% up from the viewport
      scrub: 2,          // Smooth scroll animation
      markers: true,
    }   
  });

  gsap.to("#ro2", {
    backgroundColor:"rgba(10, 123, 123, 0.834)",
    zIndex:"2",
    scrollTrigger: {
      trigger: "#r", 
      start: "top -120%",  // Starts when the top of the element hits the top of the viewport
      end: "top -130%",   // Ends when the top of the element reaches 60% up from the viewport
      scrub: 2,          // Smooth scroll animation
      markers: true,
    }   
  });

  
  
// Second animation (starts from where the first one ends)
 gsap.to("#r2", {
    top: "120rem",  // Move further down
    right: "78rem",
    display:"block",
    rotate:"-660deg",
    scrollTrigger: {
      trigger: "#r",
      start: "top -130%",  // Starts when the element reaches 60% up from the viewport
      end: "top -220%",   // Ends when the element is 120% up from the viewport
      scrub: 2,           // Smooth scroll animation
      markers: true,
    }
  });
 
  gsap.to("#r2", {
    display:"none",
    scrollTrigger: {
      trigger: "#r", 
      start: "top -240%",  // Starts when the top of the element hits the top of the viewport
      end: "top -240%",   // Ends when the top of the element reaches 60% up from the viewport
      scrub: 2,          // Smooth scroll animation
      markers: true,
    }   
  });

  gsap.to("#ro3", {
    backgroundColor:"rgba(10, 123, 123, 0.834)",
    scrollTrigger: {
      trigger: "#r", 
      start: "top -230%",  // Starts when the top of the element hits the top of the viewport
      end: "top -240%",   // Ends when the top of the element reaches 60% up from the viewport
      scrub: 2,          // Smooth scroll animation
      markers: true,
    }   
  });

  gsap.to("#r3", {
    top: "170rem",  // Move further down
    left: "78rem",
    display:"block",
    rotate:"660deg",
    scrollTrigger: {
      trigger: "#r",
      start: "top -240%",  // Starts when the element reaches 60% up from the viewport
      end: "top -320%",   // Ends when the element is 120% up from the viewport
      scrub: 2,           // Smooth scroll animation
      markers: true,
    }
  });
 
  gsap.to("#ro4", {
    backgroundColor:"rgba(10, 123, 123, 0.834)",
    scrollTrigger: {
      trigger: "#r", 
      start: "top -340%",  // Starts when the top of the element hits the top of the viewport
      end: "top -350%",   // Ends when the top of the element reaches 60% up from the viewport
      scrub: 2,          // Smooth scroll animation
      markers: true,
    }   
  });

  gsap.to("#carbg", {
    position:"absolute",top:"370vh",left:"-10%",zIndex:"0",width:"70%",height:"55%",
    scrollTrigger: {
      trigger: "#r", 
      start: "top -280%",  // Starts when the top of the element hits the top of the viewport
      end: "top -300%",   // Ends when the top of the element reaches 60% up from the viewport
      scrub: 4,          // Smooth scroll animation
      markers: true,
    }   
  });