import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      marginTop: 40,
      alignItems: 'center',
      width: '100%',
      gap: 10,
    },

    information: {
      fontSize: 18,
      color: '#FF0043',
      fontWeight: 'bold'
    },
    numberImc: {
      fontSize: 48,
      color: '#FF0043',
      fontWeight: 'bold'
    },

    boxSharedButton: {
      width: 'auto',
      alignItems: 'center',
    },
    sharedButton: {
      backgroundColor: "#1877F2",
      borderRadius: 50,
      paddingBottom: 5,
      paddingTop: 5,
    },
    sharedText: { 
      color: '#FFFFFF',
      fontWeight: 'bold',
      paddingHorizontal: 30,
    },

})

export default styles