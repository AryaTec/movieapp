import React from 'react';
import omdb from '../api/omdb';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
class App extends React.Component{
    state={movieimg:[]};
     onSearchSubmit=async (term)=>{
       const response=await omdb.get('/?&apikey=94584e15',{
            params:{s:term, y:term}    
        });//.then((response)=>{
           // console.log(response.data.Search);
        //});
        this.setState({movieimg:response.data.Search});
    }
    render(){
    return(
    <div className="ui container" style={{marginTop:'10px'}} >
        <SearchBar onSubmit={this.onSearchSubmit}/>
        <MovieList movieimg={this.state.movieimg}/>
    </div>
    );
    }
}
export default App;