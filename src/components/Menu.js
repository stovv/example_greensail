import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
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

const MenuWrapper = styled.div`
    display: ${ props=> props.display === 'none' ? props.display: 'flex' };
    height: 100vh;
    width: 30vw;
    max-width: 350px;
    flex-direction: column;
    background-color: #123456;
`;

const MenuLink = styled.a`
    font-family: Lato, Open Sans, sans-serif;
    color: ${props=>props.color ? props.color : "#fff"};
    margin: 20px auto;
    text-transform: ${props=>props.textTransform};
    text-align: ${props=>props.textAlign};
    font-size: 24px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.12;
    letter-spacing: normal;
`;


class Menu extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }
    }

    render(){
        const { items, icon } = this.props;

        return (
            <>
                <MenuButton className="menu-button"
                    onClick={()=>  this.setState({ isOpen: !this.state.isOpen }) }>
                    <MenuIconText textTransform="lowercase">Menu</MenuIconText>
                </MenuButton>
                <MenuWrapper display={this.state.isOpen ? 'flex': 'none'}>
                    {
                        items.map((item, index)=>(
                            <React.Fragment key={index}>
                                <MenuLink href={item.link}>{item.title}</MenuLink>
                            </React.Fragment>
                        ))
                    }
                </MenuWrapper>
            </>
        );
    }
}

Menu.propTypes = {
    items: PropTypes.array.isRequired
}

export default Menu;