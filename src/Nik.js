// Personaggio
var nome = "Nik Ginto"
var classe = "Barbaro";
var background = "ciarlatano";
var razza = "Umana";
var livello = 5;
var taglia = "media";
var velocita = 9;
var allineamento = "CN";

document.getElementById("nome").innerHTML = nome;
document.getElementById("classe").innerHTML = classe;
document.getElementById("background").innerHTML = background;
document.getElementById("razza").innerHTML = razza;
document.getElementById("livello").innerHTML = livello;
document.getElementById("taglia").innerHTML = taglia;
document.getElementById("velocita").innerHTML = velocita + " m";
document.getElementById("allineamento").innerHTML = allineamento;

// Punteggi caratteristica
var budget = 27;
var budgetAggiunto = 0;

if (livello >= 4) {
    budgetAggiunto += 2;
} if (livello >= 8) {
    budgetAggiunto += 2;
} if (livello >= 10) {
    budgetAggiunto += 2;
} if (livello >= 12) {
    budgetAggiunto += 2;
} if (livello >= 16) {
    budgetAggiunto += 2;
} if (livello >= 19) {
    budgetAggiunto += 2;
}

var forza = 15;
var destrezza = 9;
var costituzione = 15;
var intelligenza = 9;
var saggezza = 10;
var carisma = 14;

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
    if (budget > 0) {
        if (punteggio[i] > 13) {
            budget -= 5;
            budget -= (punteggio[i] - 13) * 2;
        } else if (punteggio[i] > 8) {
            budget -= (punteggio[i] - 8);
        }
    } else {
        budgetAggiunto -= (punteggio[i] - 8);
    }
}
budget += budgetAggiunto;

for (var i=0; i< pMigliorato.length; i++) {
    modMigliorato[i] = Math.trunc((pMigliorato[i] - 10) / 2);
}

if (budget != 0) {
    document.getElementById("controlloPunteggi").style.display="block"
    document.getElementById("controlloPunteggi").innerHTML = "Budget "+budget;
}

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

let ferita = 12 + modMigliorato[2] + (7 + modMigliorato[2]) * livello;
let feritaAttuali = ferita;

feritaAttuali = ferita - danni;

document.getElementById("pFerita").innerHTML = ferita;
document.getElementById("pFeritaAttuali").innerHTML = feritaAttuali;

// Classe armatura
let ca = 10 + modMigliorato[0];

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
var bonus = [0,0,0,0,0,0,2,2,0,0,0,0,2,0,2,0,0,0];

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
document.getElementById("capacita1").innerHTML = "azione bonus ira";
document.getElementById("capacita2").innerHTML = "falsa identità";
document.getElementById("capacita3").innerHTML = "barare ai giochi d'azzardo";
document.getElementById("capacita4").innerHTML = "comunic. telepatica col drago";
document.getElementById("capacita5").innerHTML = "attacco irruento";
document.getElementById("capacita6").innerHTML = "percezione del pericolo";
document.getElementById("capacita7").innerHTML = "cammino primordiale del berserker";
document.getElementById("capacita8").innerHTML = "attacco extra";

// Linguaggi
var lingua = ["comune", "orchesco"]

document.getElementById("lingua1").innerHTML = lingua[0];
document.getElementById("lingua2").innerHTML = lingua[1];

// Equipaggiamento
document.getElementById("equip1").innerHTML = "...";

// Crediti
var mo = 32;
document.getElementById("mo").innerHTML = mo;

// Punti esperienza
var xp = 0;

document.getElementById("xp").innerHTML = xp;

var arma1 = ["ascia bipenne", 5, 5, 1+" d"+12, "contatto", "tagl.", 1, "-"]
var arma2 = ["ascia", 5, 5, 1+" d"+6, "contatto", "tagl.", 2, "-"]
var arma3 = ["balestra", 5, 5, 1+" d"+12, 96+" m", "perf.", 1, 20]
var arma4 = ["arco", 5, 5, 1+" d"+8, 96+" m", "perf.", 2, 20]
var arma5 = ["martello", 5, 5, 1+" d"+8+" + "+3, "contatto", "fuoco", 1, "-"]
var arma6 = ["giavellotto", 5, 5, 1+" d"+6, 18+" m", "perf.", 4, "-"]

document.getElementById("arma1").innerHTML = arma1[0];
document.getElementById("arma1Tc").innerHTML = arma1[1];
document.getElementById("arma1BDanno").innerHTML = arma1[2];
document.getElementById("arma1Danno").innerHTML = arma1[3];
document.getElementById("arma1Gitt").innerHTML = arma1[4];
document.getElementById("arma1Tipo").innerHTML = arma1[5];
document.getElementById("arma1Quant").innerHTML = arma1[6];
document.getElementById("arma1Muniz").innerHTML = arma1[7];

document.getElementById("arma2").innerHTML = arma2[0];
document.getElementById("arma2Tc").innerHTML = arma2[1];
document.getElementById("arma2BDanno").innerHTML = arma2[2];
document.getElementById("arma2Danno").innerHTML = arma2[3];
document.getElementById("arma2Gitt").innerHTML = arma2[4];
document.getElementById("arma2Tipo").innerHTML = arma2[5];
document.getElementById("arma2Quant").innerHTML = arma2[6];
document.getElementById("arma2Muniz").innerHTML = arma2[7];

document.getElementById("arma3").innerHTML = arma3[0];
document.getElementById("arma3Tc").innerHTML = arma3[1];
document.getElementById("arma3BDanno").innerHTML = arma3[2];
document.getElementById("arma3Danno").innerHTML = arma3[3];
document.getElementById("arma3Gitt").innerHTML = arma3[4];
document.getElementById("arma3Tipo").innerHTML = arma3[5];
document.getElementById("arma3Quant").innerHTML = arma3[6];
document.getElementById("arma3Muniz").innerHTML = arma3[7];

document.getElementById("arma4").innerHTML = arma4[0];
document.getElementById("arma4Tc").innerHTML = arma4[1];
document.getElementById("arma4BDanno").innerHTML = arma4[2];
document.getElementById("arma4Danno").innerHTML = arma4[3];
document.getElementById("arma4Gitt").innerHTML = arma4[4];
document.getElementById("arma4Tipo").innerHTML = arma4[5];
document.getElementById("arma4Quant").innerHTML = arma4[6];
document.getElementById("arma4Muniz").innerHTML = arma4[7];

document.getElementById("arma5").innerHTML = arma5[0];
document.getElementById("arma5Tc").innerHTML = arma5[1];
document.getElementById("arma5BDanno").innerHTML = arma5[2];
document.getElementById("arma5Danno").innerHTML = arma5[3];
document.getElementById("arma5Gitt").innerHTML = arma5[4];
document.getElementById("arma5Tipo").innerHTML = arma5[5];
document.getElementById("arma5Quant").innerHTML = arma5[6];
document.getElementById("arma5Muniz").innerHTML = arma5[7];

document.getElementById("arma6").innerHTML = arma6[0];
document.getElementById("arma6Tc").innerHTML = arma6[1];
document.getElementById("arma6BDanno").innerHTML = arma6[2];
document.getElementById("arma6Danno").innerHTML = arma6[3];
document.getElementById("arma6Gitt").innerHTML = arma6[4];
document.getElementById("arma6Tipo").innerHTML = arma6[5];
document.getElementById("arma6Quant").innerHTML = arma6[6];
document.getElementById("arma6Muniz").innerHTML = arma6[7];