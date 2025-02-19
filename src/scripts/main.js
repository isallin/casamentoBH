document.addEventListener('DOMContentLoaded', function () {
    // NavBar
    class MobileNavbar {
        constructor(mobileMenu, navList, navLinks) {
            this.mobileMenu = document.querySelector(mobileMenu);
            this.navList = document.querySelector(navList);
            this.navLinks = document.querySelectorAll(navLinks);
            this.activeClass = 'active';

            // Corrigindo a função de clique
            this.handleClick = this.handleClick.bind(this);
        }

        handleClick() {
            this.navList.classList.toggle(this.activeClass);
            this.mobileMenu.classList.toggle(this.activeClass);
            this.animateLinks();
        }

        animateLinks() {
            this.navLinks.forEach((link, index) => {
                link.style.animation
                    ? (link.style.animation = '')
                    : (link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`);
            });
        }
        
        init() {
            if (this.mobileMenu) {
                this.mobileMenu.addEventListener("click", this.handleClick);
            }
            return this;
        }


    }

    const mobileNavbar = new MobileNavbar(
        ".mobileMenu",
        ".header__menu-link",
        ".header__menu-link-item"
    );

    mobileNavbar.init();

    //----- CONTAGEM REGRESSIVA -----//
    const dataDoEvento = new Date("Aug 9, 2025 00:00:00").getTime();

    const contaHoras = setInterval(function () {
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

});