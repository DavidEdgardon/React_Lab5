import React from 'react';
import Button from '@material-ui/core//Button'
import AddIcon from '@material-ui/icons//Add'
import Select from '@material-ui/core//Select'
import TextField from '@material-ui/core//TextField'


class FirstPanel extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div>
                <TextField
                    id="outline-email-input"
                    label="nombre"
                    margin="normal"
                    variant="outlined"
                />
                <br /><br />

                <Select
                    inputProps={{
                        name: 'Edad',
                    }}
                >
                    <option value="" />
                    <option value={10}>10</option>
                    <option value={20}>20</option>
                    <option value={30}>30</option>
                </Select>
                <br /><br />

                <Button variant="contained" color="primary">
                    Add
         <AddIcon />
                </Button>
            </div>
        );
    }
}

export default FirstPanel;