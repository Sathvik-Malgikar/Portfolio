// $(".outstand").on("mouseenter",()=>{
//     $("#bodycontainer").addClass("blur-sm")
// })
// $(".outstand").on("mouseleave",()=>{
//     $("#bodycontainer").removeClass("blur-sm")
// })


$("body").ready(()=>{
    console.log("working!");
  
    setTimeout(() => {
        
        $("#welcome").addClass("opacity-100")
        $("#welcome").removeClass("opacity-0")
    }, 900);
    setTimeout(() => {
        
        $("#welcomediv").removeClass("backdrop-blur-lg")
        $("#welcomediv").removeClass("justify-center")
      
        $("#welcome").removeClass("top-1/2")
        $("#welcome").addClass("top-3")
        setTimeout(() => {
            makevisible()
        }, 900);
    }, 2900);
})

function makevisible(){
    $("#welcomediv").removeClass("h-screen")
}


