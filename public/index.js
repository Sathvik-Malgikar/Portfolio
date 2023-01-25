


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

function displaynav(){
    $("#navbar").removeClass("hidden") 
    $("#navbar").addClass("flex") 
}

$("#msgbtn").click(()=>{
    toggleModal()
})

function toggleModal(){
    
    $("#modalContainer").removeClass("hidden")
    $("#modalContainer").addClass("modal-bg")
    
}


$("#submitmsg").click(()=>{
    submit()
})


function submit(){

    console.log("will submit");
    //send backend

}