const username =
document.getElementById("username");

const themeColor =
document.getElementById("themeColor");

function saveProfile(){

localStorage.setItem(
"name",
username.value
);

localStorage.setItem(
"color",
themeColor.value
);

document.documentElement
.style.setProperty(
"--primary",
themeColor.value
);

updateWelcome();
}

function updateWelcome(){

const name =
localStorage.getItem("name");

if(name){

document.getElementById(
"welcome"
).innerHTML =
`Olá, ${name}!`;

}

}

window.onload = () => {

if(localStorage.getItem("name")){

username.value =
localStorage.getItem("name");

}

if(localStorage.getItem("color")){

themeColor.value =
localStorage.getItem("color");

document.documentElement
.style.setProperty(
"--primary",
localStorage.getItem("color"));

}

updateWelcome();

setTheme();

};

function setTheme(){

const hour =
new Date().getHours();

const icon =
document.getElementById(
"weatherIcon"
);

if(hour >= 6 && hour < 18){

document.body.classList.add(
"day"
);

icon.innerHTML = "☀️";

}else{

document.body.classList.add(
"night"
);

icon.innerHTML = "🌙";

}

}