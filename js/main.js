const mobileNavButton = document.querySelector('.mobile-nav-button');
const mobileNavIcon = document.querySelector('.mobile-nav-button__icon');
const mobileNav = document.querySelector('.mobile-nav');


mobileNavButton.addEventListener('click',function() {
    mobileNavIcon.classList.toggle('active');
    mobileNav.classList.toggle('active');
    document.body.classList.toggle('no-scroll');

})

// Video part

const videoFile = document.querySelector('#video-story');
const videoOverlay = document.querySelector('#video-story-overlay');
console.log(videoOverlay)
const videoIcon = document.querySelector('#story-video-btn-icon');



videoFile.addEventListener('click',function () {

    function toggleOverlay(e) {
        if(e.type === 'mouseleave') {
            console.log(e.type);
            videoOverlay.classList.add('hidden');
        } else {
            videoOverlay.classList.remove('hidden');
        }
    }
    if(videoFile.paused) {
        videoFile.play();
        videoIcon.src = "./img/svg/pause-white.svg";

        videoOverlay.onmouseleave = toggleOverlay;
        videoOverlay.onmouseenter = toggleOverlay;


    } else {
        videoFile.pause();
        videoIcon.src = "./img/svg/play-white.svg";
        videoOverlay.onmouseleave = null;
        videoOverlay.onmouseenter = null;
    }
});

