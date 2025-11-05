import React, {useState} from 'react';
import { StyleSheet, Text, View, Pressable, Modal } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
export default function App() {
  const [modalVisible, setModalVisible] = useState(false)
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
       <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.container}>
            <View style={styles.modalView}>
              <Text style={styles.text}>This is modal...</Text>
              <Pressable
                onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textClose}>Close</Text>
              </Pressable> 
            </View>
          </View>
        </Modal>
      <Pressable
      onPress={() => setModalVisible(true)}>
        <Text 
        style={styles.text}>
        Show modal message
        </Text>
      </Pressable>
      <StatusBar style="auto" />
    </SafeAreaView>
  </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
  },
    modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  textClose: {
    fontSize: 16,
    marginTop: 15,
    fontWeight: 'bold',
  }
});
