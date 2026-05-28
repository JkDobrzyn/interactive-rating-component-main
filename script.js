const ratingButtons = document.querySelectorAll('.rating-btn');
const submitButton = document.querySelector('.submit-btn');
const ratingState = document.getElementById('rating-state');
const thankYouState = document.getElementById('thank-you-state');
const selectedRatingValue = document.getElementById('selected-rating-value');

let selectedRating = null;

ratingButtons.forEach(button => {
  button.addEventListener('click', () => {
    ratingButtons.forEach(btn => {
      btn.classList.remove('selected');
      btn.removeAttribute('aria-selected');
    });
    button.classList.add('selected');
    button.setAttribute('aria-selected', 'true');
    selectedRating = button.value;
    submitButton.disabled = false;
  });
});

submitButton.addEventListener('click', () => {
  if (!selectedRating) return;
  selectedRatingValue.textContent = selectedRating;
  ratingState.classList.add('hidden');
  thankYouState.classList.remove('hidden');
});
