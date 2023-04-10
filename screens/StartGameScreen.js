

import { StyleSheet, TextInput, View, Alert, Text, 
    Dimensions, useWindowDimensions, KeyboardAvoidingView, ScrollView } from 'react-native';
import PrimaryButton from '../components/ui/PrimaryButton';
import { useState } from 'react';
import Colors from '../constants/colors';
import Title from '../components/ui/Title';

function StartGameScreen(props){

    const [enteredNumber, setEnteredNumber] = useState('');
    const {width, heigth} = useWindowDimensions();

    const numberInputHandler = (enteredTex) =>{
        setEnteredNumber(enteredTex);
    }

    const resetInputHandler = () =>{
        setEnteredNumber('');
    }

    const confirmInputHandler = () =>{
        const choosenNumber = parseInt(enteredNumber);

        if(isNaN(choosenNumber) || choosenNumber <= 0 || choosenNumber > 99){
            Alert.alert("Invalid Number", 
            "Number has to be a number between 1 and 99.",
            [{text: 'Okay', style: 'destructive', onPress: resetInputHandler}]);
            return;
        }
        console.log(`Number Choosen: ${choosenNumber}`);

        props.onPickNumber(choosenNumber);
    }

    const  marginTopDistance = heigth < 380 ? 30 : 60;

    return (
            <ScrollView style={styles.screen}>
                <KeyboardAvoidingView style={styles.screen} behavior='position'>
                    <View style={[styles.rootContainer, {marginTop: marginTopDistance}]} >
                        <Title>Guess my Number</Title>
                        <View style={styles.inputContainer}>
                            <Text style={styles.instructionsText}>Enter a number</Text>
                            <TextInput value={enteredNumber} onChangeText={numberInputHandler} style={styles.numberInput} maxLength={2} keyboardType='number-pad' autoCapitalize='none' autoCorrect={false}/>
                            <View style={styles.buttonContainer}>
                                <View style={styles.btnContainer}>
                                    <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
                                </View>
                                <View style={styles.btnContainer}>
                                <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
                                </View>
                            </View>
                        </View>
                    </View>
                </KeyboardAvoidingView>
            </ScrollView>
            );
}

//const deviceHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
    screen:{
        flex: 1
    },
    rootContainer:{
        flex: 1,
       // marginTop: deviceHeight < 380 ? 30 : 60,
        alignItems: 'center'
    },
    inputContainer:{
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 36,
        marginHorizontal: 24,
        padding: 16,
        borderRadius: 8,
        backgroundColor: Colors.primary700,
        //for Android shadow
        elevation: 4,
        //for IOS shadow
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.5
    },
    numberInput:{
        height: 50,
        width: 50,
        fontSize: 32,
        borderBottomColor: Colors.accent500,
        borderBottomWidth: 2,
        color: Colors.accent500,
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center',
        
    },
    buttonContainer:{
        flexDirection: 'row'
    },
    btnContainer:{
        flex: 1
    },
    instructionsText:{
        color: Colors.accent500,
        fontSize: 24
    }
})

export default StartGameScreen;