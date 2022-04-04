const addToCart = document.getElementsByClassName('addToCart');
let items = [];
for(let i = 0;i<addToCart.length;i++){
     addToCart[i].addEventListener("click",function(e){
          if(typeof(Storage)!== 'undefined'){
                    let item = {
                              id:i+1,
                              price:e.target.parentElement.children[0].textContent,
             
                    };
                    if(JSON.parse(localStorage.getItem('items') ) === null ){
                         items.push(item)
                         localStorage.setItem("item",JSON.stringify(items));
                       
                    }
                    else{
                       const localItems = JSON.parse(localStorage.getItem("items"))     
                       localItems.map(data=>{
                              if(item.id == data.id){
                                   item.no = data.no + 1;                     
                              }else{    
                                   items.push(data);       
                              }                           
                       }) ;
                                items.push(item);
                                localStorage.setItem('items'.JSON.stringify(items))  ;
                    }
          }else{
              alert('không có giá trị  phù hợp để lưu');
          }
     });
 
}