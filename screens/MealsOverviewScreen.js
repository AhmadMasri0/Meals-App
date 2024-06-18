import { FlatList, StyleSheet, Text, View } from "react-native";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import { MealItem } from "../compoents/MealItem";
import { useLayoutEffect } from "react";

export const MealsOverviewScreen = ({ route, navigation }) => {
    const id = route.params.id;

    const displayedMeals = MEALS.filter((meal) => meal.categoryIds.indexOf(id) >= 0)

    useLayoutEffect(() => {
        const catTitle = CATEGORIES.find((cat) => cat.id === id).title;

        navigation.setOptions({ title: catTitle });

    }, [id, navigation]);

    const viewMealDetails = (id) => {

        return navigation.navigate('Meal Details', { id });
    }

    const renderMealItem = (itemData) => {
        return <MealItem item={itemData.item} onPress={viewMealDetails} />
    }
    return <View style={styles.container}>
        <FlatList data={displayedMeals} keyExtractor={(item) => item.id} renderItem={renderMealItem} />
    </View>;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    }
});