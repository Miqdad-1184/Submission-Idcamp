const openPopupButton = document.getElementById('openPopup')
const popup = document.getElementById('popup')
const closePopupBUtton = document.getElementById('closePopup')

openPopupButton.addEventListener('click', () => {
    popup.style.display = 'flex';
});

closePopupBUtton.addEventListener('click', () => {
    popup.style.display = 'none';
});

window.addEventListener('click', (Event) => {
    if (event.target === popup) {
        popup.style.display = 'none';
    }
});
