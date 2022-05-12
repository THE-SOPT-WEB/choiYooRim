import React, { useEffect, useState, useRef } from 'react';
import './App.css';
import axios from 'axios';
import GlobalStyle from './components/GlobalStyle';
import Button from './components/Button';
import Li from './components/Li';
import Info from './components/Info';
import MobileWeb from './components/MobileWeb';

const getLocation = (errHandler) => {
  if ("geolocation" in navigator) {
			return new Promise((resolve) => {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const {
              coords: { latitude: y, longitude: x },
            } = position;
            resolve({ x, y });
          },
        (e) => {
          alert("HTTPS 연결을 확인해주세요.");
          errHandler && errHandler();
        }
      );
    });
  }
}

function App() {
  const [checked, setChecked] = useState(false);
  const [beerList, setBeerList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef(null);

  async function getMyLocation(){
    const result = await getLocation();
    return result;
  };

  // 내 근처 맥주집 가져오기
  async function getBeerNear(x,y){
    const result = await axios.get(
      "https://dapi.kakao.com/v2/local/search/keyword",
      {
        headers: {
          Authorization: `KakaoAK ${process.env.REACT_APP_KAKAO_AK}`,
        },
        params: {
          x: x,
          y: y,
          radius: 1000,
          query: '맥주',
        }
      }
    )
    const array = result.data.documents;
    let beerInfo = [];
    let id = 1;
    array.map((beerShop) => {
      const data = {
        id: id++,
        name: beerShop.place_name,
        phone: beerShop.phone || "정보 없음",
        address: beerShop.distance + "미터",
        url: beerShop.place_url,
      };
      beerInfo = [...beerInfo, data];
    })
    setBeerList(beerInfo);
  };
  
  //특정 지역 맥주집 가져오기
  async function getBeerLocation(location){
    const result = await axios.get(
      "https://dapi.kakao.com/v2/local/search/keyword",
      {
        headers: {
          Authorization: `KakaoAK ${process.env.REACT_APP_KAKAO_AK}`,
        },
        params: {
          query: location + " " + '맥주',
        }
      }
    )
    const array = result.data.documents;
    let beerInfo = [];
    let id = 1;
    array.map((beerShop)=>{
      const data = {
        id: id++,
        name: beerShop.place_name,
        phone: beerShop.phone || "정보 없음",
        address: beerShop.address_name,
        url: beerShop.place_url,
      };
      beerInfo = [...beerInfo, data];
    })
    setBeerList(beerInfo);
  };
  
  const getBeerList = async() =>{
    try{
      setIsLoading(true);
      if(checked){
        const location = await getMyLocation();
        getBeerNear(location.x,location.y);
      }
      else{
        getBeerLocation(inputRef.current.value);
      }
    } catch(error){
      console.log(error);
    } finally{
      setTimeout(()=>{
        setIsLoading(false);
      },1500)
    }
  }
  const showBeerList = () =>{
    if(isLoading){
      return(
        <h3 className="loading">Loading . . .</h3>
      )
    }
    if(beerList.length===0){
      return(
        <h3 className='loading'>결과가 없어요</h3>
      )
    }
    return beerList.map(({id, name, phone, address, url})=>(
      <Li key={id}>
        <Info className="name" onClick={()=>clickNameHandler(url)} >{name}</Info>
            <div className="infoDiv">
              <Info className="phone">{phone}</Info>
              <Info className='address'>{address}</Info>
            </div>
      </Li>
    ))
  }
  
  const clickNameHandler = (url) =>{
    window.open(url,'modal','width=300px,height=600px,location=no,status=no,scrollbars=no');
  }

  const checkHandler = ({checked}) =>{
    setChecked(!checked);
  }

  return (
    <>
      <GlobalStyle/>
      <MobileWeb>
        <h1>우리 동네 맥주집</h1>
        <hr className='line'></hr>
        <form className="checkNearby">
          <h2>우리 집 근처 맥주집 찾기</h2>
          <input type="checkbox" className='nearby' checked={checked} onChange={()=>checkHandler({checked})}></input>
        </form>
        <form className="uncheckNearby">
          <h2>이곳에는 어떤 맥주집이?</h2>
          {checked ? <input className="location" type="text" placeholder='지역 입력하기' disabled></input> : <input ref={inputRef} className="location" type="text" placeholder='지역 입력하기'></input>}
        </form>
        <Button onClick={()=>{getBeerList()}}>클릭하기</Button>
        <hr className='line'></hr>
        <ul>
          {showBeerList()}
        </ul>
      </MobileWeb>
    </>
  );
}

export default App;
