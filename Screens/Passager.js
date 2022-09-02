import React, { useEffect, useState } from 'react';
import {
ImageBackground,
SafeAreaView,
ScrollView,
StatusBar,
StyleSheet,
Text,
useColorScheme,
View,
TouchableOpacity,
Image,
Div,
} from 'react-native';

import Colors from '../Components/Colors';

const Passager = () => {
    const isDarkMode = useColorScheme() === 'dark';

    const [listAnimal, setListAnimal] = useState([]);
    useEffect(() => {
    fetch('https://zoo-animal-api.herokuapp.com/animals/rand/10')
    .then(json => json.json())
    .then(res => setListAnimal(res));
  }, []);

    return (
      <>
    <ImageBackground
    accessibilityRole="image"
    testID="new-app-screen-passager"
    source={require('../images/dog.jpg')}
    style={[
        styles.background,
        {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
        },
    ]}
    imageStyle={styles.logo}>
    <Text
        style={[
        styles.text,
        {
            color: isDarkMode ? Colors.white : Colors.black,
        },
        ]}>
        Liste animaux
    </Text>
    </ImageBackground>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        {listAnimal.map(animal => (
          <TouchableOpacity key={animal.id} style={styles.item}>
            <View style={styles.listAnimalContainer}>
              <View style={styles.listAnimalSubContainer}>
                <Image style={styles.animalImage} source={{uri: animal.image_link,}}/>
              </View>
              <View style={styles.listAnimalInfos}>
                  <Text style={styles.listAnimal}>{animal.name}</Text>
                  <Text style={styles.listAnimal}>{animal.animal_type}</Text>
                  <Text style={styles.listAnimal}>Durée de vie : {animal.lifespan}</Text>
                  <Text style={styles.listAnimal}>Habitat : {animal.habitat}</Text>
                  <Text style={styles.listAnimal}>Régime alimentaire : {animal.diet}</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
      </>
);
};


const styles = StyleSheet.create({
    background: {
      paddingBottom: 40,
      paddingTop: 96,
      paddingHorizontal: 32,
    },
    logo: {
      opacity: 0.2,
      overflow: 'visible',
      resizeMode: 'cover',
      /*
       * These negative margins allow the image to be offset similarly across screen sizes and component sizes.
       *
       * The source logo.png image is 512x512px, so as such, these margins attempt to be relative to the
       * source image's size.
       */
      marginLeft: -128,
      marginBottom: -192,
    },
    text: {
      fontSize: 40,
      fontWeight: '700',
      textAlign: 'center',
    },
    item: {
      height: 200,
      padding: 10,
      margin: 10,
      elevation: 10,
      shadowColor: '#52006A',
      backgroundColor: 'white',
    },
    listAnimal: {
      color:'black',
    },
    animalImage: {
      width:120,
      height:180,
      resizeMode: 'cover',
    },
    listAnimalContainer: {
      display: 'flex',
      flexDirection: 'row',
    },
    listAnimalInfos: {
      marginLeft:30,
    },
  });

export default Passager;