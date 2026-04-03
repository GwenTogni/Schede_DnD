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

// Linguaggi
var lingua = ["comune", "draconico"]

document.getElementById("lingua1").innerHTML = lingua[0];
document.getElementById("lingua2").innerHTML = lingua[1];

// Equipaggiamento

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

document.getElementById("slot1").innerHTML = slot1;
document.getElementById("slot2").innerHTML = slot2;
document.getElementById("slot3").innerHTML = slot3;

// Livello 0
var incantesimo01 = ["frastornare", 1+" AZ", 1+" round", 12+" m", 0]; contaIncantesimi0++;
var incantesimo02 = ["individuazione del magico", 1+" min", 1+" round", 18+" m", 0]; contaIncantesimi0++;
var incantesimo03 = ["mano psicocinetica", 1+" AZ", 1+" round", 12+" m", 0]; contaIncantesimi0++;
var incantesimo04 = ["messaggio telepatico", 1+" AZ", 10+" min", 30 + 3*livello +" m", 1+" d"+4]; contaIncantesimi0++;
var incantesimo05 = ["riparare", 10+" min", "istantaneo", 3+" m", 0]; contaIncantesimi0++;
var incantesimo06 = ["raggio di energia", 1+" AZ", "istantaneo", 12+" m", 0]; contaIncantesimi0++;

// Livello 1
var incantesimo11 = ["camuffare se stesso", 1+" AZ", 10+" min", 0, 0]; contaIncantesimi1++;
var incantesimo12 = ["controllo a distanza", 1+" AZ", 1+" round", 18+" m", 0]; contaIncantesimi1++;
var incantesimo13 = ["conoscere le coordinate", 1+" AZ", "istantaneo", "-", 0]; contaIncantesimi1++;
var incantesimo14 = ["ondata elettrica", 1+" AZ", "istantaneo", "creatura", 4+" d"+6]; contaIncantesimi1++;
var incantesimo15 = ["identificare", 1+" AZ", 1+" round", 1.5+" m", 0]; contaIncantesimi1++;

// Livello 2
var incantesimo21 = ["bomba logica", 1+" AZ", 1*livello+" round", "contatto", 6+" d"+6]; contaIncantesimi2++;
var incantesimo22 = ["invisibilità", 1+" AZ", 1+" min", "contatto", 0]; contaIncantesimi2++;
var incantesimo23 = ["sigillo di sicurezza", 1+" AZ", 24+" h", 9+" m2", 0]; contaIncantesimi2++;
var incantesimo24 = ["rete laser", 1+" AZ", 1*livello+" min", 30 + 3*livello+" m", 1+" d"+6+" + "+1]; contaIncantesimi2++;

// Livello 3
var incantesimo31 = ["orientarsi nella navigazione", 1+" round", 1*livello+" h", 7.5 + 1.5 * Math.trunc(livello/2) +" m", "+ "+10+" pilotare"]; contaIncantesimi3++;
var incantesimo32 = ["distorsione", 1+" AZ", 1*livello+" round", "contatto", "+ "+50+"% elusione"]; contaIncantesimi3++;
var incantesimo33 = ["ondata ad arco", 1+" AZ", "istantaneo", 36+" m", 10+" d"+6]; contaIncantesimi3++;

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

if (contaIncantesimi0 == numeroIncantesimi0 && contaIncantesimi1 == numeroIncantesimi1 && contaIncantesimi2 == numeroIncantesimi2 && contaIncantesimi3 == numeroIncantesimi3 && contaIncantesimi4 == numeroIncantesimi4 && contaIncantesimi5 == numeroIncantesimi5 && contaIncantesimi6 == numeroIncantesimi6) {
    document.getElementById("controlloIncantesimi").style.display = "none";
} else {
    document.getElementById("controlloIncantesimi").innerHTML = "ERRORE. Numero incantesimi errato! " + numeroIncantesimi0 +" "+ numeroIncantesimi1 +" "+ numeroIncantesimi2 +" "+ numeroIncantesimi3 +" "+ numeroIncantesimi4 +" "+ numeroIncantesimi5 +" "+ numeroIncantesimi6;
}