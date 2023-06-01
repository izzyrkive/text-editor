const choiceResult = await deferredPrompt.userChoice;

// Logic for installing the PWA
if (choiceResult.outcome === 'accepted') {
  console.log('PWA installed');
} else {
  console.log('PWA installation declined');
}

const butInstall = document.getElementById('butInstall');

// Add event listener for the click event
butInstall.addEventListener('click', async () => {
  try {

    // Prompts the user to install the app
    if (window.deferredPrompt) {
      // Shows the installation prompt
      await window.deferredPrompt.prompt();

      // Wait for the user's response
      const choiceResult = await window.deferredPrompt.userChoice;

      // Handle the user's choice
      if (choiceResult.outcome === 'accepted') {
        console.log('App installed successfully!');
      } else {
        console.log('App installation rejected.');
      }
      window.deferredPrompt = null;
    }
  } catch (error) {
    console.error('Error handling installation event:', error);
  }
});

// Adds event listener for the beforeinstallprompt event
window.addEventListener('beforeinstallprompt', (event) => {
  event.preventDefault();

  // Stores the deferred prompt for later use
  window.deferredPrompt = event;

    // Waits for the user's choice
    window.deferredPrompt.userChoice
      .then((choiceResult) => {
        // Handles the user's choice
        if (choiceResult.outcome === 'accepted') {
          console.log('App installed successfully!');
        } else {
          console.log('App installation rejected.');
        }

        window.deferredPrompt = null;
      });
  });
});
