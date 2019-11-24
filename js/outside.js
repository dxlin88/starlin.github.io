$(document).ready(function(){  
  	$("#slideLeft").click(function(){ 
   		$("#colors-hex").animate({left:'125%'}),
   		$("#leftContent").fadeTo(100,1)
  		});
 	});

$(document).ready(function(){ 
	$("#leftback").click(function(){
  		$("#colors-hex").animate({left:'50%'}),
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

$(document).ready(function(){  
    $("#slideRight").click(function(){ 
        $("#leftContent").hide(),
        $("#colors-hex").animate({left:'-500px'}),
        $("#rightContent").fadeTo(100,1)
        });
    });

$(document).ready(function(){ 
    $("#rightback").click(function(){
        $("#colors-hex").animate({left:'50%'}),
        $("#rightContent").fadeTo(100,0)
        });
    }); 

/*Color Tour click*/
  /*Lectrue4*/
$(document).ready(function(){ 
  $("#lectrue4").click(function(){
      $("#overlay-lectrue4").fadeTo(0,1)
        });
    }); 

$(document).ready(function(){ 
  $("#closeX-lectrue4").click(function(){
      $("#overlay-lectrue4").fadeOut(0)
        });
    }); 

  /*Lectrue1*/
$(document).ready(function(){ 
  $("#lectrue1").click(function(){
      $("#overlay-lectrue1").fadeIn(0)
        });
    }); 

$(document).ready(function(){ 
  $("#closeX-lectrue1").click(function(){
      $("#overlay-lectrue1").fadeOut(0)
        });
    }); 

  /*Lectrue2*/
$(document).ready(function(){ 
  $("#lectrue2").click(function(){
      $("#overlay-lectrue2").fadeIn(0)
        });
    }); 

$(document).ready(function(){ 
  $("#closeX-lectrue2").click(function(){
      $("#overlay-lectrue2").fadeOut(0)
        });
    }); 

  /*lectrue3*/
$(document).ready(function(){ 
  $("#lectrue3").click(function(){
      $("#overlay-lectrue3").fadeIn(0)
        });
    }); 
$(document).ready(function(){ 
  $("#closeX-lectrue3").click(function(){
      $("#overlay-lectrue3").fadeOut(0)
        });
    }); 