import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'pink',
    backgroundColor: 'rgba(100,100,100,0.5)',
    paddingTop: 100,
    zIndex: -1,
  },
  modalView: {
    borderWidth: 1,
    backgroundColor: 'white',
    width: '80%',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'flex-end',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  text: {
    fontSize: 16,
    letterSpacing: 3,
    padding: 20,
    width: '100%',
    textAlign: 'center',
  },

  inputContainer: {
    width: '80%',
    marginHorizontal: 30,
    borderBottomWidth: 0.2,
    marginBottom: 40,
    paddingHorizontal: 20,
  },
});

export default styles;
