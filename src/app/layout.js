import './globals.css'
import { Ubuntu } from 'next/font/google'

const ubuntu = Ubuntu({subsets: ['latin']})

export const metadata = {
  title: 'Droplet',
  description: '¡Unete a Droplet y comparte con tus amigos!',
}

export default function App({ Component, pageProps }) {
  return (
    <main className={ubuntu.className}>
      <Component {...pageProps} />
    </main>
  )
}
