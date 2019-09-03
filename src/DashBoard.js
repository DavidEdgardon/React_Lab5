// JavaScript source code
import React from 'react';
import Menu from './Menu';
import FirstPanel from './FirstPanel'
import SecondPanel from './SecondPanel'
import './flexbox.css'

class DashBoard extends React.Component {
  constructor(props) {
    super(props);
    }

  handleChange(currentPage) {
    this.setState({currentComponent : currentPage});
  }

  
  render() {
    return (
      <div>
     
      <center>   <div>Primer Panel</div> <FirstPanel/> </center>
     
      <center>  <div>Segundo Panel</div><SecondPanel/> </center>
      
      </div>
    );
  }
}

export default DashBoard;

