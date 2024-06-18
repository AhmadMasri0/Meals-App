import { FlatList, StyleSheet } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import { CategoryGridTile } from '../compoents/CategoryGridTile';



export const CategoriesScreen = ({ navigation }) => {
    const renderCatItem = (itemData) => {

        return <CategoryGridTile onPress={() => navigation.navigate('Meals Overview', { id: itemData.item.id })}
            title={itemData.item.title}
            color={itemData.item.color} />;
    }
    return <FlatList data={CATEGORIES} renderItem={renderCatItem} numColumns={2} keyExtractor={(item) => item.id} />;
}


const styles = StyleSheet.create({

});