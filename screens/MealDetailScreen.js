import { Button, Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { MEALS } from "../data/dummy-data";
import { MealDetails } from "../compoents/MealDetails";
import { SubTitle } from "../compoents/mealDetail/SubTitle";
import { List } from "../compoents/mealDetail/List";
import { useContext, useLayoutEffect } from "react";
import { IconButton } from "../compoents/IconButton";
import { FavoritesContext } from "../store/context/favoritesContext";

export const MealDetailScreen = ({ route, navigation }) => {

    const favoritesContext = useContext(FavoritesContext);
    const id = route.params.id;
    const meal = MEALS.find(m => m.id === id);

    const isMealFavorite = favoritesContext.ids.includes(id);   

    const changeFavoriteStatus = () => {

        if (isMealFavorite) {
            favoritesContext.removeFavorite(id);
            return;
        }
        favoritesContext.addFavorite(id);
    }
    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => <IconButton color={'white'} icon={isMealFavorite ? 'star' : 'star-outline'}
                onPress={changeFavoriteStatus} />
        });
    }, [navigation, changeFavoriteStatus]);

    return <ScrollView>
        <View style={{ justifyContent: 'center', alignItems: 'center', marginBottom: 50 }}>
            <Image source={{ uri: meal.imageUrl }} style={styles.image} />
            <Text style={styles.title}>
                {meal.title}
            </Text>
            <MealDetails item={meal} textStyles={{ color: 'white' }} />
            <View style={{ maxWidth: '80%' }}>
                <SubTitle title={'Ingredients'} />
                <List data={meal.ingredients} />
                <SubTitle title={'Steps'} />
                <List data={meal.steps} />
            </View>
        </View>
    </ScrollView>

}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 300
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 8,
        color: 'white'
    },
})