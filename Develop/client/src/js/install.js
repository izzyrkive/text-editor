const choiceResult = await deferredPrompt.userChoice;

if (choiceResult.outcome === 'accepted') {
  console.log('PWA installed');
} else {
  console.log('PWA installation declined');
}

butInstall.style.display = 'none';

deferredPrompt = null;