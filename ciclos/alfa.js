const container = document.getElementById(`contaier`)

let personName = "Pepe";
let phone = "1111111111";
let enabled = true;

if(enabled){
container.innerHTML += `<div class="enabled">
                            <h4>${personName}</h4>
                            <small>${phone}</small>    
                        </div>`;
}else{
    container.innerHTML += `<div class="disabled">
                            <h4>${personName}</h4>
                            <small>${phone}</small>    
                        </div>`;
}