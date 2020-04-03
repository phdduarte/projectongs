import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
return (
    <View style={styles.container}>
    <Text style={styles.title}>Oi</Text>
    </View>
    );
}
    
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#7159c1',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title : {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
    }
});
  