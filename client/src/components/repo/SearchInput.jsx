import React, { Component } from "react";

export default class SearchInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ""
    };
  }

  componentDidMount() {
    document.addEventListener("keydown", this.onKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.onKeyPress);
  }

  onKeyPress = event => {
    if (event.keyCode === 13) {
      this.onSearch();
    }
  };

  onChange = event => {
    this.setState({
      search: event.target.value
    });
  };

  onSearch = () => {
    const { search } = this.state;
    const { onSearchRepo } = this.props;
    if (search) {
      onSearchRepo(search);
    }
  };

  render() {
    return (
      <div className="search-container">
        <input type="text" placeholder="Search..." onChange={this.onChange} />
        <i className="fa fa-search" onClick={this.onSearch}></i>
      </div>
    );
  }
}
