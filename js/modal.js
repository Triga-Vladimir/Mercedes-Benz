const modalBtn = document.querySelectorAll('.more');
const modal = document.querySelector('.modal');

modalBtn.forEach(bnt => {
    bnt.addEventListener('click', () => {
        modal.classList.remove('hidden')
    })
})

modal.addEventListener('click', (e) => {
    const target = e.target;

    if(target.classList.contains('overlay') || target.classList.contains('modal__close')){
        modal.classList.add('hidden')
    }
})