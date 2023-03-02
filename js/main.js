

$(document).ready(function(){

    // adiciona a regra de validação para o nome completo
    $.validator.addMethod("nomeCompleto", function(value, element) {
        // divide o valor do campo em palavras
        var palavras = value.split(" ");
        // verifica se existem pelo menos duas palavras
        return palavras.length >= 2;
    }, "Por favor, insira seu nome completo.");

    $('#telefone').mask('(00)00000-0000')
    $('#cpf').mask('000.000.000-00')
    $('#cep').mask('00000-000')

    $('form').validate({
        rules: {
            nomeCompleto:{
                required: true,
                nomeCompleto: true // usa a nova regra de validação
            },
            email:{
                required: true
            },
            telefone:{
                required: true
            },
            cpf:{
                required: true
            },
            endereco:{
                required: true
            },
            cep:{
                required: true
            },
        },
        messages: {
            nomeCompleto: "por favor, insira o seu nome completo",
            email: "por favor, insira o seu email",
            telefone: "por favor, insira o seu telefone",
            cpf: "por favor, insira o seu cpf",
            endereco: "por favor, insira o seu endereco",
            cep: "por favor, insira o seu cep",
        },
    });
});
