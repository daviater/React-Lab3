import React, { Component } from 'react';
import '../App.css';
import Movies from './Movies';
import axios from 'axios';

class Read extends Component {

    state = {
        movies: [
           /* {
                "Title": "Avengers: Infinity War",
                "Year": "2018",
                "imdbID": "tt4154756",
                "Type": "movie",
                "Poster": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
            },
            {
                "Title": "Captain America: Civil War",
                "Year": "2016",
                "imdbID": "tt3498820",
                "Type": "movie",
                "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"
            },
            {
                "Title": "Lord of War",
                "Year": "2005",
                "imdbID": "tt0399295",
                "Type": "movie",
                "Poster": "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg"
            },
            {
                "Title": "Charlie Wilson's War",
                "Year": "2007",
                "imdbID": "tt0472062",
                "Type": "movie",
                "Poster": "https://m.media-amazon.com/images/M/MV5BMTgwMDgwMDc4MF5BMl5BanBnXkFtZTYwOTU3MDM4._V1_SX300.jpg"
            }*/


        ]

    };

    componentDidMount(){
        axios.get('https://jsonblob.com/api/jsonblob/090d3cd5-e03d-11e9-a2ce-89c479f14772')
        .then((response)=>{
            this.setState({movies: response.data.Search})
        }).catch((error)=>{
            console.log(error);
        });
    }

    render() {
        return (
            <div>
                <h2>Read Component</h2>
                <Movies myMovies = {this.state.movies}></Movies>
            </div>
        );
    }
}

export default Read;
