import { StyleSheet,ImageBackground, SafeAreaView } from 'react-native';
import { LinearGradient} from 'expo-linear-gradient';
import { useEffect, useState } from 'react';
//import AppLoading from 'expo-app-loading';
import * as SplashScreen from 'expo-splash-screen'
import {useFonts} from 'expo-font';

import StartGameScreen from './screens/StartGameScreen';
import GameOverScreen from './screens/GameOverScreen';
import GameScreen from './screens/GameScreen';
import Colors from './constants/colors';


export default function App() {

  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);
  const [guessRounds, setGuessRounds] = useState(0);

  const [fontsLoaded] =
  useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  });

  useEffect(() =>{
    async function prepare(){
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  },)



  if(!fontsLoaded){
    return undefined;
  }else
    SplashScreen.hideAsync();

  const pickedNumberHandler = (pickedNumber) =>{
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  }

  const gameOverHandler = (numberOfRounds) => {
    setGameIsOver(true);
    setGuessRounds(numberOfRounds);
  }

  const startNewGame = () =>{
    setUserNumber(null);
    setGuessRounds(0);
  };

  let gamescreen = <StartGameScreen onPickNumber={pickedNumberHandler}/>

  if(userNumber){
    gamescreen = <GameScreen onGameOver={gameOverHandler} userNumber={userNumber}/>
  }

  if(gameIsOver && userNumber){
    gamescreen = <GameOverScreen userNumber={userNumber} roundNumbers={guessRounds} onStartNewGame={startNewGame}/>
  }

  return (
    <LinearGradient colors={[Colors.primary700,Colors.accent500]} style={styles.rootScreen}>
      <ImageBackground source={require('./assets/images/background.png')} resizeMode='cover' style={styles.rootScreen} imageStyle={styles.backgroundImage}>
        <SafeAreaView style={styles.rootScreen}>
          {gamescreen}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1
  },
  backgroundImage:{
    opacity: 0.15
  }
})

