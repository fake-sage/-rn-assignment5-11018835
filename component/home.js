import { StyleSheet, Text, View, SafeAreaView, ScrollView,Image, FlatList } from 'react-native';
import React from 'react';

const data=[
  {
    id: '1',
    title: 'Sent',
    image: require('../assets/send.png'),
  },
  {
    id: '2',
    title: 'Recieve',
    image: require('../assets/recieve.png'),
  },
  {
    id: '3',
    title: 'Loan',
    image: require('../assets/loan.png'),
  },
  {
    id: '4',
    title: 'Topup',
    image: require('../assets/topUp.png'),
  },
];

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
    <View style={styles.container}>
      <View style={styles.align}>
      <Image source={require('../assets/profile.png')}/>
      <View style={styles.aligm1}>
      <Text style={{paddingLeft:12}} >
      Welcome back,
      
      </Text>
      <Text style={{fontWeight:'bold',fontSize:25}}>  Eric Atsu</Text>
    
      </View>
      
      
      </View>
      <View  style={styles.imageContainer}>
      <Image source={require('../assets/search.png')}/>
      </View>
     
      
      
    </View>
    <View  style={styles.container}>
     <Image source={require('../assets/Card.png')}/> 
    </View>
    <View style={styles.container}>
      <FlatList
      horizontal
      contentContainerStyle={{columnGap:30}}
      data={data}
      keyExtractor={item=>item.id.toString()}
      renderItem={
        ({item}) =>(
          <View style={styles.flex1}>
            <View>
            <Image style={styles.recy} source={item.image}/>
            <Text  >  {item.title}</Text>
            </View>
          
          </View>
  
  
  
  
        )}/>
    </View>
    <View style={styles.container}>
      <View>
      <Text style={{fontWeight:'bold',fontSize:25}}>Transaction</Text>
      </View>
      <View>
      <Text style={{fontWeight:'bold',fontSize:20,color:'blue'}}>Sell All</Text>
      </View>
    </View>
      

    <View style={styles.container1} >
   
    <View style={styles.imageContainer}>
      <Image source={require('../assets/apple.png')}/>
      </View> 
    <View style={{paddingLeft:17}}>
      <Text style={{fontWeight:'bold',fontSize:17}}>Apple Store</Text>
      <Text style={{paddingTop:4}}>Entertainment</Text>
    </View>
     <View style={{paddingLeft:130}}>
      <Text style={{paddingTop:7}}>- $5,99</Text>
     </View>

    </View>



    <View style={styles.container1} >
   
    <View style={styles.imageContainer}>
      <Image source={require('../assets/spotify.png')}/>
      </View> 
    <View style={{paddingLeft:17}}>
      <Text style={{fontWeight:'bold',fontSize:17}}>Spotify</Text>
      <Text style={{paddingTop:4}}>Music</Text>
    </View>
     <View style={{paddingLeft:160}}>
      <Text style={{paddingTop:7}}>- $12,99</Text>
     </View>

    </View>


    
    <View style={styles.container1} >
   
    <View style={styles.imageContainer}>
      <Image source={require('../assets/moneyTransfer.png')}/>
      </View> 
    <View style={{paddingLeft:17}}>
      <Text style={{fontWeight:'bold',fontSize:17}}>Transaction</Text>
      <Text style={{paddingTop:4}}>Money</Text>
    </View>
     <View style={{paddingLeft:130}}>
      <Text style={{paddingTop:7}}>$300</Text>
     </View>

    </View>


    <View style={styles.container1} >
   
   <View style={styles.imageContainer}>
     <Image source={require('../assets/grocery.png')}/>
     </View> 
   <View style={{paddingLeft:17}}>
     <Text style={{fontWeight:'bold',fontSize:17}}>Shopping</Text>
     <Text style={{paddingTop:4}}>City Mall</Text>
   </View>
    <View style={{paddingLeft:150}}>
     <Text style={{paddingTop:7}}>$30</Text>
    </View>

   </View>
    </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    display:'flex',
    flexDirection:'row',
    padding:25,
    justifyContent:'space-between',
    flex: 1,


  },
  container1:{
    display:'flex',
    flexDirection:'row',
    padding:25,
    paddingTop:4
  },
  align:{
    flexDirection:'row',
  },
  aligm1:{
    flexDirection:'column',
    paddingLeft:15
  },
  imageContainer: {
    padding:17,
    borderRadius:74,
    backgroundColor: '#d3d3d3', 
    justifyContent: 'center',
    alignItems: 'center',
  },
 recy:{
  padding:27,
  borderRadius:44,
  backgroundColor: '#d3d3d3', 
  justifyContent: 'center',
  alignItems: 'center',
  resizeMode:"center",
 
 },

});

