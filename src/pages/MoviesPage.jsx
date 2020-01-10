import React, {Component} from 'react';
import Movie from "../components/Movie";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import axios from "axios";
import MovieObj from "../orm/MovieObj";

class MoviesPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            movieIds :[],
            movies : []
        }
    }


    fetchData = (event) => {
        if (event.target.value.toString().length > 2){
            const url = `${process.env.REACT_APP_TMDB_GET_MOVIE_BY_NAME}${event.target.value.toString().toLowerCase()}`;

            axios.get(url).then(res => {
                let arr = res.data.results.map((item, index) => {
                    return <Movie key={index} data={new MovieObj(item)}/>
                });


                this.setState({movies: arr})
            });
        }
        else {
            this.setState({movies: []})
        }
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
                    {this.state.movies}
                </Row>
            </Container>
        );
    }
}

export default MoviesPage;