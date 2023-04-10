import { StyleSheet, Text, Platform } from "react-native";

const Title = ({children}) =>{
    return (
            <Text style={styles.title}>{children}</Text>
    )
}

const styles = StyleSheet.create({
    title:{
        fontFamily: 'open-sans-bold',
        fontSize: 24,
        //fontWeight: 'bold',
        color: 'white',
        textAlign: "center",
        //borderWidth: Platform.OS === "android" ? 2 : 0,
        borderWidth: Platform.select({ios: 2, android: 0}),
        borderColor: 'white',
        padding: 12
        
    }
});

export default Title;