import { Pressable } from "react-native";
import { Ionicons } from '@expo/vector-icons'
export const IconButton = ({ icon, color, onPress }) => {

    return <Pressable onPress={onPress} style={({ pressed }) => [{margin: 3}, pressed && { opacity: 0.5 }]}>
        <Ionicons name={icon} color={color} size={24} style={{ margin: 1 }} />
    </Pressable>;
}