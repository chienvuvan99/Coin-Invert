import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
export type ItemsProps = {
  item: string;
  index: number;
};
const Items = ({item, index}: ItemsProps) => {
  const navigation = useNavigation<any>();
  const handleDetail = () => {
    navigation.navigate('Detail', {
      author: item?.author,
      summary: item?.summary,
      categories: item?.categories,
    });
  };
  return (
    <TouchableOpacity
      onPress={handleDetail}
      style={{
        marginHorizontal: 8,
        marginTop: 8,
        borderBottomColor: '#CCC',
        borderBottomWidth: 1,
      }}>
      <Text
        style={{color: 'black', padding: 8, fontSize: 16, fontWeight: '500'}}>
        {item?.title}
      </Text>
      <Text
        style={{
          color: '#444',
          paddingHorizontal: 8,
          fontSize: 12,
          paddingBottom: 8,
        }}>
        {item?.publishDate}
      </Text>
    </TouchableOpacity>
  );
};

export default Items;

const styles = StyleSheet.create({});
