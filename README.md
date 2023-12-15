
# Dynamic VAT calculator 

This JavaScript code powers a dynamic VAT calculator with two radio buttons for switching between gross and net prices. The code listens for changes in the radio buttons and updates the displayed values accordingly. The vat function calculates VAT and total values based on user input, considering different tax rates. The associated HTML elements are targeted using their IDs for efficient interaction.

## Authors

- [@StefanAiroaie](https://www.github.com/StefanAiroaie)


## Features

Based on the provided JavaScript code, it seems that the calculator has the following features:

1. **Dynamic Title Update:**
   - When the "Netto to Brutto" radio button is selected, the title is updated to "Bruttobetrag (Endpreis)".
   - When the "Brutto to Netto" radio button is selected, the title is updated to "Nettobetrag".

2. **VAT Calculation:**
   - The `vat` function calculates VAT and total values based on user input.
   - Different scenarios are considered based on whether the user chooses netto or brutto and the selected VAT rate (19% or 7%).

3. **Event Listeners:**
   - Event listeners are used to trigger actions when the radio buttons ("nettoBrutto" and "bruttoNetto") are changed.

4. **User Input Handling:**
   - User input is obtained from an input element with the ID "inputValue".

5. **Display Update:**
   - The results are displayed in HTML elements with the IDs "vatValue" and "totalValueOrNetto".




## Use

https://stefanairoaie.github.io/Mehrwertsteuer-Rechner/
