const nome = document.getElementById("nome");
const cor = document.getElementById("cor");

function salvarPerfil(){

localStorage.setItem(
"nome",
nome.value
);

localStorage.setItem(
"cor",
cor.value
);

document.documentElement.style.setProperty(
"--cor",
cor.value
);
}

window.onload=()=>{

if(localStorage.nome){

nome.value = localStorage.nome;

document.getElementById("saudacao")
.innerHTML =
`Olá, ${localStorage.nome}!`;
}

if(localStorage.cor){

cor.value = localStorage.cor;

document.documentElement.style.setProperty(
"--cor",
localStorage.cor
);
}

verificarClima();
}

function verificarClima(){

const hora = new Date().getHours();

const body = document.body;

const icone =
document.getElementById(
"climaIcone"
);

if(hora >= 6 && hora < 18){

body.classList.add("dia");

icone.innerHTML = "☀️";

}else{

body.classList.add("noite");

icone.innerHTML = "🌙";
}

navigator.geolocation.getCurrentPosition(pos=>{

const lat = pos.coords.latitude;
const lon = pos.coords.longitude;

fetch(
`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=rain`
)

.then(r=>r.json())
.then(data=>{

if(data.current.rain > 0){

body.className="chuva";

icone.innerHTML="🌧️";

const raio =
document.createElement("div");

raio.classList.add("raio");

document.body.appendChild(
raio
);
}

});

});

}
