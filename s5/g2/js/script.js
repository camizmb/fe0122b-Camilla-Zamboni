let budget = 2000;


while (budget > 0) {
    let numeroCasuale = (Math.floor(Math.random() * 21) + 1);
    console.log("hai speso " + numeroCasuale);
    if (budget >= numeroCasuale) {
        budget -= numeroCasuale;

    }
    else {
        break
    }


    document.querySelector('p').innerHTML += "Hai speso: " + numeroCasuale + "<br>" + "Ti rimangono: " + budget + "<br>";
    console.log("Ti rimangono: " + budget)


    if (budget <= 1000 && budget >= 900) {
        document.querySelector('p').innerHTML += "Attenzione! Sei rimasto con circa metà budget +<br>";
        //console.log("Attenzione! Sei rimasto con circa metà budget");

    }

    if (budget <= 220 && budget>= 21) {
        document.querySelector('p').innerHTML += "Sei rimasto con poco budget +<br>";
        //console.log("Sei rimasto con poco budget");
    }

    if (budget <= 20) {
        document.querySelector('p').innerHTML += "Hai finito il budget + <br>";
        // console.log("Hai finito il budget !");
    }

}



