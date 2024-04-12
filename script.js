var tl = gsap.timeline({
    scrollTrigger:{
        trigger:"#page5",
        scoller:"body",
        // markers:true,
        start:"top 60%",scrub:true
    }
})
tl.to("#one-photo",{
    x:-150,
    duration:1,
},"helo")
tl.to("#three-photo",{
    x:150,
    duration:1,
},"helo")
tl.to("#four-photo",{
    x:-150,
    duration:1,
},"helo")
tl.to("#five-photo",{
    x:150,
    duration:1,
},"helo")