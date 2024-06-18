import { StyleSheet, Text, View } from "react-native"

export const SubTitle = ({ title }) => {

    return <View style={styles.container}>
        <Text style={styles.subTitle}>{title}</Text>
    </View>
}


const styles = StyleSheet.create({
    container: {
        marginVertical: 6,
        marginHorizontal: 12,
        padding: 6,
        borderBottomColor: '#e2b497',
        borderBottomWidth: 2
    },
    subTitle: {
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: 'center',
        color: '#e2b497',
        // textDecorationLine: "underline"
    }
})