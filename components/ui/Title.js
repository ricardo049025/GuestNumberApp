import { StyleSheet, Text, View } from "react-native";

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
        borderWidth: 2,
        borderColor: 'white',
        padding: 8
    }
});

export default Title;