document.addEventListener('DOMContentLoaded', function() {

    // Função para mostrar/ocultar menu
    const showMenu = (toggleId, navId) => {
        const toggle = document.getElementById(toggleId),
            nav = document.getElementById(navId);
        
        if (toggle && nav) { // Verifica se os elementos existem
            toggle.addEventListener('click', () => {
                nav.classList.toggle('show-menu');
                toggle.classList.toggle('show-icon');
            });
        }
    };

    showMenu('nav-toggle', 'nav-menu');

    //----- CONTAGEM REGRESSIVA -----//
    const dataDoEvento = new Date("Aug 9, 2025 00:00:00").getTime();

    const contaHoras = setInterval(function() {
        const agora = new Date().getTime();
        const distanciaAteEvento = dataDoEvento - agora;

        if (distanciaAteEvento < 0) {
            clearInterval(contaHoras);
            const contador = document.getElementById('contador');
            if (contador) contador.innerHTML = 'Evento Expirado';
            
            // Oculta os elementos do contador
            ['dias', 'horas', 'minutos', 'segundos'].forEach(id => {
                const elemento = document.getElementById(id);
                if (elemento) elemento.style.display = 'none';
            });

            return;
        }

        const diaEmMs = 1000 * 60 * 60 * 24;
        const horaEmMs = 1000 * 60 * 60;
        const minutoEmMs = 1000 * 60;
        const segundoEmMs = 1000;

        const diasAteEvento = Math.floor(distanciaAteEvento / diaEmMs);
        const horasAteEvento = Math.floor((distanciaAteEvento % diaEmMs) / horaEmMs);
        const minutosAteEvento = Math.floor((distanciaAteEvento % horaEmMs) / minutoEmMs);
        const segundosAteEvento = Math.floor((distanciaAteEvento % minutoEmMs) / segundoEmMs);

        const atualizaElemento = (id, valor) => {
            const elemento = document.getElementById(id);
            if (elemento) elemento.innerHTML = valor;
        };

        atualizaElemento('dias', diasAteEvento);
        atualizaElemento('horas', horasAteEvento);
        atualizaElemento('minutos', minutosAteEvento);
        atualizaElemento('segundos', segundosAteEvento);

    }, 1000);

    // Inicialização do Swiper
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
        breakpoints: {
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1023: { slidesPerView: 3 }
        }
    });

});
