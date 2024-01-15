
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
// garlandcontent = ['<img class="garland-image" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/800px-Python-logo-notext.svg.png"></img>',
// '<img class="garland-image" src="https://yt3.googleusercontent.com/4YAaX7CsQ-paadHsNvC6wdv2nE_7VTKpoNJOTwFhHL4rQqLC8WFe6mNxL-z-e6sfHZbHG-ucPA=s176-c-k-c0x00ffffff-no-rj"></img>',
//     '<img class="garland-image" src="https://cdn-images-1.medium.com/max/1200/1*5-aoK8IBmXve5whBQM90GA.png"></img>',
//     '<img class="garland-image" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/React_Logo_SVG.svg/640px-React_Logo_SVG.svg.png"></img>',
//     '<img class="garland-image" width="80px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/2560px-Node.js_logo.svg.png"></img>',
//     '<img class="garland-image" width="80px" src="https://miro.medium.com/v2/resize:fit:1034/1*JupRAYk4Q2xyEBWVV4SNyg.jpeg"></img>',
//     '<img class="garland-image" width="80px" src="https://miro.medium.com/v2/resize:fit:300/1*R4c8lHBHuH5qyqOtZb3h-w.png"></img>',
//     '<img class="garland-image" width="80px" src="https://avatars.githubusercontent.com/u/5429470?s=280&v=4"></img>',
// ];

// var container = document.getElementById("garland-container");
// var size = window.innerWidth > window.innerHeight ? window.innerHeight : window.innerWidth;
// container.style.height = size + 'px';
// container.style.width = size + 'px';

// function createFields() {
//     for (var i = 0; i < garlandcontent.length; i++) {
//         var div = document.createElement('div');
//         div.className = "garland-image";
//         div.innerHTML = garlandcontent[i];
//         container.appendChild(div);
//     }
// }

// function distributeFields() {
//     var myNodeList = document.querySelectorAll('.garland-image');
//     var fields = Array.from(myNodeList);
//     var width = size / 2;
//     var height = size / 2;
//     var angle = 0;
//     var step = 2 * Math.PI / fields.length;
//     var radius = 0.7 * width;

//     var angle = -90 * Math.PI / 180;

//     fields.forEach(function (element) {
//         var x = Math.round(width + radius * Math.cos(angle));
//         var y = Math.round(height + radius * Math.sin(angle));
//         element.style.right = x + 'px';
//         element.style.top = y + 'px';
//         angle = angle - step;
//     });
// }

// window.onload = function () {
//     createFields();
//     distributeFields();
// };