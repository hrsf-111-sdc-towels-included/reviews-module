import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: {},
    };
  }

  render() {
    return (
      <div className="left-search-container">
        <div>
          <svg viewBox="0 0 24 24" className="magnifyingGlass">
            <path d="m 10.4 18.2 c -4.2 -0.6 -7.2 -4.5 -6.6 -8.8 c 0.6 -4.2 4.5 -7.2 8.8 -6.6 c 4.2 0.6 7.2 4.5 6.6 8.8 c -0.6 4.2 -4.6 7.2 -8.8 6.6 m 12.6 3.8 l -5 -5 c 1.4 -1.4 2.3 -3.1 2.6 -5.2 c 0.7 -5.1 -2.8 -9.7 -7.8 -10.5 c -5 -0.7 -9.7 2.8 -10.5 7.9 c -0.7 5.1 2.8 9.7 7.8 10.5 c 2.5 0.4 4.9 -0.3 6.7 -1.7 v 0.1 l 5 5 c 0.3 0.3 0.8 0.3 1.1 0 s 0.4 -0.8 0.1 -1.1" fill-rule="evenodd"></path>
          </svg>
          <input placeholder="Search review" />
        </div>
      </div>
    );
  }
}

export default Search;
