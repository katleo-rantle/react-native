import React from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';

const ListScreen = () => {
  const friends = [
    { name: 'friend #1', age: 20 },
    { name: 'friend #2', age: 45 },
    { name: 'friend #3', age: 30 },
    { name: 'friend #4', age: 32 },
    { name: 'friend #5', age: 27 },
    { name: 'friend #6', age: 53 },
    { name: 'friend #7', age: 33 },
    { name: 'friend #8', age: 19 },
  ];
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      keyExtractor={(friend) => friend.name}
      data={friends}
      renderItem={({ item }) => {
        return (
          <Text style={styles.textStyle}>
            {item.name} - Age: {item.age}
          </Text>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 40,
  },
});

export default ListScreen;
