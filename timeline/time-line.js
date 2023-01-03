const words1 = ["Timeline", "Record", "Road Map"];

const element1 = document.getElementById("typewriter3");


const writeLoop2 = async() => {
    while (true) {
        let curWord = words1[curPhraseIndex];

        for (let i = 0; i < curWord.length; i++) {
            element1.innerText = curWord.substring(0, i + 1);
            await sleep(sleepTime);
        }

        await sleep(sleepTime * 10)

        for (let i = curWord.length; i > 0; i--) {
            element1.innerText = curWord.substring(0, i - 1);
            await sleep(sleepTime);
        }
        await sleep(sleepTime * 5)

        if (curPhraseIndex === words1.length - 1) {
            curPhraseIndex = 0;
        }
        else {
            curPhraseIndex++;
        }
    }
};



var items = document.querySelectorAll("li");

function isItemInView(item){
  var rect = item.getBoundingClientRect();
  return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function callbackFunc() {
    for (var i = 0; i < items.length; i++) {
      if (isItemInView(items[i])) {
        items[i].classList.add("show");
      }
    }
  }

  // listen for events
  window.addEventListener("load", callbackFunc);
  window.addEventListener("resize", callbackFunc);
  window.addEventListener("scroll", callbackFunc);

writeLoop2();