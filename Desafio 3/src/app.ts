let inputSum = document.querySelector('#input-sum') as HTMLInputElement;
let btnSum = document.querySelector('.btn-sum') as HTMLButtonElement;
let btnClear = document.querySelector('.btn-clear') as HTMLButtonElement;
let result = document.querySelector('.balance') as HTMLSpanElement;


result.innerHTML = String(0);

const sumBalance = (value: number) => {    
    result.innerHTML = (Number(result.innerHTML) + value).toString();
}

const clearBalance = () => {
    result.innerHTML = '0';
}

const inputSumNotIsEmpty = (input:string) => input.length > 0 ? true : false;

const inputValue = (input:string) => inputSumNotIsEmpty(input) ? Number(input) : 0;

btnSum.addEventListener('click', () => {
    sumBalance(inputValue(inputSum.value))
});

btnClear.addEventListener('click', () => clearBalance())
