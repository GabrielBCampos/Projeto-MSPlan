# 📱 MSPlan - Projeto Mobile

Bem-vindo ao repositório do **Projeto Mobile MSPlan**. Este aplicativo é uma solução robusta desenvolvida com **React Native** e **Expo**, demonstrando um fluxo completo de autenticação, persistência de dados local e navegação intuitiva.

## 🚀 Sobre o Projeto

O aplicativo foi projetado para oferecer uma experiência de usuário fluida e segura, operando offline com banco de dados local. Ele serve como base para aplicações que necessitam de controle de usuários e telas institucionais.

### ✨ Funcionalidades Principais

* **🔐 Autenticação Segura:**
    * **Login:** Validação de credenciais contra banco de dados local.
    * **Sign Up (Cadastro):** Registro de novos usuários com validação de campos (Nome, Email, Senha).
* **🗄️ Persistência de Dados:** Uso do `expo-sqlite` para armazenamento seguro e offline das informações dos usuários.
* **ℹ️ Institucional:**
    * **Sobre Nós:** Tela informativa sobre o projeto e o desenvolvedor, com links externos.
    * **Fale Conosco:** Formulário interativo para envio de mensagens e feedback.
* **🎨 UI/UX Moderna:** Interface polida utilizando `expo-linear-gradient` e componentes estilizados (Cards, Sombras, Botões Gradientes).

## 🛠️ Tech Stack

* **Framework:** [React Native](https://reactnative.dev/) com [Expo SDK 54](https://expo.dev/)
* **Linguagem:** JavaScript / TypeScript
* **Navegação:** [React Navigation](https://reactnavigation.org/) (Native Stack)
* **Banco de Dados:** [Expo SQLite](https://docs.expo.dev/versions/latest/sdk/sqlite/)
* **Estilização:** StyleSheet Nativo & Expo Linear Gradient

## 📂 Estrutura do Projeto

A arquitetura foi pensada para escalabilidade e fácil manutenção:

```bash
gabrielbcampos/projetomobile/
├── assets/                 # Imagens, ícones e recursos estáticos
├── components/             # Componentes reutilizáveis (ex: Input.js)
├── model/                  # Modelos de dados (ex: modelUser.js)
├── navigation/             # Configurações de rotas (ex: navigation.tsx)
├── screens/                # Telas da aplicação
│   ├── Login.js            # Tela de Login
│   ├── SignUp.js           # Tela de Cadastro
│   ├── AboutUs.js          # Tela Sobre Nós
│   └── ContactUs.js        # Tela de Fale Conosco
├── service/                # Camada de serviços e banco de dados
│   └── userService.js      # Lógica CRUD do SQLite
├── App.js                  # Ponto de entrada, Providers e Navegação principal
├── app.json                # Configurações do Expo (Nome, Ícone, Splash)
└── package.json            # Dependências do projeto

# 1. Clone o repositório:
```bash
git clone https://github.com/GabrielBCampos/ProjetoMobile
cd ProjetoMobile
```

# 2. Instale as dependências.
```bash
npm install
# ou
yarn install
```

# 3. Execute o projeto

Recomendamos limpar o cache na primeira execução para garantir que as novas rotas sejam carregadas corretamente.

```bash
npx expo start -c
```

# 4. Como testar
Físico: Escaneie o QR Code com o app Expo Go (Android/iOS).

Emulador: Pressione a para Android ou i para iOS no terminal.

## Estrutur do Banco de dados

A aplicação inicializa automaticamente a tabela `usuarios` se ela não existir:

| Coluna | Tipo    | Descrição |
| :--- | :--- | :--- |
| `id` | INTEGER | Chave Primária (Auto Increment) |
| `nome` | TEXT | Nome do usuário |
| `email` | TEXT | E-mail para login |
| `senha` | TEXT | Senha do usuário |

---

Desenvolvido por Gabriel Campos, Vinicius Betazze e Eduardo Scarpini
