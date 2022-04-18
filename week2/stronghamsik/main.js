const $ = (selector) => document.querySelector(selector);

let burgerList = [];

function clickBurgerCard(){
  const cardList = $('.mac__burger');
  console.log(cardList);
  const shoppingList = $('.shopping__list');
  // const cart = $('shopping__list')
  cardList.addEventListener('click',(e)=>{  
    const burger = e.target.closest('article');
    
    const burgerInfo = {
      name: burger.querySelector('h2'),
      price: burger.querySelector('.burger__price'),
    }
    
    for(let burger of burgerList){
      if(burger.name === burgerInfo.name.innerText){ //이미 안에 버거가 있는 종류라면 
        console.log(burger);
        burger.amount++;
        const oldBurger = document.querySelectorAll('.added__burger shou');
        console.log(oldBurger);
        console.log(oldBurger.querySelector('input').innerHTML) ;
      }
    }

    const newBurger = {
      name: burgerInfo.name.innerText,
      price: burgerInfo.price.innerText,
      amount : 1,
    }
    burgerList.push(newBurger);

    //장바구니에 직접 추가를 해주는 부분 -> 뷰를 그리기 위함
    shoppingList.innerHTML += `
      <div class="added__burger shou">
        <p class="burger__name"> ${newBurger.name} </p>
        <input type="number" class="account__select" min="1" value="${newBurger.amount}">
        <p class="burger__price"> ${newBurger.price} </p>
        <button>x</button>
      </div>
    `;

    
  })
} 

// function printBurgerList(){
//   const shoppingList = $('.shopping__list');
//   burgerList.addEventListener('change',(e)=>{
//     for(let burger of burgerList){
//       console.log(burger);
//       shoppingList.innerHTML += `
//         <div class="added__burger">
//           <h3 class="burger__name"> ${burger.name}
//           <input type="number" class="account__select" min="1" value="${burger.amount}">
//           <h3 class="burger__price"> ${burger.price}
//           <button>x</button>
//         </div>
//         `;
//     }
//   })
// }

// function addBurger(burgerInfo, newThing){
//     const shoppingCart = $('.cart__burger');
//     const shoppingList = $('.shopping__list');
    
//     if(newThing){
//       const burger = {
//         name: burgerInfo.name.innerText,
//         price: burgerInfo.price.innerText,
//         amount : burgerInfo.amount,
//       }
//       burgerList.push({...burger});
//       console.log(burger);
//       shoppingList.innerHTML += `
//       <div class="added__burger">
//         <h3 class="burger__name"> ${burger.name}
//         <input type="number" class="account__select" min="1" value="${burger.amount}">
//         <h3 class="burger__price"> ${burger.price}
//         <button>x</button>
//       </div>
//       `;
//     }
//     else{
//       const amount = $('.account__select');
//       amount.value = burgerInfo.amount;
//     }

// }

window.onload = () =>{
  clickBurgerCard();
}
