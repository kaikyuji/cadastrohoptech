let credentials = 
{nomeEmpresa: '',
telFixo: '', // 8 digitos
cnpj: '', // 14 digitos
email: '',
confirmEmail: '',
cep: '', // 8 digitos
estado: '',
cidade: '',
bairro: '',
rua: '',
complemento: ''
}

let errors = document.querySelector('#listaDeErros')
let allInputs = document.querySelectorAll('.iptLogin')

function finalizarCadastro() {
    let formatedValues = ``
    // this loop give us more productivity and less typing, and also give the keys their respective values
    for(let counter = 0; counter < allInputs.length; counter++){
        let keyName = Object.keys(credentials)[counter] // geting KEY NAME from credentials (dictionary)
        let inputValues = allInputs[counter].value // getting VALUES from each INPUT
        for(let chars of inputValues){
            if(chars != '(' && chars != ')' && chars != '-' && chars != '.' && chars != '/'){
                formatedValues += chars 
            }
            credentials[keyName] = formatedValues // INSERTING VALUES IN EACH DICTIONARY`S KEY
        }
    }

    if(!(credentials.telFixo == Number(credentials.telFixo))){
        errors.innerHTML += '<li>Not a Number!</li>' 
    }else{
        if(!(credentials.telFixo.length == 10)){
            errors.innerHTML += '<li>Number of digits are invalid.</li>'
        }else{
            errors.innerHTML += 'oi'
        }
    }

    /*if(credentials[cnpj] == Number(credentials[cnpj]) && credentials[cnpj].length == 14){
        
    }
    if(credentials[cep] == Number(credentials[cep]) && credentials[cep].length == 8){
        
    }*/
}