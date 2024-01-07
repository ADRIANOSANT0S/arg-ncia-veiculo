$(document).ready(function() {
    //carrosel img
    $('#carousel-imgs').slick({
        autoplay: true,
    })
    
    // Menu hamburguer
    let isMenuOpen = false
    $('.menu-hamburguer').click(function(e) {
        e.stopPropagation()

        if (isMenuOpen) {
            $('nav').slideUp()
            isMenuOpen = false
        } else {
            $('nav').slideDown();
            isMenuOpen = true
        }
        // Se o menu estiver aberto ao click em qual quer parte do body ele via ser fechado
        $('body').click(function() {
            if(isMenuOpen) {
                $('nav').slideUp();
                isMenuOpen = false
            }
        })
    })

    // Aplica mascar no campo telefone
    $('#tel').mask('(00) 0000-0000')

    // Validar formulario
    $('form').validate({
        rules: {
            name: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            tel : {
                required: true
            },
            vehicle: {
                required: true
            },
            massage: {
                required: true
            }
        },
        //inseres menssagem personalizadas aos campos especificados.
        messages: {
            name: 'Por favor, isira o seu nome'
        },

        submitHandler : function(form) {
            console.log(form)
        },
        invalidHandler: function(event, validador) {
            let camposInvalid = validador.numberOfInvalids()
            if (camposInvalid) {
                alert(`Existe ${camposInvalid} campos incorretos`)
            }
        }
    })

    // Adiciona efeito de rolagem a página
    $('.list-vehicle button').click(function() {
        let destino = $('#contact')
        
        let autoVal = $(this).parent().find('h3').text()
        $('#vehicle').val(autoVal)

        $('html').animate({
            scrollTop: destino.offset().top
        }, 1000)
    })
})