let page = 0; // Track the current page

// Love letter pages
const pages = [
    `Hii, jo!!!,  
I made this site for you hehe, ahhm`,

    `Ay oo nga pala, tapos na yung poem na sinulat ko about you!!`,

    `And guess what!`,

    `Dito ko nalang ipapabasa sayo ito na...`,

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

    `Yah, that’s all! I hope nagustuhan mo hehe.`,

    `and one thing na gusto ko lang sabihin hehe.`

    `I really like you.`

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
        let y = (Math.random() - 0.5) *
