import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 20,
    alignSelf: 'center'
  },
  headerContainer: {
    marginTop: 50,
    flexDirection: 'row',
    alignSelf: 'center'
  },
  titleHeader: {
    fontSize: 60,
    fontWeight: 'bold',
    color: '#ffa07a'
  },
  containerInputs: {
    marginTop: 180,
    flexDirection: 'row',
    alignSelf: 'center'
  },
  inputs: {
    padding: 30,
    fontSize: 18,
    color: '#fff',
    textAlign: 'center'
  },
  buttonContainer: {
    marginTop: 100,
    alignSelf: 'center'
  },
  button: {
    width: 150,
    padding: 10,
    backgroundColor: "#ffa07a",
    borderRadius: 8,
  },
  textButton: {
    alignSelf: 'center',
    fontWeight: 'bold'
  },
  resultContainer: {
    marginTop: 70,
    alignSelf: 'center',
  },
  textResult: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10
  }
});