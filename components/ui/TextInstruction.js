import { View, Text, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

const TextInstruction = ({children,style}) =>{

    return (
        <Text style={[styles.textIntruction,style]}>{children}</Text>
    );
}

const styles = StyleSheet.create({
    textIntruction:{
        fontSize: 24,
        color: Colors.accent500
    }
});

export default TextInstruction;
