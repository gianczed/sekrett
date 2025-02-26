let page = 0; 

const pages = [
    `Hii, jo!!!,  
Ginawa ko itong site para sa'yo hehe, ahhm...`,
    
    `Ay oo nga pala, tapos na yung tula na sinulat ko tungkol sa'yo!!`,
    
    `At guess what!`,
    
    `Dito ko na lang ipapabasa sa'yo, ito na...`,
    
    `Kung paano ka kumilos sa mundong ito  
may kabutihan sa iyong mga kamay,  
pasensya sa iyong tinig,  
at pusong nagpaparamdam ng seguridad sa lahat.`,
    
    `Marami na akong nakitang magagandang bagay,  
pero wala pa ring tatalo sa'yo.  
Hindi lang ang iyong mukha, hindi lang ang iyong ngiti,  
kundi ang paraan mo sa pagpaparamdam sa iba,  
ang paraan mo sa pagpaparamdam sa akin—  
parang nahanap ko na ang tahanan.`,
    
    `Kung isang araw ay pakiramdam mong naliligaw ka,  
parang ang lahat ng daan ay nagkasalubong,  
at ang lahat ay madilim at malungkot,  
huwag kang mag-alala. Hahanapin kita.`,
    
    `Sa mga maulan na araw at madilim na langit,  
nandito lang ako, walang kailangang luha.  
Kahit saan, kahit kailan,  
tawagin mo lang ako at darating ako.`,
    
    `At may isa pa akong gustong sabihin...  
I really like you.`
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
        document.getElementById("content").classList.remove("hidden");
        showLetter(); // Call showLetter instead of typeLetter
    }, 1000);
}

// Function to instantly show the full paragraph
function showLetter() {
    let letterElement = document.getElementById("letter");
    let nextButton = document.getElementById("nextButton");

    letterElement.innerHTML = pages[page]; // Instantly display full text
    nextButton.classList.add("hidden");

    if (page < pages.length - 1) {
        nextButton.classList.remove("hidden");
    }
}

function nextPage() {
    if (page < pages.length - 1) {
        page++;
        showLetter(); // Directly show the next paragraph
    }
}
