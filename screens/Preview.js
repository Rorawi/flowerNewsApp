import { useFonts } from 'expo-font';
import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Image } from 'react-native';
import { View,Text } from 'react-native';

const Preview = ({route}) => {
    const {img,topic,author,minutes,profile,article} = route.params
    const [fontsloaded] = useFonts({
      Poppins_Black: require("../assets/fonts/Poppins/Poppins-ExtraBold.ttf"),
      Poppins_Medium: require("../assets/fonts/Poppins/Poppins-Medium.ttf")
    })

    if(!fontsloaded) {
      return null
    }

    
    
    return (
      <ScrollView>
      <View style={styles.container}>
        <Image source={img} style={styles.img}/>
        <View>
            <Text style={styles.topic}>{topic}</Text>


            <View style={styles.nameAndMinutes}>
            <Image source={profile} style={styles.profile}/>
            <Text  style={styles.author}>{author}</Text>
            <Text style={styles.minutes}>{minutes}</Text>
            </View>
            <Text style={styles.article}>{article}</Text>
        </View>
      </View>
      </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
      marginHorizontal: 20
    },

    img: {
        width:350,
        height: 260,
        alignSelf: 'center',
        marginTop: 20,
        marginBottom: 15
    },

    nameAndMinutes: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
    },

  profile: {
      width:30,
      height:30,
      borderRadius: 15,
      marginRight: 5
  },

  topic: {
      fontSize: 17,
      color: "#353535",
      fontFamily: "Poppins_Black"
  },

    author: {
      fontFamily: "Poppins_Medium",
      color: 'grey',
      fontSize: 13,
      marginRight: 10
    },

    minutes: {
      fontSize: 12,
      marginLeft: 9,
    },


    article: {
      fontFamily: "Poppins_Medium",
      color: '#353539'
    },

    // profile: {
    //     width:30,
    //     height: 30,
    //     borderRadius: 15,
        
    // },

    // topic: {
    //   fontFamily: "Poppins_Black"
    // },


    // author: {
    //   fontFamily: "Poppins_Medium",
    //   color: 'grey'
    // },
})

export default Preview;



    