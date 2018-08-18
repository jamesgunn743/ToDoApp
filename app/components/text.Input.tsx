import { } from 'expo';
import { observer } from 'mobx-react';
import * as React from 'react';
import { TextInput, StyleSheet, } from 'react-native';
import { observable } from 'mobx';

export interface JamesTextInputProps {

}

@observer export class JamesTextInput extends React.Component<JamesTextInputProps, any>{


    @observable _handleSendButtonPressRefrence: any;

    @observable inputValue: any;

    @observable _handleSendButtonPress: any;

    @observable toDoListData: any;



    constructor(props) {
        super(props);



        this._handleTextChange = this._handleTextChange.bind(this);
        this._handleSendButtonPress = this._handleSendButtonPress.bind(this);
    }

    _handleTextChange = (value) => {
        this.inputValue = value;

    };

    _handleSendButtonPress = () => {
        if (!this.inputValue) {
            return;
        }
        let stuffGetEdit = this.toDoListData;

        let newData = {
            textContent: this.inputValue,
        };

        stuffGetEdit.push(newData);

        this.toDoListData = stuffGetEdit;
        this.inputValue = '';
    };


    render() {
        return (


            <TextInput
                style={styles.inputForm}
                value={this.inputValue}
                onChangeText={this._handleSendButtonPressRefrence}
                placeholder="Input todo"
            />

            //     </View>

            // </View>
        );
    }

}
const styles = StyleSheet.create({



    inputForm: {
        backgroundColor: '#fff',
        width: 400,
        height: 40,
        padding: 9,
        marginTop: 20,

    },

});