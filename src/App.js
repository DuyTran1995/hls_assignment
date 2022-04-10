import './App.css';
import {Link} from "react-router-dom";
import styled from "styled-components";
import Button from "./component/button";

const AppStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
  width: 100vw;
  height: 100vh;
  
  a {
    margin: 5px;
  }
`

function App() {
  return (
    <AppStyled>
        <Link to="/frontend">
          <Button buttonLink>Frontend</Button>
        </Link>
        <Link to="/algorithm">
          <Button buttonLink>Algorithm</Button>
        </Link>
    </AppStyled>
  );
}

export default App;
