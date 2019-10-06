import React from "react";
import PropTypes from "prop-types";


class ArticleListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  buttonWasClicked = () => {
    alert(`${this.props.slug}`)
  }

  render() {
    return (
      <div>
      <ul>
        <li>
          <h2>{this.props.title}</h2>
      </li>
      </ul>
      <div>
          <p>{this.props.shortText}</p>
          <time>{this.props.pubDate}</time>
          <button onClick={this.buttonWasClicked}>
            show article slug
          </button>
        </div>
        </div>

    );
  }
}

ArticleListItem.propTypes = {
  title: PropTypes.string.isRequired,
  shortText: PropTypes.string.isRequired,
  pubDate: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired
};

export default ArticleListItem;
