import { useContext } from "react"
import { FavoritesContext } from "../store/context/favoritesContext"
import { MealsList } from "../compoents/mealsList/MealsList";
import { MEALS } from "../data/dummy-data";
import { StyleSheet, Text, View } from "react-native";

export const FavoritesScreen = () => {

    const favCtx = useContext(FavoritesContext);

    const favs = MEALS.filter(meal => favCtx.ids.includes(meal.id));

    if (!favs.length) {
        return <View style={styles.view}>
            <Text style={styles.text}>
                You have no Favorite meals..
            </Text>
        </View>
    }
    return <MealsList items={favs} />
}

const styles = StyleSheet.create({
    view: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    text: {
        color: 'white',
        fontSize: 20
    }
})