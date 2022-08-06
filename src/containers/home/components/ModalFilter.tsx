import React, {useImperativeHandle, useState} from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  TouchableOpacity,
  TouchableNativeFeedback,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

const ModalFilter = ({}, ref) => {
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch();
  const onBackdropPress = () => {
    setVisible(false);
  };
  useImperativeHandle(ref, () => ({setVisible, visible}));
  const onFilterMonthApril = () => {
    dispatch.assessment.filterToMonth(4);
    setVisible(false);
  };
  const onFilterMonthAugust = () => {
    dispatch.assessment.filterToMonth(8);
    setVisible(false);
  };
  const onFilterMonthDecember = () => {
    dispatch.assessment.filterToMonth(12);
    setVisible(false);
  };
  const data = useSelector<any>(state => state.assessment.data);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
      }}>
      <Modal animationType="fade" transparent={true} visible={visible}>
        <Pressable
          onPress={onBackdropPress}
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0,0,0, 0.7)',
          }}>
          <View
            style={{backgroundColor: 'white', borderRadius: 10, width: '80%'}}>
            <View style={{margin: 16}}>
              <TouchableOpacity
                onPress={onFilterMonthApril}
                style={{
                  borderBottomWidth: 1,
                  borderBottomColor: '#ccc',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    fontSize: 16,
                    color: 'black',
                    padding: 8,
                  }}>
                  Filter by month 4
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={onFilterMonthAugust}
                style={{
                  borderBottomWidth: 1,
                  borderBottomColor: '#ccc',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    fontSize: 16,
                    color: 'black',
                    padding: 8,
                  }}>
                  Filter by month 8
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={onFilterMonthDecember}
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    fontSize: 16,
                    color: 'black',
                    padding: 8,
                  }}>
                  Filter by month 12
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Pressable>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
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
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
export default React.forwardRef(ModalFilter);
