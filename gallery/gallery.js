const words = ["Collage", "Photo Montage", "Gallery"];

const element = document.getElementById("typewriter2");


const writeLoop1 = async() => {
    while (true) {
        let curWord = words[curPhraseIndex];

        for (let i = 0; i < curWord.length; i++) {
            element.innerText = curWord.substring(0, i + 1);
            await sleep(sleepTime);
        }

        await sleep(sleepTime * 10)

        for (let i = curWord.length; i > 0; i--) {
            element.innerText = curWord.substring(0, i - 1);
            await sleep(sleepTime);
        }
        await sleep(sleepTime * 5)

        if (curPhraseIndex === words.length - 1) {
            curPhraseIndex = 0;
        }
        else {
            curPhraseIndex++;
        }
    }
};

writeLoop1();