import Expo from 'expo';
import ModalHost from 'expo/src/modal/ModalHost';
import * as React from 'react';
import { StackNavigator } from 'react-navigation';
import { Playground } from './playground/playground.component';
import { View } from 'react-native';
import { NavigatorService } from './services/navigation.service';


export const AppNavigator = StackNavigator(
    {
        playground: { screen: Playground },

    }, {
        headerMode: 'none',
        initialRouteName: 'playground',
    }
);

export default function () {
    return class MyApp extends React.Component<any, any> {

        constructor(props: any) {
            super(props);
        }

        state = {
            fontLoaded: false
        };

        async componentWillMount() {
            await Expo.Font.loadAsync({

                'Ionicons': require('native-base/Fonts/Ionicons.ttf'),
            });
            this.setState({ fontLoaded: true });
        }

        render() {

            return (
                <ModalHost>
                    <View style={{ flex: 1 }}>
                        {
                            this.state.fontLoaded ? (
                                <AppNavigator ref={nav => {
                                    NavigatorService.setContainer(nav);
                                }} />
                            ) : null
                        }}
                    </View>
                </ModalHost>
            )
        }
    }
}
