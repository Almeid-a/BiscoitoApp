import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      textoFrase: '',
      img: require('./src/imagens/biscoito.png')
    }

    this.quebraBiscoito = this.quebraBiscoito.bind(this);
    
    this.frases = [
      "Acredite em si mesmo e tudo será possível.",
      "O sucesso está no caminho daqueles que persistem.",
      "Grandes realizações começam com pequenos passos.",
      "Seja a mudança que você deseja ver no mundo - Mahatma Gandhi",
      "O segredo da felicidade está em encontrar alegria nas pequenas coisas.",
      "O melhor ainda está por vir.",
      "A vida é uma jornada, não um destino.",
      "Seja corajoso o suficiente para seguir o seu coração e sua intuição - Steve Jobs",
      "O fracasso é apenas uma oportunidade para recomeçar com mais inteligência.",
      "A sorte favorece os corajosos.",
      "A cada novo dia, uma nova oportunidade.",
      "O que você planta hoje, colherá amanhã.",
      "Acredite no poder dos seus sonhos.",
      "O impossível só é impossível até que alguém o faça.",
      "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
      "Siga seus sonhos, eles conhecem o caminho.",
      "A verdadeira sorte é criar suas próprias oportunidades.",
      "O pensamento positivo abre portas para novas possibilidades.",
      "A vida é como andar de bicicleta, para manter o equilíbrio você deve continuar em movimento - Albert Einstein",
      "Você é mais forte do que pensa e mais capaz do que imagina.",
      "A felicidade não é algo pronto, ela vem das suas próprias ações.",
      "O sucesso é a soma de pequenos esforços, repetidos dia após dia - Robert Collier",
      "O futuro pertence àqueles que acreditam na beleza de seus sonhos - Eleanor Roosevelt",
      "Tudo o que a mente pode conceber e acreditar, ela pode conquistar - Napoleon Hill",
      "A cada obstáculo, uma oportunidade de crescimento.",
      "A sorte favorece a mente preparada.",
      "Cada dia é uma nova chance de fazer algo incrível.",
      "Não espere por oportunidades, crie-as.",
      "Nunca é tarde demais para ser quem você poderia ter sido - George Eliot",
      "O otimismo é a fé em ação.",
      "O universo está conspirando a seu favor.",
      "A jornada de mil milhas começa com um único passo - Lao Tsé",
      "A força não vem da capacidade física, mas da vontade indomável - Mahatma Gandhi",
      "O sucesso é a melhor vingança.",
      "Tudo o que você pode imaginar, você pode realizar.",
      "A única maneira de alcançar o impossível é acreditar que é possível.",
      "A sorte segue quem trabalha duro.",
      "Não há atalhos para qualquer lugar que valha a pena ir.",
      "O fracasso é o condimento que dá sabor ao sucesso.",
      "O destino não é uma questão de sorte, mas uma questão de escolha.",
      "A persistência é o caminho do êxito.",
      "A mente é tudo. Você se torna aquilo que você pensa - Buda",
      "Nada é impossível para uma mente determinada.",
      "O sucesso não é final, o fracasso não é fatal: é a coragem de continuar que conta - Winston Churchill",
      "Não importa quantas vezes você caia, o importante é quantas vezes você se levanta.",
      "Seja a mudança que você deseja ver no mundo.",
      "O sucesso não é garantido, mas o fracasso é certo se você não tentar.",
      "A vida é curta, faça cada momento valer a pena.",
      "As melhores coisas da vida muitas vezes vêm das situações mais inesperadas.",
      "Nunca é tarde demais para ser o que você poderia ter sido - George Eliot"
    ];
  }

  quebraBiscoito() {
    let numeroAleatorio = Math.floor(Math.random() * this.frases.length );

    this.setState({
      textoFrase: '" ' + this.frases[numeroAleatorio] + ' "',
      img: require('./src/imagens/biscoitoAberto.png')
    })
  }

  render (){
    return (
      <View style={styles.container}>
        
        <Image
          source={this.state.img}
          style={styles.img}
        />

        <Text style={styles.txtFrase}>{this.state.textoFrase}</Text>

        <TouchableOpacity style={styles.btn} onPress={this.quebraBiscoito}>
          <View style={styles.btnArea}>
            <Text style={styles.btnTxt}>Quebrar Biscoito</Text>
          </View>
        </TouchableOpacity>

      </View>
    );
  } 

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  img: {
    width: 250,
    height: 250,
  },
  txtFrase: {
    fontSize: 20,
    margin: 30,
    fontStyle: 'italic',
    textAlign: 'center'
  },
  btn: {
    width: 230,
    height: 50,
    borderWidth: 2,
    borderColor: '#dd7b22',
    borderRadius: 25,
  },
  btnArea: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnTxt:{
    fontSize: 18,
    fontWeight: 'bold',
    color: '#dd7b22'
  }

});

export default App;