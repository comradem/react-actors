import React, {Component} from 'react';
import Row from "react-bootstrap/Row";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Container from "react-bootstrap/Container";
import axios from 'axios';
import Actor from "../components/Actor";
import ActorObj from "../orm/ActorObj";
import {Redirect} from "react-router-dom";

class ActorsPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            actors: [],
            redirectToMovies: false
        }
    }

    redirectToMovies = () => {
        this.setState({
            redirectToMovies: true
        })
    };

    fetchData = (event) => {
        if (event.target.value.toString().length > 2){
            const url = `${process.env.REACT_APP_TMDB_GET_PERSON_BY_NAME}${event.target.value.toString().toLowerCase()}`;
            axios.get(url).then(res => {
                let arr = res.data.results.map((item, index) => {
                    return <Actor key={index} data={new ActorObj(item)} onClick={this.redirectToMovies}/>
                });
                this.setState({actors: arr})
            });
        }else {
            this.setState({actors: []})
        }
    };


    render() {
        if (this.state.redirectToMovies === true) {
            return <Redirect to="/movies"/>
        }
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