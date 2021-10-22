const lists = document.querySelectorAll('.feature-sub');
const btns = document.querySelectorAll('.feature__link');

btns.forEach((btn) => {
  btn.addEventListener('click', () => {
      btns.forEach((btnItem, inx) =>{
        if(btnItem === btn){
        btnItem.classList.toggle('feature__link_active');
        lists[inx].classList.toggle('hidden');

        }else{
        btnItem.classList.remove('feature__link_active');
        lists[inx].classList.add('hidden');
        }
    })
    
  });
});

