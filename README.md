# React-JS
React-JS do zero ao avançado


Vamos lá relembrar quais são os Tipos de Componentes?

Como você viu nas aulas no ReactJS nós temos 2 principais tipos de componentes: Componentes com Estados e Componentes sem Estados

Também são conhecidos por (StateLess e StateFull);

Os dois componentes tem as mesmas características, já citadas anteriomente, com a diferença que: um componente com estados possui atributos que poderão ter o seu valor alterado, e a cada alteração, impactarão diretamente na renderização do componente.

Já, os componentes sem estados, são componentes mais simples, que quase sempre só servem para renderizar uma responsabilidade pequena de nossa página.

Outra diferença muito importante é a forma como estes componentes são escritos.

Um componente com estados quase sempre vai ser representado, de fato, por uma classe, por exemplo:

import React, { Component } from "react";
 
class App extends Component {
  render() {
    return(
    <h1>Olá ReactJS</h1>
    );
  }
}
 
export default App;
Note que para este componente nós temos obrigatoriamente que utilizar o método render() pois ele será o responsável por colocar e recolocar as informações na tela.

Mas, EXATAMENTE o mesmo componente, poderia ser escrito da seguinte forma:

import React from "react";
 
const App = () => {
  return( 
    <h1>Olá ReactJS</h1>
  );
};
 
export default App;

//////////////////////////////////////

Ciclos de vida dos Componentes
Então como vimos na aula nos ciclos de vida do componente temos:

Inicialização

Montagem

Atualização

Desmontagem



- Inicialização

Nesta fase, o componente React se prepara para sua inicialização, configurando os estados iniciais e props padrões se houverem.



- Montagem

Depois de preparar com todas as necessidades básicas, estado e props, o nosso Componente React está pronto para ser montado no DOM do navegador.

componentWillMount() É executado quando o componente estiver prestes a ser montado no DOM da página. Assim, após esse método ser executado o componente irá criar o nó no navegador. Todas as coisas que você deseja fazer antes do componente ser montado, devem ser definidas aqui.



componentDidMount() Este é o método que é executado depois que o componente foi montado no DOM



- Atualização

Esta fase começa quando o componente React já nasceu no navegador e cresce recebendo novas atualizações. O componente pode ser atualizado de duas maneiras, através do envio de novas props ou a atualização do seu estado.



componentDidUpdate() é chamado imediatamente após a atualização.



componentWillUpdate() É executado somente quando shouldComponentUpdatedevolver true.



- Desmontagem

Nesta fase, o componente não é mais necessário e será desmontado do DOM. O método que se chama nesta fase é o:

componentWillUnmount()
