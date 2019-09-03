import React from 'react';
import Switch from '@material-ui/core/Switch';
import Checkbox from '@material-ui/core/Checkbox';

class SecondPanel extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>

                <Switch
                    value="checkedA"
                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                />
                <Checkbox
                    value="checkedA"
                    inputProps={{
                        'aria-label': 'primary checkbox',
                    }}
                />

            </div>
        );

    }

}

export default SecondPanel;