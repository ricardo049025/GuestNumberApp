import { useState, useEffect } from "react";
import { StyleSheet, Text, View, SafeAreaView, Alert, FlatList } from "react-native";
import Title from "../components/ui/Title";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import Card from "../components/ui/Card";
import TextInstruction from "../components/ui/TextInstruction";
import {Ionicons} from '@expo/vector-icons';
import GuessLogItem from "../components/game/GuessLogItem";

const generateRandomBetween = (min, max, exclude) =>{
    const rndNum = Math.floor(Math.random() * (max - min)) + min;

    if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude);
    } else {
        return rndNum;
    }

}

let min = 1;
let max = 100;

const GameScreen = ({userNumber,onGameOver,roundNumber}) =>{
    const initialGuess = generateRandomBetween(1,100, userNumber);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);
    const [guessRounds, setGuessRounds] = useState([initialGuess]);

    useEffect(()=>{
        if(currentGuess === userNumber)
            onGameOver(guessRounds.length);
    },[currentGuess, userNumber, onGameOver]);

    useEffect(() => {
        min = 1;
        max = 100;
    },[]);

    const nextGuessHandler = (direction) =>{ //direction => lower, greater

        if((direction === 'lower' && currentGuess < userNumber) || (direction === 'greater' && currentGuess > userNumber)){
            Alert.alert("Don't lie", 'You know that this is wrong ...', [{text: 'Sorry !', style: 'cancel'}])
            return;
        }

        if(direction === 'lower')
            max = currentGuess;
        else
            min = currentGuess + 1;
            
        const newRndNumber = generateRandomBetween(min,max,currentGuess);
        setCurrentGuess(newRndNumber);
        setGuessRounds(prevGuessRound => [newRndNumber, ...prevGuessRound]);
    }

    const guessRoundListLength = guessRounds.length;

    return (
        <View style={styles.screen}>
             <Title>Opponent's Guess</Title>
             <NumberContainer>{currentGuess}</NumberContainer>
            <View>
                <Card>
                    <TextInstruction style={styles.instructionText}>Higher or lower ?</TextInstruction>
                    <View style={styles.buttonContainer}>
                        <View style={styles.btnContainer}>
                            <PrimaryButton onPress={nextGuessHandler.bind(this,'lower')}><Ionicons name="md-remove-circle-sharp" size={24} color="white"/></PrimaryButton>
                        </View>
                        <View style={styles.btnContainer}>
                            <PrimaryButton onPress={nextGuessHandler.bind(this,'greater')}><Ionicons name="md-add-circle-sharp" size={24} color="white"/></PrimaryButton>
                        </View>
                    </View>
                </Card>
            </View>
            <View style={styles.listContainer}>
                <FlatList data={guessRounds} 
                renderItem={(itemData) => <GuessLogItem key={itemData.index} roundNumber={guessRoundListLength - itemData.index} guess={itemData.item}/>}
                keyExtractor={(item) => item}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24
    },
    buttonContainer:{
        flexDirection: 'row'
    },
    btnContainer:{
        flex: 1
    },
    instructionText:{
        marginBottom:12
    },
    listContainer:{
        flex: 1,
        padding: 16
    }
});

export default GameScreen;