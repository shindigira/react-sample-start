import React, { Component } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

// import Icon from "react-native-vector-icons/Ionicons";

// Navigators
import {
  DrawerNavigator,
  StackNavigator,
  TabNavigator
} from "react-navigation";

// StackNavigator screens
import ItemList from "./ItemList";
import Item from "./Item";

// TabNavigator screens
import TabA from "./TabA";
import TabB from "./TabB";
import TabC from "./TabC";

// Plain old component
import Plain from "./Plain";

// const MenuButton = ({ navigation }) => {
//   console.log("navigation: ", navigation);
//   return (
//     <View>
//       <TouchableOpacity
//         onPress={() => {
//           /* AND NOW?! */
//           navigation.openDrawer();
//         }}
//       >
//         <Icon
//           name="bars"
//           style={{ color: "white", padding: 10, marginLeft: 10, fontSize: 20 }}
//         />
//       </TouchableOpacity>
//     </View>
//   );
// };

export const Stack = StackNavigator(
  {
    ItemList: { screen: ItemList },
    Item: { screen: Item }
  },
  {
    initialRouteName: "ItemList"
    // ,
    // navigationOptions: ({ navigation }) => ({
    //   // headerStyle: { backgroundColor: "green" },
    //   title: "Logged In to your app!",
    //   headerLeft: <Text onPress={() => navigation.openDrawer()}>Menu</Text>
    // })
  }
);

export const Tabs = TabNavigator(
  {
    TabA: { screen: TabA },
    TabB: { screen: TabB },
    TabC: { screen: Stack }
  },
  {
    order: ["TabA", "TabB", "TabC"],
    navigationOptions: ({ navigation }) => ({
      // headerStyle: { backgroundColor: "green" },
      title: "Logged In to your app!",
      headerLeft: <Text onPress={() => navigation.openDrawer()}>Menu</Text>
    })
  }
);

export const Drawer = DrawerNavigator(
  {
    Stack: { screen: Stack },
    Tabs: { screen: Tabs },
    Plain: { screen: Plain }
  }
  // ,
  // {
  //   navigationOptions: ({ navigation }) => ({
  //     headerStyle: { backgroundColor: "green" },
  //     title: "Logged In to your app!",
  //     headerLeft: <Text onPress={() => navigation.openDrawer()}>Menu</Text>
  //   })
  // }
);
