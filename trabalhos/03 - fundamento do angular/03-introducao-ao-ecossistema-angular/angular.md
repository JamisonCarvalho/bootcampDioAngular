# Angular

- **Framework** baseado em JavaScript
- **Typescript** como linguagem principal
- **SPAs** são o seu foco
- **Componmentes** são a base da arquitetura
- **Estrutura organizada** e bem definida
- **Sistema de Tooling** muito rico: CLI, HTTP, Router...

### As 4 camadas de um Web App
- **Componentes**
    - Componente é um elemento **visual, customizável e reutilizável**
    - *Exemplo:* um card na tela, botão...
- **Gerenciamento de estado**
    - **States:** Responsável por garantir que as informações dos ccomponentes não esão dessincronizadas e facilitar a comunicação de um componente com outro.
    - *Exemplo:* Atualizar carrinho de ocmpras ao clicar no botão de comprar pde um produto.
        - **Exemplo de ferramentas para gerenciamento de estado:**
            - Flux;
            - Redux;
            - Context API;
            - Recoil;
            - Storeon;
            - Vuex;
            - Ngrx;
            - Ngxs;
- **Roteamento**
    - **Routes ou Routing & Navigation** - Responsável pela forma de navegar fazendo a troca de URL sem recarregar a página, mudando somente os componentes que são mostrados.
    - *Exemplo: meuapp/**login** ; meu app/**home***
        - **Exemplos de bibliotecas:**
            - History API;
            - React-Router;
            - Vue-Router;
            - Angular RoutingModule;
- **Renderização**
    - **Render:** Responsável por decidir a melhor maneira de acessar e entregar para o browser o componente pronto para que ele seja desenhado na janela sem complicações.
    - Existem 3 tipos principais estratégia de renderização:
        - 100% server;
        - Parte server e parte client;
        - 100% client.