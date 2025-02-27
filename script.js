let page = 0;
let typingFinished = false;

const pages = [
    `Hii, jo!!!,  
i made this site for you hehe, ahhm`,
    `baka sira tong code ko na to`,
    `wag mo nalang inext pag di pa tapos i type HAHAHHSHA`,
    `Ay oo nga pala, tapos na yung poem na sinulat ko about you!!`,
    `and guess what!`,
    `dito ko nalang ipapabasa sayo ito na 1... 2...3`,
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
Like every road has somehow crossed,  
And everything feels dark and blue,  
Don’t worry. I’ll find you.`,
    `Through rainy days and stormy skies,  
I’ll be right there, no need for cries.  
No matter what, no matter where,  
Just call my name, and I’ll be there.`,
    `And one thing I really want to say...`,
    `And make life so much more beautiful.`,
    `No matter what happens, I'm always here for you.`,
    `You are loved, appreciated, and cherished. 💖`,
    `Thank you for being you.`,
    `thank you for reading this!!!`
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
