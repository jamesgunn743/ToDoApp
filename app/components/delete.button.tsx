// import { Text } from 'react-native';
import { Text, Button } from 'native-base';
import { } from 'expo';
import { observer } from 'mobx-react';
// import {observable} from 'mobx';
import * as React from 'react';

export interface DeleteButtonProps {

}

@observer export class DeleteButton extends React.Component<DeleteButtonProps, any>{

    constructor(props) {
        super(props)
    };

    render() {
        return (
            <Button>
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
        );
    }

}

