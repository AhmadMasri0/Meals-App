import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { CategoriesScreen } from './screens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { MealsOverviewScreen } from './screens/MealsOverviewScreen';
import { MealDetailScreen } from './screens/MealDetailScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { FavoritesScreen } from './screens/FavoritesScreen';
import { Ionicons } from '@expo/vector-icons';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {

  return <Drawer.Navigator screenOptions={{
    headerStyle: { backgroundColor: '#351401' },
    headerTintColor: 'white', drawerStyle: {
      backgroundColor: '#351401',
    }, drawerInactiveTintColor: 'white', drawerActiveBackgroundColor: '#e4baa1'
  }}>
    <Drawer.Screen name='Categories' component={CategoriesScreen}
      options={{ drawerIcon: ({ color, size }) => <Ionicons name='list' size={size} color={color} /> }} />
    <Drawer.Screen name='Favorites' component={FavoritesScreen}
      options={{ drawerIcon: ({ color, size }) => <Ionicons name='star-outline' size={size} color={color} /> }} />
  </Drawer.Navigator>
}

export default function App() {
  return (<>
    <StatusBar style='light' />
    <NavigationContainer theme={{ colors: { background: '#3f2f25' } }}>
      <Stack.Navigator screenOptions={{
        headerStyle: { backgroundColor: '#351401' },
        headerTintColor: 'white',
      }}>
        <Stack.Screen name="Meals Categories" component={DrawerNavigation}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen name="Meals Overview" component={MealsOverviewScreen} />
        <Stack.Screen name="Meal Details" component={MealDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>

  </>
  );
}

