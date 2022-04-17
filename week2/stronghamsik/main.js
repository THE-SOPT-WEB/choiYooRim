const $ = (selector) => document.querySelector(selector);

function clickBurgerCard(){
  const cardList = $('.mac__burger');
  
  cardList.addEventListener('click',(e)=>{  
    const burger = e.target.closest('article');
    console.log(burger.);
    // const burgerInfo = {
    //   name: $(e.target.closest),
    // }
  })
} 

function addBurger(burgerInfo){
    console.log(burgerInfo);
}

window.onload = () =>{
  clickBurgerCard();
}