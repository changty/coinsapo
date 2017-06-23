import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import S from './Storage'; 
import I from './Investment';

export default class App extends React.Component {
    constructor(props) {
        super(props); 
        const storage = S(); 
        this.state = {
            storage: storage,
            text: "",
            a: 360
        };
    }

    _getData() {
        const self = this; 
        self.state.storage.set("testi", "Einari Kurvinen"); 
        var data = self.state.storage.get("testi")
            .then((result) => {
                console.log("promise", result);
                 self.setState({text: result}); 
            })
            .catch((error) => {
                console.log("error");
                 self.setState({text: "No data"}); 
            });
        // return data; 
    }

    componentDidMount() {
        this._getData();
    }

    render() {

        return (
            <View style={styles.container}>
                <Text>Open up App.js to start working on your app!</Text>
                <Text>Changes you make will automatically reload.</Text>
                <Text>Shake your phone to open the developer menu.</Text>
                <Text>Place holder: {this.state.text}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
