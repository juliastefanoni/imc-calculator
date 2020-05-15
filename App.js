import React, { useState } from 'react';
import { TextInput, TouchableOpacity, View, Text } from 'react-native';
import { TextAnimationSlideLeft } from 'react-native-text-effects';

import getClassification from './Classificacao';
import styles from './styles';

export default function App() {
  const [ altura, setAltura ] = useState("");
  const [ peso, setPeso ] = useState("");
  const [ resultIMC, setResult ] = useState("");
  const [ classification, setClassification] = useState("");

  function calculateIMC() {
    if(!peso || !altura){
      setResult("Preencha todos os campos");
      setClassification("");
      return;
    }

    let result = (peso / ( parseFloat(altura) * parseFloat(altura) )).toFixed(1);
    let classification = 'Classificação: ' + getClassification(result);

    setResult(`IMC: ${result}`);
    setClassification(classification);
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TextAnimationSlideLeft value={"IMC"} duration={500} style={styles.titleHeader}/>
      </View>
      <View style={styles.containerInputs}>
        <TextInput
          keyboardType="decimal-pad"
          style={styles.inputs}
          placeholder="Insira seu peso"
          onChangeText={ (peso) => setPeso(peso) }
        />
        <TextInput
          keyboardType="decimal-pad"
          style={styles.inputs}
          placeholder="Insira sua altura"
          onChangeText={ (altura) => setAltura(altura) }
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={calculateIMC}
        >
        <Text style={styles.textButton}> Calcular </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.resultContainer}>
        <Text style={styles.textResult}> {resultIMC} </Text>
        <Text style={styles.textResult}> {classification} </Text>
      </View>
    </View>
  );
}
