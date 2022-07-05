import './App.css';
import React, { useEffect, useRef, useState } from 'react';
import starbucks from './images/starbucks.webp';
import coffeebean from './images/coffeebean.jpeg';
import twosomeplace from './images/twosomeplace.jpeg';
import hollyscoffee from './images/hollyscoffee.jpeg';
import styled from 'styled-components';
import Module from 'module';

const items:coffeeShop[] = [
  {
    name : "starbucks",
    pic : starbucks,
  },
  {
    name : 'coffeebean',
    pic : coffeebean,
  },
  {
    name : 'twosomeplace',
    pic : twosomeplace,
  },
  {
    name : 'hollyscoffee',
    pic : hollyscoffee,
  }
]

const DisplayContent = styled.div`
  display:flex;
  justify-content:center;
`

const Img = styled.img`
  width: 400px;
  height: 400px;
`

const Box = styled.div`
  margin:50px;
`

const Crown = styled.div`
  font-size: 100px;
  position: fixed;
  left: 50px;
  right: 50px;
  bottom: 400px;
`

const Vs = styled.div`
  font-size:50px;
  position:fixed;
  left: 50px;
  right: 50px;
  bottom:370px;
`

const Container = styled.div`
  background-color: aliceblue;
  

`

function shuffleArray(){
  items.sort(()=> Math.random() - 0.5);
  console.log(items);
}

let winner:coffeeShop[] = [];

interface coffeeShop {
  name: string,
  pic: string,
}
function App() {
  const [coffeeShop, setCoffeeShop] = useState(items);
  let display:coffeeShop[] = [];

  useEffect(()=>{
  },[coffeeShop])

  shuffleArray();
  console.log(coffeeShop);
  display = [coffeeShop[0],coffeeShop[1]];
  
  const clickEvent = (coffeeShops:coffeeShop) =>{
    console.log(coffeeShops);
    let newWinner:coffeeShop[] = [...winner, coffeeShops]; //스프레드연산자는 
    winner = newWinner;
    let newCoffeeShop:coffeeShop[] = coffeeShop.slice(2);
    if(newCoffeeShop.length === 0){
      setCoffeeShop(winner);
      winner=[];
    }
    else{
      setCoffeeShop(newCoffeeShop);
      console.log(winner);
      display = [newCoffeeShop[0],newCoffeeShop[1]];
    }
  }

  if(coffeeShop.length===1){
    return(
      <div className="App">
      <main>
        <Container>
          <h2 className="title"> 당신의 최애 카공 장소는 바로바로 </h2>
        </Container>
              <div className="item" key={coffeeShop[0].name}/>
              <Img className="coffee-img" src={coffeeShop[0].pic} alt="커피"></Img>
              <Crown>👑</Crown>
              <div className="coffee-name">{coffeeShop[0].name}</div>
      </main>
    </div>
    )
  }
  else{
      return (
      <div className="App">
        <main>
          <Container>
            <h2 className="title"> 당신의 최애 카공 장소는? </h2>
          </Container>
          <DisplayContent>
            {
            display.map(item => {
              return <Box className="item" key={item.name} onClick={()=>clickEvent(item)}>
                <Img className="coffee-img" src={item.pic} alt="커피"/>
                <div className="coffee-name">{item.name}</div>
              </Box>
            })}
          </DisplayContent>
          <Vs>VS</Vs>
        </main>
      </div>
    );
  }
}

export default App;
