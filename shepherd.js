
document.addEventListener('DOMContentLoaded', () => {
    const tour = new Shepherd.Tour({
      defaultStepOptions: {
        classes: 'shepherd-theme-default',
        scrollTo: true
      }
    });
  
    tour.addStep({
      id: 'step 1',
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
  
