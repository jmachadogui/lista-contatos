
O projeto consiste em uma lista de contatos com autenticação.
São 4 telas:
- Introdução
- Login
- Contatos
- Cadastro/Edição

Na parte de desenvolvimento, busca-se utilizar o conceito de Atomic Design, criando componentes simples sem muita responsabilidade e, a partir deles, desenvolver sistemas 
mais complexos.

Exemplos:
 - ConfirmPanel.js -> Um modal para confirmação de uma ação do usuário
    - Ele baseia-se no componente ModalBox, que por sua vez, é formado a partir de dois outros componentes: Card e ModalComponent;
- ItemContato.js -> uma forma de card de exibição de um contato, possuindo responsabilidades como editar e deletar;
    - Este componente é formado a partir do compoenent Card junto do componente Texto, que implementa um estilo padrão para os textos do app;

Para estulização utlizou-se styled components na criação dos principais componentes e a forma padrão de estilização do react-native na parte de layouts

### Libs
- React Navigation
    
    npm install @react-navigation/native
    
    npm install react-native-screens react-native-safe-area-context
    
    npm install @react-navigation/native-stack
    
- Axios
    
    npm install axios
    
- Async storage
    
    npm install @react-native-async-storage/async-storage
    
- React native Feather
    
    npm install react-native-svg
    
    npm i react-native-feather
    
- Styled Components
    
    npm install styled-components
    
- React Native Toast Message
    
    npm install --save react-native-toast-message
