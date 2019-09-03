import React from 'react';
import AppBar from '@material-ui/core/AppBar'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import TypoGraphy from '@material-ui/core/Typography'
import ToolBar from '@material-ui/core/ToolBar'


class Menu extends React.Component {

  render() {
    return (
      <div>

        <AppBar color="primary" position="static" >
          <ToolBar>
            <TypoGraphy variant="title" color="inherit">
              <h1> DashBoard </h1>
            </TypoGraphy>
            <List component="nav">
              <ListItem component="div">
                <ListItemText inset>
                  <TypoGraphy color="inherit" variant="title">
                   <div onClick = {() => this.props.changePage('Students')} >Students</div> 
                  </TypoGraphy>
                </ListItemText>
                <ListItemText inset>
                  <TypoGraphy color="inherit" variant="title">
                  <div onClick = {() => this.props.changePage('Classes')} >Classes</div> 
                  </TypoGraphy>
                </ListItemText>
              </ListItem>
            </List>
          </ToolBar>
        </AppBar>
      </div>
    );
  }

}

export default Menu;