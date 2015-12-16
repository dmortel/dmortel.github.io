//Moves website back to top on refresh
//====================================
$(document).ready(function(){
    $(window).on('beforeunload', function() {
		$(window).delay(1000).scrollTop(0);
	});
});

//Back-To-Top Button
//==================
$(function(){
	$(document).on( 'scroll', function(){
		if ($(window).scrollTop() > 100) {
			$('.scroll-top-wrapper').addClass('show');
		} else {
			$('.scroll-top-wrapper').removeClass('show');
		}
	});
	$('.scroll-top-wrapper').on('click', scrollToTop);
});
				
function scrollToTop() {
	verticalOffset = typeof(verticalOffset) != 'undefined' ? verticalOffset : 0;
	element = $('body');
	offset = element.offset();
	offsetTop = offset.top;
	$('html, body').animate({scrollTop: offsetTop},700, 'easeInOutCubic');
};

//Smooth Anchor Scrolling
//=======================
 $(".scroll").click(function(event){
	event.preventDefault();
	//calculate destination place
	var dest=0;
	if($(this.hash).offset().top > $(document).height()-$(window).height()){
		dest=$(document).height()-$(window).height();
	}else{
		dest=$(this.hash).offset().top;
	}
	//go to destination
	$('html,body').animate({scrollTop:dest}, 1500,'easeInOutQuint');
});

//Hide Navbar
//============
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('header').outerHeight();

$(window).scroll(function(event){didScroll = true;});

setInterval(function() {
	if (didScroll) {
		hasScrolled();
		didScroll = false;
	}
}, 250);

function hasScrolled() {
	var st = $(this).scrollTop();

	// Make sure they scroll more than delta
	if(Math.abs(lastScrollTop - st) <= delta)
		return;

	// If they scrolled down and are past the navbar, add class .nav-up.
	// This is necessary so you never see what is "behind" the navbar.
	if (st > lastScrollTop && st > navbarHeight){
		// Scroll Down
		$('header').removeClass('nav-down').addClass('nav-up');
	} else {
		// Scroll Up
		if(st + $(window).height() < $(document).height()) {
			$('header').removeClass('nav-up').addClass('nav-down');
		}
	}
	lastScrollTop = st;
}

//Detects mobile device
//=====================
$(document).ready(function(){ if($(window).width()>480){  

	//Parallax Effect
	//===============
	$(document).ready(function(){
		
		document.createElement("article");
		document.createElement("section");
		
		var $window = $(window); //You forgot this line in the above example

		$('section[data-type="background"]').each(function(){
			var $bgobj = $(this); // assigning the object
			$(window).scroll(function() {
				var yPos = -($window.scrollTop() / $bgobj.data('speed'));
				// Put together our final background position
				var coords = '50% '+ yPos + 'px';
				// Move the background
				$bgobj.css({ backgroundPosition: coords });
			});
		});
	});
} });
 
//collapse navbar on click
//========================
$(function() {
    $('.nav a').on('click', function(){ 
        if($('.navbar-toggle').css('display') !='none'){
            $(".navbar-toggle").trigger( "click" );
        }
    });
});

//Animated progress bar
//=====================

// Returns true if the specified element has been scrolled into the viewport.
function isElementInViewport(elem) {
    var $elem = $(elem);

    // Get the scroll position of the page.
    var scrollElem = ((navigator.userAgent.toLowerCase().indexOf('webkit') != -1) ? 'body' : 'html');
    var viewportTop = $(scrollElem).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

    // Get the position of the element on the page.
    var elemTop = Math.round( $elem.offset().top );
    var elemBottom = elemTop + $elem.height();

    return ((elemTop < viewportBottom) && (elemBottom > viewportTop));
}

// Check if it's time to start the animation.
function checkAnimation() {
    var $elem = $('.bar .level');

    // If the animation has already been started
    if ($elem.hasClass('start')) return;

    if (isElementInViewport($elem)) {
        // Start the animation
        $elem.addClass('start');
    }
}

// Capture scroll events
$(window).scroll(function(){
    checkAnimation();
});

//Preloader
//=========
	$(window).load(function() {	// makes sure the whole site is loaded
		$('#status').fadeOut(); // will first fade out the loading animation
		$('#preloader').delay(500).fadeOut('slow'); // will fade out the white DIV that covers the website.
		$('body').css({'overflow':'visible'});
		$('.fadeUp').addClass('begin');
		$('.fadeUp2').addClass('begin2');
		$('.fadeUp3').addClass('begin3');
	});


//Sliding Menu bar
//================
/*Menu-toggle*/
$("#menu-toggle").click(function(e) {
	e.preventDefault();
	$("#wrapper").toggleClass("active");
});

$("#menu-toggle").scroll(function() {
	
	$("#wrapper").removeClass("active");
});

//Scrollspy Multiple navbars
//========================
$(document).ready(function () {
    $('body').scrollspy({ target: ".scrollspy" });
    
    var scollSpy2ActiveLI = "";
    
    $('body').on('activate.bs.scrollspy', function () {
        if (scollSpy2ActiveLI != "") {
            scollSpy2ActiveLI.removeClass('active');            
        }        
        var activeTab = $('.scrollspy li.active a').attr('href');
        scollSpy2ActiveLI = $('.scrollspy2 li a[href="' + activeTab + '"]').parent();
        scollSpy2ActiveLI.addClass('active');
    })
    
    $('body').trigger('activate.bs.scrollspy');
});



