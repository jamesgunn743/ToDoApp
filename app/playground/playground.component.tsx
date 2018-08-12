// import { observer } from 'mobx-react';
// import * as React from 'react';
// import { View, } from 'react-native'

// import { GeneratorComponent } from '../components/generator/generator.component';
// import { ComponentService } from '../services/component.service';
// import { WebsocketService } from '../services/websocket.service';

// const settings = require('../../assets/appbuildersettings.json');


// export interface PlaygroundProps {
// }

// @observer export class Playground extends React.Component<PlaygroundProps, any> {



//     ref;



//     constructor(props) {
//         super(props);

//         this.state = {
//             design: settings
//         }

//         // componentDesignUpdate
//         WebsocketService.socket.on('designUpdate', this.updateDesign.bind(this));

//         //        componentUpdate
//         WebsocketService.socket.on('componentDesignUpdate', this.updateComponentDesign.bind(this));

//         WebsocketService.socket.on('componentsDesignUpdate', (data) => {
//             data.map((item) => {
//                 try {
//                     ComponentService.updateComponent(item.key, item);
//                     this.updateComponent(item.componentChildren);
//                 } catch {
//                     WebsocketService.socket.emit('designReload', {});
//                 }
//             });
//         });

//     }

//     updateComponent(components) {
//         if (!components) return;
//         components.map((item) => {
//             ComponentService.updateComponent(item.key, item);

//             if (item.componentChilden) {
//                 this.updateComponent(item.componentChildren);
//             }
//         });
//     }

//     updateComponentDesign(data) {
//         try {
//             console.log('receiving update component design', data);
//             // Text
//             ComponentService.updateComponent(data.key, data);
//         } catch (error) {
//             WebsocketService.socket.emit('componentError', {
//                 message: 'Hi Angus, this is really really broken'
//             });
//         }

//     }

//     componentDidMount() {
//         WebsocketService.socket.emit('designReload', {});
//     }

//     updateDesign(data) {
//         console.log('receiving update design', data);

//         // Text
//         this.setState({
//             design: data
//         });
//         //      ComponentService.updateComponent(data.key, data);
//     }

//     render() {
//         console.log('RENDERING');
//         return (



//             // < MapViewComponent />

//             // <View ref={ref => this.ref = ref} onLayout={async ({ nativeEvent }) => {
//             //     console.log('HEIGHT', nativeEvent.layout.height);
//             //     const result = await takeSnapshotAsync(this.ref, {
//             //         result: 'base64',
//             //         quality: 1,
//             //         format: 'png'
//             //     });

//             //     WebsocketService.socket.emit('screenshotUpdate', {
//             //         key: 'test',
//             //         imageUri: result,
//             //         format: 'png',
//             //         imageType: 'base64'
//             //     });
//             // }}>
//             //     <Text>Hi Calum</Text>
//             // </View>

//             <View style={{ flex: 1 }} collapsable={false}>
//                 <GeneratorComponent componenetChildren={this.state.design} />
//             </View>


//             // <VideoComponent
//             //     id='jamesiscool'
//             // />

//         );
//     }
// }
