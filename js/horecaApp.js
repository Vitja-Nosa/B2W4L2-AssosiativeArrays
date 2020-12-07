const PRIJSFRIS = 2;
const PRIJSBIER = 3;
const PRIJSWIJN = 4;
const PRIJSBITTERBALLEN8 = 5;
const PRIJSBITTERBALLEN16 = 8;

var totaalAantalFris = 0;
var totaalAantalBier = 0;
var totaalAantalWijn = 0;
var totaalBitterballen8 = 0;
var totaalBitterballen16 = 0;

var loopBestelling = true;

while (loopBestelling == true) {
	var bestelling = prompt("Welke bestelling wilt u toevoegen?");

	if (bestelling == "stop") {
		if (totaalAantalFris == 0 && totaalAantalBier == 0 && totaalAantalWijn == 0 && totaalBitterballen8 == 0 && totaalBitterballen16 == 0) {
			alert("U heeft nog niks besteld!")
		}
		else {
			loopBestelling = false;
			geefBon()
		}
	}
	else if (bestelling == "snack") {
		var soortBitterballen = prompt("Hoeveel bitterballen wilt u toevoegen (8 of 16)?");
		if (soortBitterballen == "8") {
			var loopBitterballen8 = true;
			while (loopBitterballen8 == true) {
				var aantalBitterballen8 = prompt("Hoeveel bitterbalschalen van " + soortBitterballen + " stuks wilt u bestellen?");	
				if (isNaN(aantalBitterballen8) || aantalBitterballen8 < 0) {
					alert("U heeft een ongeldige invoer gedaan.");
				}
				else {
					loopBitterballen8 = false;
					totaalBitterballen8 = Number(totaalBitterballen8) + Number(aantalBitterballen8);
				}
			}
		}
		else if (soortBitterballen == "16") {
			var loopBitterballen16 = true;
			while (loopBitterballen16 == true) {
				var aantalBitterballen16 = prompt("Hoeveel bitterbalschalen van " + soortBitterballen + " stuks wilt u bestellen?");
				if (isNaN(aantalBitterballen16) || aantalBitterballen16 < 0) {
					alert("U heeft een ongeldige invoer gedaan.");
				}
				else {
					loopBitterballen16 = false;
					totaalBitterballen16 = Number(totaalBitterballen16) + Number(aantalBitterballen16);
				}
			}
		}
		else {
			alert("U kunt alleen een keuze maken tussen 8 en 16. De snacks zijn niet toegevoegd aan de bestelling.")
		}	
	}
	else if (bestelling == "fris") {
		var loopAantalFris = true;
		while (loopAantalFris == true) {
			var aantalFris = prompt("Hoeveel " + bestelling + " wilt u toevoegen aan uw bestelling.");
			if (isNaN(aantalFris) || aantalFris < 0) {
				alert("U heeft een ongeldige invoer gedaan.");
			}
			else {
				loopAantalFris = false;
				totaalAantalFris = Number(totaalAantalFris) + Number(aantalFris);
			}
		}		
	}
	else if (bestelling == "bier") {
		var loopAantalBier = true;
		while (loopAantalBier == true) {
			var aantalBier = prompt("Hoeveel " + bestelling + " wilt u toevoegen aan uw bestelling.");
			if (isNaN(aantalBier) || aantalBier < 0) {
				alert("U heeft een ongeldige invoer gedaan.");
			}
			else {
				loopAantalBier = false;
				totaalAantalBier = Number(totaalAantalBier) + Number(aantalBier);
			}
		}
	}
	else if (bestelling == "wijn") {
		var loopAantalWijn = true;
		while (loopAantalWijn == true) {
			var aantalWijn = prompt("Hoeveel " + bestelling + " wilt u toevoegen aan uw bestelling.");
			if (isNaN(aantalWijn) || aantalWijn < 0) {
				alert("U heeft een ongeldige invoer gedaan.");
			}
			else {
				loopAantalWijn = false;
				totaalAantalWijn = Number(totaalAantalWijn) + Number(aantalWijn);
			}
		}
	}
	else {
		alert("U heeft een ongeldige invoer gedaan. Uw bestelling kan niet worden toegevoegd.");
	}
}
function geefBon() {
	var rekeningFris = PRIJSFRIS * totaalAantalFris;
	var rekeningBier = PRIJSBIER * totaalAantalBier;
	var rekeningWijn = PRIJSWIJN * totaalAantalWijn;
	var rekeningBitterballen8 = totaalBitterballen8 * PRIJSBITTERBALLEN8;
	var rekeningBitterballen16 = totaalBitterballen16 * PRIJSBITTERBALLEN16;
	
	var rekeningTotaal = Number(rekeningFris) + Number(rekeningBier) + Number(rekeningWijn) + Number(rekeningBitterballen8) + Number(rekeningBitterballen16);
	
	if (totaalAantalFris != 0) {
		document.write(totaalAantalFris + "x Fris drankje(s) - \u20AC" + rekeningFris + ",-" + "<br>");
	} else {}
	if (totaalAantalBier != 0) {
		document.write(totaalAantalBier + "x Biertje(s) - \u20AC" + rekeningBier + ",-" + "<br>");
	} else {}
	if (totaalAantalWijn != 0) {
		document.write(totaalAantalWijn + "x Glas/glazen wijn - \u20AC" + rekeningWijn + ",-" + "<br>");
	} else {}
	if (totaalBitterballen8 != 0) {
		document.write(totaalBitterballen8 + "x Klein bitterbalschaal - \u20AC" + rekeningBitterballen8 + ",-" + "<br>");
	} else{}
	if (totaalBitterballen16 != 0) {
		document.write(totaalBitterballen16 + "x Groot bitterbalschaal - \u20AC" + rekeningBitterballen16 + ",-" + "<br>");
	} else{}

	
	document.write("<br>" + "<hr>" + "<br>" +"Totaal: \u20AC" + rekeningTotaal + ",-");
}
