
/* 1 */ 

let btNormal = document.querySelector("#botonNormal");
let btOscuro = document.querySelector("#modOscuro");
let btGrises = document.querySelector("#grises");

btNormal.addEventListener("click", function(){
    document.querySelectorAll("h1").className="colorTexto";
    document.documentElement.style.setProperty("--color1", "#000");
    document.documentElement.style.setProperty("--color2", "#e52626");
    document.documentElement.style.setProperty("--color3", "#fff");
    document.documentElement.style.setProperty("--color4", "#111135");
    document.documentElement.style.setProperty("--color5", "#000");
    document.documentElement.style.setProperty("--color6", "#919191");

})

btGrises.addEventListener("click", function(){
    document.documentElement.style.setProperty("--color1", "#2d3034");
    document.documentElement.style.setProperty("--color2", "#454c4c");
    document.documentElement.style.setProperty("--color3", "#646d70");
    document.documentElement.style.setProperty("--color4", "#91a0a2");
    document.documentElement.style.setProperty("--color5", "#cae4e0");
})

btOscuro.addEventListener("click", function(){
    document.documentElement.style.setProperty("--color1", "#fafafa");
    document.documentElement.style.setProperty("--color2", "#253047");
    document.documentElement.style.setProperty("--color3", "#acb0c5");
    document.documentElement.style.setProperty("--color4", "#606074");
    document.documentElement.style.setProperty("--color5", "#121113");
})



