import { observer } from 'mobx-react';
import * as React from 'react';
import { View, Text, TextInput, StyleSheet, StyleProp, TextStyle } from 'react-native'
import { Constants } from 'expo';
import { Button, } from 'native-base';
import { observable } from 'mobx';


export interface PlaygroundExampleProps {
}

@observer export class PlaygroundExample extends React.Component<PlaygroundExampleProps, any> {


    // Class Varibles

    textToStore: string = ''; //don't need the ui to know about this var
    @observable textToDisplay: string = 'Some text will change here once you push GOGOGO'; // need the ui to update once this changes

    textSizeForDisplay: number = 20;
    @observable textStyle: StyleProp<TextStyle> = { fontSize: this.textSizeForDisplay }; // style for the text 


    // Class functions
    // linked to the TextInput, when the text changes, this function will be run
    onTextInputChangeText(textInputValue) {
        this.textToStore = textInputValue; // set the value that has been typed in to a varible
    }
    // linked to the button, when the button is pressed, it will set this.textToStore to the this.textToDisplay which will update the ui.
    changeTextOnUI() {
        this.textToDisplay = this.textToStore; // set the varible so the ui gets updated
        this.textSizeForDisplay = 32; // sets the size of the fontsize
        this.textStyle = { fontSize: this.textSizeForDisplay, }; // tells the style to be updated
    }

    constructor(props) {
        super(props);

        //Have to bind the class functions to the class
        this.onTextInputChangeText = this.onTextInputChangeText.bind(this)
        this.changeTextOnUI = this.changeTextOnUI.bind(this)
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={this.textStyle}>{this.textToDisplay}</Text>

                <View style={styles.formView}>
                    <TextInput
                        style={styles.inputForm}
                        onChangeText={this.onTextInputChangeText}
                        placeholder="Input text here that will be updated"
                    />
                    <Button primary bordered full
                        onPress={this.changeTextOnUI}
                    >
                        <Text>Change on the UI</Text>
                    </Button>
                </View>


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
        paddingTop: 50,
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




