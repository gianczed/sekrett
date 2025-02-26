let page = 0;

const pages = [
    `Hii, jo!!!,  
    I made this site for you hehe, ahhm`,

    `Ay oo nga pala, tapos na yung poem na sinulat ko about you!!`,

    `And guess what!`,

    `Dito ko na lang ipapabasa sayo ito na...`,

    `The way you move through this world  
    with kindness in your hands,  
    patience in your voice,  
    and a heart that makes everyone feel safe.`,

    `I’ve seen so many beautiful things,  
    but nothing compares to you.  
    Not just your face, not just your smile,  
    but the way you make people feel,  
    the way you make me feel—  
    like I’ve finally found home.`,

    `If one day you feel so lost,  
    like every road has somehow crossed,  
    and everything feels dark and blue,  
    don’t worry. I’ll find you.`,

    `Through rainy days and stormy skies,  
    I’ll be right there, no need for cries.  
    No matter what, no matter where,  
    just call my name, and I’ll be there.`,

    `And one thing I really want to say...`,

    `I really like you.`
];

function explodeHearts() {
    let heart = document.getElementById("heart");
    let container = document.querySelector(".container");

    heart.style.display = "none";

    for (let i = 0; i < 10; i++) {
        let smallHeart = document.createElement("div");
        smallHeart.classList.add("heart");

        let x = (Math.random() - 0.5) * 400 + "px";
        let y = (Math.random() - 0.5) * 400 + "px";

        smallHeart.style.setProperty("--x", x);
        smallHeart.style.setProperty("--y", y);

        container.appendChild(smallHeart);

        setTimeout(() => {
            smallHeart.remove();
        }, 1000);
    }

    setTimeout(() => {
        let content = document.getElementById("content");
        content.classList.remove("hidden");
        content.style.display = "block";
        typeLetter();
    }, 1000);
}

function typeLetter() {
    let letterElement = document.getElementById("letter");
    let nextButton = document.getElementById("nextButton");
    let text = pages[page];
    let i = 0;

    letterElement.innerHTML = "";
    nextButton.classList.add("hidden");

    function type() {
        if (i < text.length) {
            letterElement.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, 50);
        } else {
            if (page < pages.length - 1) {
                nextButton.classList.remove("hidden");
            }
        }
    }

    type();
}

function nextPage() {
    if (page < pages.length - 1) {
        page++;
        document.getElementById("nextButton").classList.add("hidden");
        typeLetter();
    }
}
