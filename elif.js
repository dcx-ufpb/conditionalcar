$(document).ready(function() {
    
   
	$('#button1').click(function() {
		$("#img1").fadeOut();
		$("#img2").fadeIn();
	});

	$('#button2').click(function(){
		$("#img2").fadeOut();
		$("#img3").fadeIn();
	});

	$('#button3').click(function(){
		$("#img3").fadeOut();
		$("#img4").fadeIn();
        $(".right img").fadeOut();
        $("#video1").fadeIn();
	});

	$('#button4').click(function(){
		$("#img4").fadeOut();
        $("#img_codigo1").fadeIn();
	});
    
    $('#button5').click(function(){
		$("#img5").fadeOut();
        $("#img6").fadeIn();
        $("#video1").fadeOut();
        $("#video2").fadeIn();
	});
    
    $('#button6').click(function(){
		$("#img6").fadeOut();
        $("#img_codigo2").fadeIn();
	});
    
    $('#button7').click(function(){
		$("#img7").fadeOut();
        $("#img8").fadeIn();
        $("#video2").fadeOut();
        $("#video3").fadeIn();
	});
    
    $('#button8').click(function(){
		$("#img8").fadeOut();
        $("#img_codigo3").fadeIn()
	});
    
    //Button dos codigos
    
    $('#button9').click(function(){
		$("#img_codigo1").fadeOut();
        $("#img5").fadeIn()
	});
    
    $('#button10').click(function(){
		$("#img_codigo2").fadeOut();
        $("#img7").fadeIn()
	});
    
    $('#button11').click(function(){
		
	});
    
    
    // button voltar
    
	
    $('#buttonVoltar2').click(function() {
		$("#img1").fadeOut();
		$("#img2").fadeIn();
	});

	$('#buttonVoltar3').click(function(){
		$("#img2").fadeOut();
		$("#img3").fadeIn();
	});

	$('#buttonVoltar4').click(function(){
		$("#img3").fadeOut();
		$("#img4").fadeIn();
        $(".right img").fadeOut();
        $("#video1").fadeIn();
	});

	$('#buttonVoltar5').click(function(){
		$("#img4").fadeOut();
        $("#img_codigo1").fadeIn();
	});
    
    $('#buttonVoltar6').click(function(){
		$("#img5").fadeOut();
        $("#img6").fadeIn();
        $("#video1").fadeOut();
        $("#video2").fadeIn();
	});
    
    $('#buttonVoltar7').click(function(){
		$("#img6").fadeOut();
        $("#img_codigo2").fadeIn();
	});
    
    $('#buttonVoltar8').click(function(){
		$("#img7").fadeOut();
        $("#img8").fadeIn();
        $("#video2").fadeOut();
        $("#video3").fadeIn();
	});
    
    $('#buttonVoltar9').click(function(){
		$("#img8").fadeOut();
        $("#img_codigo3").fadeIn()
	});
    
    //Button dos codigos
    
    $('#buttonVoltar10').click(function(){
		$("#img_codigo1").fadeOut();
        $("#img5").fadeIn()
	});
    
    $('#buttonVoltar11').click(function(){
		$("#img_codigo2").fadeOut();
        $("#img7").fadeIn()
	});
    
    
});
