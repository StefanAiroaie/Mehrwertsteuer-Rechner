/*

In diesem Projekt erstellst du eine Mehrwertsteuer-Rechner-App.
In Deutschland gibt es zwei Mehrwertsteuersätze: 19 % und 7 %.
Mit dieser App kannst du Netto zu Brutto oder Brutto zu Netto berechnen.

Achtet darauf, wenn du auf einen der Radio-Buttons klickst (Netto zu Brutto || Brutto zu Netto), dass sich der Text in den Feldern anpasst. Schaue dir beide Vorschaubilder genau an, um die Änderungen zu erkennen.

*/

const vat = () => {
    // alle notwendige variable deklariert
    let nettoBrutto = document.getElementById("nettoBrutto").checked
    let bruttoNetto = document.getElementById("bruttoNetto").checked
    let vat19 = document.getElementById("vat19").checked
    let vat7 = document.getElementById("vat7").checked
    let vatValue = document.getElementById("vatValue")
    let totalValueOrNettoTitle = document.getElementById("totalValueOrNettoTitle")
    let totalValueOrNetto = document.getElementById("totalValueOrNetto")
    let inputValue = document.getElementById("inputValue").value
    // text to number und , auf . coregieren

    if (inputValue.includes(",")) {
        let newInputValue = inputValue.replaceAll(",", ".")
        Number(newInputValue) = inputValue
        console.log(inputValue);
    }
    else
        Number(inputValue)
    console.log(inputValue);

    // // switch case for auswahlen die radio butoons
    // switch (inputValue !== 0) {
    //     // wenn netto to bruto und 19%
    //     case nettoBrutto == true, vat19 == true:
    //         vatValue.innerHTML = (inputValue * 0.19).toFixed(2) + " €"
    //         totalValueOrNetto.innerHTML = (inputValue * 1.19).toFixed(3) + " €"
    //         break
    //     // wenn netto to bruto und 7%
    //     case nettoBrutto == true, vat7 == true:
    //         vatValue.innerHTML = Math.round(inputValue * 0.07).toFixed(2) + " €"
    //         totalValueOrNetto.innerHTML = Math.round(inputValue * 1.07).to + " €"
    //         break

    //     default:
    //         totalValueOrNettoTitle.innerHTML = "hei nu merge"
    //         break
    // }
}



