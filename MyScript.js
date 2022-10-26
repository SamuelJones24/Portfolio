function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
    }
const phrase = ["Programmer", "Front-end Developer", "Back-end Developer", "Tennis Player"];

const el = document.getElementById("typewriter");

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

let darkmode = false;

function lightToDark() {
    var element = document.body;
    // element.classList.toggle("dark");
        

    // if (document.getElementById("toggle").innerHTML == "☾"){
    //     document.getElementById("toggle").innerHTML = "☀";
    
    // }
    // else {
    //     document.getElementById("toggle").innerHTML = "☾";

    // }
    if (darkmode) {
        darkmode = false;
        document.body.classList.remove("dark");
        document.getElementById("toggle").innerHTML = '<i class="fa-solid fa-moon"></i>';
        
    }
    else {
        darkmode = true;
        document.body.classList += "dark";
        document.getElementById("toggle").innerHTML = '<i class="fa-regular fa-sun"></i>';
    }

}

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
const appearOptions = {
    threshold: 0, rootMargin: "0px 0px -200px 0px"
};

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