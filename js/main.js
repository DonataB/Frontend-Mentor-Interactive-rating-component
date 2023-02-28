const card = document.querySelector('.card');
const thankYouCard = document.querySelector('.thank-you');
const submitBtn = document.querySelector('.submit-btn');
const rating = document.querySelector('#rating');
const ratingItems = document.querySelectorAll('.rating-btn');
const back = document.querySelector('.back');

function show() {
	card.style.display = ' none';
	thankYouCard.style.display = 'block';
}
function goback() {
	card.style.display = 'block';
	thankYouCard.style.display = 'none';
}

ratingItems.forEach(rate => {
	rate.addEventListener('click', () => {
		rating.innerHTML = rate.innerHTML;
	});
});

submitBtn.addEventListener('click', show);
back.addEventListener('click', goback);
