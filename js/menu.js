$(document).ready(main);

var estado = true;
function main(){
	$('.menu').click(function(){
		$('nav').toggle();

		//*
		/*
		if(estado==true){
			$('nav').fadeIn( "slow", function() {
    			// Animation complete
  			});
  			estado = false;
		}else{
			$('nav').fadeOut( "slow", function() {
    			// Animation complete
  			});
  			estado = true;
		}
		
		if (estado==true) {
			$('nav').animate({
				left:'0';
			});
			estado = false;
		}else{
			$('nav').animate({
				left:'-100%';
			});
			estado = true;
		}
		*/
	
	});
};