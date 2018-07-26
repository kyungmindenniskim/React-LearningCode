import React, { Component } from 'react';

class SearchBar extends Component {
  // SearchBar state changed, render trigger re-render();
  // Functinal compoent doesn't have state, only Class compoent has state
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }

  render() {
    // 1. 맨처음에 constructor를 실행한다.
    // 2. onChange에 의해 setState 함수 실행하여 state의 값이 바뀐다.
    // 3. state가 바뀌면 render trigger re-render ! 가 일어나면서 re-render가 일어난다.
    // 4. 그러면서 값이 바뀐다.
    return (
      <div className="search-bar">
        <input 
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)} />
      </div>
    );
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;