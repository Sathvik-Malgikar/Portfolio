

function typeText(ele,st) {
    for (let i = 0; i < st.length; i++) {
      setTimeout(function() {
        ele.text ( ele.text() + st[i] );
      }, i * 50); // Adjust the delay according to your preference
    }
  }

  

$("body").ready(()=>{
    window.scrollTo({behavior : "smooth" , top : 0 })
    setTimeout(() => {
        
        $("#welcome").addClass("opacity-100")
        $("#welcome").removeClass("opacity-0")
        typeText($("#welcome"),"Hi, I'm Sathvik, nice to have you here! Checkout my projects below.");
        setTimeout(() => {
            $("#welcome").remove()
        }, 3000);
    }, 500);
    setTimeout(() => {
        
        $("#welcomediv").removeClass("backdrop-blur-lg")
        $("#welcomediv").removeClass("justify-center")
      
        $("#welcome").removeClass("top-1/2")
        $("#welcome").addClass("top-3")
        setTimeout(() => {
            makevisible()
        }, 500);
    }, 1100);
})




$("body").ready(()=>{
    $("#about").click(()=>{
        $("#aboutdiv")[0].scrollIntoView({behavior : "smooth" , block : "center"})
    })

    
    $("#education").on( "click" , ()=>{
        $("#educationdiv")[0].scrollIntoView({behavior : 'smooth' , block : 'center'})
    })
    
    $("#xp").click(()=>{
        $("#xpdiv")[0].scrollIntoView({behavior : 'smooth' , block : 'center'})
    })
    
    $("#contact").click(()=>{
        $("#contactdiv")[0].scrollIntoView({behavior : 'smooth' , block : 'center'})
    })    
    
})

$("#hamburger").hover(()=>{

    displaynav()
    $("#navbar").on("mouseleave",()=>{
        $("#navbar").addClass("hidden") 
        $("#navbar").removeClass("flex") 

    })
})



$("#msgbtn").click(toggleModal)




$("#submitmsg").click(submit)

$("#modalbackbtn").click(toggleModal)

