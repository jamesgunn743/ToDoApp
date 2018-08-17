// import { Text } from 'react-native';
// import { Text, } from 'native-base';
import { Constants } from 'expo';
import { observer } from 'mobx-react';
// import {observable} from 'mobx';
import * as React from 'react';
import { TextInput, StyleSheet, View } from 'react-native';
import { observable } from 'mobx';

export interface _TextInputProps {

}

@observer export class _TextInput extends React.Component<_TextInputProps, any>{


    @observable _handleSendButtonPressRefrence: any;
    @observable inputValue: any;

    constructor(props) {
        super(props)

    };

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.formView}>
                    <TextInput
                        style={styles.inputForm}
                        value={this.inputValue}
                        onChangeText={this._handleSendButtonPressRefrence}
                        placeholder="Input todo"
                    />

                </View>

            </View>
        );
    }

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: Constants.statusBarHeight,
        backgroundColor: 'white',
    },
    formView: {
        borderBottomWidth: 1,
        borderColor: '#ccc',
        paddingBottom: 8,
    },
    inputForm: {
        backgroundColor: '#fff',
        width: 320,
        height: 40,
        padding: 8,
        marginBottom: 8,
    },
    todoItem: {
        alignItems: 'center',
        padding: 8,
        width: 320,
        borderBottomWidth: 1.5,
        borderColor: '#e0e0e0',
        backgroundColor: '#fff',

        flex: 1,
        flexDirection: 'row',
    },
    todoText: {
        flex: 1,
    },
});