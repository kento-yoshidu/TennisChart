import type { AppProps } from "next/app"
import { QueryClient, QueryClientProvider } from "react-query"

const queryClient = new QueryClient()

import "../styles/global.css"

import "@fortawesome/fontawesome-svg-core/styles.css"
import { config } from '@fortawesome/fontawesome-svg-core'
config.autoAddCss = false

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  )
}
export default MyApp
