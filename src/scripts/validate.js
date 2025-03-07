$(document).ready(function(){
    $('#telefone').mask('(00) 00000-0000')
    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            }
        }
    })
})
//----- FORMS VALIDATION -----//
