import React from 'react';
import {Row, Col, Card} from 'react-bootstrap';

// marginTop -> margin-top
// padding-top -> paddingTop


const MyCard = ({headerText, children, small}) => {

    if (small){
        return(
        <Card
            bg="primary"
            text='white'
            style={{ width: '100%', height:"200px" }}>
            <Card.Header>{headerText}</Card.Header>
            <Card.Body>
                <Card.Text>
                    {children}
                </Card.Text>
            </Card.Body>
        </Card>
        );
    }

    return(
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
};

// all === true ? console.log("Hello") : console.log("no");
/*
* if (all === true){
*   console.log("Hello");
* }
* else{
*   console.log("no");
* }
*
* */

class Contacts extends React.Component{
    render(){
        const {all} = this.props;
        const arr = [
            {header: "Заголовок1", text: "text1", small: true},
            {header: "Заголовок2", text: "text2", small: true},
            {header: "Заголовок3", text: "text2"},
            {header: "Заголовок4", text: "text4"},
            {header: "Заголовок5", text: "text5", small: true},
        ];

        return(
            <Row>
                <Col md={3}>
                    {
                        all
                            ? <>
                                {
                                    arr.map((item, index)=>(
                                        <MyCard headerText={item.header} small={item.small}>{item.text}</MyCard>
                                    ))
                                }
                            </>
                            : <>
                                <MyCard headerText="Я заголовок">Текст  карточки</MyCard>
                                <MyCard headerText="Я ">Текст внутри </MyCard>
                            </>
                    }
                </Col>
            </Row>
        );
    }
}

export default Contacts;