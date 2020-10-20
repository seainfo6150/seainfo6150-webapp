import React, { useState, useEffect } from "react";
import ArticleListItem from "../ArticleListItem/ArticleListItem";

const ArticleList = () => {
  const [articles, setArticles] = useState();

  useEffect(() => {
    const fetchData = async () => {
      // performs a GET request
      const response = await fetch("http://demo1390455.mockable.io/articles");
      const responseJson = await response.json();
      //   console.log(response);
      setArticles(responseJson);
    };

    if (articles == null) {
      fetchData();
    }
  }, [articles]);

  return <ArticleListItem articles={articles}></ArticleListItem>;
};

export default ArticleList;
