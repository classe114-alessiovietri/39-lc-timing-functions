// elemento.addEventListener(
//     'evento che voglio intercettare', 
//     definizioneDiFunzione // che può essere o anonima, o nominata (ma qui ci devo scrivere SOLO il nome, senza le parentesi tonde)
// );

// setTimeout(
//     definizioneDiFunzione, // che può essere o anonima, o nominata (ma qui ci devo scrivere SOLO il nome, senza le parentesi tonde)
//     millisecondiDopoCuiFarAttivareLaFunzioneCheHoMessoComePrimoArgomento
// );

// clickButton.addEventListener('click', miaFunzione);

console.log('Prima del setTimeout');

// setTimeout(miaFunzione, 1);
setTimeout(function() {
    console.log('Ciao dal setTimeout');
}, 12000);

console.log('Dopo del setTimeout');

// const clockDue = setInterval(function() {
//     console.log('Ciao dal secondo setInterval');
// }, 5000);
// console.log('clockDue', clockDue, typeof clockDue);

// for (let i = 0; i < 10000; i++) {
//     let numero = 0;
//     numero += 1;
//     numero *= 10;
//     numero *= numero;
//     console.log(numero);
// }

let clock = setInterval(miaFunzioneInterval, 1000);
console.log('clock', clock, typeof clock);

const clickButton = document.getElementById('click-button');

clickButton.addEventListener('click', function() {
    if (clock != null) {
        clearInterval(clock);
        console.log('clock dopo stop', clock, typeof clock);

        clock = null;
    }
    else {
        clock = setInterval(miaFunzioneInterval, 1000);
        console.log('clock si riavvia', clock, typeof clock);
    }
});

/* 
    FUNZIONI
*/
function miaFunzione() {
    console.log('Ciao dal setTimeout');
}

function miaFunzioneInterval() {
    console.log('Ciao');
}