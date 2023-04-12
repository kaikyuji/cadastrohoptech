
let cnpjInput = document.querySelector('#ipt_cnpj')
let cepInput = document.querySelector(`#ipt_cep`)
let teleInput = document.querySelector(`#ipt_telefone`)
// FORMATACAO CNPJ
cnpjInput.addEventListener('keypress', function addingSignalsCNPJ(key){
    if(cnpjInput.value.length == 2 || cnpjInput.value.length == 6 ){
        cnpjInput.value += '.'
    }else if(cnpjInput.value.length == 10){
        cnpjInput.value += `/`
    }else if(cnpjInput.value.length == 15){
        cnpjInput.value += `-`
    }
})

cnpjInput.addEventListener(`keydown`, function removingSignalsCNPJ(key){
    if(key.code == `Backspace`){
        if(cnpjInput.value.length == 4){
            cnpjInput.value = cnpjInput.value.slice(0, 3)
        }else if(cnpjInput.value.length == 8){
            cnpjInput.value = cnpjInput.value.slice(0,7)
        }else if(cnpjInput.value.length == 12){
            cnpjInput.value = cnpjInput.value.slice(0, 11)
        }else if(cnpjInput.value.length == 17){
            cnpjInput.value = cnpjInput.value.slice(0, 16)
        }
    }
})

// FORMATACAO CEP
cepInput.addEventListener(`keypress`, function addingSignalsCEP(){
    if(cepInput.value.length == 5){
        cepInput.value += `-`
    }
})

cepInput.addEventListener(`keydown`, function removingSignalsCEP(key){
    if(key.code == `Backspace`){
        if(cepInput.value.length == 7){
            cepInput.value = cepInput.value.slice(0, 6)
        }
    }
})

// FORMATACAO CEL
teleInput.addEventListener(`keypress`, function addingSignalsTel(){
    if(teleInput.value.length == 0){
        teleInput.value += `(`
    }else if(teleInput.value.length == 3){
        teleInput.value += `)`
    }else if(teleInput.value.length == 8){
        teleInput.value += `-`
    }
})

