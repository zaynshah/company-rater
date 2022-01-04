import React from "react";

class Company extends React.Component {
  constructor() {
    super();
    this.state = {
      upvote: 0,
      downvote: 0,
      SuperLike: 0,
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

  onSuperLike() {
    let newSuperLike = this.state.SuperLike + 1;
    this.setState({ SuperLike: newSuperLike });
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
        <button
          onClick={() => {
            this.onSuperLike();
          }}
        >
          SuperLike
        </button>
        <p>Superlike: {this.state.SuperLike}</p>
        <p>
          Upvotes:{" "}
          {this.state.upvote * this.state.SuperLike || this.state.upvote}
        </p>
        <p>Downvotes: {this.state.downvote}</p>
        <p>
          Percentage of upvotes:{" "}
          {((this.state.upvote * this.state.SuperLike) /
            (this.state.upvote * this.state.SuperLike + this.state.downvote)) *
            100 ||
            (this.state.upvote / (this.state.upvote + this.state.downvote)) *
              100}
          %
        </p>
      </div>
    );
  }
}

export default Company;
