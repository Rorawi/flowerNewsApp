import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
//import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  Entypo,
  AntDesign,
  Ionicons,
  Feather,
  MaterialCommunityIcons,
  FontAwesome,
  SimpleLineIcons,
} from "@expo/vector-icons";

import Profile from "./screens/Profile";
import Settings from "./screens/Settings";
import { useFonts } from 'expo-font';

import ListOfItems from "./screens/ListOfItems";
import Preview from "./screens/Preview";

// const Stack = createStackNavigator()

// export function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="ListOfItem" component={ListOfItems}/>
//         <Stack.Screen name="Preview" component={Preview}/>
//       </Stack.Navigator>
//     </NavigationContainer>
//     // <View>
//     //   <ListOfItems/>
//     // </View>
//   );
// }

const Tab = createBottomTabNavigator();
export default function MyBottomTabs() {
  const [fontsloaded] = useFonts({
    Poppins_Black: require("./assets/fonts/Poppins/Poppins-ExtraBold.ttf"),
    Poppins_Medium: require("./assets/fonts/Poppins/Poppins-Medium.ttf")
  })

  if(!fontsloaded) {
    return null
  }

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="ListOfItem"
          component={ListOfItems}
          options={{
            title: "Discover",
            headerTitleAlign: "center",
            headerLeft: () => {
              return (
                <MaterialCommunityIcons
                  name="dots-grid"
                  size={24}
                  color="black"
                  style={styles.lefticon}
                />
              );
            },
            headerRight: () => {
              return (
                <Ionicons
                  name="search-outline"
                  size={24}
                  color="black"
                  style={styles.righticon}
                />
              );
            },
            tabBarIcon: () => {
              return (
                <Ionicons
                  name="ios-home-outline"
                  size={24}
                  color="dodgerblue"
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="Preview"
          component={Preview}
          options={{
            title: "Read More",
            headerTitleAlign: "left",
            headerStyle: {
              height: 120,
            },
            headerLeft: () => {
              return <View style={styles.headerBefore}></View>;
            },
            headerRight: () => {
              return (
                <View style={styles.iconView}>
                 <TouchableOpacity>
                 <FontAwesome
                    name="headphones"
                    size={24}
                    color="black"
                    style={styles.righticon}
                  />
                 </TouchableOpacity>
                 <TouchableOpacity>
                 <Entypo
                    name="heart-outlined"
                    size={24}
                    color="black"
                    style={styles.righticon}
                  />
                 </TouchableOpacity>
                  <TouchableOpacity>
                  <SimpleLineIcons
                    name="share"
                    size={22}
                    color="black"
                    style={styles.righticon}
                  />
                  </TouchableOpacity>
                </View>
              );
            },
            tabBarIcon: () => {
              return (
                <AntDesign name="folderopen" size={24} color="dodgerblue" />
              );
            },
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarIcon: () => {
              return (
                <Ionicons name="person-outline" size={24} color="dodgerblue" />
              );
            },
          }}
        />
        <Tab.Screen
          name="Settings"
          component={Settings}
          options={{
            tabBarIcon: () => {
              return <Feather name="settings" size={24} color="dodgerblue" />;
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  iconView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  lefticon: {
    marginLeft: 20,
  },

  righticon: {
    marginRight: 20,
    color: "#353535",
  },

  headerBefore: {
    width: 255,
    height: 225,
    borderTopWidth: 120,
    borderLeftWidth: 10,
    borderRadius: 1,
    borderColor: "dodgerblue",
    position: "absolute",
    top: -24,
    left: 0,
  },
});
