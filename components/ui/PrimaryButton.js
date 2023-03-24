import { Text, View, Pressable, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

function PrimaryButton({children,onPress}){

    return  (
            <View style={styles.buttonOuterContainer}>
                <Pressable onPress={onPress} android_ripple={{color: Colors.primary600}} style={({pressed}) => pressed ? [styles.buttonInnerContainer,styles.pressedButton] : styles.buttonInnerContainer} >
                    <Text style={styles.buttonText}>{children}</Text>
                </Pressable>
            </View>
            )
}

const styles = StyleSheet.create({
    buttonOuterContainer:{
        borderRadius: 28,
        margin: 4,
        overflow: "hidden"
    },
    buttonInnerContainer: {
        backgroundColor: Colors.primary500,
        paddingVertical: 8,
        paddingHorizontal: 16,
        //Android
        elevation: 2,
        //IOS
        shadowColor: 'white',
        shadowOffset: {width: 0, height:2},
        shadowRadius: 6,
        shadowOpacity: 0.25
    },
    buttonText:{
        color: 'white',
        textAlign: "center"
    },
    pressedButton:{
        opacity: 0.75
    }
});

export default PrimaryButton;