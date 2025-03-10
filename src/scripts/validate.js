$(document).ready(function(){
    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            presenca:{
                required: true,
            },
            adultos:{
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
