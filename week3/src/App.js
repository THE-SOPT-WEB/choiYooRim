import './App.css';
import Worldcup from './Worldcup';
import starbucks from './images/starbucks.webp';
import coffeebean from './images/coffeebean.jpeg';
import twosomeplace from './images/twosomeplace.jpeg';
import hollyscoffee from './images/hollyscoffee.jpeg';

const coffeeShop = [
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
    pic : hollyscoffee
  }
]

function App() {
  console.log(coffeeShop.length);
  return (
    <div className="App">
      <main>
        <h2 className="title"> 당신의 최애 카공 장소는? </h2>
        <Worldcup list={coffeeShop}></Worldcup>
      </main>
    </div>
  );
}

export default App;
