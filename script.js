let page = 0; // Track the current page

// Love letter pages
const pages = [
    `Hi, Jo!!!  
I made this site for you hehe, ahhm...`,

    `Oh, by the way, the poem I wrote about you is finally done!`,

    `And guess what?`,

    `I'm going to let you read it here...`,

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

    `If one day you feel lost,  
like every road has somehow crossed,  
and everything feels dark and blue,  
don’t worry. I’ll find you.`,

    `Through rainy days and stormy skies,  
I’ll be right there, no need for cries.  
No matter what, no matter where,  
just call my name, and I’ll be there.`,

    `Yeah, that’s all! I hope you liked it hehe.`,

    `And there's one thing I really want to say...`,

    `I really like you. ❤️`
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
        let content = document.getElementById("content");
        content.classList.remove("hidden");
        content.style.display = "block"; // Ensure it becomes visible
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

    function type() {
        if (i < text.length) {
            letterElement.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, 50);
        } else {
            // Show "Next" button if there's another page
            if (page < pages.length - 1) {
                nextButton.classList.remove("hidden");
            }
        }
    }

    type();
}

function nextPage() {
    if (page < pages.length - 1) {
        page++; // Move to the next page
        typeLetter(); // Start typing the next page
    } else {
        document.getElementById("nextButton").classList.add("hidden");
    }
}

// Debugging: Check if the script is loading
console.log("JavaScript is working!");
