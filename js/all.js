function replay(){
    var audio2 = document.getElementById('bgSound');
    audio2.play();
}

function sali(){
	$("#aereo").animate({
	marginTop: '-=60'
	}, 2000, function(){
	scendi();
	});
}
function scendi(){
	$("#aereo").stop().css('margin-top', '80px');
	$("#aereo").animate({
	marginTop: '+=60'
	}, 2000, function(){
	sali();
	});
}

function partenzaOmbrello(){
	var distanza = $(window).width() + $('#ombrellone1').width();
	var larghezza = $('#ombrellone1').width();
	$('#ombrellone1').stop().css('margin-left', 0-larghezza);
	
  $('#ombrellone1').animate({
    marginLeft: '+=' + distanza
  }, 50000, 'linear', function() {
    // Animation complete.
	partenzaOmbrello();
  });
}
function partenzaOmbrelloDue(){
	var distanza = $(window).width() + $('#ombrellone2').width();
	var larghezza = $('#ombrellone2').width();
	$('#ombrellone2').stop().css('margin-left', 0-larghezza);
	
  $('#ombrellone2').animate({
    marginLeft: '+=' + distanza
  }, 49000, 'linear', function() {
    // Animation complete.
	partenzaOmbrelloDue();
  });
}
function partenzaOmbrelloTre(){
	var distanza = $(window).width() + $('#ombrellone3').width();
	var larghezza = $('#ombrellone3').width();
	$('#ombrellone3').stop().css('margin-left', 0-larghezza);
	
  $('#ombrellone3').animate({
    marginLeft: '+=' + distanza
  }, 48000, 'linear', function() {
    // Animation complete.
	partenzaOmbrelloTre();
  });
}

function partenza(){
	var distanza = $(window).width() + $('#nuvola1').width();
	var larghezza = $('#nuvola1').width();
	$('#nuvola1').stop().css('margin-left', 0-larghezza);
	
  $('#nuvola1').animate({
    marginLeft: '+=' + distanza
  }, 48000, 'linear', function() {
    // Animation complete.
	partenza();
  });
}

function partenzaSeconda(){
	var distanza = $(window).width() + $('#nuvola2').width();
	var larghezza = $('#nuvola2').width();
	$('#nuvola2').stop().css('margin-left', 0-larghezza);
	
  $('#nuvola2').animate({
    marginLeft: '+=' + distanza
  }, 18000,'linear', function() {
    // Animation complete.
	partenzaSeconda();
  });
};


function preslide(){
	finestra = $(window).width();
	var risultato = $('#result p');
	var aereo = $('#wrapaereo');
	var larghezza = risultato.width()+147;
	aereo.stop().css('width', larghezza+'px').css('left',finestra);
}

function slide(){
	finestra = $(window).width();
	var risultato = $('#result p');
	var aereo = $('#wrapaereo');
	var larghezza = risultato.width()+147;
	aereo.stop().css('width', larghezza+'px').css('left',finestra);

	if(finestra > larghezza){
		var largmax = finestra;
	}else{
		var largmax = larghezza;
	}
	aereo.animate({
		left: -larghezza
	}, largmax*20, 'linear', function(){
		slide();
	});
}

$(window).resize( function(){
	partenza();
	partenzaSeconda();
	partenzaOmbrelloTre();
    setTimeout(partenzaOmbrelloDue, 16000);
    setTimeout(partenzaOmbrello, 33000);
})

var contatore = 0;

$(document).ready( function(){

	$("#wrapaereo").hide();
	partenza();
	partenzaSeconda();
	partenzaOmbrelloTre();
    setTimeout(partenzaOmbrelloDue, 16000);
    setTimeout(partenzaOmbrello, 33000);

    $('#tiny').click(function(){
		$(this).focus().select();
	});
	
    $('#playa').click(function(){
        $(this).hide();
        var audio = document.getElementById('bgSound');
        audio.play();
        audio.addEventListener('ended', replay);
	 	slide();
		scendi();
    });

    $("#linguetta").click(function(){
        $("#custom").slideToggle();
    });
    
    $("#linguettashare").click(function(){
        $("#sharecontent").slideToggle();
    });

});


$(window).load( function(){
	var finestra = $(window).width();
	$("#wrapaereo").show();
//	scendi();
	preslide();
	incrementa();
});

function incrementa(){
	contatore = contatore + 1;
	$("#gente").empty().html(contatore);
	setTimeout(incrementa, 500);
}

function getParameterByName(name)
{
  name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
  var regexS = "[\\?&]" + name + "=([^&#]*)";
  var regex = new RegExp(regexS);
  var results = regex.exec(window.location.search);
  if(results == null)
    return "";
  else
    return decodeURIComponent(results[1].replace(/\+/g, " "));
}

function fixedEncodeURIComponent (str) {
	return encodeURIComponent(str).replace(/[!'()*]/g, escape);
}

function makeTinyUrl(laurl){
    $.ajax({
        type: 'GET',
        url: 'tinyurl.php',
        data: 'u=' + laurl,
        success: function(tinyurl) {
			$('input#tiny').val(tinyurl);
			$('#mailto').attr('href', 'mailto:?subject=Just a message for you!&body= '+tinyurl);
			$("#sharefb").attr('href', 'http://www.facebook.com/sharer.php?u='+tinyurl);
			$("#sharetw").attr('href', 'https://twitter.com/share?url='+tinyurl+'&via=Ignas Laude&hashtags=nyancat,greetings');
        }      
   });
}