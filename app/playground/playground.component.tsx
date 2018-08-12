import { observer } from 'mobx-react';
import * as React from 'react';
import { View, Text } from 'react-native'

const settings = require('../../assets/appbuildersettings.json');


export interface PlaygroundProps {
}

@observer export class Playground extends React.Component<PlaygroundProps, any> {



    ref;



    constructor(props) {
        super(props);

        this.state = {
            design: settings
        }

    }

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
        console.log('RENDERING');
        return (



            // < MapViewComponent />

            // <View ref={ref => this.ref = ref} onLayout={async ({ nativeEvent }) => {
            //     console.log('HEIGHT', nativeEvent.layout.height);
            //     const result = await takeSnapshotAsync(this.ref, {
            //         result: 'base64',
            //         quality: 1,
            //         format: 'png'
            //     });

            //     WebsocketService.socket.emit('screenshotUpdate', {
            //         key: 'test',
            //         imageUri: result,
            //         format: 'png',
            //         imageType: 'base64'
            //     });
            // }}>
            //     <Text>Hi Calum</Text>
            // </View>

            <View style={{ flex: 1 }} collapsable={false}>
                <Text>calum is a nonce</Text>
            </View>


            // <VideoComponent
            //     id='jamesiscool'
            // />

        );
    }
}
