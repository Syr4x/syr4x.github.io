/** 
let btn_ver_mas = document.getElementById("btn_ver_mas");
let span_text = document.getElementById("span_text");
let btn_ver_menos = document.getElementById("btn_ver_menos");

btn_ver_mas.addEventListener("click", act_style(span_text, btn_ver_mas));
btn_ver_menos.addEventListener("click", ocultarTexto(span_text, btn_ver_mas));

function act_style(var1, var2) {
    var1.classList.add("mostrar");
    var2.classList.add("ocultar");
}

function ocultarTexto(var1, var2) {
    var1.classList.remove("mostrar");

    if (var1.classList.contains("mostrar")) {
        var2.classList.add("mostrar");
    }else{
        var2.classList.remove("ocultar");
    }
} 
*/


let btn_ver_mas = document.getElementById("btn_ver_mas");
let span_text = document.getElementById("span_text");
let btn_ver_menos = document.getElementById("btn_ver_menos");
let btn_ver_mas3 = document.getElementById("btn_ver_mas3");
let span_text3 = document.getElementById("span_text3");
let btn_ver_menos3 = document.getElementById("btn_ver_menos3");


btn_ver_mas.addEventListener("click", act_style);
btn_ver_menos.addEventListener("click", ocultarTexto);
btn_ver_mas3.addEventListener("click", act_style3);
btn_ver_menos3.addEventListener("click", ocultarTexto3);


function act_style() {
    span_text.classList.add("mostrar");
    btn_ver_mas.classList.add("ocultar");
}

function ocultarTexto() {
    span_text.classList.remove("mostrar");

    if (span_text.classList.contains("mostrar")) {
        btn_ver_mas.classList.add("mostrar");
    }else{
        btn_ver_mas.classList.remove("ocultar");
    }
}


function act_style3() {
    span_text3.classList.add("mostrar");
    btn_ver_mas3.classList.add("ocultar");
}

function ocultarTexto3() {
    span_text3.classList.remove("mostrar");

    if (span_text3.classList.contains("mostrar")) {
        btn_ver_mas3.classList.add("mostrar");
    }else{
        btn_ver_mas3.classList.remove("ocultar");
    }
}

