import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      repos: []
    }
    this.search = this.search.bind(this);
  }

  search (term) {
    console.log(`${term} was searched`);
    //Jquery ajax call
    $.ajax({
      method: "POST",
      url: "http://localhost:1128/repos/import",
      data: JSON.stringify({username: term}),
      contentType: 'application/json',
      success: function (result, status) {
        console.log("result:", result);
        console.log("status:", status);
      },
      error: function (err) {
        console.log("Something went wrong!");
      }
    })    
  }

  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos}/>
      <Search onSearch={this.search}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));