import '../styles/globals.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fa } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

import MainContainer from '../components/mainContainer'

library.add(fab, fas)

function MyApp({ Component, pageProps }) {
  return  <MainContainer><Component {...pageProps} /></MainContainer>
}

export default MyApp
