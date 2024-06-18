import { Platform, Pressable, StyleSheet, Text, View } from "react-native";

export const CategoryGridTile = ({ title, color, onPress }) => {
    return <View style={styles.gridItem}>
        <Pressable style={({ pressed }) => [styles.button, pressed ? styles.pressedButton : null]}
            onPress={onPress} android_ripple={{ color: '#ccc' }}>
            <View style={[styles.innerContainer, { backgroundColor: color }]}>
                <Text style={styles.title}>
                    {title}
                </Text>
            </View>
        </Pressable>
    </View>;
}

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 16,
        height: 150,
        borderRadius: 8,
        elevation: 5,
        shadowColor: 'gray',
        backgroundColor: 'white',
        shadowOffset: { height: 2, width: 0 },
        shadowOpacity: 0.25,
        shadowRadius: 5,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible'
    },
    innerContainer: {
        flex: 1,
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,

    },
    button: {
        flex: 1
    },
    pressedButton: {
        opacity: 0.5
    },
    title: {
        fontWeight: 'bold',

    }
});