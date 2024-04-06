import React from 'react';
import {View} from 'react-native';
// import BottomNav from '../NavComponents/BottomNav';
import { WebView }  from 'react-native-webview'


const Home = () => {
    return(
        <View>
         <View style={{width: '100%', height: '100%'}}>
            <WebView
                source={{uri: 'http://192.168.158.1:3000/'}}
                javaScriptEnabled={true}
                domStorageEnabled={true}
                onLoad={console.log('Loaded!')}

            />
         </View>
        </View>
    );
}

export default Home;