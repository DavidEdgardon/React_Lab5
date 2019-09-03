import React from 'react';
import Button from '@material-ui/core//Button'
import AddIcon from '@material-ui/icons//Add'
import TextField from '@material-ui/core//TextField'

class classes extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.saveItem = this.saveItem.bind(this);
        this.state = {
            ClassCode: '596',
            ClassName: 'Calculo',
        };
    }

    handleChange(event, stateName) {
        this.setState({ [stateName]: event.target.value });
    }

    saveItem() {
        const newClass = {
            name: this.state.ClassCode,
            lastName: this.state.ClassName
        };

        const currentClass = this.state.Class;
        currentClass.push(newClass);
        this.setState({
            Class: currentClass
        });
    }

    render() {
        return (
            <div>
                <TextField
                    value={this.state.ClassCode}
                    onChange={(e) => this.handleChange(e, 'ClassCode')}
                />
                 <br/><br/>
                <TextField
                    value={this.state.ClassName}
                    onChange={(e) => this.handleChange(e, 'ClassName')}
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

export default classes;