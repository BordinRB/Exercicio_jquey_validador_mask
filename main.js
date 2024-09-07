$(document).ready(function () {
    $('#telefone').mask('(00) 00000-0000');
    $('#cpf').mask('000.000.000-00');
    $('#cep').mask('00000-000');

    $('form').validate({
        rules: {
            nome: {required: true},
            cpf: {required: true},
            email: {required: true, email: true},
            telefone: {required: true},
            endereço: {required: true},
            cep: {required: true},
        },

        messages: {
            nome: "Insira seu nome completo",
            cpf: "Insira seu cpf",
            email: "Insira um email valido",
            telefone: "insira um telefone válido",
            endereço: "Insira seu endereço",
            cep: "Insira seu CEP"
        },
        submitHandler: function (form){
            alert(`Cadastro concluído!`)

            nome.value = "";
            cpf.value = "";
            email.value = "";
            telefone.value = "";
            endereço.value = "";
            cep.value = "";
        },
        invalidHandler: function(evento, validador){
            let camposIncorretos = validador.numberOfInvalids();
            if(camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos ou vazios`);
            }
        }
    });
});