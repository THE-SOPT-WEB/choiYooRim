const $ = (selector) => document.querySelector(selector);

let burgerList = [];
let accumulatedAmount = 0;

function clickBurgerCard(){
  const cardList = $('.mac__burger');
  const shoppingList = $('.shopping__list');
  // const cart = $('shopping__list')
  cardList.addEventListener('click',(e)=>{  
    const burger = e.target.closest('article');
    
    const burgerInfo = {
      name: burger.querySelector('h2'),
      price: burger.querySelector('.burger__price'),
    }
    
    for(let burger of burgerList){
      if(burger.name === burgerInfo.name.innerText){ 
        burger.amount++;
        const burgerName = "." + burgerInfo.name.innerText;
        const oldBurger = document.querySelector(burgerName);
        oldBurger.querySelector('input').value = burger.amount;
        calcPrice();
        return;
      }
    }

    const newBurger = {
      name: burgerInfo.name.innerText,
      price: burgerInfo.price.innerText,
      amount : 1,
    }

    burgerList.push(newBurger);
    calcPrice();
    //장바구니에 직접 추가를 해주는 부분 -> 뷰를 그리기 위함
    shoppingList.innerHTML += `
      <div class="added__burger">
        <div id="burger__element" class="${newBurger.name}">
          <p class="burger__name"> ${newBurger.name} </p>
          <input class="burger__amount" type="number" min="1" value="${newBurger.amount}">
          <p class="burger__price"> ${newBurger.price} </p>
          <button class="delete__burger">x</button>
        </div>
      </div>
    `;

    deleteBurger();
    controlAmount();
  })
} 

function showModal(modalContent){
  const modal = $('.modal');
  const modalBody = $('p.modal__body');
  modalBody.innerHTML = modalContent;
  modal.classList.remove('hide');
}

function clickNoButton(){
  const noButton = $('.no');
  noButton.addEventListener('click',(e)=>{
    hideModal();
  })
}

function hideModal(){
  const modal = $('.modal');
  modal.addEventListener('click',(e) => {
    if(e.target.classList.value !== "modal__body"){
      modal.classList.add('hide');
    }
  })
}

function clickOrderButton(){
  const orderButton = $('.order__button');
  
  orderButton.addEventListener('click',(e)=>{
    showModal('정말 주문하시겠어요?');
  })
}

const parsePriceToNumber = (price) => {
	const removedComma = price.replace(/\D/g, "");
  return +removedComma;
};

function calcPrice(){
  const accumulatedPrice = $(".accumulated__price");
  accumulatedAmount = 0;
  for(let burger of burgerList){
    accumulatedAmount += parsePriceToNumber(burger.price) * burger.amount;
  }
  accumulatedPrice.innerText = accumulatedAmount;
}

function clearCart(){
  const cancelButton = $('.cancel__button');
  cancelButton.addEventListener('click',(e)=>{
    const shoppingList = $('.shopping__list');
    burgerList = [];
    shoppingList.innerHTML = `
    `;
    accumulatedAmount = 0;
    calcPrice();
  })
}

function deleteBurger(){
  const xButton = document.querySelectorAll('.delete__burger');
  for(let i = 0; i<xButton.length; i++){
    xButton[i].addEventListener('click',(e)=>{
      const xBurger = e.target.closest('.added__burger');
      burgerList = burgerList.filter((element) => element.name !== xBurger.querySelector('.burger__name').innerText);
      calcPrice();
      xBurger.innerHTML = ``;
    })
  }
}

function controlAmount(){
  const countButton = document.querySelectorAll('.burger__amount');
  for(let i = 0; i<countButton.length; i++){
    countButton[i].addEventListener('click',(e)=>{
      const countBurger = e.target.closest('.added__burger');
      const count = e.target.closest('.burger__amount');
      const countBurgerName = countBurger.querySelector('.burger__name').innerText;
      for(let burger of burgerList){
        if(burger.name === countBurgerName){ //이미 안에 버거가 있는 종류라면 
          burger.amount = Number(count.value);
        }
      }
      calcPrice();
    })
  }
}

window.onload = () =>{
  clickBurgerCard();
  clickOrderButton();
  clickNoButton();
  clearCart();
}

