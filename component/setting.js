
import React, { useState } from "react";
import { View, Text, SafeAreaView, StyleSheet, Platform, FlatList, Switch } from "react-native";
import { Ionicons } from '@expo/vector-icons';

const settings = [
  { id: 0, info: 'Language' },
  { id: 1, info: 'My Profile' },
  { id: 2, info: 'Contact Us' },
  { id: 3, info: 'Change Password' },
  { id: 4, info: 'Privacy Policy' },
];

export default function Setting() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleSwitch = () => setIsDarkMode(previousState => !previousState);

  return (
    <SafeAreaView style={[styles.container, isDarkMode ? styles.darkMode : styles.lightMode]}>
      <View style={{ alignItems: 'center', marginTop: 20 }}>
        <Text style={[styles.title, isDarkMode ? styles.darkText : styles.lightText]}>Settings</Text>
      </View>
      <View style={{ marginTop: 40 }}>
        <FlatList
          data={settings}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={[styles.itemContainer, isDarkMode ? styles.darkBorder : styles.lightBorder]}>
              <View style={styles.item}>
                <Text style={[styles.itemText, isDarkMode ? styles.darkText : styles.lightText]}>{item.info}</Text>
              </View>
              <View>
                <Ionicons name="chevron-forward-outline" size={24} color={isDarkMode ? "white" : "black"} />
              </View>
            </View>
          )}
        />
      </View>
      <View style={styles.switchContainer}>
        <Text style={[styles.switchLabel, isDarkMode ? styles.darkText : styles.lightText]}>Theme</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isDarkMode ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isDarkMode}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    paddingTop: Platform.OS === 'android' ? 10 : 0,
    marginHorizontal: 20,
  },
  lightMode: {
    backgroundColor: '#fff',
  },
  darkMode: {
    backgroundColor: '#000',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  lightText: {
    color: '#333',
  },
  darkText: {
    color: '#fff',
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
  },
  lightBorder: {
    borderBottomColor: 'gray',
  },
  darkBorder: {
    borderBottomColor: '#555',
  },
  item: {
    padding: 20,
  },
  itemText: {
    fontSize: 20,
    fontWeight: '500',
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    padding: 20,
  },
  switchLabel: {
    fontSize: 18,
  },
});
