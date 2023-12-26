import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const imagens = [
  require('./assets/biscoito.png'),
  require('./assets/biscoitoAberto.png')
];
const frasetxt = 'Frase da sorte';
const frases = [
  '"Acredite que você pode e você está no meio do caminho." - Theodore Roosevelt',
  '"Não olhe para o relógio; faça o que ele faz. Continue." -Sam Levenson',
  '"Você nunca é velho demais para definir outra meta ou sonhar um novo sonho. "- C. S. Lewis',
  '"A única maneira de fazer um ótimo trabalho é amar o que você faz. " - Steve Jobs',
  '"O sucesso não é definitivo, o fracasso não é fatal: o que conta é a coragem de continuar." - Winston Churchill',
  '"A melhor maneira de prever o futuro é criá-lo." - Abraham Lincoln',
  '"Acredite em você e em tudo o que você é. Saiba que existe algo dentro de você que é maior do que qualquer obstáculo." - Christian D. Larson',
  '"O que você ganha ao alcançar seus objetivos não é tão importante quanto o que você se torna ao atingir seus objetivos." - Zig Ziglar See More',
  '"O único limite para nossa realização de amanhã serão nossas dúvidas de hoje." - Franklin D. Roosevelt',
  '"Comece onde você está. Use o que você tem. Faça o que puder." -Arthur Ashe'
];

function fraseAleatoria() {
  const indiceAleatorio = Math.floor(Math.random() * frases.length);
  return frases[indiceAleatorio];
}

function App() {
  const [index, setIndex] = useState(0);
  const [frase, setFrase] = useState(fraseAleatoria());
  const [fraseTitulo, setFraseTitulo] = useState(true);
  const [botaoVisivel,setBotaoVisivel]= useState(false);

  const onPressButton = () => {
    //Essa função de index, ela muda de 0 pra um (com a função de 'dividir'), do biscoito aberto e fechado, é tipo o valor do array só q o valor tá dando direto no link da imagem
    const newIndex = (index + 1) % imagens.length;
    setIndex(newIndex);

    if (fraseTitulo) {
      setFrase(fraseAleatoria());
      setFraseTitulo(false);
    } else {
      setFrase(frasetxt);
      setFraseTitulo(true);
    }
    setBotaoVisivel(true);
  };    

  const novoBotao = () => {
    setBotaoVisivel(false);
  };
  
  return (
    <View style={styles.container}>

      <TouchableOpacity onPress={() => setFrase(true)}>

        <Text style={styles.titulo}>{fraseTitulo ? frasetxt : frase}</Text>
      </TouchableOpacity>
      
      <Image source={imagens[index]} style={styles.img} />
      
      <TouchableOpacity onPress={onPressButton} style={styles.botao}>
        <Text style={styles.txtbotao}>Quebrar</Text>
      </TouchableOpacity>
      

    </View>
  );





}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',  // cor de fundor que, no caso é branco
    alignItems: 'center', // alinhamento dos items na tela, no caso é para o centro
    justifyContent: 'center', // centralizar
    backgroundColor:'gray'

  },
  titulo:{  // modifica o estilo com o nome titulo
    fontSize: 50, // muda o tamanho fonte
    fontWeight: 'bold'  // muda a espeçura dos caracteres
  },
  img: {
    width:250,
    height:260,
  },
  botao:{
    width:'65%',  // pega 80% da largura
    height:50,  // pega 40 pontos de altura
    backgroundColor: '#ee4540',
    borderRadius:20,
    marginTop:10,
    marginBottom:10,
  
  },
  txtbotao:{
   textAlign:'center',
   color:'white',
   fontSize:35
  },
  
});

export default App;

//O projeto não está completo, pois precisa do botão de "novo biscoito", porém não tenho certeza se conseguirei tempo depois do serviço para finalizá-lo, portanto aqui está o código até onde consegui fazer.
//Tiveram algumas partes que eu tive dificuldade então tive que buscar na internet
//E meus projetos novos no Expo não estão funcionando, portanto esse foi feito por cima de um arquivo antigo
