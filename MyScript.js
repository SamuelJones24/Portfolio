function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
    }
const phrase = ["Programmer", "Front-end Developer", "Back-end Developer", "Tennis Player"];

const el = document.getElementById("typewriter1");

let sleepTime = 100;

let curPhraseIndex = 0;

const writeLoop = async() => {
    while (true) {
        let curWord = phrase[curPhraseIndex];

        for (let i = 0; i < curWord.length; i++) {
            el.innerText = curWord.substring(0, i + 1);
            await sleep(sleepTime);
        }

        await sleep(sleepTime * 10)

        for (let i = curWord.length; i > 0; i--) {
            el.innerText = curWord.substring(0, i - 1);
            await sleep(sleepTime);
        }
        await sleep(sleepTime * 5)

        if (curPhraseIndex === phrase.length - 1) {
            curPhraseIndex = 0;
        }
        else {
            curPhraseIndex++;
        }
    }
};




if (localStorage.getItem("darkMode") === null) {
    localStorage.setItem("darkMode", "false");

}
if (localStorage.getItem("darkMode") === "true") {
    document.body.classList.add("dark");
    document.getElementById("toggle").innerHTML = '<i class="fa-regular fa-sun"></i>';

}

const check = document
    .getElementById("toggle")
    .addEventListener("click", function () {
        if (localStorage.getItem("darkMode") === "false") {

            localStorage.setItem("darkMode", "true");
            document.body.classList += "dark";
            document.getElementById("toggle").innerHTML = '<i class="fa-regular fa-sun"></i>';
            
        
        } else {
            localStorage.setItem("darkMode", "false");
            document.body.classList.remove("dark");
            document.getElementById("toggle").innerHTML = '<i class="fa-solid fa-moon"></i>';
        }
    });


document.body.style.maxWidth = parseInt(window.innerWidth);

// let darkmode = false;

// function lightToDark() {
//     var element = document.body;
//     // element.classList.toggle("dark");

//     // }
//     if (darkmode) {
//         darkmode = false;
//         document.body.classList.remove("dark");
//         document.getElementById("toggle").innerHTML = '<i class="fa-solid fa-moon"></i>';
        
//     }
//     else {
//         darkmode = true;
//         document.body.classList += "dark";
//         document.getElementById("toggle").innerHTML = '<i class="fa-regular fa-sun"></i>';
//     }

// }

let picOpen = false;

function picToggle() {
    sleep(300)
    if (picOpen) {
        picOpen = false;
        document.body.classList.remove("picOfMe--open");
    }
    else {
        picOpen = true;
        document.body.classList += "picOfMe--open";
    }

}
var w = parseInt(window.innerWidth);


if (w >850 ){   
    var appearOptions = {
        threshold: 0, rootMargin: "0px 0px -200px 0px"
    };
}

else {
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
            var skillChange = document.querySelector(".Skills");
            skillChange.classList.remove("left");

            var appearOptions = {
                threshold: 0, rootMargin: "0px 0px -75px 0px"
            };
    }
    else {
        
        var appearOptions = {
            threshold: 0, rootMargin: "0px 0px -125px 0px"
        };
    }
}
const faders = document.querySelectorAll('.fade-in');

const appearOnScroll = new IntersectionObserver
(function(
    entries,
     appearOnScroll
) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        }
        else{
            entry.target.classList.add('appear');
            appearOnScroll.unobserve('entry.target');
        }
    });
},
 appearOptions);

 faders.forEach(fader => {
    appearOnScroll.observe(fader);
 });


 const sliders = document.querySelectorAll('.slide-in');
sliders.forEach(slider => {
    appearOnScroll.observe(slider);
})
writeLoop();


let password = 'raxeyavezpvmpkgk';

function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }



function SendMail() {
    var params = {
        from_name : document.getElementById("input_name").value,
        email_id : document.getElementById("input_email").value,
        message : document.getElementById("input_comment").value
    }

    if (validateEmail(params.email_id))
    {
        emailjs.send("service_3aibw7p", "template_juprt6e", params).then(function (res) {
        alert("Success!");

    })
    
    }
    else {
        alert("Invalid Email Address...");
    }
    
}