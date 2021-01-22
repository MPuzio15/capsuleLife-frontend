import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 8,
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  icon: {
    width: 30,
    height: 30,
    alignSelf: 'center',
    borderWidth: 1,
    borderRadius: 50,
    tintColor: 'green',
    paddingLeft: 10,
  },
  nameContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingLeft: 10,
  },
  text: {
    fontSize: 16,
    marginHorizontal: 10,
  },
});

export default styles;
