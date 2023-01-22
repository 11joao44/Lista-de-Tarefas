$('.button').click(function() {
    $('.container').slideDown()
    $('.iniciar').slideUp()
    $('.header').slideDown()

})

let clearAll = $(".clearAll").click(function(){

    $('.completo .tarefa').remove()
    $('.completo .data').remove()
    $('.clearAll').slideUp()

})

$('#cadastrar').on('click', function(){

    let data = new Date()
    let dia = String(data.getDate()).padStart(2, '0')
    let mes = String(data.getMonth() + 1).padStart(2, '0')
    let ano = data.getFullYear()

    let horas = String(data.getHours()).padStart(2, 0)
    let minutos = String(data.getMinutes()).padStart(2, 0)
    let segundos = String(data.getSeconds()).padStart(2, 0)


    if($(".add").val() != '')

    {

    let tarefa = $("<li class='tarefa'></li>").text($(".add").val())
    let terminado = $(`<span class="data">Tarefa iniciada em [${dia}/${mes}/${ano} ás ${horas}:${minutos}:${segundos}]</i></span>`)

    let del = $("<i class='fas fa-trash-alt'></i>").click(function(){
        let p = $(this).parent()
        p.fadeOut(function(){
            p.remove()
        })

        terminado.fadeOut(function(){
        terminado.remove()
        })

    })

    let check = $("<i class='fas fa-check'></i>").click(function(){

        $('.clearAll').slideDown()

        let p = $(this).parent()
        p.fadeOut(function(){
            $(".completo").append(p)
            
            p.fadeIn()
        })
        terminado.fadeIn(function(){

            $(".completo").append(terminado)

            terminado.fadeIn()
            })
            $(this).remove()

    })

    tarefa.append(del,check)
    $(".naoCompleta").append(tarefa,terminado)
    $(".add").val("")

}
})

$('.add').on("keyup", function(e) {

    let data = new Date()
    let dia = String(data.getDate()).padStart(2, '0')
    let mes = String(data.getMonth() + 1).padStart(2, '0')
    let ano = data.getFullYear()

    let horas = String(data.getHours()).padStart(2, 0)
    let minutos = String(data.getMinutes()).padStart(2, 0)
    let segundos = String(data.getSeconds()).padStart(2, 0)



    if(e.keyCode == 13 && $(".add").val() != '')

    { 
        let tarefa = $("<li class='tarefa'></li>").text($(".add").val())
        let terminado = $(`<span class="data">Tarefa iniciada em [${dia}/${mes}/${ano} ás ${horas}:${minutos}:${segundos}]</i></span>`)

        let del = $("<i class='fas fa-trash-alt'></i>").click(function(){
            let p = $(this).parent()
            p.fadeOut(function(){
                p.remove()
            })

            terminado.fadeOut(function(){
            terminado.remove()
            })

        })

        let check = $("<i class='fas fa-check'></i>").click(function(){

            $('.clearAll').slideDown()

            let p = $(this).parent()
            p.fadeOut(function(){
                $(".completo").append(p)
                
                p.fadeIn()
            })
            terminado.fadeIn(function(){
                $(".completo").append(terminado)

                terminado.fadeIn()
                })
            $(this).remove()

        })

        tarefa.append(del,check)
        $(".naoCompleta").append(tarefa,terminado)
        $(".add").val("")
    }

})



