import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import '../App.css';
//import CardImg from 'react-bootstrap/CardImg';

class MovieItem extends Component {
    render() {
        return (
            <Card>
                <div>

                    <Card.Title>{this.props.movie.Title}</Card.Title>
                    <Card.Text>{this.props.movie.Year}</Card.Text>
                    <img src={this.props.movie.Poster} height="500" width="350" />

                </div>
            </Card>
        );
    }
}

export default MovieItem;
