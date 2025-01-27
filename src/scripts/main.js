const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

    toggle.addEventListener('click', () => {
        // Add show-menu class to nav menu
        nav.classList.toggle('show-menu')

        // Add show-icon to show and hide the menu icon
        toggle.classList.toggle('show-icon')
    })
}

showMenu('nav-toggle', 'nav-menu')



//-----CONTAGEM REGRESSIVA-----//
const dataDoEvento = new Date("Aug 9, 2025 00:00:00");
const timeStampDoEvento = dataDoEvento.getTime();

const contaHoras = setInterval(function(){
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaAteEvento = timeStampDoEvento - timeStampAtual;

    const diaEmMs = 1000 * 60 * 60 * 24;
    const horaEmMs = 1000 * 60 * 60;
    const minutoEmMs = 1000 * 60;
    const segundoEmMs = 1000;

    const diasAteEvento = Math.floor(distanciaAteEvento / diaEmMs);
    const horasAteEvento = Math.floor((distanciaAteEvento % diaEmMs) / horaEmMs);
    const minutosAteEvento = Math.floor((distanciaAteEvento % horaEmMs) / minutoEmMs);
    const segundosAteEvento = Math.floor((distanciaAteEvento % minutoEmMs) / segundoEmMs);

    document.getElementById('dias').innerHTML = 
    `${diasAteEvento}`;

    document.getElementById('horas').innerHTML = 
    `${horasAteEvento}`;

    document.getElementById('minutos').innerHTML = 
    `${minutosAteEvento}`;

    document.getElementById('segundos').innerHTML = 
    `${segundosAteEvento}`;

    if (distanciaAteEvento < 0) {
        clearInterval(contaHoras);
        document.getElementById('contador').innerHTML = 'Evento Expirado';
    }

}, 1000);

const swiper = new Swiper('.carousel__wrapper', {
    spaceBetween: 5,

    pagination: {
    el: ".swiper-pagination",
    clickable: true,
    },

    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    },

    breakpoints:{
        0:{
            slidesPerView:1
        },
        768:{
            slidesPerView:2
        },
        1023:{
            slidesPerView:3
        }
    }

});