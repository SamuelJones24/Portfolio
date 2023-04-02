const words2 = ["Works", "Programs", "Projects"];

const element2 = document.getElementById("typewriter4");


const writeLoop3 = async() => {
    while (true) {
        let curWord = words2[curPhraseIndex];

        for (let i = 0; i < curWord.length; i++) {
            element2.innerText = curWord.substring(0, i + 1);
            await sleep(sleepTime);
        }

        await sleep(sleepTime * 10)

        for (let i = curWord.length; i > 0; i--) {
            element2.innerText = curWord.substring(0, i - 1);
            await sleep(sleepTime);
        }
        await sleep(sleepTime * 5)

        if (curPhraseIndex === words2.length - 1) {
            curPhraseIndex = 0;
        }
        else {
            curPhraseIndex++;
        }
    }
};

writeLoop3();
