$(document).ready(function() {
    
   
	$('#button1').click(function() {
		$("#img1").toggle();
		$("#img2").toggle();
	});

	$('#button2').click(function(){
		$("#img2").toggle();
		$("#img3").toggle();
	});

	$('#button3').click(function(){
		$("#img3").toggle();
		$("#img4").toggle();
        $(".right img").toggle();
        $("#video1").toggle();
	});

	$('#button4').click(function(){
		$("#img4").toggle();
        $("#img_codigo1").toggle();
	});
    
    $('#button5').click(function(){
		$("#img5").toggle();
        $("#img6").toggle()
        $("#video1").toggle();
        $("#video2").toggle();
	});
    
    $('#button6').click(function(){
		$("#img6").toggle();
        $("#img_codigo2").toggle();
	});
    
    $('#button7').click(function(){
		$("#img_codigo1").toggle();
        $("#img5").toggle();
	});
    
    $('#button8').click(function(){
		
	});
    
    //Button opção voltar
        
    $('#buttonVoltar2').click(function() {
		$("#img1").toggle();
		$("#img2").toggle();
	});

	$('#buttonVoltar3').click(function(){
		$("#img2").toggle();
		$("#img3").toggle();
	});

	$('#buttonVoltar4').click(function(){
		$("#img3").toggle();
		$("#img4").toggle();
        $(".right img").toggle();
        $("#video1").toggle();
	});

	$('#buttonVoltar5').click(function(){
		$("#img4").toggle();
        $("#img_codigo1").toggle();
	});
    
    $('#buttonVoltar6').click(function(){
		$("#img5").toggle();
        $("#img6").toggle()
        $("#video1").toggle();
        $("#video2").toggle();
	});
    
    $('#buttonVoltar7').click(function(){
		$("#img6").toggle();
        $("#img_codigo1").toggle();
	});
    
    $('#buttonVoltar8').click(function(){
		$("#img_codigo2").toggle();
        $("#img5").toggle();
	});
    
    
});
