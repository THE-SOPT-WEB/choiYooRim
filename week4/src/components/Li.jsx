import styled from "styled-components";

const Li = styled.li`
  background-color: #30475E;
  border:none;
  border-radius:10px;
  width:280px;
  height:120px;
  margin:10px auto;
  padding:20px;
  display:flex;
  flex-direction:column;
  gap:15px;
  .name{
    font-size:20px;
    font-weight:bold;
    color:#F05454;
  }

  .infoDiv{
    display:flex;
    gap:15px;
  }

  .phone{
    border:1px solid #F05454;
    padding:2px;
    border-radius:8px;
  }

  .address{
    padding:2px;
  }
`

export default Li;
