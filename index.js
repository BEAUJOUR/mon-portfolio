const itemMenu = document.querySelectorAll('.itemMenu');
const btn = document.querySelector('.btn');
const b1 = document.querySelector('.b1');
const b2 = document.querySelector('.b2');
const b3 = document.querySelector('.b3');
const boxLettres = document.querySelector('.boxLettres');
const containerOverlayMenu = document.querySelector('.containerOverlayMenu');
let toggle = 0;
const videoacceuil=document.querySelector('video')

const TL = new TimelineMax({paused:true});

TL
    .to(containerOverlayMenu, 0.3, { opacity: 1 })
    .staggerTo(itemMenu, 0.8, { x: 0, ease: Back.easeOut.config(1.7),stagger: 0.2 })
    .to(boxLettres, 0.3, { opacity: 0 }, '-= 1.5')
    .to(btn, 0.5, { height: 60 }, '-=1.5')
    .to(b1, 0.1, { top: 0, transform: 'rotate(45deg)' }, '-= 1.5')
    .to(b3, 0.1, { top: 0, transform: 'rotate(-45deg)' }, '-= 1.5')
    .to(b2, 0.1, { opacity: 0 }, '-= 1.75')

btn.addEventListener('click', () => {
    if (toggle === 0) {
        toggle++;
        TL.play();
        videoacceuil.style.zIndex=0;
    } else {
        toggle--;
        TL.reverse();
        videoacceuil.style.zIndex=1;

    }
})
