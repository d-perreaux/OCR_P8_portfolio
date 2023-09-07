

document.addEventListener("DOMContentLoaded", function () {
    const textElements = document.querySelectorAll(".animate-text");
    const remainingContents = document.querySelectorAll(".remaining-content");

    let delay = 0.2;

    textElements.forEach(element => {
        element.style.transitionDelay = delay + "s";
        element.style.opacity = 1;
        element.style.transform = "translateY(0)";
        delay += 0.6;
    });

    const landingCard = document.querySelector(".landing-card");

    function rotateCardAutomatically() {
        // Ajoutez la classe d'animation pour la rotation complète
        landingCard.classList.add("rotate-full");

        // Supprimez la classe d'animation après l'animation complète
        landingCard.addEventListener("animationend", function () {
            landingCard.classList.remove("rotate-full");
        });
    }


    if (landingCard) {
        // Ajoutez la classe d'animation lors du chargement
        landingCard.classList.add("rotate-once");

        // Supprimez la classe d'animation après l'animation complète
        landingCard.addEventListener("animationend", function () {
            landingCard.classList.remove("rotate-once");
        });

        // Ajoutez la classe d'animation au survol
        landingCard.addEventListener("mouseenter", function () {
            landingCard.classList.add("rotate-once");
        });

        // Supprimez la classe d'animation lorsque le curseur quitte la carte
        landingCard.addEventListener("mouseleave", function () {
            landingCard.classList.remove("rotate-once");

        });
    }

    setTimeout(function () {
        remainingContents.forEach(content => {
            content.style.opacity = 1;
            content.style.transform = "translateY(0)";
        });

        landingCard.classList.add("rotate-full");

    }, delay * 1000 + 300);
})


document.addEventListener("DOMContentLoaded", function () {
    const projectCards = document.querySelectorAll(".project-card");

    function handleScroll() {
        projectCards.forEach(card => {
            const rect = card.getBoundingClientRect();
            const isVisible = (rect.top >= 0 && rect.bottom <= window.innerHeight); // top = distance du bord sup de l'objet par rapport au viewport
            // bottom = distance du bord inf de l'objet par rapport au viewport
            // The read-only innerHeight property of the Window interface returns
            // the interior height of the window in pixels, including the height of 
            // the horizontal scroll bar, if present. 

            if (isVisible) {
                if (card.classList.contains("slide-left")) {
                    card.classList.add("animate-slide-left");
                } else if (card.classList.contains("slide-right")) {
                    card.classList.add("animate-slide-right");
                }
            }
        });
    }

    // gestionnaire d'événement de défilement
    window.addEventListener("scroll", handleScroll);

    // appeler handleScroll au chargement de la page pour vérifier si les éléments initialement visibles doivent également être animés
    handleScroll();
});


