import { StyleSheet, Text, View } from "react-native";

export const MealDetails = ({ item, style, textStyles }) => {
    return <View style={[styles.details, style]}>
        <Text style={[styles.detailsItem, textStyles]}>
            {item.duration}m
        </Text>
        <Text style={[styles.detailsItem, textStyles]}>
            {item.complexity.toUpperCase()}
        </Text>
        <Text style={[styles.detailsItem, textStyles]}>
            {item.affordability.toUpperCase()}
        </Text>
    </View>;
}

const styles = StyleSheet.create({
    details: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 8,
        justifyContent: 'center'
    },
    detailsItem: {
        marginHorizontal: 4,
        fontSize: 12
    },
})