import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { store, persistor } from './../src/redux/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'

function MyApp({ Component, pageProps }: AppProps) {
  
    return (
            <Provider store={store}>
                <PersistGate
                    persistor={persistor}
                    loading = {null}
                >
                    <Component {...pageProps} />
                </PersistGate>
            </Provider>     
    ) 
}

export default MyApp
