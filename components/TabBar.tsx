import { View, Text, TouchableOpacity,StyleSheet } from 'react-native';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/Feather';
import { ColorSpace } from 'react-native-reanimated';

export  function TabBar({ state, descriptors, navigation }:BottomTabBarProps) {
  const icon ={
    index:(props:any)=>  <Icon name="home" size={22}  {...props} />,
    explore:(props:any)=>  <Icon name="compass" size={22}  {...props} />,
    profile:(props:any)=>  <Icon name="user" size={22}  {...props} />,
  }



  return (
    <View style={styles.tabbar}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={route.name}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.tabbarItem}
          >
            {icon [route.name]({
                Color:isFocused?"#673ab7":"#222"
            })}
            <Text style={{ color: isFocused ? '#673ab7' : '#222' }}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
const styles=StyleSheet.create({
    tabbar:{
        position:'absolute',
        bottom:50,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginHorizontal:80,
        backgroundColor:'#fff',
        paddingVertical:15,
        borderRadius:35,
        shadowColor:'#000',
        shadowOffset:{width:0,height:10},
        shadowRadius:10,
        shadowOpacity:0.1
    },
    tabbarItem:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
       


    }
})
