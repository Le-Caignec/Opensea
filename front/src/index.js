import ReactDOM from 'react-dom/client'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import ScrollToTop from './ScrollToTop.js'
import { store } from './Store.js'
import { Provider } from 'react-redux'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import ThemeContextProvider from './Context/ThemeContext.js'

// Apollo Client
const client = new ApolloClient({
  uri: ' http://localhost:8000/subgraphs/name/NFT_Viewer',
  cache: new InMemoryCache(),
})

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter>
    <ThemeContextProvider>
      <ApolloProvider client={client}>
        <Provider store={store}>
          <App />
          <ScrollToTop />
        </Provider>
      </ApolloProvider>
    </ThemeContextProvider>
  </BrowserRouter>,
)
