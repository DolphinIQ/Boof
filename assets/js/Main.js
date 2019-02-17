let navbar = $('nav')[0];
let navbarToggler = $('button.navbar-toggler');


// Fixes a bug with bootstrap navbar being positioned absolutely
navbarToggler.on( 'click', () => {
	$( navbar ).toggleClass( 'navbar-after-collapse' );
});

$('#login-button').on( 'click', () => {
	
	$( '.login' ).toggleClass( 'login-shown' );
	
});

$('span.close').on( 'click', () => {
	
	$( '.login' ).toggleClass( 'login-shown' );
	
});