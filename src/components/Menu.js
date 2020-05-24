import React from 'react';
import styled from 'styled-components';
import menuIcon from '../assets/menu.svg';

const MenuButton = styled.div`
  outline: none;
  width: fit-content;
  background-color: #000;
  user-select: none;
  transition: all 0.8s cubic-bezier(0.46, 0.03, 0.52, 0.96);

  :hover{
     background-color: #123456;
  }
  :active{
    transform: scale(0.8);
  }
`;

const MenuIconText = styled.span`
    font-family: Lato, Open Sans, sans-serif;
    color: ${props=>props.color ? props.color : "#fff"};
    margin: ${props=>props.margin};
    text-transform: ${props=>props.textTransform};
    text-align: ${props=>props.textAlign};
    font-size: 8px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.12;
    letter-spacing: normal;
`;


class Menu extends React.Component {

    render(){

        return (
            <MenuButton>
                <MenuIconText textTransform="lowercase">Menu</MenuIconText>
            </MenuButton>
        );
    }
}

export default Menu;