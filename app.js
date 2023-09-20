const typed = new Typed(".multiple-texts", {
    strings: [
        "Frontend Developer",
        "Graphics Designer",
        "Video Editor",
        "UI/UX Designer",
        "Cinematographer",
        "Digital Media Guru"
    ],
    typeSpeed: 50, 
    backSpeed: 100,
    backDelay: 1000,
    loop: true
})


function themeSelector() {
    // Body Theme switch
    let body = document.getElementById("body");
    body.classList.toggle("dark-theme");
  
    // Dark icon visibility switch
    let hideDarkIcon = document.querySelectorAll(".dark-icon");
    hideDarkIcon.forEach((iconHide) => {
        iconHide.classList.toggle("hidden");
    });
  
    let hideDarkIconII = document.querySelectorAll(".dark-iconlt");
    hideDarkIconII.forEach((drkIcn) => {
        drkIcn.classList.toggle("hidden");
    });
    
    // Logo visibility switch
    let logoHider = document.querySelector(".Logo-dark");
    logoHider.classList.toggle("display");
  
    let logoHiderII = document.querySelector(".Logo-light");
    logoHiderII.classList.toggle("hidden");
  
    // Nav Menu Text Color Switch
    let navItems = document.querySelectorAll(".nav-item");
    navItems.forEach((navItem) => {
      navItem.classList.toggle("dark-theme");
    });
  
    // Hero Section Theme switch
    let heroTexts = document.querySelectorAll(".home-content-text");
    heroTexts.forEach((heroText) => {
      heroText.classList.toggle("dark-theme");
    });
  
    // About section Theme switch
    let aboutHeaderText = document.querySelector(".about-header-text");
    aboutHeaderText.classList.toggle("dark-theme");
  
    let aboutTextMain = document.querySelector(".about-text-main");
    aboutTextMain.classList.toggle("dark-theme");
  
    // Card Section Theme Switch
    let cardTextHead = document.querySelectorAll(".card-text-head");
    cardTextHead.forEach((textHead) => {
      textHead.classList.toggle("dark-theme");
    });
  
    let cardTextMain = document.querySelectorAll(".card-text-main");
    cardTextMain.forEach((textMain) => {
      textMain.classList.toggle("dark-theme");
    });
  
    let cardTextSub = document.querySelectorAll(".card-text-sub");
    cardTextSub.forEach((textSub) => {
      textSub.classList.toggle("dark-theme");
    });

    // Header Background
    let headBg = document.querySelector(".header");
    headBg.classList.toggle("black-bg");
  
}
 

  
// Skill Card Section Render Via Arrays & Objects 
const cardDetails = [
    {
        cardHeader: "Frontend Developer",
        cardText: "Proficiency in HTML5, CSS, JavaScript, and I possess knowledge as well as harness my skills in ReactJS, Bootstrap, Tailwind to execute frontend development solutions and I am well-versed in the beautiful art of frontend development.",
        imageOne : "./Images/Html 5.png",
        imageTwo : "./Images/JavaScript.png",
        imageThre: "./Images/CSS3.png",
        imageFour: "./Images/React Native.png",
        imageFive: "./Images/Bootstrap.png",
        imageSix : "./Images/Tailwind CSS.png",
        btnlink : " "
    },

    {
        cardHeader: "UI/UX Designer",
        cardText: "I excel at creating visually captivating and user-friendly interfaces that leave a lasting impression. Possessing this skill-set basically helps me perform better as a frontend developer. I have a couple projects up my sleeves.",
        imageOne : " ./Images/Figma.png",
        imageTwo : " ",
        imageThre: " ",
        imageFour: " ",
        imageFive: " ",
        imageSix : " ",
        btnlink : " "

    },

    {
        cardHeader: "Graphics Designer",
        cardText: "Experienced graphics designer with a keen eye for aesthetics and a passion for creating visually captivating designs. Proficient in industry-standard software, I specialize in translating ideas into stunning visuals that effectively communicate messages and leave a lasting impact.",
        imageOne : " ./Images/Adobe Photoshop.png",
        imageTwo : " ./Images/Canva.png",
        imageThre: " ./Images/Figma.png",
        imageFour: " ",
        imageFive: " ",
        imageSix : " ",
        btnlink : " "

    },

    {
        cardHeader: "Video Editor",
        cardText: "Experienced video editor with a keen eye for aesthetics and a passion for creating visually captivating clips. Proficient in industry-standard software, I specialize in translating ideas into stunning visuals that effectively communicate messages and leave a lasting impact.",
        imageOne : " ./Images/Adobe Premiere Pro.png",
        imageTwo : " ./Images/Inshot.png",
        imageThre: " ",
        imageFour: " ",
        imageFive: " ",
        imageSix : " ",
        btnlink : " "

    },

    {
        cardHeader: "Digital Media Guru",
        cardText: "Dynamic digital media professional with a knack for crafting compelling online experiences. Skilled in leveraging social media platforms, multimedia content creation, and digital marketing strategies to engage audiences and drive brand awareness. Committed to staying ahead of emerging trends to deliver impactful digital campaigns digital campaigns",
        imageOne : " ./Images/Adobe Premiere Pro.png",
        imageTwo : " ./Images/Inshot.png",
        imageThre: " ./Images/Canva.png ",
        imageFour: " ./Images/Adobe Photoshop.png",
        imageFive: " ./Images/Figma.png",
        imageSix : " ",
        btnlink : " "

    },

    {
        cardHeader: "Cinematographer",
        cardText: "Experienced video editor with a keen eye for aesthetics and a passion for creating visually captivating clips. Proficient in industry-standard software, I specialize in translating ideas into stunning visuals that effectively communicate messages and leave a lasting impact.",
        imageOne : " ",
        imageTwo : " ",
        imageThre: " ",
        imageFour: " ",
        imageFive: " ",
        imageSix : " "

    },
]

const cardWrapper = document.querySelector(".card-wrapper");

cardDetails.forEach(e => {
    const cardElement = document.createElement("div");
    cardElement.classList.add("card-wrappper");

    cardElement.innerHTML = `
        <div class="card">
            <div class="card-head">
                <h3 class="card-text-main">${e.cardHeader}</h3>
            </div>
            <p class="card-text-sub">${e.cardText}</p>

            <div class="card-images">
                <div class="sub-image-wrapper1 sub-img">
                    <img src="${e.imageOne}">   
                    <img src="${e.imageTwo}">   
                    <img src="${e.imageThre}">
                </div>

                <div class="sub-image-wrapper2 sub-img">
                    <img src="${e.imageFour}">   
                    <img src="${e.imageFive}">   
                    <img src="${e.imageSix}">
                </div>
            </div>

            <div class="card-btn">
                <button class="view-projects-btn">
                    View projects
                </button>
            </div>
        </div>
    `;

    cardWrapper.appendChild(cardElement);

    // Add event listener to each "View projects" button
    const ProjectsButton = cardElement.querySelector(".view-projects-btn");

    ProjectsButton.addEventListener("click", () => {
        const btnlink = e.btnlink; 
        if (btnlink) {
            window.location.href = btnlink;
        }
        console.log(`Button clicked for ${btnlink} category!`);
    });
    
});


// Certification Card Section Render Via Arrays & Objects 
const certCard = [
    {
        stack : "FRONTEND DEVELOPMENT",
        school : "TECH1M",
        year : "2022/2023",
        link : "./tech1m.html "
    },

    {
        stack : "FRONTEND DEVELOPMENT",
        school : "ZURI",
        year : "2022",
        link : " "
    },

    {
        stack : "DIGITAL MEDIA",
        school : "STAR UNIVERSITY",
        year : "2021",
        link : "./staruni.html "
    }
]

const certWrapper = document.querySelector(".cert-wrapper")

certCard.forEach(e => {
    const certElements = document.createElement("div");
    certElements.classList.add("card-wrapper");

    certElements.innerHTML = `
        <div class="cert-card">
            <div class="cert-cardtxt">
                <h4>
                    ${e.stack}
                </h4>
                <h3>
                    ${e.school}
                </h3>
                <p>
                    ${e.year}
                </p>
            </div>
            <button class="cert-btn">
                Credentials
            </button>
        </div>
    `;

    certWrapper.appendChild(certElements)

    const certBtn = certElements.querySelector(".cert-btn");
    certBtn.addEventListener("click", () => {
        const btnlink = e.link; 
        if (btnlink) {
            window.location.href = btnlink;
        }
        // Perform your desired action here
        // console.log(`Button clicked for ${e.school} category!`);
    });
})

// Mobile Navigation

let mobileNav = document.querySelector(".navbar");
let mobileMenu = document.querySelector(".mobile-menu");
let mobileTheme = document.querySelector(".mobile-theme-section")

function menuOpen() {
    mobileNav.classList.toggle("show-nav") 
    mobileTheme.classList.toggle("show-nav") 
}

// Pop up card close button
// let closeCard = document.querySelector(".popup-close")

function closeCard() {
    window.history.back();
} 
