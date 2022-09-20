const container = document.getElementById('container');

//los parentesis reciben la entrada 
function suma(A, B){
    let output = A+B;
    return output
}

function createDiv(task, done){
    if(done){
    let div = `<div class="done">
                    <span>${task}</span>
                </div>`;
        return div;
    }else{
        let div = `<div class="undone">
                     <span>${numeracion}, ${task}</span>
                    </div>`;
        return div;
    }
}

//uso
let s = suma(5, 7);
console.log(s);

let numeracion = 1;
let elemento1 = createDiv("Sacar al Perro", true, numeracion);
let elemento2 = createDiv("Sacar al gato", false, numeracion, numeracion++);
let elemento3 = createDiv("Sacar al hamster", true, numeracion);
let elemento4 = createDiv("Sacar al Buitre", false, numeracion,numeracion++);
let elemento5 = createDiv("Sacar al Capibara", true, numeracion);

container.innerHTML += (elemento1); 
container.innerHTML += (elemento2); 
container.innerHTML += (elemento3); 
container.innerHTML += (elemento4); 
container.innerHTML += (elemento5); 

function insertarTexto(cont, text){
    cont.innerHTML += text + "<br>"
}

insertarTexto(container, "Hola Fundamentos de programacion");
insertarTexto(container, "Hoy es jueves");

function showError(){
    alert("Error del sistem")
}