import React, {Component} from 'react';
import Card from "react-bootstrap/Card";

class Actor extends Component {

    render() {
        return (
            <Card style={{width: '18rem'}}>
                <Card.Img variant="top" src={this.props.data.profile_path} alt="no image found in db"/>
                <Card.Body>
                    <Card.Title><a target="_blank" rel="noopener noreferrer"
                                   href={this.props.data.profile_path} > {`${this.props.data.name}`}</a></Card.Title>
                    <Card.Text>
                    </Card.Text>
                </Card.Body>
            </Card>
        );
    }
}

export default Actor;