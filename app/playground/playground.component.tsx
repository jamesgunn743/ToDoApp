import { observer } from 'mobx-react';
import * as React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native'
import { Constants } from 'expo';
import { Button, } from 'native-base';
// import { DeleteButton } from '../components/delete.button';
import { observable } from 'mobx';



export interface PlaygroundProps {
}

@observer export class Playground extends React.Component<PlaygroundProps, {}> {


    @observable checkBox: boolean = true;

    @observable inputValue: string;

    @observable toDoListData: any;

    @observable _handleSendButtonPressRefrence: string;

    @observable _handleTextChangeRefrence: string;


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

        //  stuffGetEdit.push(newData);

        this.toDoListData = stuffGetEdit;
        this.inputValue = '';

    };


    render() {
        return (
            <View style={styles.container}>
                <View style={styles.formView}>
                    <TextInput
                        style={styles.inputForm}
                        value={this.inputValue}
                        //     onChangeText={this._handleTextChangeRefrence}
                        placeholder="Input todo"
                    />
                    <Button bordered light
                    //        onPress={this._handleSendButtonPressRefrence}
                    >
                        <Text>Add</Text>

                    </Button>
                </View>

                {/* <List>
                    {this.toDoListData.map((item, key) => {
                        return (<ListItem key={key} >
                            <Text>{item.textContent}</Text>
                            <DeleteButton></DeleteButton>
                            <CheckBox checked={this.checkBox} onPress={() => {
                                const newstate = !this.checkBox;
                                this.setState({
                                    checkBox: newstate
                                });

                            }} />
                        </ListItem>
                        );
                    })}
                </List> */}

            </View >
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




