let page = 0; // Track the current page

// Love letter pages
const pages = [
    `Dear love,  
You are the light that brightens my darkest days.  
Every moment with you is a beautiful memory.  
Forever yours,  
[Your Name]`,
    
    `Even in the hardest times, your love gives me strength.  
With you, I feel safe, happy, and complete.  
I promise to cherish you forever.  
Always,  
[Your Name]`
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

    // Show the image and start typing the first page
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
    page++; // Move to the next page
    typeLetter(); // Start typing the next page
}
