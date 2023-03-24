import { Text, View, Image, StyleSheet } from "react-native";
import Title from "../components/ui/Title";
import Colors from "../constants/colors";
import PrimaryButton from "../components/ui/PrimaryButton";

const GameOverScreen = ({roundNumbers, userNumber, onStartNewGame}) =>{

    return (
        <View style={styles.rootContainer}>
            <Title>GAME OVER !</Title>   
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={require('../assets/images/success.png')}/>
            </View>         
            <Text style={styles.summaryText}>
                Your phone need <Text style={styles.highligth}>{roundNumbers}</Text> rounds to 
                guess the number <Text style={styles.highligth}>{userNumber}</Text>
            </Text>
            <PrimaryButton onPress={onStartNewGame}>Start new Game</PrimaryButton>
        </View>
    );

}

const styles = StyleSheet.create({
    rootContainer: {
        flexDirection: "column",
        flex: 1,
        padding: 24,
        justifyContent: "center"
    },
    imageContainer: {
        justifyContent: "center",
        width:300,
        height:300,
        borderRadius: 150,
        borderWidth: 3,
        borderColor: Colors.primary800,
        overflow: "hidden",
        margin: 18
        
    },
    image:{
        width: '100%',
        height: '100%'
    },
    summaryText:{
        fontFamily: 'open-sans',
        fontSize: 24,
        textAlign: "center",
        marginBottom: 24
    },
    highligth: {
        fontFamily: 'open-sans-bold',
        color: Colors.primary500
    }
})

export default GameOverScreen;