import React from 'react';
import Button from '@material-ui/core//Button'
import AddIcon from '@material-ui/icons//Add'
import TextField from '@material-ui/core//TextField'
import TypoGraphy from '@material-ui/core/Typography'

class students extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.saveItem = this.saveItem.bind(this);
    this.state = {
      newStudentName: 'David',
      newStudentLastName: 'Molina',
  /*    student: [
        {name: 'Jhon', lastName: 'Snow'},
        {name: 'Tyrion', lastName: 'Lannister'}
      ]*/
    };
  }

  handleChange(event, stateName) {
    this.setState({ [stateName]: event.target.value });
  }

  saveItem() {
    const newStudent = {
      name: this.state.newStudentName,
      lastName: this.state.newStudentLastName
    };

    const currentStudents = this.state.students;
    currentStudents.push(newStudent);
    this.setState({
      students: currentStudents
    });
  }

  render() {
    return (
      <div>

        <TextField
          value={this.state.newStudentName}
          onChange={(e) => this.handleChange(e, 'newStudentName')}
        />
        <br/><br/>
        <TextField
          value={this.state.newStudentLastName}
          onChange={(e) => this.handleChange(e, 'newStudentLastName')}
        />
          <br/><br/>
        <Button variant="contained" color="primary" onClick={this.saveItem}>
          Add
             <AddIcon />
        </Button>
      </div>
    );
  }

}

export default students;