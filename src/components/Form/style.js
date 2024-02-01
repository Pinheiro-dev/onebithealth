import {  SafeAreaView, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    bottom: 0,
    alignItems: 'center',
    paddingTop: 40,
    paddingHorizontal: 20,
    gap: 20,
  },

  containerResult: {
    width: '100%',
    height: 'auto',
    gap: 40,
  },

  form: {
    width: '100%',
    height: 'auto',
    gap: 40,
  },

  containerInputs: {
    gap: 12,
  },
  boxInput: {
    gap: 5,
  }
  ,
  viewLabel: {
    flexDirection: 'row',
    alignItems: 'baseline',
    paddingLeft: 5,
    gap: 5,
  },
  label: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  errorMessage: {
    fontSize: 12,
    color: 'red',
    fontWeight: 'bold',
  },
  input: {
    width: 'auto',
    borderRadius: 15,
    backgroundColor: '#f6f6f6',
    height: 40,
    paddingLeft: 10,
  },
  
  buttonCalculator: {
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    width: 'auto',
    backgroundColor: '#7CE04A',
    paddingVertical: 14,
  },
  textButtonCalculator: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF'
  },

  list: {
    width: '100%',
    height: 'auto',
    bottom: 0,
  },
  containerItem: {
    width: '100%',
    alignItems: "baseline",
    justifyContent: "space-between",
    flexDirection: 'row',
  },
  itemTitle: {
    fontSize: 20,
    color: '#FFFFFF'
  },
  itemResult: {
    fontSize: 20,
    color: 'red'
  },

});

export default styles