/* Check if on LessonCal.com */
if ( document.location.origin + document.location.pathname.toLowerCase() !== 'http://lessoncal.com/students/showstudentcal.cfm' || document.location.host + document.location.pathname.toLowerCase() !== 'lessoncal.com/students/showstudentcal.cfm' ) {
	alert( 'Not On LessonCal! Please login at lessoncal.com/students, then run this script again.' );
} else if ( this.lessonCalBeta ) {
	/* Check for running instances */
	console.log( 'Test failed: Instance already running.' );
} else {
	console.log( 'Test passed: Beginning Script.' );
	this.lessonCalBeta = true;

	/* Importing JQuery */
	var JQscript = document.createElement( 'script' );

	JQscript.setAttribute( 'src', 'http://code.jquery.com/jquery-1.10.1.min.js' );

	JQscript.onload = function() {
		console.log( 'JQuery Loaded' );

		/* Defines New Stylesheet */
		var lcbStylesheet = "body {" +
		"	font-family: 'Avant Garde', Avantgarde, 'Century Gothic', CenturyGothic, AppleGothic, sans-serif;" +
		"	background: black;" +
		"	background-image: url( 'http://jaredflores.com/background.jpg' );" +
		"	background-size: 100% 100%;" +
		"	background-position: initial initial;" +
		"	background-repeat: initial initial;" +
		"}" +
		"" +
		"a {" +
		"	text-decoration: none;" +
		"}" +
		"" +
		"#calendar {" +
		"	background: white;" +
		"	opacity: 0.9;" +
		"}" +
		"" +
		"#nav-bar {" +
		"	background: #F0F8FF;" +
		"}" +
		"" +
		"#initOverlay {" +
		"	background-image: url( '../images/paper4.jpg' );" +
		"	position: absolute;" +
		"	top: 0px;" +
		"	left: 0px;" +
		"	height: 100%;" +
		"	width: 100%;" +
		"}";

		/* Defines AJAX Script */
		ajaxScript = "$( document ).ready( function() {" +
		"	function assignID() {" +
		"		$( document ).find( 'a:contains(\"Previous\")' )[ 0 ].setAttribute( 'id', 'prev' );" +
		"		$( document ).find( 'a:contains(\"Next\")' )[ 0 ].setAttribute( 'id', 'next' );" +
		"		$prev = $( '#prev' );" +
		"		$next = $( '#next' );" +
		"		$prev.on( 'click', function( e ) { " +
		"			console.log( $prev[ 0 ].href );" +
		"			getPage( $prev[ 0 ].href );" +
		"			e.preventDefault();" +
		"		});" +
		"" +
		"		$next.on( 'click', function( e ) { " +
		"			console.log( $next[ 0 ].href );" +
		"			getPage( $next[ 0 ].href );" +
		"			e.preventDefault();" +
		"		});" +
		"	}" +
		"	assignID();" +
		"	var xhr = null," +
		"		newHtml = ''," +
		"		$prev = $( '#prev' )," +
		"		$next = $( '#next' )," +
		"		left = 37," +
		"		right = 39," +
		"		key = 0," +
		"		pos1 = 0," +
		"		pos2 = 0," +
		"		$calendar = $( '#calendar' );" +
		"" +
		"	function getPage( url ) {" +
		"		$calendar.fadeOut( 1000 );" +
		"		xhr = new XMLHttpRequest();" +
		"		xhr.open( 'GET', url );" +
		"		xhr.onload = function() {" +
		"			console.log( xhr.responseText );" +
		"			newHtml = xhr.responseText;" +
		"			$calendar[0].innerHTML = $( newHtml ).find( 'table[ align=\"center\" ][ border=\"1\" ][ cellpadding=\"0\" ][ cellspacing=\"0\" ]' )[ 0 ].innerHTML;" +
		"			assignID();" +
		"			$calendar.fadeIn( 1000 );" +
		"" +
		"		};" +
		"		xhr.send();" +
		"	}" +
		"" +
		"	$( document ).on( 'keydown', function( e ) {" +
		"		key = e.which;" +
		"		if ( key === left ) {" +
		"			$prev.click();" +
		"		} else if ( key === right ) {" +
		"			$next.click();" +
		"		}" +
		"	});" +
		"});";

		$( document ).ready( function() {
			/* Assigns ID to elements */
			$( 'table[ align=center ][ border="2" ]' )[ 0 ].setAttribute( 'id', 'nav-bar' );
			$( 'table[align="center"]' )[ 1 ].setAttribute( 'id', 'name-container' );
			$( 'font[ color="#FF0000" ][ size="+2" ]' )[ 0 ].setAttribute( 'id', 'welcome' );
			$( 'table[ align="center" ][ border="1" ][ cellpadding="0" ][ cellspacing="0" ]' )[ 0 ].setAttribute( 'id', 'calendar' );
			$( document ).find( 'strong:contains("STUDENT CALENDAR FOR ")' )[ 0 ].setAttribute( 'id', 'name' );

			var $body = $( 'body' ),
				$head = $( 'head' ),
				$nav = $( '#nav-bar' ),
				$nameCont = $( '#name-container' ),
				$welcome = $( '#welcome' ),
				$name = $( '#name' ),
				full = $name[ 0 ].innerHTML.split( 'STUDENT CALENDAR FOR ' )[ 1 ].split( ' - Grade: ' )[ 0 ],
				fname = full.split( ' ' )[ 0 ],
				$calendar = $( '#calendar' ),
				initOverlay = document.createElement( 'div' ),
				lcbStyle = document.createElement( 'style' ),
				headScript = document.createElement( 'script' );

			console.log( 'Defining Transformation function' );
			function transformBeta() {
				console.log( 'Beginning Transformation ( AutoBots, Roll Out! )' );

				/*console.log( 'Create Effect Overlay' );
				initOverlay.setAttribute( 'id', 'initOverlay' );*/

				/* Appending Previously Defined Stylesheet */
				$body[ 0 ].removeAttribute( 'background' );
				lcbStyle.innerHTML = lcbStylesheet;
				$head[ 0 ].appendChild( lcbStyle );

				/* Increasing Nav-Bar Text Size */
				$nav.find( 'font' ).each( function() {
					this.setAttribute( 'size', '+1' );
				});

				/* Creating Welcome Message */
				fname = fname[ 0 ].toUpperCase() + fname.substr( 1, fname.length ).toLowerCase();
				$welcome[ 0 ].innerHTML = 'Welcome, ' + fname + ', to the LessonCal Beta';

				/* Unveiling Hidden Day Feature 
				Modifying Old Days Tags */
				$body[ 0 ].innerHTML = $body[ 0 ].innerHTML.replace( "<!-- <tr><td align='center'><strong>SUN</strong></td>", "" ).replace( "<td align='center'><strong>SAT</strong></td></tr> -->", "" ).replace( 'Mon.&nbsp;', '' ).replace( 'Tue.&nbsp;', '' ).replace( 'Wed.&nbsp;', '' ).replace( 'Thu.&nbsp;', '' ).replace( 'Fri.&nbsp;', '' );

				/* Add AJAX Script to the head */
				headScript.innerHTML = ajaxScript;
				console.log( $head );
				console.log( headScript );
				$head[ 0 ].appendChild( headScript );

				/* Reinitialize Variables. This is necessary as innerHTML.replace()
				rendered a few of the JQquery assignments useless. */
				$nav = $( '#nav-bar' );
				$nameCont = $( '#name-container' );
				$calendar = $( '#calendar' );

				/* Rendering Elements */
				$nav.toggle( 'explode', function() {
					$nameCont.toggle( 'explode', function() {
						$calendar.toggle( 'explode', function() {
							console.log( 'Rendered. Let the fun begin!' );
						});
					});
				});
			}

			/* Hide All Page Elements. This creates a nice flow during the transformation */
			$nav.toggle( 'explode', function() {
				$nameCont.toggle( 'explode', function() {
					$calendar.toggle( 'explode', function() {
						console.log( 'Hide Complete' );
						transformBeta();
					});
				});
			});
		});
	};

	/* Adding JQuery Script */
	document.head.appendChild( JQscript );
}