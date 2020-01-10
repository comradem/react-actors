import React, {Component} from 'react';
import Row from "react-bootstrap/Row";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Container from "react-bootstrap/Container";
import axios from 'axios';
import Actor from "../components/Actor";
import ActorObj from "../orm/ActorObj";

class ActorsPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            actors : []
        }
    }


    fetchData = (event) => {
        const url = `${process.env.REACT_APP_TMDB_GET_PERSON_BY_NAME}${event.target.value.toString().toLowerCase()}`;
        axios.get(url).then(res => {
            let arr = res.data.results.map(item => {
                return <Actor data={new ActorObj(item)}/>
            });
            this.setState({actors:arr})
        });
    };


    render() {
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
                    {this.state.actors}
                </Row>
            </Container>
        );
    }
}

export default ActorsPage;