let page = 0;
let typingFinished = false; // Track if typing is complete

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
    `I really like you.`,
    `and yeah I'm always here for you.`,
    `thank you for reading this!!!`
];

function explodeHearts() {
    let heart = document.getElementById("heart");
    let container = document.querySelector(".container");

    // Remove the heart button
    heart.style.display = "none";

    // Create multiple hearts for explosion effect
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

    // Show the content and start typing the first page
    setTimeout(() => {
        document.getElementById("content").classList.remove("hidden");
        typeLetter();
    }, 1000);
}

function typeLetter() {
    let letterElement = document.getElementById("letter");
    let nextButton = document.getElementById("nextButton");
    let text = pages[page]; // Get the current page text
    let i = 0;

    letterElement.innerHTML = ""; // Clear previous text
    nextButton.classList.add("hidden"); // Hide next button until typing is done
    typingFinished = false; // Reset typing finished flag

    function type() {
        if (i < text.length) {
            letterElement.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, 50);
        } else {
            typingFinished = true; // Mark typing as finished
            if (page < pages.length - 1) {
                nextButton.classList.remove("hidden"); // Show "Next" button
            }
        }
    }

    type();
}

function nextPage() {
    if (!typingFinished) return; // Prevent skipping before text is done

    page++; // Move to the next page
    if (page < pages.length) {
        typeLetter(); // Start typing the next page
    }
}
