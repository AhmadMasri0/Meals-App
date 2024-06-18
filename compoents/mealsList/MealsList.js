import { FlatList, StyleSheet, View } from "react-native";
import { MealItem } from "./MealItem";
import { useNavigation } from "@react-navigation/native";

export const MealsList = ({ items }) => {

    const navigation = useNavigation();
    const renderMealItem = (itemData) => {
        return <MealItem item={itemData.item} onPress={viewMealDetails} />
    }
    const viewMealDetails = (id) => {

        return navigation.navigate('Meal Details', { id });
    }
    return <View style={styles.container}>
        <FlatList data={items} keyExtractor={(item) => item.id} renderItem={renderMealItem} />
    </View>;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    }
});