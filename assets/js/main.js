let nachricht = document.getElementById("nachricht")
let warnung = document.getElementById("warnung")
let neueNachricht = document.getElementById("neueNachricht")

/* function senden(){
    console.log(nachricht.value)
    if(nachricht.value == ""){
        warnung.innerHTML = "Gib bitte eine Nachricht ein!"
    } else{
        neueNachricht.innerHTML = nachricht.value
        warnung.innerHTML = ""
    }
} */

function senden(){
    switch(nachricht.value){
        case "":
            warnung.innerHTML = "Gib bitte eine Nachricht ein!"
            break;
        default:
            neueNachricht.innerHTML = nachricht.value
            warnung.innerHTML = ""
            break;
    }
}

// beides geht