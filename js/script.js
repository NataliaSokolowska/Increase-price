let input = document.querySelector('input');
let oldPrice = document.querySelector('.new-price span').textContent;

input.oninput = () => {
    let inputValue = input.value;
    let inputLength = inputValue.length;
    let inputLengthPrice = inputLength * 5;

    let oldPriceNumber = parseFloat(oldPrice);
    let newPrice = oldPriceNumber + inputLengthPrice;

    let newShowPrice = document.querySelector('.new-price span');
    newShowPrice.textContent = newPrice.toFixed(2);
}