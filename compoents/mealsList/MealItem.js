import { Image, Platform, Pressable, StyleSheet, Text, View } from "react-native"
import { MealDetails } from "../MealDetails";

export const MealItem = ({ item, onPress }) => {

    return <View style={styles.mealItem}>
        <Pressable onPress={() => onPress(item.id)} android_ripple={{ color: '#ccc' }} style={({ pressed }) => [pressed ? { opacity: 0.8 } : null]}>
            <View style={styles.innerContainer}>
                <View>
                    <Image style={styles.image} source={{ uri: item.imageUrl }} />
                    <Text style={styles.title}>{item.title}</Text>
                </View>
               <MealDetails item={item}/>
            </View>
        </Pressable>

    </View>;
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 16,
        margin: 5
    },
    mealItem: {
        borderRadius: 8,
        margin: 16,
        backgroundColor: 'white',
        elevation: 5,
        shadowColor: 'gray',
        backgroundColor: 'white',
        shadowOffset: { height: 2, width: 0 },
        shadowOpacity: 0.25,
        shadowRadius: 5,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible'
    },
    innerContainer: {
        borderRadius: 8,
        overflow: 'hidden'
    }
})