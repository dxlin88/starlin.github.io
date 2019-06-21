$(document).ready(function(){  
  	$("#slideLeft").click(function(){ 
   		$("#colors-hex").animate({left:'2100px'}),
   		$("#leftContent").fadeTo(100,1)
  		});
 	});

$(document).ready(function(){ 
	$("#leftback").click(function(){
  		$("#colors-hex").animate({left:'30%'}),
   		$("#leftContent").fadeTo(100,0)
   	    });
   	});	


/*Allbum click*/
	/*MagicWave*/
$(document).ready(function(){ 
	$("#magica-wave").click(function(){
   		$("#overlay-magicwave").fadeTo(0,1)
   	    });
   	});	

$(document).ready(function(){ 
	$("#closeX-magicwave").click(function(){
   		$("#overlay-magicwave").fadeOut(0)
   	    });
   	});	

	/*OneMen*/
$(document).ready(function(){ 
	$("#Onemen").click(function(){
   		$("#overlay-onemen").fadeIn(0)
   	    });
   	});	

$(document).ready(function(){ 
	$("#closeX-onemen").click(function(){
   		$("#overlay-onemen").fadeOut(0)
   	    });
   	});	

	/*AlaskaGas*/
$(document).ready(function(){ 
	$("#AlaskaGas5f").click(function(){
   		$("#overlay-alaskagas").fadeIn(0)
   	    });
   	});	

$(document).ready(function(){ 
	$("#closeX-alaskagas").click(function(){
   		$("#overlay-alaskagas").fadeOut(0)
   	    });
   	});	

	/*IceNight*/
$(document).ready(function(){ 
	$("#IceNight").click(function(){
   		$("#overlay-icenight").fadeIn(0)
   	    });
   	});	
$(document).ready(function(){ 
	$("#closeX-icenight").click(function(){
   		$("#overlay-icenight").fadeOut(0)
   	    });
   	});	
