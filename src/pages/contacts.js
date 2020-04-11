import React from 'react';
import {Row, Col, Card} from 'react-bootstrap';

// marginTop -> margin-top
// padding-top -> paddingTop


const MyCard = ({headerText, children}) => (
    <Card
        bg="primary"
        text='white'
        style={{ width: '100%', height:"200px" }}>
        <Card.Header>{headerText}</Card.Header>
        <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
            {children}
        </Card.Text>
        </Card.Body>
    </Card>
);


class Contacts extends React.Component{
    render(){
        return(
            <Row>
                <Col md={3}>
                    <MyCard headerText="Я заголовок">Текст внутри карточки</MyCard>
                    <MyCard headerText="Я заголовок">Текст  карточки</MyCard>
                    <MyCard headerText="Я ">Текст внутри </MyCard>
                </Col>
            </Row>
        );
    }
}

export default Contacts;