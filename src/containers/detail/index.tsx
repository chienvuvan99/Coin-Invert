import {View, Text, SafeAreaView, Image} from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';

const Detail = () => {
  const route = useRoute<any>();
  const {author, summary, categories} = route?.params;
  return (
    <SafeAreaView>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Image
          source={{
            uri: `${author.avatar}`,
          }}
          style={{
            width: 40,
            height: 40,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        />
        <Text
          style={{
            fontSize: 16,
            fontWeight: '500',
            textAlign: 'center',
            paddingLeft: 8,
            paddingTop: 8,
            textAlignVertical: 'center',
          }}>
          {author.name}
        </Text>
      </View>
      <Text
        style={{
          fontSize: 16,
          fontWeight: 'bold',
          margin: 16,
        }}>
        Summary
      </Text>
      <Text
        style={{
          fontSize: 16,
          textAlign: 'auto',
          marginHorizontal: 16,
        }}>
        {summary}
      </Text>
      <Text
        style={{
          fontSize: 16,
          fontWeight: 'bold',
          margin: 16,
        }}>
        Categories
      </Text>
      <View>
        {categories.map(item => {
          return (
            <Text
              key={item.id}
              style={{
                fontSize: 16,
                marginHorizontal: 16,
                paddingVertical: 4,
              }}>
              {item?.name}
            </Text>
          );
        })}
      </View>
    </SafeAreaView>
  );
};

export default Detail;
