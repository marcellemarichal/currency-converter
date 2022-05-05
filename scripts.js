const button = document.getElementById('convert-button')
const select = document.getElementById('currency-selector')

const dolar = 4.7
const euro = 5.2
const bitcoin = 0.0000048

const convertValues = () => {
    const inputReal = document.getElementById('input-real').value
    const realValueText = document.getElementById('text-real-value')
    const currencyValueText = document.getElementById('text-currency-value')

    realValueText.innerHTML = new Intl.NumberFormat('pt-BR',
    { style: 'currency', currency: 'BRL' }
).format(inputReal);

    if(select.value === 'US$ Dólar americano') {
    currencyValueText.innerHTML = new Intl.NumberFormat('en-US',
        { style: 'currency', currency: 'USD' }
    ).format(inputReal / dolar);}

    if(select.value === '€ Euro') {

    currencyValueText.innerHTML = new Intl.NumberFormat('de-DE',
        { style: 'currency', currency: 'EUR' }
    ).format(inputReal / euro)
    }

    if(select.value === 'Bitcoin') {

        currencyValueText.innerHTML = (inputReal / bitcoin).toFixed(1)
        }

}

changeCurrency = () => {
    const currencyName = document.getElementById('currency-name')
    const currencyImg = document.getElementById('currency-img')

    if (select.value === "US$ Dólar americano"){
        currencyName.innerHTML = "Dólar Americano"
        currencyImg.src = "./assets/dolar.png"
    }


    if (select.value === "€ Euro"){
        currencyName.innerHTML = "Euro"
        currencyImg.src = "./assets/euro.png"
    }

    if (select.value === "Bitcoin"){
        currencyName.innerHTML = "Bitcoin"
        currencyImg.src = "./assets/bitcoin.png"
    }

    convertValues()
}

button.addEventListener('click', convertValues)
select.addEventListener('change', changeCurrency)