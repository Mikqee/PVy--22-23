
function closePopup() {
  var overlay = document.querySelector('.popup-overlay');
  overlay.style.display = 'none';
}

window.addEventListener('load', function() {
  var overlay = document.querySelector('.popup-overlay');
  overlay.style.display = 'flex';

  var closeButton = document.getElementById('close-button');
  closeButton.addEventListener('click', closePopup);

  var image = document.getElementById('k10');
  image.addEventListener('click', function() {
    var emailInput = document.getElementById('email');
    var email = emailInput.value;
    
    // Zde můžete provést další manipulace s uloženým emailem (např. odeslat na server)
    console.log('Uložený email: ' + email);
  });
});
