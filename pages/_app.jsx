import '../styles/globals.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'

import TagManager from 'react-gtm-module'
import { useEffect } from "react";


config.autoAddCss = false

import MainContainer from '../components/mainContainer'

library.add(fab, fas)

function MyApp({ Component, pageProps }) {

  useEffect(() => {
    const tagManagerArgs = {
      gtmid: 'GTM-PBMF49V'
    }

    TagManager.initialize(tagManagerArgs)

  },[])

  return  <MainContainer><Component {...pageProps} /></MainContainer>
}

export default MyApp
