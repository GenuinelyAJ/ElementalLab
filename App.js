import React, { Component } from 'react';
import { Alert, Button, StyleSheet, View, Image, ImageBackground, TouchableOpacity, Text, Modal } from 'react-native';
import Header from './components/header';
import SplashScreen from 'react-native-splash-screen';

export default class App extends Component {
constructor(props)
{
    super(props);
    this.state={
        show:false,
        fire1:false,
        fire2:false,
        water1:false,
        water2:false,
        earth1:false,
        earth2:false,
        wind1:false,
        wind2:false,
        equal:false,
        reset:false,
        element: "",
        mixed: "",
    }

}
    render () {
        if ((this.state.fire1) && (this.state.fire2)) {
            Alert.alert('Extra Hot Fire!', 'Fire and Fire created Extra Hot Fire! \n\nPress the reset button to reset your choices!', [
                    {text: "Got it!", onPress:() => console.log('alert closed')}
                    ]);
        }
        else if ((this.state.fire1) && (this.state.water2)) {
            Alert.alert('Steam!', 'Fire and Water created Steam! \n\nPress the reset button to reset your choices!', [
                    {text: "Got it!", onPress:() => console.log('alert closed')}
                    ]);
        }
        else if ((this.state.fire1) && (this.state.earth2)) {
            Alert.alert('Lava!', 'Fire and Earth created Lava! \n\nPress the reset button to reset your choices!', [
                    {text: "Got it!", onPress:() => console.log('alert closed')}
                    ]);
        }
        else if ((this.state.fire1) && (this.state.wind2)) {
            Alert.alert('Firestorm!', 'Fire and Wind created Firestorm! \n\nPress the reset button to reset your choices!', [
                    {text: "Got it!", onPress:() => console.log('alert closed')}
                    ]);
        }
        else if ((this.state.water1) && (this.state.fire2)) {
            Alert.alert('Steam!', 'Water and Fire created Steam! \n\nPress the reset button to reset your choices!', [
                    {text: "Got it!", onPress:() => console.log('alert closed')}
                    ]);
        }
        else if ((this.state.water1) && (this.state.water2)) {
            Alert.alert('Lake!', 'Water and Water created Lake! \n\nPress the reset button to reset your choices!', [
                    {text: "Got it!", onPress:() => console.log('alert closed')}
                    ]);
        }
        else if ((this.state.water1) && (this.state.earth2)) {
            Alert.alert('Ocean!', 'Water and Water created Ocean! \n\nPress the reset button to reset your choices!', [
                    {text: "Got it!", onPress:() => console.log('alert closed')}
                    ]);
        }
        else if ((this.state.water1) && (this.state.wind2)) {
            Alert.alert('Typhoon!', 'Fire and Wind created Typhoon! \n\nPress the reset button to reset your choices!', [
                    {text: "Got it!", onPress:() => console.log('alert closed')}
                    ]);
        }
        else if ((this.state.earth1) && (this.state.fire2)) {
            Alert.alert('Lava!', 'Earth and Fire created Lava! \n\nPress the reset button to reset your choices!', [
                    {text: "Got it!", onPress:() => console.log('alert closed')}
                    ]);
        }
        else if ((this.state.earth1) && (this.state.water2)) {
            Alert.alert('Ocean!', 'Earth and Water created Ocean! \n\nPress the reset button to reset your choices!', [
                    {text: "Got it!", onPress:() => console.log('alert closed')}
                    ]);
        }
        else if ((this.state.earth1) && (this.state.earth2)) {
            Alert.alert('Earthquake!', 'Earth and Earth created Earthquake! \n\nPress the reset button to reset your choices!', [
                    {text: "Got it!", onPress:() => console.log('alert closed')}
                    ]);
        }
        else if ((this.state.earth1) && (this.state.wind2)) {
            Alert.alert('Tornado!', 'Earth and Wind created Tornado! \n\nPress the reset button to reset your choices!', [
                    {text: "Got it!", onPress:() => console.log('alert closed')}
                    ]);
        }
        else if ((this.state.wind1) && (this.state.fire2)) {
            Alert.alert('Firestorm!', 'Wind and Fire created Firestorm! \n\nPress the reset button to reset your choices!', [
                    {text: "Got it!", onPress:() => console.log('alert closed')}
                    ]);
        }
        else if ((this.state.wind1) && (this.state.water2)) {
            Alert.alert('Typhoon!', 'Wind and Water created Typhoon! \n\nPress the reset button to reset your choices!', [
                    {text: "Got it!", onPress:() => console.log('alert closed')}
                    ]);
        }
        else if ((this.state.wind1) && (this.state.earth2)) {
            Alert.alert('Tornado!', 'Wind and Earth created Tornado! \n\nPress the reset button to reset your choices!', [
                    {text: "Got it!", onPress:() => console.log('alert closed')}
                    ]);
        }
        else if ((this.state.wind1) && (this.state.wind2)) {
            Alert.alert('Super Whirl!', 'Wind and Wind created Super Whirl! \n\nPress the reset button to reset your choices!', [
                    {text: "Got it!", onPress:() => console.log('alert closed')}
                    ]);
        }
        else if (this.state.reset == true) {
            Alert.alert('Elements reset!', 'All elements have been reset.', [
                    {text: "Got it!", onPress:() => console.log('alert closed')}
                    ]);
        }
        return (
            <View style={styles.container}>
                <Header/>
                <TouchableOpacity
                onPress={() => {this.setState({show:true, reset: false})}}
                >
                    <View style={styles.info}>
                        <Image source={require('./images/info.png')} />
                    </View>
                </TouchableOpacity>
                <Modal
                transparent={true}
                visible={this.state.show}
                >
                <View style={{backgroundColor:"#000000aa",flex: 1}}>
                    <View style={{backgroundColor: "#ffffff", margin: 50, padding: 40, borderRadius: 10, flex: 1}}>
                        <Text style={{fontSize: 30}}> Instructions:</Text>
                        <Text style={{fontSize: 20}}> </Text>
                        <Text style={{fontSize: 20}}> 1 - Pick the first element.</Text>
                        <Text style={{fontSize: 20}}> </Text>
                        <Text style={{fontSize: 20}}> 2 - Pick the second element.</Text>
                        <Text style={{fontSize: 20}}> </Text>
                        <Text style={{fontSize: 20}}> 3 - The element will be created when two elements are selected.</Text>
                        <Text style={{fontSize: 20}}> </Text>
                        <Text style={{fontSize: 20}}> 5 - To reset, click the redo button.</Text>
                        <Text style={{fontSize: 20}}> </Text>
                        <Text style={{fontSize: 20}}> Have fun lab specialists!</Text>
                        <Text style={{fontSize: 10}}> </Text>
                        <Button title="Close" onPress={() =>{this.setState({show:false})}} />
                    </View>
                </View>
                </Modal>
                <View>
                    <Text style={styles.heading1}>Choose one Element</Text>
                </View>
                <View style={styles.button1Container}>
                    <TouchableOpacity
                    onPress={() => {this.setState({fire1:true, water1:false, earth1: false, wind1: false, element: "Fire", reset: false})}}>
                        <View>
                           <Image source={require('./images/fire.png')} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                    onPress={() => {this.setState({fire1:false, water1:true, earth1: false, wind1: false, element: "Water", reset: false})}}>
                        <View>
                           <Image source={require('./images/water.png')} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                    onPress={() => {this.setState({fire1:false, water1:false, earth1: true, wind1: false, element: "Earth", reset: false})}}>
                        <View>
                           <Image source={require('./images/earth.png')} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                    onPress={() => {this.setState({fire1:false, water1:false, earth1: false, wind1: true, element: "Wind", reset: false})}}>
                        <View>
                           <Image source={require('./images/wind.png')} />
                        </View>
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={styles.heading2}>Choose another Element</Text>
                </View>
                <View style={styles.button2Container}>
                    <TouchableOpacity
                    onPress={() => {this.setState({fire2:true, water2:false, earth2: false, wind2: false, element: "Fire", reset: false})}}>
                        <View>
                           <Image source={require('./images/fire.png')} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                    onPress={() => {this.setState({fire2:false, water2:true, earth2: false, wind2: false, element: "Water", reset: false})}}>
                        <View>
                           <Image source={require('./images/water.png')} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                    onPress={() => {this.setState({fire2:false, water2:false, earth2: true, wind2: false, element: "Earth", reset: false})}}>
                        <View>
                           <Image source={require('./images/earth.png')} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                    onPress={() => {this.setState({fire2:false, water2:false, earth2: false, wind2: true, element: "Wind", reset: false})}}>
                        <View>
                           <Image source={require('./images/wind.png')} />
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={styles.button3Container}>
                    <TouchableOpacity
                    onPress={() => {this.setState({fire1:false, water1:false, earth1: false, wind1: false, fire2:false, water2:false, earth2: false, wind2: false, reset: true, element: ""})}}>
                        <View>
                           <Image source={require('./images/redo.png')} />
                        </View>
                    </TouchableOpacity>
                </View>

                <View>
                    <Text style={styles.heading3}>Chosen Element:</Text>
                    <Text style={styles.heading4}>{this.state.element}</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#e6dcc1"
    },
    heading1: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold'
    },
    heading2: {
        textAlign: 'center',
        fontSize: 20,
        top: 70,
        fontWeight: 'bold'
    },
    heading3: {
        textAlign: 'center',
        fontSize: 30,
        top: 170,
        fontWeight: 'bold'
    },
    heading4: {
        textAlign: 'center',
        fontSize: 30,
        top: 190,
        fontWeight: 'bold'
    },
    button1Container: {
        flexDirection: "row",
        top: 40,
        justifyContent: 'space-evenly',
    },
    button2Container: {
        flexDirection: "row",
        top: 100,
        justifyContent: 'space-evenly',
    },
    button3Container: {
        flexDirection: "row",
        top: 140,
        justifyContent: 'space-evenly',
    },
    info: {
        paddingLeft: 350,
        bottom: 45
    }
})