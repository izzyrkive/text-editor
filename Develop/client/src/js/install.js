const choiceResult = await deferredPrompt.userChoice;

// Logic for installing the PWA
if (choiceResult.outcome === 'accepted') {
  console.log('PWA installed');
} else {
  console.log('PWA installation declined');
}

butInstall.style.display = 'none';

deferredPrompt = null;
