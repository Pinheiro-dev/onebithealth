import React, { useState } from "react";
import { View, 
         Text, 
         TextInput, 
         TouchableOpacity, 
         Vibration, 
         FlatList,
         TouchableWithoutFeedback,
         Keyboard,
         KeyboardAvoidingView } from "react-native"
import ResultImc from "./ResultImc";
import styles from "./style"

export default function Form() {

    const [height, setHeight] = useState(null)
    const [weight, setWeight] = useState(null)
    const [messageImc, setMessageImc] = useState(null)
    const [imc, setImc] = useState(null)
    const [textButton, setTextButton] = useState("Calcular")
    const [errorMessageHeight, setErrorMessageHeight] = useState(null)
    const [errorMessageWeight, setErrorMessageWeight] = useState(null)
    const [imcList, setImcList] = useState([])

    function imcCalculator() {
        const formatedHeight = height.replaceAll(",", ".")
        const imcResult = (weight/(formatedHeight * formatedHeight)).toFixed(2)
        setImc(imcResult)
        setImcList((arr) => [...arr, {id: new Date().getTime(), imc: imcResult}])
        console.log("lista: ", imcList)
    }

    function resetStatesWithoutImc() {
        setHeight(null)
        setWeight(null)
        setMessageImc("Seu imc é igual:")
        setTextButton("Calcular novamente")
        setErrorMessageHeight(null)
        setErrorMessageWeight(null)
    }

    function validationImc() {
        if (weight != null && height != null) {
            imcCalculator()
            resetStatesWithoutImc()
            return
        }

        if (height == null) {
            setErrorMessageHeight("Campo obrigatório*")
        } else {
            setErrorMessageHeight(null)
        }

        if (weight == null) {
            setErrorMessageWeight("Campo obrigatório*")
        } else {
            setErrorMessageWeight(null)
        }
        Vibration.vibrate()
        setMessageImc(null)
        setImc(null)
        setTextButton("Calcular")
    }

    const Item = ({imc}) => (
        <View style={styles.containerItem}>
            <Text style={styles.itemTitle}> Resultado do IMC:</Text>
            <Text style={styles.itemResult}>{imc}</Text>
        </View>
    );

    return (
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}> 
            <View style={styles.container}> 
                { imc  == null ? 
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.form}>
                        <View style={styles.containerInputs}>
                            <View style={styles.boxInput}>
                                <View style={styles.viewLabel}>
                                    <Text style={styles.label}>Altura</Text>
                                    <Text style={styles.errorMessage}>{errorMessageHeight}</Text>
                                </View>
                                <TextInput
                                style={styles.input}
                                placeholderTextColor='gray'
                                onChangeText={setHeight}
                                value={height}
                                placeholder="Ex. 1.75"
                                keyboardType="numeric"
                                />
                            </View>
                            
                            <View style={styles.boxInput}> 
                                <View style={styles.viewLabel}>
                                    <Text style={styles.label}>Peso</Text>
                                    <Text style={styles.errorMessage}>{errorMessageWeight}</Text>
                                </View>
                                <TextInput
                                style={styles.input}
                                placeholderTextColor='gray'
                                onChangeText={setWeight}
                                value={weight}
                                placeholder="Ex. 75.36"
                                keyboardType="numeric"
                                />
                            </View>
                        </View>

                        <TouchableOpacity
                            style={styles.buttonCalculator}
                            onPress={() => {
                                validationImc()
                            }}
                        >
                            <Text style={styles.textButtonCalculator}> {textButton} </Text>
                        </TouchableOpacity>    
                    </View>
                </TouchableWithoutFeedback>
                : 
                    <View style={styles.containerResult}>
                        <ResultImc message={messageImc} result={imc}/> 
                        <TouchableOpacity
                            style={styles.buttonCalculator}
                            onPress={() => {
                                validationImc()
                            }}
                        >
                            <Text style={styles.textButtonCalculator}> {textButton} </Text>
                        </TouchableOpacity>    
                    </View>
                }
                <FlatList 
                    style={styles.list}
                    data={[...imcList].reverse()}
                    renderItem={({item}) => {
                        return(
                            <Item imc= {item.imc}/>
                        )
                    }}
                    keyExtractor={item => item.id}
                />
            </View>
        </KeyboardAvoidingView>
    );
}