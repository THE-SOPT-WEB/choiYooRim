import styled from "styled-components";

const MobileWeb = styled.div`
  background-color:#dddddd;
  min-height: calc(100vh);
  display:flex;
  flex-direction:column;
  margin: 10px auto;
  width: 320px;
  height:100vh;
  border-radius : 20px;
  border: 3px solid #30475E;
  overflow-y: auto;

  hr{
    background-color:#30475E;
    height: 3px !important;;
  }

  h1{
    font-size : 40px;
    margin: 10px auto;
    margin-top:30px;
    color:#30475E;
    font-family:'BMEuljiro10yearslater';
  }

  h2{
    font-size : 25px;
    color:#30475E;
    font-family:'BMEuljiro10yearslater';
  }

  .loading{
    font-size : 40px;
    margin: 10px auto;
    margin-top:30px;
    color:#30475E;
    font-family:'IM_Hyemin-Regular';
  }
  
  .checkNearby{
    margin: 5px auto;
    display:flex;
    align-items:center;
    gap:10px;
  }

  .uncheckNearby{
    margin: 5px auto;
    display:flex;
    flex-wrap:wrap;
    justify-content: center;
    h2{
      margin-bottom:10px;
    }
    input{
      font-family:'BMEuljiro10yearslater';
    }
  }

  ul{
    display:flex;
    flex-direction:column;
    gap:15px;
  };

  .box{
    background-color: #30475E;
    border:none;
    border-radius:10px;
    width:280px;
    height:100px;
    margin:10px auto;
  }
`

export default MobileWeb;