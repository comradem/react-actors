import React, {Component} from 'react';
import Row from "react-bootstrap/Row";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Container from "react-bootstrap/Container";
import axios from 'axios';

class ActorsPage extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }


    fetchData = () => {




        //remote call impl
    };


    render() {
        let data = this.fetchData();
        return (
            <Container>
                <Row>
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="basic-addon1">Search: </InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            onChange={this.fetchData}
                            aria-describedby="basic-addon1"
                        />
                    </InputGroup>
                </Row>
                <Row>
                    {data}
                </Row>
            </Container>
        );
    }
}

export default ActorsPage;