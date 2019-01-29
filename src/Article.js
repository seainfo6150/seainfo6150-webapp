import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Title from './Title';
import Date from './Date';
import Author from './Author';
import Children from "./Children";

const Article= ({title,datetime,date,author})=>(
   <ol>
       <Title title={title}/>
       <Author author={author}/>
       <Date dateTime={datetime} date={date}/>
       <Children/>
  </ol>

);

Article.propTypes={
    title: PropTypes.string.isRequired,
    datetime: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,

};


export default Article;
