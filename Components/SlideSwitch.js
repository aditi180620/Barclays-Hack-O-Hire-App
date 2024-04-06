// import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
// import React from 'react'

// export default function SlideSwitch() {
//     const [selectedTab, setSelectedTab] = useState()
//     function tab1(){
//         setSelectedTab(0);
//     }
//     function tab2(){
//         setSelectedTab(1);
//     }
//   return (
//     <View style={styles.container}>
//       <View style={styles.cont2}>
//         <TouchableOpacity style={styles.touch1} onPress={tab1}>
//             <Text style={[styles.textIn, {color:'#fff'}]}>Queries</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.touch1} onPress={tab2}>
//             <Text style={[styles.textIn, {color:'#000'}]}>Complaints</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//     container:{
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     cont2:{
//         width:'80%',
//         height:55, 
//         borderWidth:0.5,
//         borderRadius:15,
//         flexDireaction:'row',
//         alignItems:'center',
//         paddingLeft:5,
//         paddingRight:5,
//         backgroundColor:'#fff',
//     },
//     touch1:{
//         width:'50%',
//         height:50,
//         borderradius:15,
//         justifyContent:'center',
//         alignItems:'center',
//     },
//     textIn:{
//         fontSize:15,
//     }
// });

import React, { useState, useCallback } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

//callback is a hook to memoize function

export default function SlideSwitch() {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabPress = useCallback((index) => {
    setSelectedTab(index);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.cont2}>
        <TouchableOpacity style={[styles.touch1, selectedTab === 0 ? styles.selectedTab : null]} 
        onPress={() => handleTabPress(0)}>
            <Text style={selectedTab === 0 ? styles.selectedText : styles.textIn}>Queries</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.touch1, selectedTab === 1 ? styles.selectedTab : null]} 
        onPress={() => handleTabPress(1)}>
            <Text style={selectedTab === 1 ? styles.selectedText : styles.textIn}>Complaints</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // },
  cont2: {
    // width: '80%',
    height: 40,
    borderWidth: 0.3,
    borderRadius: 17,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 3,
    paddingRight: 3,
    backgroundColor: '#ececec',
    elevation: 3,
  },
  touch1: {
    flex: 1,
    height: 35,
    borderRadius: 17, 
    justifyContent: 'center',
    alignItems: 'center',
  },
  textIn: {
    fontSize: 15,
    color: '#000',
  },
  selectedText: {
    fontSize: 15,
    color: '#fff',
  },
  selectedTab: {
    backgroundColor: '#04b4f0',
  },
});
