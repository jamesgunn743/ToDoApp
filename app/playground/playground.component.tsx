import { observer } from 'mobx-react';
import * as React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native'
import { Constants } from 'expo';
import { CheckBox, List, ListItem, Button, } from 'native-base';

const settings = require('../../assets/appbuildersettings.json');


export interface PlaygroundProps {
}

@observer export class Playground extends React.Component<PlaygroundProps, any> {

    ref;
    _handleTextChangeRefrence: any;
    _handleSendButtonPressRefrence: any;




    constructor(props) {
        super(props);

        this.state = {
            design: settings,
            inputValue: '',
            toDoListData: [],
            checkBox: true,
        };

        this._handleTextChangeRefrence = this._handleTextChange.bind(this);
        this._handleSendButtonPressRefrence = this._handleSendButtonPress.bind(this);
    }

    _handleTextChange = (value) => {
        const inputValue = value;
        this.setState(() => ({
            inputValue,
        }))
    };

    _handleSendButtonPress = () => {
        if (!this.state.inputValue) {
            return;
        }
        let stuffGetEdit = this.state.toDoListData;

        let newData = {
            textContent: this.state.inputValue,
        };

        stuffGetEdit.push(newData);
        this.setState(() => ({
            toDoListData: stuffGetEdit,
            inputValue: '',
        }));
    };

    componentDidMount() {

    }

    updateDesign(data) {
        console.log('receiving update design', data);

        // Text
        this.setState({
            design: data

        });
        //      ComponentService.updateComponent(data.key, data);
    }


    render() {
        return (
            <View style={styles.container}>
                <View style={styles.formView}>
                    <TextInput
                        style={styles.inputForm}
                        value={this.state.inputValue}
                        onChangeText={this._handleTextChangeRefrence}
                        placeholder="Input todo"
                    />
                    <Button bordered light
                        onPress={this._handleSendButtonPressRefrence}
                    >
                        <Text>Add</Text>

                    </Button>
                </View>

                <List>
                    {this.state.toDoListData.map((item, key) => {
                        return (<ListItem key={key} >
                            <Text>{item.textContent}</Text>
                            <Button

                                onPress={(toDoListDataItemId) => {

                                    let toDoListData = this.state.toDoListData;
                                    toDoListData.splice(toDoListDataItemId, 1);
                                    this.setState(() => ({
                                        toDoListData: toDoListData,
                                    }));
                                }
                                }
                            >

                                <Text>Delete</Text>
                            </Button>
                            <CheckBox checked={this.state.checkBox} onPress={() => {
                                const newstate = !this.state.checkBox;
                                this.setState({
                                    checkBox: newstate
                                });

                            }} />
                        </ListItem>
                        );
                    })}
                </List>

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




