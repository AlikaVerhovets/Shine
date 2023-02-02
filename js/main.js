let navPosition = $('#nav').offset();

if($(window).height() > 420) {
    $(window).scroll(function(){

        if($(window).scrollTop() > navPosition.top-40) {
            $('#nav').addClass("nav__fixed");
            $('#intro__mob').css({'margin-top':'100px'});
            $('#intro').css({'margin-top':'100px'});
        } else {
            $('#nav').removeClass("nav__fixed");
            $('#intro__mob').css({'margin-top':'0px'});
            $('#intro').css({'margin-top':'0px'});
        }  

    });
}

$(window).resize(function(){
    if($(window).height() > 420) {
        $(window).scroll(function(){
        
            if($(window).scrollTop() > navPosition.top-40) {
                $('#nav').addClass("nav__fixed");
                $('#intro__mob').css({'margin-top':'100px'});
                $('#intro').css({'margin-top':'100px'});
            } else {
                $('#nav').removeClass("nav__fixed");
                $('#intro__mob').css({'margin-top':'0px'});
                $('#intro').css({'margin-top':'0px'});
            }  
        
        });
    }
});


// Magic animations

// init controller
var controller = new ScrollMagic.Controller();

// build scene for topheader
if ($(window).width() > 1100) {
    let midStar = $('.intro__star__medium').offset();
    let midStarTop = midStar.top;
    let videoHeight = $('.header__video__container').height();
    let videoHeightHulf = videoHeight/1.4;
    let headerScrollDuration = midStarTop-videoHeightHulf;
    var scene = new ScrollMagic.Scene({triggerElement: "#trigger1", offset: 0, duration: headerScrollDuration, triggerHook: 0.5})

    .setPin("#header__h1")
    .setTween("#header__h1", {paddingTop: '170px'})
    .addTo(controller);
} else if ($(window).width() <= 1100 && $(window).width() > 900) {
    let midStar = $('.intro__star__medium').offset();
    let midStarTop = midStar.top;
    let videoHeight = $('.header__video__container').height();
    let videoHeightHulf = videoHeight/1.4;
    let headerScrollDuration = midStarTop-videoHeightHulf;
    var scene = new ScrollMagic.Scene({triggerElement: "#trigger1", offset: 0, duration: headerScrollDuration, triggerHook: 0.5})

    .setPin("#header__h1")
    .setTween("#header__h1", {paddingTop: '170px'})
    .addTo(controller);
} else if($(window).width() <= 900 && $(window).width() > 800) {
    let midStar = $('.intro__star__medium').offset();
    let midStarTop = midStar.top;
    let videoHeight = $('.header__video__container').height();
    let headerScrollDuration = midStarTop-videoHeight;
    var scene = new ScrollMagic.Scene({triggerElement: "#trigger1", offset: 0, duration: headerScrollDuration, triggerHook: 0.5})

    .setPin("#header__h1")
    .setTween("#header__h1", {paddingTop: '135px'})
    .addTo(controller);
} else if($(window).width() <= 800 && $(window).width() > 420 && $(window).height() > 420) {
    let midStar = $('.intro__star__medium').offset();
    let midStarTop = midStar.top;
    let videoHeight = $('.header__video__container').height();
    let headerScrollDuration = midStarTop-videoHeight;
    var scene = new ScrollMagic.Scene({triggerElement: "#trigger1", offset: 0, duration: headerScrollDuration, triggerHook: 0.5})

    .setPin("#header__h1")
    .setTween("#header__h1", {paddingTop: '135px'})
    .addTo(controller);
} else if($(window).width() <= 420) {
    let midStar = $('.star__mobile').offset();
    let midStarTop = midStar.top;
    let videoHeight = $('.header__video__container').height();
    let videoHeightHulf = videoHeight/1.4;
    let headerScrollDuration = midStarTop-videoHeightHulf;
    var scene = new ScrollMagic.Scene({triggerElement: "#trigger1", offset: 0, duration: headerScrollDuration, triggerHook: 0.5})

    .setPin("#header__h1")
    .setTween("#header__h1", {paddingTop: '95px'})
    .addTo(controller);

    $(".card__container__central").removeClass('digit-right');
    $(".card__container__central").addClass('digit');

} else {
    let midStar = $('.intro__star__medium').offset();
    let midStarTop = midStar.top;
    let videoHeight = $('.header__video__container').height();
    let videoHeightThreeQ = videoHeight/3;
    let headerScrollDuration = midStarTop-videoHeightThreeQ;
    var scene = new ScrollMagic.Scene({triggerElement: "#trigger1", offset: 0, duration: headerScrollDuration})

    .setPin("#header__h1")
    .setTween("#header__h1", {paddingTop: '5vh'})
    .addTo(controller);
}

if($(window).height() <= 420) {
    $(".card__container__central").removeClass('digit-right');
    $(".card__container__central").addClass('digit');
}


$(window).resize(function(){
    if ($(window).width() > 1100) {
        let midStar = $('.intro__star__medium').offset();
        let midStarTop = midStar.top;
        let videoHeight = $('.header__video__container').height();
        let videoHeightHulf = videoHeight/1.4;
        let headerScrollDuration = midStarTop-videoHeightHulf;
        scene = scene.destroy(true);
        scene = new ScrollMagic.Scene({triggerElement: "#trigger1", offset: 0, duration: headerScrollDuration, triggerHook: 0.5})
    
        .setPin("#header__h1")
        .setTween("#header__h1", {paddingTop: '170px'})
        .addTo(controller);
    } else if ($(window).width() <= 1100 && $(window).width() > 900) {
        let midStar = $('.intro__star__medium').offset();
        let midStarTop = midStar.top;
        let videoHeight = $('.header__video__container').height();
        let videoHeightHulf = videoHeight/1.4;
        let headerScrollDuration = midStarTop-videoHeightHulf;
        scene = scene.destroy(true);
        scene = new ScrollMagic.Scene({triggerElement: "#trigger1", offset: 0, duration: headerScrollDuration, triggerHook: 0.5})
    
        .setPin("#header__h1")
        .setTween("#header__h1", {paddingTop: '170px'})
        .addTo(controller);
    } else if($(window).width() <= 900 && $(window).width() > 800) {
        let midStar = $('.intro__star__medium').offset();
        let midStarTop = midStar.top;
        let videoHeight = $('.header__video__container').height();
        let headerScrollDuration = midStarTop-videoHeight;
        scene = scene.destroy(true);
        scene = new ScrollMagic.Scene({triggerElement: "#trigger1", offset: 0, duration: headerScrollDuration, triggerHook: 0.5})
    
        .setPin("#header__h1")
        .setTween("#header__h1", {paddingTop: '135px'})
        .addTo(controller);
    } else if($(window).width() <= 800 && $(window).width() > 420 && $(window).height() > 420) {
        let midStar = $('.intro__star__medium').offset();
        let midStarTop = midStar.top;
        let videoHeight = $('.header__video__container').height();
        let headerScrollDuration = midStarTop-videoHeight;
        scene = scene.destroy(true);
        scene = new ScrollMagic.Scene({triggerElement: "#trigger1", offset: 0, duration: headerScrollDuration, triggerHook: 0.5})
    
        .setPin("#header__h1")
        .setTween("#header__h1", {paddingTop: '135px'})
        .addTo(controller);
    } else if($(window).width() <= 420) {
        let midStar = $('.star__mobile').offset();
        let midStarTop = midStar.top;
        let videoHeight = $('.header__video__container').height();
        let videoHeightHulf = videoHeight/1.4;
        let headerScrollDuration = midStarTop-videoHeightHulf;
        scene = scene.destroy(true);
        scene = new ScrollMagic.Scene({triggerElement: "#trigger1", offset: 0, duration: headerScrollDuration, triggerHook: 0.5})
    
        .setPin("#header__h1")
        .setTween("#header__h1", {paddingTop: '95px'})
        .addTo(controller);
    
        $(".card__container__central").removeClass('digit-right');
        $(".card__container__central").addClass('digit');
    
    } else {
        let midStar = $('.intro__star__medium').offset();
        let midStarTop = midStar.top;
        let videoHeight = $('.header__video__container').height();
        let videoHeightThreeQ = videoHeight/3;
        let headerScrollDuration = midStarTop-videoHeightThreeQ;
        scene = scene.destroy(true);
        scene = new ScrollMagic.Scene({triggerElement: "#trigger1", offset: 0, duration: headerScrollDuration})
    
        .setPin("#header__h1")
        .setTween("#header__h1", {paddingTop: '5vh'})
        .addTo(controller);
    }

    if($(window).height() <= 420) {
        $(".card__container__central").removeClass('digit-right');
        $(".card__container__central").addClass('digit');
    }
})

// build scenes for cards
var revealElements = document.getElementsByClassName("digit");
for (var i=0; i<revealElements.length; i++) { // create a scene for each element
    new ScrollMagic.Scene({
                        triggerElement: revealElements[i], // y value not modified, so we can use element as trigger as well
                        offset: 50,												 // start a little later
                        triggerHook: 0.8,
                    })
                    .setClassToggle(revealElements[i], "visible") // add class toggle
                    .addTo(controller);
}

var revealElementsRight = document.getElementsByClassName("digit-right");
for (var i=0; i<revealElementsRight.length; i++) { // create a scene for each element
    new ScrollMagic.Scene({
                        triggerElement: revealElementsRight[i], // y value not modified, so we can use element as trigger as well
                        offset: 50,												 // start a little later
                        triggerHook: 0.8,
                    })
                    .setClassToggle(revealElementsRight[i], "visible") // add class toggle
                    .addTo(controller);
}

new ScrollMagic.Scene({
    triggerElement: "#triggerPromise1",
    triggerHook: 0.9, // show, when scrolled 10% into view
    duration: "0", // hide 10% before exiting view (80% + 10% from bottom)
    offset: 50 // move trigger to center of element
})
.setClassToggle("#revealPromise1", "visible") // add class to reveal
.addTo(controller);

new ScrollMagic.Scene({
    triggerElement: "#triggerPromise2",
    triggerHook: 0.9, // show, when scrolled 10% into view
    duration: "0", // hide 10% before exiting view (80% + 10% from bottom)
    offset: 50 // move trigger to center of element
})
.setClassToggle("#revealPromise2", "visible") // add class to reveal
.addTo(controller);

new ScrollMagic.Scene({
    triggerElement: "#triggerPromise3",
    triggerHook: 0.9, // show, when scrolled 10% into view
    duration: "0", // hide 10% before exiting view (80% + 10% from bottom)
    offset: 50 // move trigger to center of element
})
.setClassToggle("#revealPromise3", "visible") // add class to reveal
.addTo(controller);

new ScrollMagic.Scene({
    triggerElement: "#triggerPromise4",
    triggerHook: 0.9, // show, when scrolled 10% into view
    duration: "0", // hide 10% before exiting view (80% + 10% from bottom)
    offset: 50 // move trigger to center of element
})
.setClassToggle("#revealPromise4", "visible") // add class to reveal
.addTo(controller);

new ScrollMagic.Scene({
    triggerElement: "#triggerPromise5",
    triggerHook: 0.9, // show, when scrolled 10% into view
    duration: "0", // hide 10% before exiting view (80% + 10% from bottom)
    offset: 50 // move trigger to center of element
})
.setClassToggle("#revealPromise5", "visible") // add class to reveal
.addTo(controller);

new ScrollMagic.Scene({
    triggerElement: "#triggerPromise6",
    triggerHook: 0.9, // show, when scrolled 10% into view
    duration: "0", // hide 10% before exiting view (80% + 10% from bottom)
    offset: 50 // move trigger to center of element
})
.setClassToggle("#revealPromise6", "visible") // add class to reveal
.addTo(controller);

if ($(window).width() <= 900) {
    var revealElementsUp = document.getElementsByClassName("digit-up");
    for (var i=0; i<revealElementsUp.length; i++) { // create a scene for each element
        new ScrollMagic.Scene({
                            triggerElement: revealElementsUp[i], // y value not modified, so we can use element as trigger as well
                            offset: 0,												 // start a little later
                            triggerHook: 1,
                        })
                        .setClassToggle(revealElementsUp[i], "visible") // add class toggle
                        .addTo(controller);
    }
} else {
    var revealElementsUp = document.getElementsByClassName("digit-up");
    for (var i=0; i<revealElementsUp.length; i++) { // create a scene for each element
        new ScrollMagic.Scene({
                            triggerElement: revealElementsUp[i], // y value not modified, so we can use element as trigger as well
                            offset: 0,												 // start a little later
                            triggerHook: 1,
                        })
                        .setClassToggle(revealElementsUp[i], "visible") // add class toggle
                        .addTo(controller);
    }
};

if ($(window).width() <= 900) {
    var revealElementsWeb = document.getElementsByClassName("digit-web");
    for (var i=0; i<revealElementsWeb.length; i++) { // create a scene for each element
        new ScrollMagic.Scene({
                            triggerElement: revealElementsWeb[i], // y value not modified, so we can use element as trigger as well
                            offset: 100,												 // start a little later
                            triggerHook: 0.6,
                        })
                        .setClassToggle(revealElementsWeb[i], "visible") // add class toggle
                        .addTo(controller);
    }
} else {
    var revealElementsWeb = document.getElementsByClassName("digit-web");
    for (var i=0; i<revealElementsWeb.length; i++) { // create a scene for each element
        new ScrollMagic.Scene({
                            triggerElement: revealElementsWeb[i], // y value not modified, so we can use element as trigger as well
                            offset: 100,												 // start a little later
                            triggerHook: 0.4,
                        })
                        .setClassToggle(revealElementsWeb[i], "visible") // add class toggle
                        .addTo(controller);
    }
};

new ScrollMagic.Scene({
    triggerElement: "#triggerVision",
    triggerHook: 0.9, // show, when scrolled 10% into view
    duration: "0", // hide 10% before exiting view (80% + 10% from bottom)
    offset: 0 // move trigger to center of element
})
.setClassToggle("#revealPlanet", "visible") // add class to reveal
.addTo(controller);

var revealElementsVision = document.getElementsByClassName("digit-vision");
for (var i=0; i<revealElementsVision.length; i++) { // create a scene for each element
    new ScrollMagic.Scene({
                        triggerElement: revealElementsVision[i], // y value not modified, so we can use element as trigger as well
                        offset: 50,												 // start a little later
                        triggerHook: 0.8,
                    })
                    .setClassToggle(revealElementsVision[i], "visible") // add class toggle
                    .addTo(controller);
}


// VIDEO BUTTON

let headerVideo = document.getElementById("header__video"); 

$('#play-stop-button').click(function playPause() { 
  if (headerVideo.paused) {
    headerVideo.play();
    $('#play-stop-button').removeClass('play-button');
    $('#play-stop-button').addClass('stop-button');
  } else { 
    headerVideo.pause();
    $('#play-stop-button').removeClass('stop-button');
    $('#play-stop-button').addClass('play-button');
  }
});

headerVideo.addEventListener("ended", function() {
    headerVideo.pause();
  $('#play-stop-button').removeClass('stop-button');
  $('#play-stop-button').addClass('play-button');
  
})

let headerVideoMob = document.getElementById("header__video__mob"); 

$('#play-stop-button-mob').click(function playPause() { 
  if (headerVideoMob.paused) {
    headerVideoMob.play();
    $('#play-stop-button-mob').removeClass('play-button');
    $('#play-stop-button-mob').addClass('stop-button');
  } else { 
    headerVideoMob.pause();
    $('#play-stop-button-mob').removeClass('stop-button');
    $('#play-stop-button-mob').addClass('play-button');
  }
});

headerVideoMob.addEventListener("ended", function() {
    headerVideoMob.pause();
  $('#play-stop-button-mob').removeClass('stop-button');
  $('#play-stop-button-mob').addClass('play-button');
  
})

let logoVideo = document.getElementById("logo__video"); 

$('#play-stop-button-dark').click(function playPause() { 
  if (logoVideo.paused) {
    logoVideo.play();
    $('#play-stop-button-dark').removeClass('play-button-dark');
    $('#play-stop-button-dark').addClass('stop-button-dark');
  } else { 
    logoVideo.pause();
    $('#play-stop-button-dark').removeClass('stop-button-dark');
    $('#play-stop-button-dark').addClass('play-button-dark');
  }
});

logoVideo.addEventListener("ended", function() {
    logoVideo.pause();
  $('#play-stop-button-dark').removeClass('stop-button-dark');
  $('#play-stop-button-dark').addClass('play-button-dark');
  
})

let popupVideo = document.getElementById("pop-up__video"); 

$('#play-stop-button-pop-up').click(function playPause() { 
  if (popupVideo.paused) {
    popupVideo.play();
    $('#play-stop-button-pop-up').removeClass('play-button');
    $('#play-stop-button-pop-up').addClass('stop-button');
  } else { 
    popupVideo.pause();
    $('#play-stop-button-pop-up').removeClass('stop-button');
    $('#play-stop-button-pop-up').addClass('play-button');
  }
});

popupVideo.addEventListener("ended", function() {
    popupVideo.pause();
  $('#play-stop-button-pop-up').removeClass('stop-button');
  $('#play-stop-button-pop-up').addClass('play-button');
  
})

// POP-UP

$('.about__button').click(function(){
    $('#pop-up').removeClass('st0');
    $('body').addClass('no-scroll');
    $('nav').addClass('st0')
}) 

$('.pop-up__close').click(function(){
    $('#pop-up').addClass('st0');
    $('body').removeClass('no-scroll');
    $('nav').removeClass('st0')
}) 
