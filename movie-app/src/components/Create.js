import React, { Component } from 'react';
import '../App.css';

class Create extends Component {
  constructor(props){
    super(props)
    this.state = {Title:'', Year:'', Poster:''};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleMovieTitleChange = this.handleMovieTitleChange.bind(this);
    this.handleMovieYearChange = this.handleMovieYearChange.bind(this);
    this.handleMoviePosterChange = this.handleMoviePosterChange.bind(this);
  }

  handleMovieTitleChange(e){
    this.setState({Title:e.target.value});
  }
  handleMovieYearChange(e){
    this.setState({Year:e.target.value});
  }
  handleMoviePosterChange(e){
    this.setState({Poster:e.target.value});
  }

  handleSubmit(e){
    alert(this.state.Title + "\n" + this.state.Year + "\n" + this.state.Poster);
    console.log(this.state.Title + "\n" + this.state.Year + "\n" + this.state.Poster)
    e.preventDefault();
    this.setState({Title:'', Year:'', Poster:''})
  }

  render() {
    return (
      <div>
        <h2>Create Component</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Movie Title</label>
            <input type = 'text' 
            className = 'form-control'
            value = {this.state.Title} 
            onChange={this.handleMovieTitleChange}>
            </input>
          </div>
          <div>
            <label>Release Year</label>
            <input type = 'text' 
            className = 'form-control'
            value = {this.state.Year} 
            onChange={this.handleMovieYearChange}>
            </input>
          </div>
          <div>
            <label>Poster Url</label>
            <textarea rows = '3'
            className = 'form-control'
            value = {this.state.Poster} 
            onChange={this.handleMoviePosterChange}>
            </textarea>
          </div>
          <div>
            <input type='submit'
            value = 'Add Movie'>
            </input>
          </div>
        </form>
      </div>
    );
  }
}

export default Create;
