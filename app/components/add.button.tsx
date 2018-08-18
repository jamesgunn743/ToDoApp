
// import { Constants } from 'expo';
import { observer } from 'mobx-react';
import { observable } from 'mobx';
import * as React from 'react';
import { Text, } from 'react-native';
import { Button } from 'native-base';



export interface AddButtonProps {

}

@observer export class AddButton extends React.Component<AddButtonProps, any>{

    @observable _handleSendButtonPressRefrence: any;



    constructor(props) {
        super(props)

    };

    render() {
        return (

            <Button bordered dark
                onPress={this._handleSendButtonPressRefrence}
            >
                <Text>Add</Text>
            </Button>
        );
    }

}





