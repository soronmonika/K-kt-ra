let adatok=[
	"Sumeg, vasutallomas;Sumeg, buszpalyaudvar;1,208;16;6;n",
	"Sumeg, buszpalyaudvar;Mogyorosi-domb, geologiai bemutatohely;1,512;24;8;n",
	"Mogyorosi-domb, geologiai bemutatohely;Sumegi bazaltbanya vasutallomas;1,576;13;43;n",
	"Sumegi bazaltbanya vasutallomas;Sarvaly erdeszhaz, pecsetelohely;2,101;69;18;i",
	"Sarvaly erdeszhaz, pecsetelohely;Leteres a foldutrol a romos vadaszhaznal;4,250;82;66;n",
	"Leteres a foldutrol a romos vadaszhaznal;Kek rom jelzes kezdete Tatika varahoz;2,686;172;29;n",
	"Kek rom jelzes kezdete Tatika varahoz;Hidegkuti major;1,614;9;135;n",
	"Hidegkuti major;Leteres a Sztupahoz;3,903;153;53;n",
	"Leteres a Sztupahoz;Zalaszanto, romai katolikus templom;2,747;14;148;i",
	"Zalaszanto, romai katolikus templom;Leteres az orszagutrol Rezi fele;2,396;26;51;n",
	"Leteres az orszagutrol Rezi fele;Rezi, leteres a pecsetelohelyhez;3,328;112;13;i",
	"Rezi, leteres a pecsetelohelyhez;Gyongyosi csarda;2,535;31;173;i",
	"Gyongyosi csarda;Egregy, arpad-kori templom;5,239;134;109;n",
	"Egregy, arpad-kori templom;Heviz, leteres az autobuszallomashoz;2,595;20;49;i",
	"Heviz, leteres az autobuszallomashoz;Keszthely, Festetics kastely eszaki kapuja;5,114;58;32;n",
	"Keszthely, Festetics kastely eszaki kapuja;Keszthely, leteres a vasutallomashoz;1,820;3;36;i"
];
//1.feladat
function ObjektumFeltolto(feltoltendoElem){
	let beolvasottAdatok=[];
    for (let i=0; i<feltoltendoElem.length; i++){
     let objektum={};
     let daraboltAdatSor=feltoltendoElem[i].split(";");
     objektum.kezdoPont=daraboltAdatSor[0];
     objektum.vegPont=daraboltAdatSor[1];
     objektum.tavolsag=Number(daraboltAdatSor[2].replace(",","."));
     objektum.emelkedes=Number(daraboltAdatSor[3]);
     objektum.lejtes=Number(daraboltAdatSor[4]);
     objektum.pecsetelohelyE=daraboltAdatSor[5];
     beolvasottAdatok.push(objektum);
     }
     return beolvasottAdatok;
}
let Kektura=ObjektumFeltolto(adatok);
console.log(Kektura);

//2.feladat
function HanyTuraSzakasz(vizsgaltTomb){
	return vizsgaltTomb.length;
}
function HanyTuraSzakaszKiir(SzakaszSzam){
	console.log("A kéktúra összesen ",SzakaszSzam,"szakaszt tartalmaz.");
}
feladat2Eredmeny=HanyTuraSzakasz(adatok);
HanyTuraSzakaszKiir(feladat2Eredmeny);
//3. feladat
function KekturaTeljesHossza(vizsgaltTomb){
	let hossza=0;
    for (i=0; i<vizsgaltTomb.length; i++){
    	hossza+=vizsgaltTomb[i].tavolsag;
    }
    return Math.round(hossza);
}
function KekturaTeljesHosszaKiir(osszesen){
	console.log("A kéktúra teljes hossza: ",osszesen);
}
KekturaTeljesHosszaKiir(KekturaTeljesHossza(Kektura));

//4.feladat
function LegrovidebbTuraSzakasz(vizsgaltTomb){
	let rovidTuraIndex=0;
    for (let i=1; i<vizsgaltTomb.length; i++){
    	if (vizsgaltTomb[i].tavolsag<vizsgaltTomb[rovidTuraIndex].tavolsag){
        	rovidTuraIndex=i;
        }
    }
    return rovidTuraIndex;
}
function LegrovidebbTuraSzakaszKiir(Turaindex){
	console.log("A legrövidebb túraszakasz kezdőpontja:",Kektura[Turaindex].kezdoPont);
    console.log("A legrövidebb túraszakasz végpontja:",Kektura[Turaindex].vegPont);
    console.log("A legrövidebb túraszakasz távolsága:",Kektura[Turaindex].tavolsag);
    console.log("A legrövidebb túraszakasz emelkedése:",Kektura[Turaindex].emelkedes);
    console.log("A legrövidebb túraszakasz lejtés:",Kektura[Turaindex].lestes);
    console.log("A legrövidebb túraszakasz pecsételőhely:",Kektura[Turaindex].pecsetelohelyE);
}
LegrovidebbTuraSzakaszKiir(LegrovidebbTuraSzakasz(Kektura));
