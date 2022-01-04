import React from "react";

class Company extends React.Component {
  constructor() {
    super();
    this.state = {
      upvote: 0,
      downvote: 0,
    };
  }

  onUpvote() {
    let newUpvote = this.state.upvote + 1;
    this.setState({ upvote: newUpvote });
  }

  onDownvote() {
    let newDownvote = this.state.downvote + 1;
    this.setState({ downvote: newDownvote });
  }

  render() {
    return (
      <div>
        <h1>{this.props.company.name}</h1>
        <h3>{this.props.company.email}</h3>
        <h3>{this.props.company.stock}</h3>
        <button
          onClick={() => {
            this.onUpvote();
          }}
        >
          Upvote
        </button>
        <button
          onClick={() => {
            this.onDownvote();
          }}
        >
          Downvote
        </button>
        <p>Upvotes: {this.state.upvote}</p>
        <p>Downvotes: {this.state.downvote}</p>
      </div>
    );
  }
}

export default Company;
