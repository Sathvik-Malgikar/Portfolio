
function makevisible() {
    $("#welcomediv").removeClass("h-screen")
}

function displaynav() {
    let ref = $("#navbar")
    ref.removeClass("hidden")
    ref.addClass("flex")
}

function toggleModal() {

    let ref = $("#modalContainer")
    if (ref.hasClass("hidden")) {
        ref.removeClass("hidden")
        ref.addClass("modal-bg")
    } else {
        ref.removeClass("modal-bg")
        ref.addClass("hidden")

    }

}
function openCity(cityName) {
    if(cityName=="Certifications"){
        loadEmbedWindow()
    }
    var i;
    var x = document.getElementsByClassName("infoattributes");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    document.getElementById(cityName).style.display = "block";
}

function submit() {


    //send backend
    let obj = { "email": $("#field0").val(), "phoneno": $("#field1").val(), "message": $("#field2").val(), }

    fetch("/form/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify(obj)

    }).then((res) => {
        if (res.status == 200) {
            console.log("submitted!");
            toast(" Your message has been sent successfully, thank you for contacting !  ")

        }
        else {
            console.error(`internal error in server code ${res.status} `);
            toast(`Code ${res.status} Internal server error.\n Sorry, try again later!`)
        }
    }).catch(() => {
        console.error("error occured could not contact db");
    })


}

function toast(msg) {
    let ref = $("#restoast")

    ref.html(msg)

    if (ref.hasClass("toast-hider")) {
        ref.removeClass("toast-hider")
        setTimeout(() => {
            ref.addClass("toast-hider")

        }, 3000);
    }

}

function loadEmbedWindow(){
    fetch("/certificates").then(data=>{
   return data.text()
    }).then(html=>{
        let ele= $("#embedWindow")
        console.log("set HTML")
        // console.log(html)
        ele.html(html)
    })
}