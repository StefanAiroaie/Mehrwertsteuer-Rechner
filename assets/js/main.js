
//######### events text andern
document.getElementById("nettoBrutto").addEventListener("change", () => {
    totalValueOrNettoTitle.innerHTML = "Bruttobetrag (Endpreis)"
    inputValueLabel.innerHTML = "Nettobetrag (Preis ohne Mehrwertsteuer) in Euro <span id='star'>*</span>"
})

document.getElementById("bruttoNetto").addEventListener("change", () => {
    console.log("bruttoNetto")
    totalValueOrNettoTitle.innerHTML = "Nettobetrag"
    inputValueLabel.innerHTML = "Bruttobetrag (Preis inklusive Mehrwertsteuer) in Euro <span id='star'>*</span>"
})

//######### on click function
const vat = () => {

    let nettoBrutto = document.getElementById("nettoBrutto").checked
    let vatValue = document.getElementById("vatValue")
    let totalValueOrNetto = document.getElementById("totalValueOrNetto")
    let vat19 = document.getElementById("vat19").checked
    let vat7 = document.getElementById("vat7").checked
    let inputValue = document.getElementById("inputValue").value

    inputValue = Number(inputValue)
    // wenn netto to bruto und 19%
    if (nettoBrutto == true && vat19 == true) {
        vatValue.innerHTML = (inputValue * 0.19).toFixed(2) + " €"
        totalValueOrNetto.innerHTML = (inputValue * 1.19).toFixed(3) + " €"
        console.log("1");
    }
    // wenn netto to bruto und 7%
    else if (nettoBrutto == true && vat7 == true) {
        vatValue.innerHTML = Math.round(inputValue * 0.07).toFixed(2) + " €"
        totalValueOrNetto.innerHTML = Math.round(inputValue * 1.07).toFixed(2) + " €"
        console.log("2");
    }
    // wenn bruto to netto und 19%
    else if (nettoBrutto == false && vat19 == true) {
        vatValue.innerHTML = (inputValue - inputValue / (1 + 19 / 100)).toFixed(2) + " €"
        totalValueOrNetto.innerHTML = (inputValue / (1 + 19 / 100)).toFixed(2) + " €"
        console.log("3");
    }
    // wenn bruto to netto und 7%
    else if (nettoBrutto == false && vat7 == true) {
        vatValue.innerHTML = (inputValue - inputValue / (1 + 7 / 100)).toFixed(2) + " €"
        totalValueOrNetto.innerHTML = (inputValue / (1 + 7 / 100)).toFixed(2) + " €"
        console.log("4");
    }
}



