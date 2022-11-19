import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import data from '~/api/data.json';
import Items, {ItemsProps} from './components/Items';
import {useSelector} from 'react-redux';
import ModalFilter from './components/ModalFilter';

export default () => {
  const refModal = useRef<any>();
  const dic = useRef({
    onEndReachedCalledDuringMomentum: true,
    page: 1,
  });
  const [isFilter, setFilter] = useState(false);
  const data = useSelector<any>(state => state.assessment.data);
  const listData = useMemo(() => {
    return isFilter ? data?.posts : data?.posts.slice(0, 10);
  }, [isFilter, data]);
  const [posts, setPosts] = useState(listData || {});
  const [refreshing, setRefreshing] = useState(false);

  const renderItem = useCallback(
    ({item, index}: ItemsProps) => {
      return <Items item={item} index={index} />;
    },
    [data],
  );
  const renderFooter = () => {
    return (
      <View
        style={{
          padding: 16,
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        {refreshing ? (
          <ActivityIndicator color="#222" style={{marginLeft: 8}} />
        ) : null}
      </View>
    );
  };
  const handleLoadMore = () => {
    setRefreshing(true);
    if (posts.length < 40) {
      dic.current.page++;
      setPosts(data.posts.slice(0, dic.current.page * 10));
    } else {
      setRefreshing(false);
    }
  };
  const handlerShowFilter = () => {
    setFilter(true);
    refModal.current && refModal.current.setVisible(true);
  };
  const newData = useMemo(() => {
    return data.length ? data : posts;
  }, [data, posts]);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
      }}>
      <TouchableOpacity
        style={{alignSelf: 'flex-end', marginRight: 16}}
        onPress={handlerShowFilter}>
        <Text style={{color: 'black', fontSize: 14, fontWeight: 'bold'}}>
          Filter
        </Text>
      </TouchableOpacity>
      <FlatList
        data={newData}
        renderItem={renderItem}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0}
        onMomentumScrollBegin={() => {
          dic.current.onEndReachedCalledDuringMomentum = false;
        }}
        ListFooterComponent={renderFooter}
        keyExtractor={item => item.id}
      />
      <ModalFilter ref={refModal} />
    </View>
  );
};
