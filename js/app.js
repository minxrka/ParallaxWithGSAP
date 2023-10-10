gsap.registerPlugin(ScrollTrigger,ScrollSmoother)

if (ScrollTrigger.isTouch !==1){ //массив ограничение мобильных устройств
    ScrollSmoother.create({ //массив плавного скролла
        wrapper: '.wrapper',
        content: '.content',
        smooth: 1.5,
        effects: true
    })

    gsap.fromTo('.hero-section', {opacity: 1}, { //Изчезание 1 страницы после пролистывание центра
        opacity: 0,
        scrollTrigger: {
            trigger: '.hero-section',
            start: 'center',
            end: '820',
            scrub: true
        }
    })
    
    let itemsL = gsap.utils.toArray('.gallery__left .gallery__item') //массив где переменные приравнены к item

   itemsL.forEach(item => {
    gsap.fromTo(item, { x: -100, opacity: 0 }, { //появление фотографий 
        opacity: 1, x: 0,
        scrollTrigger: {
            trigger: item,
            start: '-850',
            end: '-100',
            scrub: true
        }
    })
   })


   let itemsR = gsap.utils.toArray('.gallery__right .gallery__item')

   itemsR.forEach(item => {
    gsap.fromTo(item, { x: 100, opacity: 0 }, {
        opacity: 1, x: 0,
        scrollTrigger: {
            trigger: item,
            start: '-850',
            end: '-100',
            scrub: true
        }
    })
   })
    
}



