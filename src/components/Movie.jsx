import React, {Component} from 'react';
import Card from "react-bootstrap/Card";
import axios from 'axios';


class Movie extends Component {
    constructor(props) {
        super(props);

        this.state = {
            movieId: 0,
            runtime : 0,
            fetchData : true
        }
    }

    componentWillUnmount(): void {
        this.setState({fetchData : false});
    }


    render() {

        if (this.state.fetchData === true) {
            axios.get(`https://api.themoviedb.org/3/movie/${this.props.data.id}?api_key=5a0fa6cfa2eff6c6d1a297a51d3c70b1&language=en-US`).then(
                resp => {
                    this.props.data.runtime = resp.data.runtime;
                }
            );
        }
        else return <div>ooops</div>;


        return (
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={this.props.data.poster_path} />
                <Card.Body>
                    <Card.Title>{this.props.data.original_title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Duration: ${this.props.data.runtime}</Card.Subtitle>
                    <Card.Text>
                        {this.props.data.overview}
                    </Card.Text>
                </Card.Body>
            </Card>
        );
    }
}

export default Movie;