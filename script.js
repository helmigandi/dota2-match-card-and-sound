let arrHero = ['Invoker_icon', 'Legion_Commander_icon', 'Sand_King_icon', 'Sniper_icon', 'Mirana_icon', 'Bounty_Hunter_icon'];
let arrayBaru = [];
let randomIndex = 0;
// function myFunction() {
//     document.getElementById("lc").innerHTML = "lc changed";
// }

// // get by id
// let x = document.getElementById("myAudio");
// function playAudio() {
//     x.play();
// }

// // get by src
// // or vid.currentSrc
// var test = document.getElementById("myAudio").src;
// function srcTest() {
//     document.getElementById("testSrc").innerHTML = test;
//     console.log(test)
// }


// // change audio and load audio from js
// function changeAudio() {
//     const test = 'Invoker_icon'
//     document.getElementById("changeAudio").src = `/assets/${test}.mp3`;
//     document.getElementById("changeAudio").load();
//     document.getElementById("changeAudio").play();
//     console.log('checked from: ' + document.getElementById("changeAudio").src)
// }

// input array
function arrPlayAudio(arrHero, arrayBaru) {
    // let arrayBaru = [];
    // let randomIndex = 0;

    let indexTerambil;

    if (arrayBaru.length === arrHero.length) {
        console.log('Reset Array karena Hero sound sudah habis');
        while (arrayBaru.length > 0) {
            arrayBaru.pop();
        }
    }

    // asumsinya indexTerambil pasti ketemu, karena do while dan arraynya mumpuni
    let prosesAmbilSelesai = false;
    do {
        let idx = Math.floor(Math.random() * arrHero.length);

        let apakahAda = false;
        for (let i = 0; i < arrayBaru.length; i++) {
            if (idx === arrayBaru[i]) {
                apakahAda = true;
            }
        }

        if (apakahAda === false) {
            prosesAmbilSelesai = true;
            indexTerambil = idx; // boleh jg langsung return disini
            arrayBaru.push(idx)
        }

    } while (prosesAmbilSelesai === false)

    // console.log(indexTerambil);
    // console.log(arrayBaru);

    randomIndex = indexTerambil;
    console.log('Array Baru: ' + arrayBaru);
    console.log('Random index: ' + indexTerambil);
    console.log('Suaranya: ' + arrHero[indexTerambil]);

    const heroSound = arrHero[indexTerambil];
    document.getElementById("arrayAudio").src = `/assets/${heroSound}.mp3`;
    document.getElementById("arrayAudio").load();
    document.getElementById("arrayAudio").play();
    return randomIndex;
}


function bandingSoundHeroInvoker(randomIndex, arrHero) {
    let x = document.getElementById("Invoker_icon");

    console.log('id: ' + x.id);
    console.log(randomIndex);
    console.log(arrHero);
    if (x.id === arrHero[randomIndex]) {
        alert(true)
    } else {
        alert(false);
    }
}

function bandingSoundHeroMirana(randomIndex, arrHero) {
    let x = document.getElementById("Mirana_icon");

    console.log('id: ' + x.id);
    console.log(randomIndex);
    console.log(arrHero);
    if (x.id === arrHero[randomIndex]) {
        alert(true)
    } else {
        alert(false);
    }
}

function bandingSoundHeroLegion(randomIndex, arrHero) {
    let x = document.getElementById("Legion_Commander_icon");

    console.log('id: ' + x.id);
    console.log(randomIndex);
    console.log(arrHero);
    if (x.id === arrHero[randomIndex]) {
        alert(true)
    } else {
        alert(false);
    }
}

function bandingSoundHeroSand(randomIndex, arrHero) {
    let x = document.getElementById("Sand_King_icon");

    console.log('id: ' + x.id);
    console.log(randomIndex);
    console.log(arrHero);
    if (x.id === arrHero[randomIndex]) {
        alert(true)
    } else {
        alert(false);
    }
}

function bandingSoundHeroBounty(randomIndex, arrHero) {
    let x = document.getElementById("Bounty_Hunter_icon");

    console.log('id: ' + x.id);
    console.log(randomIndex);
    console.log(arrHero);
    if (x.id === arrHero[randomIndex]) {
        alert(true)
    } else {
        alert(false);
    }
}

function bandingSoundHeroSniper(randomIndex, arrHero) {
    let x = document.getElementById("Sniper_icon");

    console.log('id: ' + x.id);
    console.log(randomIndex);
    console.log(arrHero);
    if (x.id === arrHero[randomIndex]) {
        alert(true)
    } else {
        alert(false);
    }
}