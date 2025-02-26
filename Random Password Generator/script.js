 const inputSlider = document.getElementById("inputSlider");
 const sliderValue = document.getElementById("sliderValue");
 const passBox = document.getElementById("passBox");
 const lowercaseEl = document.getElementById("lowercase");
 const uppercaseEl = document.getElementById("uppercase");
 const numbersEl = document.getElementById("numbers");
 const symbolsEl = document.getElementById("symbols");
 const generateBtn = document.getElementById("getBtn");

 const copyIcon = document.getElementById("copyIcon");

const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+-=[]{}\\|;':\"./<>?";

sliderValue.textContent= inputSlider.value;
inputSlider.addEventListener("input",()=>{
    sliderValue.textContent= inputSlider.value;
})

generateBtn.addEventListener("click",()=>{
passBox.value = generatePassword(); // call the function
})

function generatePassword(){
const length = inputSlider.value;
let characters = ""; //help to consist the values that are selected
let password = "";

 // checked box selection and its function will depend and password will generate
characters += lowercaseEl.checked ? lowercaseLetters : "";
characters += uppercaseEl.checked ? uppercaseLetters : "";
characters += numbersEl.checked ? numbers : "";
characters += symbolsEl.checked ? symbols : "";

for(let i = 0; i < length; i++){
    password += characters.charAt(Math.floor(Math.random() * characters.length));
console.log(password);
}
return password
}

copyIcon.addEventListener("click",()=>{
    if(passBox.value !="" || passBox.value.length>=10){
        navigator.clipboard.writeText(passBox.value);
        copyIcon.innerText = "check";
        setTimeout(()=>{
            copyIcon.innerHTML = "content_copy";
        },3000)
    }
})