function themeSelectorII() {
    let popUpCard = document.querySelectorAll(".pop-up-dark");
    popUpCard.forEach((textSub) => {
      textSub.classList.toggle("dark-theme");
    });

    // Prevent Theme Change on Refresh  

    // _______________________________

    // Certification Header Text Section Theme Switch functionality
    let certTheme = document.querySelector(".main-cert-head")
    certTheme.classList.toggle("dark-theme")

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
}
