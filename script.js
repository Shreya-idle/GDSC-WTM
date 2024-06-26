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

document.addEventListener('DOMContentLoaded', () => {
    const tour = new Shepherd.Tour({
      defaultStepOptions: {
        classes: 'shepherd-theme-default',
        scrollTo: true
      }
    });
  
    tour.addStep({
      title: 'Welcome',
      text: 'Welcome to the WomenTechmakers site!',
      attachTo: {
        element: '.navbar-brand',
        on: 'bottom'
      },
      buttons: [
        {
          text: 'Next',
          action: tour.next
        }
      ]
    });
  
    tour.addStep({
      title: 'Video',
      text: 'Watch this video to learn more about us.',
      attachTo: {
        element: 'video',
        on: 'top'
      },
      buttons: [
        {
          text: 'Next',
          action: tour.next
        },
        {
          text: 'Back',
          action: tour.back
        }
      ]
    });
  
    tour.addStep({
      title: 'Register',
      text: 'Click here to register.',
      attachTo: {
        element: '.btn-outline-success',
        on: 'bottom'
    },
    buttons: [
      {
        text: 'Next',
        action: tour.next
      },
      {
        text: 'Back',
        action: tour.back
      }
    ]
  });

  tour.addStep({
    title: 'Rating',
    text: 'Rate our site here.',
    attachTo: {
      element: '#rating',
      on: 'top'
    },
    buttons: [
      {
        text: 'Done',
        action: tour.complete
      },
      {
        text: 'Back',
        action: tour.back
      }
    ]
  });

  // Start the tour
  tour.start();
});
  