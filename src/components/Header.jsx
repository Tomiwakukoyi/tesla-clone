import React, { useState } from "react";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

function Header() {
  const [burgerStatus, setBurgerStatus] = useState(false);

  return (
    <Container>
      <a>
        <img src="/images/logo.svg" alt="" />
      </a>
      <Menu>
        <a href="#">Model S</a>
        <a href="#">Model 3</a>
        <a href="#">Model Y</a>
        <a href="#">Model X</a>
      </Menu>
      <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Tesla Account</a>
        <CustomMenu onClick={() => setBurgerStatus(true)} />
      </RightMenu>
      {/* to ensure the initial status is the same as the one set on the state */}
      <BurgerNav show={burgerStatus}>
        <CloseWrapper>
          <CustomClose onClick={() => setBurgerStatus(false)} />
        </CloseWrapper>

        <li>
          <a href="#">Existing Inventory</a>
        </li>
        <li>
          <a href="#">Used Inventory</a>
        </li>
        <li>
          <a href="#">Trade In</a>
        </li>
        <li>
          <a href="#">Cybertuck</a>
        </li>
        <li>
          <a href="#">Tesla jet</a>
        </li>
        <li>
          <a href="#">Tesla Bikes</a>
        </li>
        <li>
          <a href="#">space X</a>
        </li>
        <li>
          <a href="#">Tesla Boat</a>
        </li>
      </BurgerNav>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  z-index: 1;
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  padding: 0 20px;
  //stick it to the top
  top: 0;
  //right and left 0 will expand it to its full width as its like its dragging the header from both sides
  left: 0;
  right: 0;
  align-items: center;
  justify-content: space-between;
`;
const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  //flex 1 means giving it full width

  flex: 1;

  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;
const RightMenu = styled.div`
  display: flex;
  align-items: center;
  a {
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;
  }
`;
//calling the menu icon inside the custom menu style component since its the only
//element in it
const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`;
const CustomClose = styled(CloseIcon)`
  cursor: pointer;
`;
const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const BurgerNav = styled.div`
  position: fixed;
  list-style: none;
  top: 0;
  bottom: 0;
  right: 0;
  background: white;
  width: 300px;
  z-index: 16;
  padding: 20px;
  flex-direction: column;
  display: flex;
  text-align: start;
  //on the burgerNav component we pssed in 'show' as a prop soo thats what were accessing here
  //if props.show is true, then we translatex0 meaning it doesnt open else we trsanslate 100% meaning the full
  //thing comes out
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.2s ease-in;
  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);

    a {
      font-weight: 600;
    }
  }
`;
