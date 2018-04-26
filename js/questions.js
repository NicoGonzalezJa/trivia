var answers = {
    1: "4",
    2: "js",
    3: "css",
    4: "tf",
    5: "ux"
};

var aux = {
    1: false,
    2: false,
    3: false,
    4: false,
    5: false
};

var count = 1;
var current_question = document.getElementById("question" + count);
var checked = document.querySelector('input[name="question' + count + '"]:checked');
current_question.classList.remove("hide");
if(checked) {
    compare(value);
}



function next() {
    checked = document.querySelector('input[name="question' + count + '"]:checked');
    if(checked) {
        compare(count, checked.value);
        current_question.classList.add("hide");
        count++;
        if(count === 6) {
            current_question.classList.add("hide");
            document.getElementById("actionsButtons").classList.add("hide");
            renderResult();
        } else {
            current_question = document.getElementById("question" + count);
            current_question.classList.remove("hide");
        }

    } else {
        alert("Debes seleccionar una respuesta");
    }


}

/*function back() {
    var sub = count - 1;
    checked = document.querySelector('input[name="question' + sub + '"]:checked');
    if(checked) {
        checked = document.querySelector('input[name="question' + count + '"]:checked');
        if (count > 1) {
            compare(count, checked.value);
            current_question.classList.add("hide");
            count--;
            current_question = document.getElementById("question" + count);
            current_question.classList.remove("hide");
            // console.log(aux, "mis respuestas");
        }
    }  else {
        alert("Debes seleccionar una respuesta");
    }

}*/

function renderResult() {
    var aux_box = Object.keys(aux);
    var total = 0;
    for (var i = 0; i < aux_box.length; i++) {
        if(aux[parseInt(aux_box[i])]) {
            total++;
        }
    }
    var final = (total * 100)/(count - 1);
    document.getElementById("results").classList.remove("hide");
    document.getElementById("percent").textContent = "Obtuviste un " + final + "% de respuestas correctas";
}

function compare(handler, value) {
    aux[handler] = (answers[handler] === value);
}

