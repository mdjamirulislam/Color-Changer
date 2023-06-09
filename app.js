const hoverkoro = document.querySelectorAll('#mdkhan');
const mdmehedi = document.querySelectorAll('.mdmehedi');


mdmehedi.forEach(x => {
      x.addEventListener('mouseover',() => {
            
          x.classList.add('mpower')
                  
           
                  
            
      })
         x.addEventListener('mouseout',() => {
            x.classList.remove('mpower')
      })
})






