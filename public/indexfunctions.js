
function makevisible(){
    $("#welcomediv").removeClass("h-screen")
}

function displaynav(){
    let ref = $("#navbar")
    ref.removeClass("hidden") 
    ref.addClass("flex") 
}

function toggleModal(){

    let ref = $("#modalContainer")
    if  ( ref.hasClass("hidden") ) {
        ref.removeClass("hidden")
        ref.addClass("modal-bg")
    }else{
        ref.removeClass("modal-bg")
        ref.addClass("hidden")

    }

}

function submit(){

   
    //send backend
    let obj =  { "email" : $("#field0").val(), "phoneno" : $("#field1").val(),"message" : $("#field2").val(),  }

    fetch("/form/" , {
        method : "POST",
        headers : {
            "Content-Type" : "application/json"
        },

        body: JSON.stringify(obj)

    }   ).then((res)=>{
        if(res.status==500){

            console.error("internal error in server");
            toast("Code 500 Internal server error.\n Sorry, try again later!")
        }
        else{
            console.log("submitted!");
            toast(" Your message has been sent successfully, thank you for contacting !  ")
        }
    }).catch(()=>{
        console.error("error occured could not contact db");
    })
    

}

function toast(msg) {
    let ref= $("#restoast")

    ref.html(msg)

if(ref.hasClass("toast-hider")){
ref.removeClass("toast-hider")
setTimeout(() => {
    ref.addClass("toast-hider")
    
}, 3000);
}

}