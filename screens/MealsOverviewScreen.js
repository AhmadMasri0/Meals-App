import { FlatList, StyleSheet, Text, View } from "react-native";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import { MealItem } from "../compoents/mealsList/MealItem";
import { useLayoutEffect } from "react";
import { MealsList } from "../compoents/mealsList/MealsList";

export const MealsOverviewScreen = ({ route, navigation }) => {
    const id = route.params.id;

    const displayedMeals = MEALS.filter((meal) => meal.categoryIds.indexOf(id) >= 0)

    useLayoutEffect(() => {
        const catTitle = CATEGORIES.find((cat) => cat.id === id).title;

        navigation.setOptions({ title: catTitle });

    }, [id, navigation]);

  
    return <MealsList items={displayedMeals} />

}

