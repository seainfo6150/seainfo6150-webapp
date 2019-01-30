import React  from 'react';
import PropTypes from 'prop-types';
import Title from './Title';
import Date from './Date';
import Author from './Author';

const Article= (props)=>(
   <ol>
       <Title title={props.title}/>
       <Author author={props.author}/>
       <Date date={props.date}/>
       {props.children}
  </ol>

);

Article.propTypes={
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
};


export default Article;
