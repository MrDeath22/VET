let elModalOpenBtn = document.querySelector('.modal-open-btn');
let elModalCloseBtn = document.querySelector('.modal-close');
let elModalContent = document.querySelector('.modal-content');


elModalOpenBtn.addEventListener('click', function() {
   elModalContent.classList.add('open');
});

elModalCloseBtn.addEventListener('click', function() {
   elModalContent.classList.remove('open')
})