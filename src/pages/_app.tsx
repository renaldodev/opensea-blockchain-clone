import '../styles/index.css'
import type { AppProps } from 'next/app'
import {ThirdwebWeb3Provider} from '@3rdweb/hooks'

const supportedIdChainIds=[4]
const connectors={
	injected:{}
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
		<ThirdwebWeb3Provider supportedChainIds={supportedIdChainIds} connectors={connectors}>
			<Component {...pageProps} />
		</ThirdwebWeb3Provider>
	)
}

export default MyApp
