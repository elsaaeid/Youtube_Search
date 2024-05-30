import React, { Component } from 'react'; //Always need in JSX files

// Create the HTML to return for the input
class SearchBar extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = { term: '' };
  }

  onInputChange(term) {
    this.setState({ term });
    this.props.onSearchTermChange(term);
  }

  render() {
    return (
      <div className="search-bar m-5 text-center">
        <input
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)}
          className='w-3/4 bg-gray-300 border-hidden rounded text-black'
          placeholder='Search'
        />
      </div>
    );
  }
}

export default SearchBar;
