function validarForm() {
    /*
    var nome = enviarForm.nome.value;
    var email = enviarForm.email.value;
    var data = enviarForm.data.value;
    var celular = enviarForm.celular.value;
*/

//* Função de validação do nome, data de nascimento, email e celular*//
if (nome == "") {
    alert('Preencha seu nome!');
    enviarForm.nome.focus();
    return false;
} else if (nome.length < 5) {
    alert('Digite o seu nome completo aqui!');
    enviarForm.nome.focus();
    return false;
} else if (data == "") {
    alert('Preencha a sua data de nascimento!');
    enviarForm.data.focus();
    return false;
} else if (email == "") {
    alert('Preencha o seu email!');
    enviarForm.email.focus();
    return false;
} else if (email.indexOf('@') == -1 || email.indexOf('.') == -1) {
    alert('Digite o seu email válido!');
    enviarForm.email.focus();
    return false;
} else if (celular == "") {
    alert('Preencha o seu número de celular.');
    enviarForm.celular.focus();
    return false;
} else {
    alert('Formulário enviado com sucesso!');
    return true;
}
}

function mascaraData(campoData) {
    var data = campoData.value;
    var key = event.which || event.keyCode || event.charCode;

    if(data.length == 2 && key !=8) {
        data = data + '/';
        document.forms[0].data.value = data;
        return true;
    }
    if(data.length == 5 && key !=8) {
        data = data + '/';
        document.forms[0].data.value = data;
        return true;
    }
}

function mascaraCelular(campoCelular) {
    var celular = campoCelular.value;
    var key = event.which || event.keyCode || event.charCode;

    if(celular.length == 0 && key !=8) {
        celular = celular + '(';
        document.forms[0].celular.value = celular;
        return true;
    }

    if(celular.length == 3 && key !=8) {
        celular = celular + ')';
        document.forms[0].celular.value = celular;
        return true;
    }

    if(celular.length == 10 && key !=8) {
        celular = celular + '-';
        document.forms[0].celular.value = celular;
        return true;
    }
}

function numerico(evt) {
    var evento = evt || window.event;
    var key = evento.keyCode || evento.which;

    key = String.fromCharCode(key);
    var regex = /[0-9]|\./;

    if(!regex.test(key)){
        evento.returnValue = false;
        if(evento.preventDefault) evento.preventDefaultI();
    }
}


//* Função de validação CPF *//

function _cpf(cpf) {
    cpf = cpf.replace(/[^\d]+/g,'');

    if (cpf == '') return false;
    if (cpf.length !=11 ||
        cpf == "00000000000" ||
        cpf == "11111111111" ||
        cpf == "22222222222" ||
        cpf == "33333333333" ||
        cpf == "44444444444" ||
        cpf == "55555555555" ||
        cpf == "66666666666" ||
        cpf == "77777777777" ||
        cpf == "88888888888" ||
        cpf == "99999999999")

        return false;

        add = 0;
        for(i = 0; i < 9; i++)
        add += parseInt(cpf.charAt(i)) * (10 - i);
        rev = 11 - (add % 11);
        if(rev == 10 || rev == 11)
        rev = 0;
        if(rev != parseInt(cpf.charAt(9)))
        return false;
        add = 0;
        for (i = 0; i < 10; i++)
        add +=parseInt(cpf.charAt(i)) * (11 - i);
        rev = 11 - (add % 11);
        if(rev == 10 || rev == 11)
        rev = 0;
        if(rev != parseInt(cpf.charAt(10)))
        return false;
        return true;
}

// * Aqui apresenta que não foi valido o CPF, alerta a mensagem, em seguida e limpa o valor * //
function validarCPF(cpf){
    if( !_cpf(cpf.value)){
        alert("CPF inválido!");
        cpf.value = "";
    }
}

// * Botão de Cadastrar, recebe a mensagem diz que foi cadastrado tudo ok e mostra a página do site Cadastrado com sucesso * //
function validarForm() {
    location.href="envio.html"
    var nome = document.getElementById("nome");

    if (nome.value != "") {
        alert(nome.value + ',' + ' cadastrado!');
    }
}


// * Envio para Webhook.site * //
const cadastro = document.getElementById('enviarForm');

enviarForm.addEventListener('submit', function(e){
    e.preventDefault()
    let nome = document.getElementById('nome').value;
    let data = document.getElementById('data').value;
    let cpf = document.getElementById('cpf').value;
    let rg = document.getElementById('rg').value;
    let sexo = document.getElementById('sexo').value;
    let endereco = document.getElementById('endereco').value;
    let numero = document.getElementById('numero').value;
    let bairro = document.getElementById('bairro').value;
    let cidade = document.getElementById('cidade').value;
    let estado = document.getElementById('estado').value;
    let cep = document.getElementById('cep').value;
    let telefonefixo = document.getElementById('telefonefixo').value;
    let telefonecelular = document.getElementById('telefonecelular').value;
    
fetch('https://webhook.site/d4b76146-3475-4f2a-9209-425dbbc2c984', {
    method: 'POST',
    body: JSON.stringify({
        nome: nome,
        cpf: cpf,
        rg: rg,
        sexo: sexo,
        endereco: endereco,
        numero: numero,
        bairro: bairro,
        cidade: cidade,
        estado: estado,
        cep: cep,
        telefonefixo: telefonefixo,
        telefonecelular: telefonecelular,
})
    }).then( response => {
        if (response.status === 200) {
            alert('Cadastrado com sucesso');
        } else {
            alert("ERROR");
        }
    })
})