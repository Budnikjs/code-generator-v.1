//33-47(sign), 48-57(digits), 58-64(sign), 
//91-96(sign), 123-126(sign),  
//65-90(ALPHABET), 97-122(Alphabet),

const generate = document.querySelector('.generate');
const genSize = document.querySelector('.genSize');
const setOfCodes = document.querySelector('.setOfCodes');

generate.addEventListener("click", createCode);

const arrDiv = [];
const numberOfCodes = 10;

for (let k = 0; k < numberOfCodes; k++) {
let divCode = document.createElement("div");
divCode.classList = `Code divN${k}`;
arrDiv[k] = divCode;
setOfCodes.appendChild(arrDiv[k]);
}

function createCode() {
    const codeSize = (genSize.value > 0) ? genSize.value : (-genSize.value);

    for (let j = 0; j < numberOfCodes; j++) {    
    const code = [];
        for (let i = 0; i < codeSize; i++) {
            //Случайное целое число от min(33) до max(126)
            let a = (Math.floor(Math.random() * (126 - 33 + 1) + 33));
            code.push(String.fromCharCode(a));                    
        };
    let str = code.join('');
    let divN = document.querySelector(`.divN${j}`);    
    divN.textContent = str;
    console.log(divN.textContent);
    //копирование в буфер кода по клику
    divN.addEventListener("click", function copyCod() {
        if (document.querySelector(".Code").textContent != '') {
            navigator.clipboard.writeText(divN.textContent);
            console.log(divN.textContent);
        }    
    });
    };    
    //console.log('----------------------------------');    
};
