import { StyleSheet, View } from "react-native";
import Colors from "../../constants/colors";

const Card = ({children}) => {
    return (
        <View style={styles.cardContainer}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    cardContainer:{
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
});

export default Card;