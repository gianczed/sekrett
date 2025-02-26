let page = 0;
let typingInterval;
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

function typeLetter() {
    let letterElement = document.getElementById("letter");
    let nextButton = document.getElementById("nextButton");
    let text = pages[page];
    let i = 0;

    clearInterval(typingInterval);  // Stop any previous typing interval

    letterElement.innerHTML = "";  // Clear previous text
    nextButton.classList.add("hidden");  // Hide "Next" button until typing finishes

    function type() {
        if (i < text.length) {
            letterElement.innerHTML += text.charAt(i);
            i++;
        } else {
            clearInterval(typingInterval);  // Stop typing animation
            nextButton.classList.remove("hidden");  // Show "Next" button
        }
    }

    typingInterval = setInterval(type, 50); // Start typing animation
}

function nextPage() {
    let letterElement = document.getElementById("letter");

    if (letterElement.innerHTML.length < pages[page].length) {
        // If the typing isn't finished, show full text immediately
        clearInterval(typingInterval);
        letterElement.innerHTML = pages[page];
        document.getElementById("nextButton").classList.remove("hidden");
    } else {
        // If full text is already displayed, go to the next page
        if (page < pages.length - 1) {
            page++;
            typeLetter();
        }
    }
}
