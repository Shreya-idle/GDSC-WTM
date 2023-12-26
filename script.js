// script.js
document.addEventListener('DOMContentLoaded', function () {
    const ratingContainer = document.getElementById('rating');

    const storedRating = localStorage.getItem('userRating');
    if (storedRating) {
        highlightStars(parseInt(storedRating, 10));
    }

    ratingContainer.addEventListener('click', function (event) {
        if (event.target.classList.contains('star')) {
            const ratingValue = event.target.getAttribute('data-value');
            localStorage.setItem('userRating', ratingValue);
            highlightStars(parseInt(ratingValue, 10));
        }
    });

    function highlightStars(rating) {
        const stars = ratingContainer.getElementsByClassName('star');
        for (let i = 0; i < stars.length; i++) {
            const starValue = parseInt(stars[i].getAttribute('data-value'), 10);
            if (starValue <= rating) {
                stars[i].classList.add('selected');
            } else {
                stars[i].classList.remove('selected');
            }
        }
    }
});
