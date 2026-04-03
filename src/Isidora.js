// Personaggio
var classe = "-";
var background = "nobile";
var razza = "umana";
var livello = 1;
var taglia = "media";
var velocita = 9;
var allineamento = "CB";

document.getElementById("classe").innerHTML = classe;
document.getElementById("razza").innerHTML = razza;
document.getElementById("livello").innerHTML = livello;
document.getElementById("taglia").innerHTML = taglia;
document.getElementById("velocita").innerHTML = velocita + "m";
document.getElementById("allineamento").innerHTML = allineamento;

// Punteggi caratteristica
var budget = 27;

if (livello == 5) {
    budget += 4;
} else if (livello == 10) {
    budget += 8;
} else if (livello == 15) {
    budget += 12;
} else if (livello == 20) {
    budget += 16;
}

var forza = 13;
var destrezza = 13;
var costituzione = 13;
var intelligenza = 15;
var saggezza = 9;
var carisma = 10;

let forMigliorata = forza + 1;
let desMigliorata = destrezza + 1;
let cosMigliorata = costituzione + 1;
let intMigliorata = intelligenza + 1;
let sagMigliorata = saggezza + 1;
let carMigliorata = carisma + 1;

var punteggio = [forza, destrezza, costituzione, intelligenza, saggezza, carisma];
let modificatore = [forza, destrezza, costituzione, intelligenza, saggezza, carisma];
var pMigliorato = [forMigliorata, desMigliorata, cosMigliorata, intMigliorata, sagMigliorata, carMigliorata];
let modMigliorato = [forMigliorata, desMigliorata, cosMigliorata, intMigliorata, sagMigliorata, carMigliorata];

for (var i=0; i< punteggio.length; i++) {
    modificatore[i] = Math.trunc((punteggio[i] - 10) / 2);
    if (punteggio[i] > 13) {
        budget -= 5;
        budget -= (punteggio[i] - 13) * 2;
    } else if (punteggio[i] > 8) {
        budget -= (punteggio[i] - 8);
    }
}
for (var i=0; i< pMigliorato.length; i++) {
    modMigliorato[i] = Math.trunc((pMigliorato[i] - 10) / 2);
}

if (budget == 0) {
    document.getElementById("controlloPunteggi").style.display="none"
} else {
    document.getElementById("controlloPunteggi").innerHTML = "Budget "+budget;
}

var bonusStamina = 5 + modMigliorato[2];
var bonusFerita = 5;
var gradiAbilita = 4 + modMigliorato[3];

document.getElementById("pFor").innerHTML = pMigliorato[0];
document.getElementById("modFor").innerHTML = modMigliorato[0];
document.getElementById("pDes").innerHTML = pMigliorato[1];
document.getElementById("modDes").innerHTML = modMigliorato[1];
document.getElementById("pCos").innerHTML = pMigliorato[2];
document.getElementById("modCos").innerHTML = modMigliorato[2];
document.getElementById("pInt").innerHTML = pMigliorato[3];
document.getElementById("modInt").innerHTML = modMigliorato[3];
document.getElementById("pSag").innerHTML = pMigliorato[4];
document.getElementById("modSag").innerHTML = modMigliorato[4];
document.getElementById("pCar").innerHTML = pMigliorato[5];
document.getElementById("modCar").innerHTML = modMigliorato[5];

// Iniziativa
var modVariIniz = 11;
var d20 = Math.round(Math.random() * 20);

let totBonusIniz = modMigliorato[1];
let iniziativa = totBonusIniz + d20;

document.getElementById("d20").innerHTML = d20;
document.getElementById("totBonusIniz").innerHTML = totBonusIniz;
document.getElementById("iniziativa").innerHTML = iniziativa;

// Salute
var danni = 0;

let ferita = 10;
let feritaAttuali = ferita;

feritaAttuali = ferita - danni;

document.getElementById("pFerita").innerHTML = ferita;
document.getElementById("pFeritaAttuali").innerHTML = feritaAttuali;

// Classe armatura
let ca = modMigliorato[0];

document.getElementById("ca").innerHTML = ca;

// Tiri salvezza
var tsFor = modMigliorato[0];
var tsDes = modMigliorato[1];
var tsCos = modMigliorato[2];
var tsInt = modMigliorato[3];
var tsSag = modMigliorato[4];
var tsCar = modMigliorato[5];

document.getElementById("tsFor").innerHTML = tsFor;
document.getElementById("tsDes").innerHTML = tsDes;
document.getElementById("tsCos").innerHTML = tsCos;
document.getElementById("tsInt").innerHTML = tsInt;
document.getElementById("tsSag").innerHTML = tsSag;
document.getElementById("tsCar").innerHTML = tsCar;

// Abilità
var abilita = [acrobazia, addestrareAnimali, arcano, atletica, furtivita, indagare, inganno, intimidire, intrattenere, intuizione, medicina, natura, percezione, persuasione, rapiditaDiMano, religione, sopravvivenza, storia];
const MOD = [1,4,3,0,1,3,5,5,5,4,4,3,4,5,1,3,4,3];
var bonus = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
let somma = 0;

for (var i=0; i<abilita.length; i++) {
    abilita[i] = bonus[i] + modMigliorato[MOD[i]];
}

document.getElementById("acrobazia").innerHTML = abilita[0];
document.getElementById("addestrareAnimali").innerHTML = abilita[1];
document.getElementById("arcano").innerHTML = abilita[2];
document.getElementById("atletica").innerHTML = abilita[3];
document.getElementById("furtivita").innerHTML = abilita[4];
document.getElementById("indagare").innerHTML = abilita[5];
document.getElementById("inganno").innerHTML = abilita[6];
document.getElementById("intimidire").innerHTML = abilita[7];
document.getElementById("intrattenere").innerHTML = abilita[8];
document.getElementById("intuizione").innerHTML = abilita[9];
document.getElementById("medicina").innerHTML = abilita[10];
document.getElementById("natura").innerHTML = abilita[11];
document.getElementById("percezione").innerHTML = abilita[12];
document.getElementById("persuasione").innerHTML = abilita[13];
document.getElementById("rapiditaDiMano").innerHTML = abilita[14];
document.getElementById("religione").innerHTML = abilita[15];
document.getElementById("sopravvivenza").innerHTML = abilita[16];
document.getElementById("storia").innerHTML = abilita[17];

// Privilegi e tratti
document.getElementById("capacita1").innerHTML = "...";

// Linguaggi
var lingua = ["comune", "draconico"]

document.getElementById("lingua1").innerHTML = lingua[0];
document.getElementById("lingua2").innerHTML = lingua[1];

// Equipaggiamento
document.getElementById("equip1").innerHTML = "...";

// Crediti
var crediti = 0;
document.getElementById("crediti").innerHTML = crediti;

// Punti esperienza
var xp = 0;

document.getElementById("xp").innerHTML = xp;

// Incantesimi
var contaIncantesimi0 = 0;
var contaIncantesimi1 = 0;
var contaIncantesimi2 = 0;
var contaIncantesimi3 = 0;
var contaIncantesimi4 = 0;
var contaIncantesimi5 = 0;
var contaIncantesimi6 = 0;

// Livello 0
var incantesimo01 = ["...", 0+" AZ", 0+" round", 0+" m", 0]; contaIncantesimi0++;

// Livello 0
document.getElementById("incantesimo01").innerHTML = incantesimo01[0];
document.getElementById("inc01Tempo").innerHTML = incantesimo01[1];
document.getElementById("inc01Durata").innerHTML = incantesimo01[2];
document.getElementById("inc01Gitt").innerHTML = incantesimo01[3];
document.getElementById("inc01Danno").innerHTML = incantesimo01[4];

// if (contaIncantesimi0 == numeroIncantesimi0 && contaIncantesimi1 == numeroIncantesimi1 && contaIncantesimi2 == numeroIncantesimi2 && contaIncantesimi3 == numeroIncantesimi3 && contaIncantesimi4 == numeroIncantesimi4 && contaIncantesimi5 == numeroIncantesimi5 && contaIncantesimi6 == numeroIncantesimi6) {
//     document.getElementById("controlloIncantesimi").style.display = "none";
// } else {
//     document.getElementById("controlloIncantesimi").innerHTML = "ERRORE. Numero incantesimi errato! " + numeroIncantesimi0 +" "+ numeroIncantesimi1 +" "+ numeroIncantesimi2 +" "+ numeroIncantesimi3 +" "+ numeroIncantesimi4 +" "+ numeroIncantesimi5 +" "+ numeroIncantesimi6;
// }