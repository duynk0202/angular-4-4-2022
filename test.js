const gia=()=>{
          document.getElementsByClassName('check-1')[0].addEventListener('click',()=>{
               var product =document.getElementsByClassName("main-product")
               Object.values(product).filter(e=>{
                   var gia = e.querySelector('.money').innerHTML.replace('$','')
                   if(gia>0 && gia<20000){
                        e.style.display = "block";
                   }
                   else{
                        e.style.display="none";
                   }
               })
          })

          document.getElementsByClassName('check-2')[0].addEventListener('click',()=>{
               var product =document.getElementsByClassName("main-product")
               Object.values(product).filter(e=>{
                   var gia = e.querySelector('.money').innerHTML.replace('$','')
                   if(gia>20000 && gia<50000){
                        e.style.display = "block";
                   }
                   else{
                        e.style.display="none";
                   }
               })
          })

          document.getElementsByClassName('check-3')[0].addEventListener('click',()=>{
               var product =document.getElementsByClassName("main-product")
               Object.values(product).filter(e=>{
                   var gia = e.querySelector('.money').innerHTML.replace('$','')
                   if(gia>50000 ){
                        e.style.display = "block";
                   }
                   else{
                        e.style.display="none";
                   }
               })
          })

          document.getElementsByClassName('check-all')[0].addEventListener('click',()=>{
               var product =document.getElementsByClassName("main-product")
               Object.values(product).filter(e=>{
                   e.style.display='block'

               })
          })
     }
export {gia};       
