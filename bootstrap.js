var bootstrap = [ "cerulean", "cosmo", "cyborg", "darkly", "flatly", "journal", "lumen", "paper", "readable", "sandstone", "simplex", "slate", "spacelab", "superhero", "united", "yeti"];
					var current = "";
					
				
					function randomFrom(arr){
					var randomIndex = Math.floor(Math.random() * arr.length);
					return arr[randomIndex];
					}
					function randomCSS()
					{
					current = randomFrom(bootstrap);
					$('link[rel=stylesheet]').attr("href", "//maxcdn.bootstrapcdn.com/bootswatch/3.3.1/" + current + "/bootstrap.min.css");
					}
					randomCSS();
					/**
					$('*').on('blur change click dblclick error focus focusin focusout hover keydown keypress keyup load mousedown mouseenter mouseleave mousemove mouseout mouseover mouseup resize scroll select submit', function(){
					 randomCSS();
					});
					**/
					
