
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

    console.log("will submit");
    //send backend

}