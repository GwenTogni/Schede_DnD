// Personaggio
var classe = "tecnomante";
var razza = "androide";
var livello = 9;
var taglia = "media";
var velocita = 9;
var allineamento = "N";

document.getElementById("classe").innerHTML = classe;
document.getElementById("razza").innerHTML = razza;
document.getElementById("livello").innerHTML = livello;
document.getElementById("taglia").innerHTML = taglia;
document.getElementById("velocita").innerHTML = velocita + "m";
document.getElementById("allineamento").innerHTML = allineamento;

// Punteggi classe
// const BONUS_STAMINA = 5 + modMigliorato[2];
// const BONUS_FERITA = 5;
// const GRADI_ABILITA = 4 + modMigliorato[3];

var bab = 0;
var modTempra = 0;
var modRiflessi = 0;
var modVolonta = 2;

for (var i=0; i<livello; i++) {
    if (i == 2) {
        bab++;
        modVolonta++;
    } else if (i == 3) {
        bab++;
        modTempra++;
        modRiflessi++;
    }else if (i == 4) {
        bab++;
        modVolonta++;
    } else if (i == 6) {
        bab++;
        modTempra++;
        modRiflessi++;
        modVolonta++;
    } else if (i == 7) {
        bab++;
    } else if (i == 8) {
        bab++;
        modVolonta++;
    } else if (i == 9) {
        modTempra++;
        modRiflessi++;
    } else if (i == 10) {
        bab++;
        modVolonta++;
    } else if (i == 11) {
        bab++;
    } else if (i == 12) {
        bab++;
        modTempra++;
        modRiflessi++;
        modVolonta++;
    } else if (i == 14) {
        bab++;
        modVolonta++;
    } else if (i == 15) {
        bab++;
        modTempra++;
        modRiflessi++;
    } else if (i == 16) {
        bab++;
        modVolonta++;
    } else if (i == 18) {
        bab++;
        modTempra++;
        modRiflessi++;
        modVolonta++
    } else if (i == 19) {
        bab++;
    } else if (i == 20) {
        bab++;
        modVolonta++;
    }
}

// Punteggi caratteristica
var budget = 27;
for (var i=livello; i>0; i-=5) {
        budget += 4;
}

var forza = 14;
var destrezza = 17;
var costituzione = 14;
var intelligenza = 14;
var saggezza = 9;
var carisma = 8;

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

let totBonusIniz = modVariIniz + modMigliorato[1];
let iniziativa = totBonusIniz + d20;

document.getElementById("totBonusIniz").innerHTML = totBonusIniz;
document.getElementById("d20").innerHTML = d20;
document.getElementById("iniziativa").innerHTML = iniziativa;

// Salute e risolutezza
var danni = 0;

let ferita = 5 * livello;
let risolutezza = Math.trunc(livello / 2 + modMigliorato[3]);
let stamina = (5 + modMigliorato[2]) * livello;

let risolutezzaAttuali = risolutezza;
let feritaAttuali = ferita;
let staminaAttuali = stamina;

if (danni <= stamina) {
    staminaAttuali = stamina - danni;
} else {
    staminaAttuali = 0;
    feritaAttuali = ferita - (danni - stamina);
}

document.getElementById("pStamina").innerHTML = stamina;
document.getElementById("pFerita").innerHTML = ferita;
document.getElementById("pRisolutezza").innerHTML = risolutezza;
document.getElementById("pStaminaAttuali").innerHTML = staminaAttuali;
document.getElementById("pFeritaAttuali").innerHTML = feritaAttuali;
document.getElementById("pRisolutezzaAttuali").innerHTML = risolutezzaAttuali;

// Classe armatura
var bonusEnergia = 0;
var bonusCinetica = 1;

let cae = 10 + bonusEnergia + modMigliorato[1];
let cac = 10 + bonusCinetica + modMigliorato[1];
let ca = 8 + cac;

document.getElementById("cae").innerHTML = cae;
document.getElementById("cac").innerHTML = cac;
document.getElementById("ca").innerHTML = ca;

// Tiri salvezza
var tsBaseTempra = modTempra;
var tsBaseRiflessi = modRiflessi;
var tsBaseVolonta = modVolonta;

let tempra = tsBaseTempra + modTempra + modMigliorato[2];
let riflessi = tsBaseRiflessi + modRiflessi + modMigliorato[1];
let volonta = tsBaseVolonta + modVolonta + modMigliorato[4];

document.getElementById("tempra").innerHTML = tempra;
document.getElementById("riflessi").innerHTML = riflessi;
document.getElementById("volonta").innerHTML = volonta;

// Bonus attacco
let baMischia = bab + modMigliorato[0];
let baDist = bab + modMigliorato[1];
let baLancio = bab + modMigliorato[0];

document.getElementById("baMischia").innerHTML = baMischia;
document.getElementById("baDist").innerHTML = baDist;
document.getElementById("baLancio").innerHTML = baLancio;

// Abilità
var abilita = [acrobazia, atletica, camuffare, computer, cultura, diplomazia, furtivita, ingegneria, intimidire, intuizione, medicina, misticismo, percezione, pilotare, professione, raggirare, rapiditaDiMano, scienzaBiologica, scienzaFisica, sopravvivenza];
const MOD = [1,0,5,3,3,5,1,3,5,4,3,4,4,1,3,5,1,3,3,4];
var grado = [5,6,7,5,2,3,3,4,2,7,0,0,5,3,4,3,4,0,0,0];
var bonus = [0,0,0,3,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,1];
var mVari = [0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0];
let somma = 0;

for (var i=0; i<abilita.length; i++) {
    abilita[i] = grado[i] + bonus[i] + modMigliorato[MOD[i]] + mVari[i];
    somma += grado[i];
}
gradiAbiilitaTot = (4 + modMigliorato[3]) * livello;

document.getElementById("gradiAbilita").innerHTML = 4 + modMigliorato[3];
document.getElementById("gradiAbilitaTot").innerHTML = gradiAbiilitaTot;

document.getElementById("acrobazia").innerHTML = abilita[0];
document.getElementById("atletica").innerHTML = abilita[1];
document.getElementById("camuffare").innerHTML = abilita[2];
document.getElementById("computer").innerHTML = abilita[3];
document.getElementById("cultura").innerHTML = abilita[4];
document.getElementById("diplomazia").innerHTML = abilita[5];
document.getElementById("furtivita").innerHTML = abilita[6];
document.getElementById("ingegneria").innerHTML = abilita[7];
document.getElementById("intimidire").innerHTML = abilita[8];
document.getElementById("intuizione").innerHTML = abilita[9];
document.getElementById("medicina").innerHTML = abilita[10];
document.getElementById("misticismo").innerHTML = abilita[11];
document.getElementById("percezione").innerHTML = abilita[12];
document.getElementById("pilotare").innerHTML = abilita[13];
document.getElementById("professione").innerHTML = abilita[14];
document.getElementById("raggirare").innerHTML = abilita[15];
document.getElementById("rapiditaDiMano").innerHTML = abilita[16];
document.getElementById("scienzaBiologica").innerHTML = abilita[17];
document.getElementById("scienzaFisica").innerHTML = abilita[18];
document.getElementById("sopravvivenza").innerHTML = abilita[19];

if (somma == gradiAbiilitaTot) {
    document.getElementById("controlloGradi").style.display = "none";
} else {
    if (somma < gradiAbiilitaTot) {
        document.getElementById("controlloGradi").innerHTML = "ERRORE nei calcoli! Aggiungi "+(gradiAbiilitaTot - somma);
    } else {
        document.getElementById("controlloGradi").innerHTML = "ERRORE nei calcoli! Togli "+(somma - gradiAbiilitaTot);
    }
}

// Armi
document.getElementById("arma1").innerHTML = "pistola ad aghi tattica";
document.getElementById("arma1Liv").innerHTML = 1;
document.getElementById("arma1Danno").innerHTML = "1d4";
document.getElementById("arma1Critico").innerHTML = "iniezione CD + 2";
document.getElementById("arma1Gitt").innerHTML = 12;
document.getElementById("arma1Tipo").innerHTML = "piccola, a mano";
document.getElementById("arma1Uso").innerHTML = "8 dardi / 1";
document.getElementById("arma1Sp").innerHTML = "analogica, iniezione";

document.getElementById("arma2").innerHTML = "shuriken con scanalature";
document.getElementById("arma2Liv").innerHTML = 1;
document.getElementById("arma2Danno").innerHTML = "1d8";
document.getElementById("arma2Critico").innerHTML = "sanguinamento 1d4";
document.getElementById("arma2Gitt").innerHTML = 6;
document.getElementById("arma2Tipo").innerHTML = "speciale, una mano";
document.getElementById("arma2Uso").innerHTML = "-";
document.getElementById("arma2Sp").innerHTML = "lancio, ricarica rapida";

// Capacità
document.getElementById("capacita1").innerHTML = "visione crepuscolare";
document.getElementById("capacita2").innerHTML = "matrice imitativa";
document.getElementById("capacita3").innerHTML = "poliglotta";
document.getElementById("capacita4").innerHTML = "conoscenza specialistica";
document.getElementById("capacita5").innerHTML = "cacciatore rapido";
document.getElementById("capacita6").innerHTML = "cache incantesimi";

// Linguaggi
document.getElementById("lingua1").innerHTML = "galattico";
document.getElementById("lingua2").innerHTML = "terran";
document.getElementById("lingua3").innerHTML = "vesk";
document.getElementById("lingua4").innerHTML = "elfico";
document.getElementById("lingua5").innerHTML = "isoki";
document.getElementById("lingua6").innerHTML = "akiton";

// Equipaggiamento
document.getElementById("equip1").innerHTML = "computer";
document.getElementById("equip2").innerHTML = "microfono registratore";
document.getElementById("equip3").innerHTML = "kit attrezzi";
document.getElementById("equip4").innerHTML = "torcia";

// Crediti
var crediti = 2500;
document.getElementById("crediti").innerHTML = crediti;

// Capacità trasporto
let trasporto = Math.trunc(modMigliorato[0] / 2);

document.getElementById("trasportoNonIng").innerHTML = "< " + trasporto;
document.getElementById("trasportoIng").innerHTML = "> " + trasporto;
document.getElementById("trasportoSov").innerHTML = "> " + modMigliorato[0];

// Punti esperienza
var xp = 0;
var xpLivello = 0;

document.getElementById("xp").innerHTML = xp;
document.getElementById("xpLivello").innerHTML = xpLivello;

// Incantesimi
// Livello 0
var incantesimo01 = ["frastornare", 1+" AZ", 1+" round", 12+" m", 0]
var incantesimo02 = ["individuazione del magico", 1+" min", 1+" round", 18+" m", 0]
var incantesimo03 = ["mano psicocinetica", 1+" AZ", 1+" round", 12+" m", 0]
var incantesimo04 = ["messaggio telepatico", 1+" AZ", 10+" min", 30 + 3*livello +" m", 1+"d"+4]
var incantesimo05 = ["riparare", 10+" min", "istantaneo", 3+" m", 0]
var incantesimo06 = ["raggio di energia", 1+" AZ", "istantaneo", 12+" m", 0]

// Livello 1
var incantesimo11 = ["camuffare se stesso", 1+" AZ", 10+" min", 0, 0]
var incantesimo12 = ["controllo a distanza", 1+" AZ", 1+" round", 18+" m", 0]
var incantesimo13 = ["conoscere le coordinate", 1+" AZ", "istantaneo", "-", 0]
var incantesimo14 = ["ondata elettrica", 1+" AZ", "istantaneo", "creatura", 4+"d"+6]
var incantesimo15 = ["identificare", 1+" AZ", 1+" round", 1.5+" m", 0]

// Livello 2
var incantesimo21 = ["bomba logica", 1+" AZ", 1*livello+" round", "contatto", 6+"d"+6]
var incantesimo22 = ["invisibilità", 1+" AZ", 1+" min", "-", 0]
var incantesimo23 = ["sigillo di sicurezza", 1+" AZ", 24+" h", 9+" m2", 0]
var incantesimo24 = ["rete laser", 1+" AZ", 1*livello+" min", 30 + 3*livello+" m", 1+"d"+6+" + "+1]

// Livello 3
var incantesimo31 = ["orientarsi nella navigazione", 1+" round", 1*livello+" h", 7.5 + 1.5 * Math.trunc(livello/2) +" m", "+ "+10+" pilotare"]
var incantesimo32 = ["distorsione", 1+" AZ", 1*livello+" round", "contatto", "+ "+50+"% probabilità di schivare"]
var incantesimo33 = ["ondata ad arco", 1+" AZ", "istantaneo", 36+" m", 10+" d"+6]

// Livello 0
document.getElementById("incantesimo01").innerHTML = incantesimo01[0];
document.getElementById("inc01Tempo").innerHTML = incantesimo01[1];
document.getElementById("inc01Durata").innerHTML = incantesimo01[2];
document.getElementById("inc01Gitt").innerHTML = incantesimo01[3];
document.getElementById("inc01Danno").innerHTML = incantesimo01[4];

document.getElementById("incantesimo02").innerHTML = incantesimo02[0];
document.getElementById("inc02Tempo").innerHTML = incantesimo02[1];
document.getElementById("inc02Durata").innerHTML = incantesimo02[2];
document.getElementById("inc02Gitt").innerHTML = incantesimo02[3];
document.getElementById("inc02Danno").innerHTML = incantesimo02[4];

document.getElementById("incantesimo03").innerHTML = incantesimo03[0];
document.getElementById("inc03Tempo").innerHTML = incantesimo03[1];
document.getElementById("inc03Durata").innerHTML = incantesimo03[2];
document.getElementById("inc03Gitt").innerHTML = incantesimo03[3];
document.getElementById("inc03Danno").innerHTML = incantesimo03[4];

document.getElementById("incantesimo04").innerHTML = incantesimo04[0];
document.getElementById("inc04Tempo").innerHTML = incantesimo04[1];
document.getElementById("inc04Durata").innerHTML = incantesimo04[2];
document.getElementById("inc04Gitt").innerHTML = incantesimo04[3];
document.getElementById("inc04Danno").innerHTML = incantesimo04[4];

document.getElementById("incantesimo05").innerHTML = incantesimo05[0];
document.getElementById("inc05Tempo").innerHTML = incantesimo05[1];
document.getElementById("inc05Durata").innerHTML = incantesimo05[2];
document.getElementById("inc05Gitt").innerHTML = incantesimo05[3];
document.getElementById("inc05Danno").innerHTML = incantesimo05[4];

document.getElementById("incantesimo06").innerHTML = incantesimo06[0];
document.getElementById("inc06Tempo").innerHTML = incantesimo06[1];
document.getElementById("inc06Durata").innerHTML = incantesimo06[2];
document.getElementById("inc06Gitt").innerHTML = incantesimo06[3];
document.getElementById("inc06Danno").innerHTML = incantesimo06[4];

// Livello 1
document.getElementById("incantesimo11").innerHTML = incantesimo11[0];
document.getElementById("inc11Tempo").innerHTML = incantesimo11[1];
document.getElementById("inc11Durata").innerHTML = incantesimo11[2];
document.getElementById("inc11Gitt").innerHTML = incantesimo11[3];
document.getElementById("inc11Danno").innerHTML = incantesimo11[4];

document.getElementById("incantesimo12").innerHTML = incantesimo12[0];
document.getElementById("inc12Tempo").innerHTML = incantesimo12[1];
document.getElementById("inc12Durata").innerHTML = incantesimo12[2];
document.getElementById("inc12Gitt").innerHTML = incantesimo12[3];
document.getElementById("inc12Danno").innerHTML = incantesimo12[4];

document.getElementById("incantesimo13").innerHTML = incantesimo13[0];
document.getElementById("inc13Tempo").innerHTML = incantesimo13[1];
document.getElementById("inc13Durata").innerHTML = incantesimo13[2];
document.getElementById("inc13Gitt").innerHTML = incantesimo13[3];
document.getElementById("inc13Danno").innerHTML = incantesimo13[4];

document.getElementById("incantesimo14").innerHTML = incantesimo14[0];
document.getElementById("inc14Tempo").innerHTML = incantesimo14[1];
document.getElementById("inc14Durata").innerHTML = incantesimo14[2];
document.getElementById("inc14Gitt").innerHTML = incantesimo14[3];
document.getElementById("inc14Danno").innerHTML = incantesimo14[4];

document.getElementById("incantesimo15").innerHTML = incantesimo15[0];
document.getElementById("inc15Tempo").innerHTML = incantesimo15[1];
document.getElementById("inc15Durata").innerHTML = incantesimo15[2];
document.getElementById("inc15Gitt").innerHTML = incantesimo15[3];
document.getElementById("inc15Danno").innerHTML = incantesimo15[4];

// Livello 2
document.getElementById("incantesimo21").innerHTML = incantesimo21[0];
document.getElementById("inc21Tempo").innerHTML = incantesimo21[1];
document.getElementById("inc21Durata").innerHTML = incantesimo21[2];
document.getElementById("inc21Gitt").innerHTML = incantesimo21[3];
document.getElementById("inc21Danno").innerHTML = incantesimo21[4];

document.getElementById("incantesimo22").innerHTML = incantesimo22[0];
document.getElementById("inc22Tempo").innerHTML = incantesimo22[1];
document.getElementById("inc22Durata").innerHTML = incantesimo22[2];
document.getElementById("inc22Gitt").innerHTML = incantesimo22[3];
document.getElementById("inc22Danno").innerHTML = incantesimo22[4];

document.getElementById("incantesimo23").innerHTML = incantesimo23[0];
document.getElementById("inc23Tempo").innerHTML = incantesimo23[1];
document.getElementById("inc23Durata").innerHTML = incantesimo23[2];
document.getElementById("inc23Gitt").innerHTML = incantesimo23[3];
document.getElementById("inc23Danno").innerHTML = incantesimo23[4];

document.getElementById("incantesimo24").innerHTML = incantesimo24[0];
document.getElementById("inc24Tempo").innerHTML = incantesimo24[1];
document.getElementById("inc24Durata").innerHTML = incantesimo24[2];
document.getElementById("inc24Gitt").innerHTML = incantesimo24[3];
document.getElementById("inc24Danno").innerHTML = incantesimo24[4];

// Livello 3
document.getElementById("incantesimo31").innerHTML = incantesimo31[0];
document.getElementById("inc31Tempo").innerHTML = incantesimo31[1];
document.getElementById("inc31Durata").innerHTML = incantesimo31[2];
document.getElementById("inc31Gitt").innerHTML = incantesimo31[3];
document.getElementById("inc31Danno").innerHTML = incantesimo31[4];

document.getElementById("incantesimo32").innerHTML = incantesimo32[0];
document.getElementById("inc32Tempo").innerHTML = incantesimo32[1];
document.getElementById("inc32Durata").innerHTML = incantesimo32[2];
document.getElementById("inc32Gitt").innerHTML = incantesimo32[3];
document.getElementById("inc32Danno").innerHTML = incantesimo32[4];

document.getElementById("incantesimo33").innerHTML = incantesimo33[0];
document.getElementById("inc33Tempo").innerHTML = incantesimo33[1];
document.getElementById("inc33Durata").innerHTML = incantesimo33[2];
document.getElementById("inc33Gitt").innerHTML = incantesimo33[3];
document.getElementById("inc33Danno").innerHTML = incantesimo33[4];