const menuIcon = document.querySelector(".menu-icon")
const menuList = document.querySelector("nav")
const hamburgerIcon = document.querySelector(".fa-solid")

menuIcon.addEventListener("click",() => {
    if (hamburgerIcon.classList[1] === "fa-bars") {
        hamburgerIcon.classList.add("fa-xmark")
        hamburgerIcon.classList.remove("fa-bars")
        menuList.style.display = "block"
    } else {
        hamburgerIcon.classList.add("fa-bars")
        hamburgerIcon.classList.remove("fa-xmark")
        menuList.style.display = ""
    }
})

/*offer-services(magnify-images)*/
const offerServicesImages = document.querySelectorAll(".offer-services-images");

offerServicesImages.forEach((oneOfferServicesImages) => {
    oneOfferServicesImages.addEventListener("mouseenter",() => {
        oneOfferServicesImages.classList.add("magnify")
    })
})
offerServicesImages.forEach((oneOfferServicesImages) => {
    oneOfferServicesImages.addEventListener("mouseleave",() => {
        oneOfferServicesImages.classList.remove("magnify")
    })
})

/*container-button(dark-light)*/
const btnLight = document.querySelector(".light");
const btnDark = document.querySelector(".dark");
const body = document.querySelector("body");
const headings2 = document.querySelectorAll("h2")

btnDark.addEventListener("click",() => {
    body.style.backgroundColor = "black";
    body.style.color = "gray";
    
    headings2.forEach(h2 => {
        h2.style.color = "white";
    });
})
btnLight.addEventListener("click",() => {
    body.style.backgroundColor = "rgb(203, 243, 252)";
    body.style.color = "rgb(35, 82, 92)";
})
/*icone*/
const toTop = document.querySelector(".fa-regular")

window.addEventListener("scroll",() => {
    if (window.scrollY >= 500) {
        toTop.style.display = "block";
    } else {
        toTop.style.display = "none"; 
    }
})
/*form*/
const form = document.querySelector(".form");
const emailInput = document.querySelector(".email");
const resultText = document.querySelector(".text");
const pattern = /^([a-z\d\.\-]+)@([a-z\d\-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;
const passwordElement = document.querySelector(".password"); 
const passwordCheck = document.querySelector(".password-check"); 
const passwordsMatch = document.querySelector(".passwords-match");
const passwordsNotMatch = document.querySelector(".passwords-not-match");

/*ověření emailu*/
emailInput.addEventListener("input", () => {
    const emailValue = emailInput.value
    if(emailValue.match(pattern)){
        form.classList.add("valid")
        form.classList.remove("invalid")
        resultText.textContent = "Váš email je ve správném formátu"
        resultText.style.color = "#00ff00"
    } else {
        form.classList.add("invalid")
        form.classList.remove("valid")
        resultText.textContent = "Váš email není ve správném formátu"
        resultText.style.color = "#ff0000"
    }
    if (emailValue === ""){
        form.classList.remove("invalid")
        form.classList.remove("valid")
        resultText.textContent = ""
    }
})
/*kontrola hesla*/ 
form.addEventListener("input", (event) => {
    event.preventDefault();
    const enteredPassword = passwordCheck.value;
    if (enteredPassword === passwordElement.value) {
        passwordsMatch.style.display = "block";
        passwordsNotMatch.style.display = "none";  
    } else {
        passwordsNotMatch.style.display = "block";
        passwordsMatch.style.display = "none";
    }
    if (enteredPassword === ""){
        passwordsNotMatch.style.display = "";
        passwordsMatch.style.display = "";
    }
});