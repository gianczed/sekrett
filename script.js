let page = 0;
let typingFinished = false;

const pages = [
    `Hey you 💕  
This little space was made just for you.`,
    `I just wanted to say something important...`,
    `Every moment with you feels special.`,
    `You light up the world around you,`,
    `And make life so much more beautiful.`,
    `No matter what happens, I'm always here for you.`,
    `You are loved, appreciated, and cherished. 💖`,
    `And most of all...`,
    `I really like you. ❤️`,
    `Thank you for being you.`
];

function startLoveStory() {
    let startButton = document.getElementById("startButton");
    let content = document.getElementById("content");
    let picture = document.getElementById("picture");

    startButton.style.display = "none";
    content.classList.remove("hidden");

    setTimeout(() => {
        picture.classList.remove("hidden");
        picture.style.opacity = 1;
    }, 500);

    setTimeout(typeLetter, 1500);
}

function typeLetter() {
    let letterElement = document.getElementById("letter");
    let nextButton = document.getElementById("nextButton");
    let text = pages[page];
    let i = 0;

    letterElement.innerHTML = "";
    letterElement.style.opacity = 1;
    nextButton.classList.add("hidden");
    typingFinished = false;

    function type() {
        if (i < text.length) {
            letterElement.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, 50);
        } else {
            typingFinished = true;
            if (page < pages.length - 1) {
                nextButton.classList.remove("hidden");
            }
        }
    }

    type();
}

function nextPage() {
    if (!typingFinished) return;

    page++;
    if (page < pages.length) {
        typeLetter();
    }
}

function createFloatingHeart() {
    const heart = document.createElement("div");
    heart.classList.add("floating-heart");
    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "vw"; 
    heart.style.top = "100vh"; 

    let size = Math.random() * 20 + 10;
    heart.style.fontSize = size + "px";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

setInterval(createFloatingHeart, 500);
