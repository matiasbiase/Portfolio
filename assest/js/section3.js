const section = document.querySelector('section');
const h1 = document.querySelector('.h1');
section.addEventListener('click', action, { once: true });
let offset = '-=200';
let base = 104;
function action() {
    h1.remove();
    tl = anime.timeline({
        duration: 400,
        loop: true
    });
    tl.add({ targets: 'div:nth-child(1)', translateY: -base })
        .add({
            targets: 'div:nth-child(2)',
            translateY: -base,
            translateX: base
        }, offset)
        .add({ targets: 'div:nth-child(3)', translateX: base }, offset)
        .add({
            targets: 'div:nth-child(4)',
            translateY: base,
            translateX: base
        }, offset)
        .add({ targets: 'div:nth-child(5)', translateY: base }, offset)
        .add({
            targets: 'div:nth-child(6)',
            translateY: base,
            translateX: -base
        }, offset)
        .add({ targets: 'div:nth-child(7)', translateX: -base }, offset)
        .add({
            targets: 'div:nth-child(8)',
            translateY: -base,
            translateX: -base
        }, offset)
        .add({
            targets: 'div',
            rotate: 90,
            easing: 'linear',
            duration: 400
        })
        .add({
            targets: 'div',
            translateY: 0,
            translateX: 0,
            delay: anime.stagger(base, { direction: 'reverse' })
        })
        .add({ targets: section, rotate: 90 });
}

