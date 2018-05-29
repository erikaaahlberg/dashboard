import React from 'react';
import './Grid.css';
import '../Time/Time.css';

const Container = (props) => {
    return (
      <div className = "container-fluid">
        { props.children }
      </div>
    );
}
  
export default Container;