
let generatedPassword = document.querySelector("input");

function generatePassword(){
  let password = ""

  let upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let lowercase = 'abcdefghijklmnopqrstuvwxyz'
  let numbers = '0123456789';
  let symbols = "`~!@#$%^&*()_-+={}[]|\?/;><";

  const allChars = upperCase + lowercase + numbers + symbols;

  password += upperCase[Math.floor(Math.random()*upperCase.length)]
  password += lowercase[Math.floor(Math.random()*lowercase.length)]
  password += numbers[Math.floor(Math.random()*numbers.length)]
  password += symbols[Math.floor(Math.random()*symbols.length)]
  

 while (password.length < 12) {
    password += allChars[Math.floor(Math.random()*allChars.length)]
 }
  
 generatedPassword.value = password;
// console.log(password)
  
}

function copyPassword(){
  generatedPassword.select();
 document.execCommand("copy");
}

function resetPass(){
  document.querySelector("input").value = ""
}