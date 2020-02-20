
    // select box
    $(".f-1").click(function(){
      $(".f-1 span.custom-select-trigger").addClass("cs-diferent");
      $(".f-1 span.title-select-1").addClass("add-orange");
      $(".f-1 .custom-options").addClass("cs-diferent-2");
      $(".f-1 .custom-options").addClass("cs-diferent");
      $(".f-1 span.custom-select-trigger").css("transition", "all 1s ease");
      $(".f-1 span.title-select-1").css("transition", "all 1s ease");
    });

    $(".f-2").click(function(){
      $(".f-2 span.custom-select-trigger").addClass("cs-diferent");
      $(".f-2 span.title-select-2").addClass("add-orange");
      $(".f-2 .custom-options").addClass("cs-diferent-2");
      $(".f-2 .custom-options").addClass("cs-diferent");
      $(".f-2 span.custom-select-trigger").css("transition", "all 1s ease");
      $(".f-2 span.title-select-2").css("transition", "all 1s ease");
    });

    $(".f-3").click(function(){
      $(".f-3 span.custom-select-trigger").addClass("cs-diferent");
      $(".f-3 span.title-select-3").addClass("add-orange");
      $(".f-3 .custom-options").addClass("cs-diferent-2");
      $(".f-3 .custom-options").addClass("cs-diferent");
      $(".f-3 span.custom-select-trigger").css("transition", "all 1s ease");
      $(".f-3 span.title-select-3").css("transition", "all 1s ease");
    });

    $(".f-4").click(function(){
      $(".f-4 span.custom-select-trigger").addClass("cs-diferent");
      $(".f-4 span.title-select-4").addClass("add-orange");
      $(".f-4 .custom-options").addClass("cs-diferent-2");
      $(".f-4 .custom-options").addClass("cs-diferent");
      $(".f-4 span.custom-select-trigger").css("transition", "all 1s ease");
      $(".f-4 span.title-select-4").css("transition", "all 1s ease");
    });

    $(".f-5").click(function(){
      $(".f-5 span.custom-select-trigger").addClass("cs-diferent");
      $(".f-5 span.title-select-5").addClass("add-orange");
      $(".f-5 .custom-options").addClass("cs-diferent-2");
      $(".f-5 .custom-options").addClass("cs-diferent");
      $(".f-5 span.custom-select-trigger").css("transition", "all 1s ease");
      $(".f-5 span.title-select-5").css("transition", "all 1s ease");
    });

    $(".f-6").click(function(){
      $(".f-6 span.custom-select-trigger").addClass("cs-diferent");
      $(".f-6 span.title-select-6").addClass("add-orange");
      $(".f-6 .custom-options").addClass("cs-diferent-2");
      $(".f-6 .custom-options").addClass("cs-diferent");
      $(".f-6 span.custom-select-trigger").css("transition", "all 1s ease");
      $(".f-6 span.title-select-6").css("transition", "all 1s ease");
    });

    $(".f-7").click(function(){
      $(".f-7 span.custom-select-trigger").addClass("cs-diferent");
      $(".f-7 span.title-select-6").addClass("add-orange");
      $(".f-7 .custom-options").addClass("cs-diferent-2");
      $(".f-7 .custom-options").addClass("cs-diferent");
      $(".f-7 span.custom-select-trigger").css("transition", "all 1s ease");
      $(".f-7 span.title-select-7").css("transition", "all 1s ease");
    });
    // fim select box

    //detalhes
    $(".bt-personalizar").click(function(){
      $(".detalhes").toggleClass("detalhes-active");
      $(".overlay-detalhes").toggleClass("d-block");
      $("body").toggleClass("overflow-hidden");
    });

    $(".detalhes-lateral").click(function(){
      $(".detalhes").toggleClass("detalhes-active");
      $(".overlay-detalhes").toggleClass("d-block");
      $("body").toggleClass("overflow-hidden");
    });

    $(".ch-1").click(function(){
      $(".c-1").toggleClass("border-active");
      $(".c-2").removeClass("border-active");
      $(".c-3").removeClass("border-active");
      $(".c-4").removeClass("border-active");
      $(".c-5").removeClass("border-active");
    });

    $(".ch-2").click(function(){
      $(".c-2").toggleClass("border-active");
      $(".c-1").removeClass("border-active");
      $(".c-3").removeClass("border-active");
      $(".c-4").removeClass("border-active");
      $(".c-5").removeClass("border-active");
    });

    $(".ch-3").click(function(){
      $(".c-3").toggleClass("border-active");
      $(".c-1").removeClass("border-active");
      $(".c-2").removeClass("border-active");
      $(".c-4").removeClass("border-active");
      $(".c-5").removeClass("border-active");
    });

    $(".ch-4").click(function(){
      $(".c-4").toggleClass("border-active");
      $(".c-1").removeClass("border-active");
      $(".c-2").removeClass("border-active");
      $(".c-3").removeClass("border-active");
      $(".c-5").removeClass("border-active");
    });

    $(".ch-5").click(function(){
      $(".c-5").toggleClass("border-active");
      $(".c-1").removeClass("border-active");
      $(".c-2").removeClass("border-active");
      $(".c-3").removeClass("border-active");
      $(".c-4").removeClass("border-active");
    });
    //fim detalhes

// if (".tab-content.up"){
//     let lastScrollTop = 0;
//      $(window).on('scroll', function() {
//       let st = $(this).scrollTop();
//        if(st > lastScrollTop) {
//          $(".tab-pane").removeClass("up");
//        }
//        else {
//          $(".tab-pane").addClass("up");
//
//        }
//        lastScrollTop = st;
//      });
//    };


    // animacao top cards
    $(".i-1").click(function(){
      $(".tab-pane").addClass("up");
      $("#box-2").removeClass("hide");
    });

    $(".i-2").click(function(){
      $(".tab-pane").removeClass("up");
      $(".tab-pane").addClass("up-2");
      $("#box-3").removeClass("hide");
    });

    $(".i-3").click(function(){
      $(".tab-pane").removeClass("up-2");
      $(".tab-pane").addClass("up-3");
      $("#box-4").removeClass("hide");
    });

    $(".i-4").click(function(){
      $(".tab-pane").removeClass("up-3");
      $(".tab-pane").addClass("up-4");
      $("#box-5").removeClass("hide");
    });

    $(".i-5").click(function(){
      $(".tab-pane").removeClass("up-4");
      $(".tab-pane").addClass("up-5");
      $("#box-6").removeClass("hide");
    });

    $(".i-6").click(function(){
      $(".tab-pane").removeClass("up-5");
      $(".tab-pane").addClass("up-6");
      $("#box-7").removeClass("hide");
    });

    $(".i-7").click(function(){
      $(".tab-pane").removeClass("up-6");
      $(".tab-pane").addClass("up-7");
      $("#box-8").removeClass("hide");
    });

    //voltar
    $(".iv-1").click(function(){
      $(".tab-pane").removeClass("up");
      $(".tab-pane").removeClass("up-2");
      $(".tab-pane").removeClass("up-3");
      $(".tab-pane").removeClass("up-4");
      $(".tab-pane").removeClass("up-5");
      $(".tab-pane").removeClass("up-6");
      $(".tab-pane").removeClass("up-7");
      $(".tab-pane").css("transition", "all 1s ease");
      $("#box-1").removeClass("hide");
      $("#box-2").addClass("hide");
    });

    $(".iv-2").click(function(){
      $(".tab-pane").addClass("up");
      $(".tab-pane").removeClass("up-2");
      $(".tab-pane").removeClass("up-3");
      $(".tab-pane").removeClass("up-4");
      $(".tab-pane").removeClass("up-5");
      $(".tab-pane").removeClass("up-6");
      $(".tab-pane").removeClass("up-7");
      $(".tab-pane").css("transition", "all 1s ease");
      $("#box-2").removeClass("hide");
      $("#box-3").addClass("hide");
    });

    $(".iv-3").click(function(){
      $(".tab-pane").removeClass("up");
      $(".tab-pane").addClass("up-2");
      $(".tab-pane").removeClass("up-3");
      $(".tab-pane").removeClass("up-4");
      $(".tab-pane").removeClass("up-5");
      $(".tab-pane").removeClass("up-6");
      $(".tab-pane").removeClass("up-7");
      $(".tab-pane").css("transition", "all 1s ease");
      $("#box-3").removeClass("hide");
      $("#box-4").addClass("hide");
    });

    $(".iv-4").click(function(){
      $(".tab-pane").removeClass("up");
      $(".tab-pane").removeClass("up-2");
      $(".tab-pane").addClass("up-3");
      $(".tab-pane").removeClass("up-4");
      $(".tab-pane").removeClass("up-5");
      $(".tab-pane").removeClass("up-6");
      $(".tab-pane").removeClass("up-7");
      $(".tab-pane").css("transition", "all 1s ease");
      $("#box-4").removeClass("hide");
      $("#box-5").addClass("hide");
    });

    $(".iv-5").click(function(){
      $(".tab-pane").removeClass("up");
      $(".tab-pane").removeClass("up-2");
      $(".tab-pane").removeClass("up-3");
      $(".tab-pane").addClass("up-4");
      $(".tab-pane").removeClass("up-5");
      $(".tab-pane").removeClass("up-6");
      $(".tab-pane").removeClass("up-7");
      $(".tab-pane").css("transition", "all 1s ease");
      $("#box-5").removeClass("hide");
      $("#box-6").addClass("hide");
    });

    $(".iv-6").click(function(){
      $(".tab-pane").removeClass("up");
      $(".tab-pane").removeClass("up-2");
      $(".tab-pane").removeClass("up-3");
      $(".tab-pane").removeClass("up-4");
      $(".tab-pane").addClass("up-5");
      $(".tab-pane").removeClass("up-6");
      $(".tab-pane").removeClass("up-7");
      $(".tab-pane").css("transition", "all 1s ease");
      $("#box-6").removeClass("hide");
      $("#box-7").addClass("hide");
    });

    $(".iv-7").click(function(){
      $(".tab-pane").removeClass("up");
      $(".tab-pane").removeClass("up-2");
      $(".tab-pane").removeClass("up-3");
      $(".tab-pane").removeClass("up-4");
      $(".tab-pane").removeClass("up-5");
      $(".tab-pane").addClass("up-6");
      $(".tab-pane").removeClass("up-7");
      $(".tab-pane").css("transition", "all 1s ease");
      $("#box-7").removeClass("hide");
      $("#box-8").addClass("hide");
    });

    //Veiculo
    $(".i-8").click(function(){
      $(".tab-pane").addClass("up-v");
      $("#box-10").removeClass("hide");
    });

    $(".i-9").click(function(){
      $(".tab-pane").removeClass("up-v");
      $(".tab-pane").addClass("up-v-2");
      $("#box-11").removeClass("hide");
    });

    $(".i-10").click(function(){
      $(".tab-pane").removeClass("up-v-2");
      $(".tab-pane").addClass("up-v-3");
      $("#box-12").removeClass("hide");
    });

    $(".i-11").click(function(){
      $(".tab-pane").removeClass("up-v-3");
      $(".tab-pane").addClass("up-v-4");
      $("#box-13").removeClass("hide");
    });

    $(".i-12").click(function(){
      $(".tab-pane").removeClass("up-v-4");
      $(".tab-pane").addClass("up-v-5");
      $("#box-14").removeClass("hide");
    });

    $(".i-13").click(function(){
      $(".tab-pane").removeClass("up-v-5");
      $(".tab-pane").addClass("up-v-6");
      $("#box-15").removeClass("hide");
    });

    $(".i-14").click(function(){
      $(".tab-pane").removeClass("up-v-6");
      $(".tab-pane").addClass("up-v-7");
      $("#box-16").removeClass("hide");
    });

    //voltar
    $(".iv-8").click(function(){
      $(".tab-pane").removeClass("up-v");
      $(".tab-pane").removeClass("up-v-2");
      $(".tab-pane").removeClass("up-v-3");
      $(".tab-pane").removeClass("up-v-4");
      $(".tab-pane").removeClass("up-v-5");
      $(".tab-pane").removeClass("up-v-6");
      $(".tab-pane").removeClass("up-v-7");
      $(".tab-pane").css("transition", "all 1s ease");
      $("#box-9").removeClass("hide");
      $("#box-10").addClass("hide");
    });

    $(".iv-9").click(function(){
      $(".tab-pane").addClass("up-v");
      $(".tab-pane").removeClass("up-v-2");
      $(".tab-pane").removeClass("up-v-3");
      $(".tab-pane").removeClass("up-v-4");
      $(".tab-pane").removeClass("up-v-5");
      $(".tab-pane").removeClass("up-v-6");
      $(".tab-pane").removeClass("up-v-7");
      $(".tab-pane").css("transition", "all 1s ease");
      $("#box-10").removeClass("hide");
      $("#box-11").addClass("hide");
    });

    $(".iv-10").click(function(){
      $(".tab-pane").removeClass("up-v");
      $(".tab-pane").addClass("up-v-2");
      $(".tab-pane").removeClass("up-v-3");
      $(".tab-pane").removeClass("up-v-4");
      $(".tab-pane").removeClass("up-v-5");
      $(".tab-pane").removeClass("up-v-6");
      $(".tab-pane").removeClass("up-v-7");
      $(".tab-pane").css("transition", "all 1s ease");
      $("#box-11").removeClass("hide");
      $("#box-12").addClass("hide");
    });

    $(".iv-11").click(function(){
      $(".tab-pane").removeClass("up-v");
      $(".tab-pane").removeClass("up-v-2");
      $(".tab-pane").addClass("up-v-3");
      $(".tab-pane").removeClass("up-v-4");
      $(".tab-pane").removeClass("up-v-5");
      $(".tab-pane").removeClass("up-v-6");
      $(".tab-pane").removeClass("up-v-7");
      $(".tab-pane").css("transition", "all 1s ease");
      $("#box-12").removeClass("hide");
      $("#box-13").addClass("hide");
    });

    $(".iv-12").click(function(){
      $(".tab-pane").removeClass("up-v");
      $(".tab-pane").removeClass("up-v-2");
      $(".tab-pane").removeClass("up-v-3");
      $(".tab-pane").addClass("up-v-4");
      $(".tab-pane").removeClass("up-v-5");
      $(".tab-pane").removeClass("up-v-6");
      $(".tab-pane").removeClass("up-v-7");
      $(".tab-pane").css("transition", "all 1s ease");
      $("#box-13").removeClass("hide");
      $("#box-14").addClass("hide");
    });

    $(".iv-13").click(function(){
      $(".tab-pane").removeClass("up-v");
      $(".tab-pane").removeClass("up-v-2");
      $(".tab-pane").removeClass("up-v-3");
      $(".tab-pane").removeClass("up-v-4");
      $(".tab-pane").addClass("up-v-5");
      $(".tab-pane").removeClass("up-v-6");
      $(".tab-pane").removeClass("up-v-7");
      $(".tab-pane").css("transition", "all 1s ease");
      $("#box-14").removeClass("hide");
      $("#box-15").addClass("hide");
    });

    $(".iv-14").click(function(){
      $(".tab-pane").removeClass("up-v");
      $(".tab-pane").removeClass("up-v-2");
      $(".tab-pane").removeClass("up-v-3");
      $(".tab-pane").removeClass("up-v-4");
      $(".tab-pane").removeClass("up-v-5");
      $(".tab-pane").addClass("up-v-6");
      $(".tab-pane").removeClass("up-v-7");
      $(".tab-pane").css("transition", "all 1s ease");
      $("#box-15").removeClass("hide");
      $("#box-16").addClass("hide");
    });
    // fim animacao top cards

    //botao passagem de cards
    $("button.next-1").click(function(){
      $(".btn-segurado").addClass("d-none");
      $(".btn-veiculo").removeClass("d-none");
      $(".titulo-dados-segurado").addClass("d-none");
      $(".titulo-dados-do-veiculo").removeClass("d-none");
      $(".enviar-email").addClass("d-none");
      $(".enviar-email").removeClass("d-block");
      $(".tab-pane").removeClass("up");
      $(".tab-pane").removeClass("up-2");
      $(".tab-pane").removeClass("up-3");
      $(".tab-pane").removeClass("up-4");
      $(".tab-pane").removeClass("up-5");
      $(".tab-pane").removeClass("up-6");
      $(".tab-pane").removeClass("up-7");
    });

    $("button.next-2").click(function(){
      $(".btn-veiculo").addClass("d-none");
      $(".btn-cotacao").removeClass("d-none");
      $(".titulo-dados-do-veiculo").addClass("d-none");
      $(".titulo-cotacao").removeClass("d-none");
      $(".enviar-email").addClass("d-block");
      $(".enviar-email").removeClass("d-none");
      $(".respostas-etapas").addClass("d-none");
      $(".tab-pane").removeClass("up-v");
      $(".tab-pane").removeClass("up-v-2");
      $(".tab-pane").removeClass("up-v-3");
      $(".tab-pane").removeClass("up-v-4");
      $(".tab-pane").removeClass("up-v-5");
      $(".tab-pane").removeClass("up-v-6");
      $(".tab-pane").removeClass("up-v-7");
    });

    $("button.next-3").click(function(){
      $(".btn-cotacao").addClass("d-none");
      $(".btn-confirmacao").removeClass("d-none");
      $(".titulo-cotacao").addClass("d-none");
      $(".titulo-confirmacao").removeClass("d-none");
      $(".enviar-email").addClass("d-none");
      $(".enviar-email").removeClass("d-block");
    });

    $("button.next-4").click(function(){
      $(".btn-confirmacao").addClass("d-none");
      $(".btn-pagamento").removeClass("d-none");
      $(".titulo-confirmacao").addClass("d-none");
      $(".titulo-pagamento").removeClass("d-none");
      $(".enviar-email").addClass("d-none");
      $(".enviar-email").removeClass("d-block");
    });

    $("button.prev-1").click(function(){
      $(".btn-segurado").removeClass("d-none");
      $(".btn-veiculo").addClass("d-none");
      $(".titulo-dados-do-veiculo").addClass("d-none");
      $(".titulo-dados-segurado").removeClass("d-none");
      $(".enviar-email").addClass("d-none");
      $(".enviar-email").removeClass("d-block");
      $(".tab-pane").removeClass("up");
      $(".tab-pane").removeClass("up-2");
      $(".tab-pane").removeClass("up-3");
      $(".tab-pane").removeClass("up-4");
      $(".tab-pane").removeClass("up-5");
      $(".tab-pane").removeClass("up-6");
      $(".tab-pane").removeClass("up-7");
      $("#box-2").addClass("hide");
      $("#box-3").addClass("hide");
      $("#box-4").addClass("hide");
      $("#box-5").addClass("hide");
      $("#box-6").addClass("hide");
      $("#box-7").addClass("hide");
      $("#box-8").addClass("hide");
    });

    $("button.prev-2").click(function(){
      $(".btn-veiculo").removeClass("d-none");
      $(".btn-cotacao").addClass("d-none");
      $(".titulo-cotacao").addClass("d-none");
      $(".titulo-dados-do-veiculo").removeClass("d-none");
      $(".enviar-email").addClass("d-none");
      $(".enviar-email").removeClass("d-block");
      $(".respostas-etapas").addClass("d-none");
      $(".tab-pane").removeClass("up");
      $(".tab-pane").removeClass("up-2");
      $(".tab-pane").removeClass("up-3");
      $(".tab-pane").removeClass("up-4");
      $(".tab-pane").removeClass("up-5");
      $(".tab-pane").removeClass("up-6");
      $(".tab-pane").removeClass("up-7");
      $("#box-10").addClass("hide");
      $("#box-11").addClass("hide");
      $("#box-12").addClass("hide");
      $("#box-13").addClass("hide");
      $("#box-14").addClass("hide");
      $("#box-15").addClass("hide");
      $("#box-16").addClass("hide");
    });

    $("button.prev-3").click(function(){
      $(".btn-cotacao").removeClass("d-none");
      $(".btn-confirmacao").addClass("d-none");
      $(".titulo-confirmacao").addClass("d-none");
      $(".titulo-cotacao").removeClass("d-none");
      $(".enviar-email").addClass("d-block");
      $(".enviar-email").removeClass("d-none");
    });

    $("button.prev-4").click(function(){
      $(".btn-confirmacao").removeClass("d-none");
      $(".btn-pagamento").addClass("d-none");
      $(".enviar-email").addClass("d-none");
      $(".titulo-pagamento").addClass("d-none");
      $(".titulo-confirmacao").removeClass("d-none");
      $(".enviar-email").addClass("d-none");
      $(".enviar-email").removeClass("d-block");
    });
    // fim botao passagem de cards

    //navtabs
    $(".navtab-segurado").click(function(){
      $(".btn-segurado").addClass("d-block");
      $(".btn-segurado").removeClass("d-none");
      $(".btn-veiculo").addClass("d-none");
      $(".btn-veiculo").removeClass("d-block");
      $(".btn-cotacao").addClass("d-none");
      $(".btn-cotacao").removeClass("d-block");
      $(".btn-confirmacao").addClass("d-none");
      $(".btn-confirmacao").removeClass("d-block");
      $(".btn-pagamento").addClass("d-none");
      $(".btn-pagamento").removeClass("d-block");
      $(".titulo-dados-segurado").addClass("d-block");
      $(".titulo-dados-segurado").removeClass("d-none");
      $(".titulo-dados-do-veiculo").addClass("d-none");
      $(".titulo-dados-do-veiculo").removeClass("d-block");
      $(".titulo-cotacao").addClass("d-none");
      $(".titulo-cotacao").removeClass("d-block");
      $(".titulo-confirmacao").addClass("d-none");
      $(".titulo-confirmacao").removeClass("d-block");
      $(".titulo-pagamento").addClass("d-none");
      $(".titulo-pagamento").removeClass("d-block");
      $(".enviar-email").addClass("d-none");
      $(".enviar-email").removeClass("d-block");
      $(".tab-pane").removeClass("up");
      $(".tab-pane").removeClass("up-2");
      $(".tab-pane").removeClass("up-3");
      $(".tab-pane").removeClass("up-4");
      $(".tab-pane").removeClass("up-5");
      $(".tab-pane").removeClass("up-6");
      $(".tab-pane").removeClass("up-7");
      $("#box-2").addClass("hide");
      $("#box-3").addClass("hide");
      $("#box-4").addClass("hide");
      $("#box-5").addClass("hide");
      $("#box-6").addClass("hide");
      $("#box-7").addClass("hide");
      $("#box-8").addClass("hide");
      $(".tab-pane").removeClass("up-v");
      $(".tab-pane").removeClass("up-v-2");
      $(".tab-pane").removeClass("up-v-3");
      $(".tab-pane").removeClass("up-v-4");
      $(".tab-pane").removeClass("up-v-5");
      $(".tab-pane").removeClass("up-v-6");
      $(".tab-pane").removeClass("up-v-7");
      $("#box-10").addClass("hide");
      $("#box-11").addClass("hide");
      $("#box-12").addClass("hide");
      $("#box-13").addClass("hide");
      $("#box-14").addClass("hide");
      $("#box-15").addClass("hide");
      $(".respostas-etapas").removeClass("d-none");
      // $(".design-process-content").addClass("h-768");
    });

    $(".navtab-veiculo").click(function(){
      $(".btn-segurado").addClass("d-none");
      $(".btn-segurado").removeClass("d-block");
      $(".btn-veiculo").addClass("d-block");
      $(".btn-veiculo").removeClass("d-none");
      $(".btn-cotacao").addClass("d-none");
      $(".btn-cotacao").removeClass("d-block");
      $(".btn-confirmacao").addClass("d-none");
      $(".btn-confirmacao").removeClass("d-block");
      $(".btn-pagamento").addClass("d-none");
      $(".btn-pagamento").removeClass("d-block");
      $(".titulo-dados-segurado").addClass("d-none");
      $(".titulo-dados-segurado").removeClass("d-block");
      $(".titulo-dados-do-veiculo").addClass("d-block");
      $(".titulo-dados-do-veiculo").removeClass("d-none");
      $(".titulo-cotacao").addClass("d-none");
      $(".titulo-cotacao").removeClass("d-block");
      $(".titulo-confirmacao").addClass("d-none");
      $(".titulo-confirmacao").removeClass("d-block");
      $(".titulo-pagamento").addClass("d-none");
      $(".titulo-pagamento").removeClass("d-block");
      $(".enviar-email").addClass("d-none");
      $(".enviar-email").removeClass("d-block");
      $(".tab-pane").removeClass("up");
      $(".tab-pane").removeClass("up-2");
      $(".tab-pane").removeClass("up-3");
      $(".tab-pane").removeClass("up-4");
      $(".tab-pane").removeClass("up-5");
      $(".tab-pane").removeClass("up-6");
      $(".tab-pane").removeClass("up-7");
      $("#box-2").addClass("hide");
      $("#box-3").addClass("hide");
      $("#box-4").addClass("hide");
      $("#box-5").addClass("hide");
      $("#box-6").addClass("hide");
      $("#box-7").addClass("hide");
      $("#box-8").addClass("hide");
      $(".tab-pane").removeClass("up-v");
      $(".tab-pane").removeClass("up-v-2");
      $(".tab-pane").removeClass("up-v-3");
      $(".tab-pane").removeClass("up-v-4");
      $(".tab-pane").removeClass("up-v-5");
      $(".tab-pane").removeClass("up-v-6");
      $(".tab-pane").removeClass("up-v-7");
      $("#box-10").addClass("hide");
      $("#box-11").addClass("hide");
      $("#box-12").addClass("hide");
      $("#box-13").addClass("hide");
      $("#box-14").addClass("hide");
      $("#box-15").addClass("hide");
      $("#box-16").addClass("hide");
      $(".respostas-etapas").removeClass("d-none");
      // $(".design-process-content").addClass("h-768");
    });

    $(".navtab-cotacao").click(function(){
      $(".btn-segurado").addClass("d-none");
      $(".btn-segurado").removeClass("d-block");
      $(".btn-veiculo").addClass("d-none");
      $(".btn-veiculo").removeClass("d-block");
      $(".btn-cotacao").addClass("d-block");
      $(".btn-cotacao").removeClass("d-none");
      $(".btn-confirmacao").addClass("d-none");
      $(".btn-confirmacao").removeClass("d-block");
      $(".btn-pagamento").addClass("d-none");
      $(".btn-pagamento").removeClass("d-block");
      $(".titulo-dados-segurado").addClass("d-none");
      $(".titulo-dados-segurado").removeClass("d-block");
      $(".titulo-dados-do-veiculo").addClass("d-none");
      $(".titulo-dados-do-veiculo").removeClass("d-block");
      $(".titulo-cotacao").addClass("d-block");
      $(".titulo-cotacao").removeClass("d-none");
      $(".titulo-confirmacao").addClass("d-none");
      $(".titulo-confirmacao").removeClass("d-block");
      $(".titulo-pagamento").addClass("d-none");
      $(".titulo-pagamento").removeClass("d-block");
      $(".enviar-email").addClass("d-block");
      $(".enviar-email").removeClass("d-none");
      $(".tab-pane").removeClass("up");
      $(".tab-pane").removeClass("up-2");
      $(".tab-pane").removeClass("up-3");
      $(".tab-pane").removeClass("up-4");
      $(".tab-pane").removeClass("up-5");
      $(".tab-pane").removeClass("up-6");
      $(".tab-pane").removeClass("up-7");
      $("#box-2").addClass("hide");
      $("#box-3").addClass("hide");
      $("#box-4").addClass("hide");
      $("#box-5").addClass("hide");
      $("#box-6").addClass("hide");
      $("#box-7").addClass("hide");
      $("#box-8").addClass("hide");
      $(".tab-pane").removeClass("up-v");
      $(".tab-pane").removeClass("up-v-2");
      $(".tab-pane").removeClass("up-v-3");
      $(".tab-pane").removeClass("up-v-4");
      $(".tab-pane").removeClass("up-v-5");
      $(".tab-pane").removeClass("up-v-6");
      $(".tab-pane").removeClass("up-v-7");
      $("#box-10").addClass("hide");
      $("#box-11").addClass("hide");
      $("#box-12").addClass("hide");
      $("#box-13").addClass("hide");
      $("#box-14").addClass("hide");
      $("#box-15").addClass("hide");
      $(".respostas-etapas").addClass("d-none");
      // $(".design-process-content").removeClass("h-768");
    });

    $(".navtab-confirmacao").click(function(){
      $(".btn-segurado").addClass("d-none");
      $(".btn-segurado").removeClass("d-block");
      $(".btn-veiculo").addClass("d-none");
      $(".btn-veiculo").removeClass("d-block");
      $(".btn-cotacao").addClass("d-none");
      $(".btn-cotacao").removeClass("d-block");
      $(".btn-confirmacao").addClass("d-block");
      $(".btn-confirmacao").removeClass("d-none");
      $(".btn-pagamento").addClass("d-none");
      $(".btn-pagamento").removeClass("d-block");
      $(".titulo-dados-segurado").addClass("d-none");
      $(".titulo-dados-segurado").removeClass("d-block");
      $(".titulo-dados-do-veiculo").addClass("d-none");
      $(".titulo-dados-do-veiculo").removeClass("d-block");
      $(".titulo-cotacao").addClass("d-none");
      $(".titulo-cotacao").removeClass("d-block");
      $(".titulo-confirmacao").addClass("d-block");
      $(".titulo-confirmacao").removeClass("d-none");
      $(".titulo-pagamento").addClass("d-none");
      $(".titulo-pagamento").removeClass("d-block");
      $(".enviar-email").addClass("d-none");
      $(".enviar-email").removeClass("d-block");
      $(".tab-pane").removeClass("up");
      $(".tab-pane").removeClass("up-2");
      $(".tab-pane").removeClass("up-3");
      $(".tab-pane").removeClass("up-4");
      $(".tab-pane").removeClass("up-5");
      $(".tab-pane").removeClass("up-6");
      $(".tab-pane").removeClass("up-7");
      $("#box-2").addClass("hide");
      $("#box-3").addClass("hide");
      $("#box-4").addClass("hide");
      $("#box-5").addClass("hide");
      $("#box-6").addClass("hide");
      $("#box-7").addClass("hide");
      $("#box-8").addClass("hide");
      $(".tab-pane").removeClass("up-v");
      $(".tab-pane").removeClass("up-v-2");
      $(".tab-pane").removeClass("up-v-3");
      $(".tab-pane").removeClass("up-v-4");
      $(".tab-pane").removeClass("up-v-5");
      $(".tab-pane").removeClass("up-v-6");
      $(".tab-pane").removeClass("up-v-7");
      $("#box-10").addClass("hide");
      $("#box-11").addClass("hide");
      $("#box-12").addClass("hide");
      $("#box-13").addClass("hide");
      $("#box-14").addClass("hide");
      $("#box-15").addClass("hide");
      $(".respostas-etapas").addClass("d-none");
      // $(".design-process-content").removeClass("h-768");
    });

    $(".navtab-pagamento").click(function(){
      $(".btn-segurado").addClass("d-none");
      $(".btn-segurado").removeClass("d-block");
      $(".btn-veiculo").addClass("d-none");
      $(".btn-veiculo").removeClass("d-block");
      $(".btn-cotacao").addClass("d-none");
      $(".btn-cotacao").removeClass("d-block");
      $(".btn-confirmacao").addClass("d-none");
      $(".btn-confirmacao").removeClass("d-block");
      $(".btn-pagamento").addClass("d-block");
      $(".btn-pagamento").removeClass("d-none");
      $(".titulo-dados-segurado").addClass("d-none");
      $(".titulo-dados-segurado").removeClass("d-block");
      $(".titulo-dados-do-veiculo").addClass("d-none");
      $(".titulo-dados-do-veiculo").removeClass("d-block");
      $(".titulo-cotacao").addClass("d-none");
      $(".titulo-cotacao").removeClass("d-block");
      $(".titulo-confirmacao").addClass("d-none");
      $(".titulo-confirmacao").removeClass("d-block");
      $(".titulo-pagamento").addClass("d-block");
      $(".titulo-pagamento").removeClass("d-none");
      $(".enviar-email").addClass("d-none");
      $(".enviar-email").removeClass("d-block");
      $(".tab-pane").removeClass("up");
      $(".tab-pane").removeClass("up-2");
      $(".tab-pane").removeClass("up-3");
      $(".tab-pane").removeClass("up-4");
      $(".tab-pane").removeClass("up-5");
      $(".tab-pane").removeClass("up-6");
      $(".tab-pane").removeClass("up-7");
      $("#box-2").addClass("hide");
      $("#box-3").addClass("hide");
      $("#box-4").addClass("hide");
      $("#box-5").addClass("hide");
      $("#box-6").addClass("hide");
      $("#box-7").addClass("hide");
      $("#box-8").addClass("hide");
      $(".tab-pane").removeClass("up-v");
      $(".tab-pane").removeClass("up-v-2");
      $(".tab-pane").removeClass("up-v-3");
      $(".tab-pane").removeClass("up-v-4");
      $(".tab-pane").removeClass("up-v-5");
      $(".tab-pane").removeClass("up-v-6");
      $(".tab-pane").removeClass("up-v-7");
      $("#box-10").addClass("hide");
      $("#box-11").addClass("hide");
      $("#box-12").addClass("hide");
      $("#box-13").addClass("hide");
      $("#box-14").addClass("hide");
      $("#box-15").addClass("hide");
      $(".respostas-etapas").addClass("d-none");
      // $(".design-process-content").removeClass("h-768");
    });
    //fim navtabs

    // animacao cartao de credito
    $(".codigo-seguranca").click(function(){
      $(".cartao-interno").toggleClass("flip-card");
      $(".cartao-frente").toggleClass("d-none");
      $(".cartao-verso").toggleClass("d-none");
    });

    $(".codigo-flip").click(function(){
      $(".cartao-interno").removeClass("flip-card");
      $(".cartao-frente").removeClass("d-none");
      $(".cartao-verso").addClass("d-none");
    });

    $(".codigo-flip").click(function(){
      $(".cartao-interno").removeClass("flip-card");
      $("#numero-cartao").removeClass("n-cartao-select");
      $("#validade").removeClass("v-cartao-select");
      $("#nome-impresso").removeClass("nm-cartao-select");

      $("#numero-cartao").css("transition", "all 0.6s ease");
      $("#nome-impresso").css("transition", "all 0.6s ease");
      $("#validade").css("transition", "all 0.6s ease");
      $("#bandeira-cartao").css("transition", "all 0.6s ease");
    });


    $(".n-cartao").click(function(){
      $("#numero-cartao").addClass("n-cartao-select");
      $("#validade").removeClass("v-cartao-select");
      $("#nome-impresso").removeClass("nm-cartao-select");
      $("#bandeira-cartao").removeClass("b-cartao-select");

      $("#numero-cartao").css("transition", "all 0.6s ease");
      $("#nome-impresso").css("transition", "all 0.6s ease");
      $("#validade").css("transition", "all 0.6s ease");
      $("#bandeira-cartao").css("transition", "all 0.6s ease");
    });

    $(".v-cartao").click(function(){
      $("#validade").addClass("v-cartao-select");
      $("#numero-cartao").removeClass("n-cartao-select");
      $("#nome-impresso").removeClass("nm-cartao-select");
      $("#bandeira-cartao").removeClass("b-cartao-select");

      $("#numero-cartao").css("transition", "all 0.6s ease");
      $("#nome-impresso").css("transition", "all 0.6s ease");
      $("#validade").css("transition", "all 0.6s ease");
      $("#bandeira-cartao").css("transition", "all 0.6s ease");
    });

    $(".nm-cartao").click(function(){
      $("#nome-impresso").addClass("nm-cartao-select");
      $("#numero-cartao").removeClass("n-cartao-select");
      $("#validade").removeClass("v-cartao-select");
      $("#bandeira-cartao").removeClass("b-cartao-select");

      $("#numero-cartao").css("transition", "all 0.6s ease");
      $("#nome-impresso").css("transition", "all 0.6s ease");
      $("#validade").css("transition", "all 0.6s ease");
      $("#bandeira-cartao").css("transition", "all 0.6s ease");
    });

    $(".f-6").click(function(){
      $("#bandeira-cartao").addClass("b-cartao-select");
      $("#nome-impresso").removeClass("nm-cartao-select");
      $("#numero-cartao").removeClass("n-cartao-select");
      $("#validade").removeClass("v-cartao-select");

      $("#numero-cartao").css("transition", "all 0.6s ease");
      $("#nome-impresso").css("transition", "all 0.6s ease");
      $("#validade").css("transition", "all 0.6s ease");
      $("#bandeira-cartao").css("transition", "all 0.6s ease");
    });
    // fim animacao cartao de credito

    // animacao telas
    $("button.next").click(function(){
      $(".tab-pane").addClass("animation-to-left");
      $(".tab-pane").removeClass("animation-to-right");
    });

    $("button.prev").click(function(){
      $(".tab-pane").addClass("animation-to-right");
      $(".tab-pane").removeClass("animation-to-left");
    });
    // fim animacao telas

    // navtabs
    $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
    var href = $(e.target).attr('href');
    var $curr = $(".process-model  a[href='" + href + "']").parent();

    $('.process-model li').removeClass();

    $curr.addClass("active");
    $curr.prevAll().addClass("visited");
    });

    /*disable non active tabs
    $('.nav li').not('.active').addClass('disabled');
    $('.nav li').not('.active').find('a').removeAttr("data-toggle");*/

    $('button.next').click(function(){
        /*enable next tab*/
        $('.nav li.active').next('li').removeClass('disabled');
        $('.nav li.active').next('li').find('a').attr("data-toggle","tab").trigger("click");
    });

    $('button.prev').click(function() {
        $('.nav li.active').prev('li').find('a').trigger("click");
    });
    // fim navtabs

    // menu toggle
    function toggleFunction(x) {
        x.classList.toggle("change");
    }
    // fim menu toggle

    // tooltip
    jQuery(function() {
        jQuery('[data-toggle="tooltip"]').tooltip();
    })

    $('.voltar').click(function() {
      $('[data-toggle="tooltip"]').tooltip('hide');
    });

    // Se quiser colocar tempo de exposição do tooltip usar esse
    // $(document).on('show.bs.tooltip', function (e) {
    //   setTimeout(function() {   //calls click event after a certain time
    //    $('[data-toggle="tooltip"]').tooltip('hide');
    //  }, 800);
    // });
    // fim tooltip

    // popover
    $(document).ready(function(){
        $('[data-toggle="popover"]').popover();
      });

      $("[data-toggle=popover]")
      .popover({html:true})
    // fim popover


    // required
      // $(document).ready(function() {
      // var elements = document.getElementsByTagName("INPUT");
      // for (var i = 0; i < elements.length; i++) {
      //     elements[i].oninvalid = function(e) {
      //         e.target.setCustomValidity("");
      //         if (!e.target.validity.valid) {
      //             // e.target.setCustomValidity("");
      //             e.target.removeAttribute("required");
      //         }
      //     };
      //     elements[i].oninput = function(e) {
      //         // e.target.setCustomValidity("");
      //         e.target.removeAttribute("required");
      //     };
      //   }
      // })
