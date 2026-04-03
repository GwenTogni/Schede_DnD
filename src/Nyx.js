// Personaggio
var nome = "Nyx Lorilla Dublelock Murnig"
var classe = "Ladro Mistificatore Arcano";
var background = "investigatore";
var razza = "gnomo delle montagne";
var livello = 9;
var taglia = "piccola";
var velocita = 10.5;
var allineamento = "LN";

document.getElementById("nome").innerHTML = nome;
document.getElementById("classe").innerHTML = classe;
document.getElementById("razza").innerHTML = razza;
document.getElementById("livello").innerHTML = livello;
document.getElementById("taglia").innerHTML = taglia;
document.getElementById("velocita").innerHTML = velocita + " m";
document.getElementById("allineamento").innerHTML = allineamento;

// Punteggi caratteristica
var budget = 27;
budgetAggiunto = 0;

if (livello >= 4) {
    budgetAggiunto += 2;
} else if (livello >= 8) {
    budgetAggiunto += 4;
} else if (livello >= 10) {
    budgetAggiunto += 6;
} else if (livello >= 12) {
    budgetAggiunto += 8;
} else if (livello >= 16) {
    budgetAggiunto += 9;
} else if (livello >= 19) {
    budgetAggiunto += 10;
}

var forza = 8;
var destrezza = 18;
var costituzione = 10;
var intelligenza = 16;
var saggezza = 12;
var carisma = 14;

let forMigliorata = forza;
let desMigliorata = destrezza;
let cosMigliorata = costituzione;
let intMigliorata = intelligenza + 2;
let sagMigliorata = saggezza;
let carMigliorata = carisma;

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
    budget += budgetAggiunto;
}
for (var i=0; i< pMigliorato.length; i++) {
    modMigliorato[i] = Math.trunc((pMigliorato[i] - 10) / 2);
}

if (budget == 0) {
    document.getElementById("controlloPunteggi").style.display="none"
} else {
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

let ferita = 8 + modMigliorato[2] + (5 + modMigliorato[2]) * livello;
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
var bonus = [3,0,0,0,3,3,3,0,0,3,0,0,3,0,0,0,0,0];

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

// Armi
var arma1 = ["mazza", 7, 3, 1+" d"+8, "contatto", "perf.", 1, "-"]
var arma2 = ["stocco", 7, 3, 1+" d"+8, "contatto", "perf.", 1, "-"]
var arma3 = ["arco corto", 7, 3, 1+" d"+6, 96+" m", "perf.", 1, 20]
var arma4 = ["pugnale", 7, 3, 1+" d"+4, 18+" m", "perf.", 2, "-"]

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

// Privilegi e tratti
var capacita = ["astuzia gnomesca", "lottatore", "maestria", "attacco furtivo", "gergo ladresco", "occhio dell'osservatore", "tiratore scelto", "azione scaltra", "schivata prodigiosa", "elusione", "talento mobilità", "dote affidabile"]

document.getElementById("capacita1").innerHTML = capacita[0];
document.getElementById("capacita2").innerHTML = capacita[1];
document.getElementById("capacita3").innerHTML = capacita[2];
document.getElementById("capacita4").innerHTML = capacita[3];
document.getElementById("capacita5").innerHTML = capacita[4];
document.getElementById("capacita6").innerHTML = capacita[5];
document.getElementById("capacita7").innerHTML = capacita[6];
document.getElementById("capacita8").innerHTML = capacita[7];
document.getElementById("capacita9").innerHTML = capacita[8];
document.getElementById("capacita10").innerHTML = capacita[9];
document.getElementById("capacita11").innerHTML = capacita[10];
document.getElementById("capacita12").innerHTML = capacita[11];

// Linguaggi
var lingua = ["comune", "gnomesco", "sottocomune", "goblin"]

document.getElementById("lingua1").innerHTML = lingua[0];
document.getElementById("lingua2").innerHTML = lingua[1];
document.getElementById("lingua3").innerHTML = lingua[2];
document.getElementById("lingua4").innerHTML = lingua[3];

// Equipaggiamento
document.getElementById("equip1").innerHTML = "...";

// Crediti
var mr = 29;
var mo = 557;
document.getElementById("mr").innerHTML = mo+" MR";
document.getElementById("mo").innerHTML = mo+" MO";

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