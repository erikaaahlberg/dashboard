import React from 'react';
import './Grid.css';

const Container = (props) => {
    return (
      <div className = "container-fluid">
        { props.children }
      </div>
    );
}
  
export default Container;