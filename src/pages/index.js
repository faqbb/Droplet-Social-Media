import Image from 'next/image'
import '../app/globals.css'
import Link from 'next/link'

export default function Index() {
  return (
    <main className='flex justify-center flex-col items-center'>
      <div className='flex flex-col items-center mt-5 pt-5'>
        <Image src={'/images/drops.png'} height={100} width={200} className='flex w-32 sm:w-48 md:w-56 lg:w-72'></Image>
        <div className='text-2xl md:text-4xl 2lg:text-6xl pt-5 font-bold'>¡Bienvenido a Droplet!</div>
      </div>
      <form className='flex flex-col  max-w-xs items-center pt-5 font-light' id='loginForm'>
        <label  className='font-light '>Nombre de usuario</label>
        <input type='text' className=' bg-slate-800 rounded focus-visible:outline-blue-900'></input>
        <label className='font-light '>Contraseña</label>
        <input type='password'  className=' bg-slate-800 rounded focus-visible:outline-blue-900'></input>
        <button className='rounded bg-blue-900 font-bold mt-3 px-3 py-2'> Ingresar</button>
      </form>
      <div className='flex flex-col items-center pt-5'>
          <div>o si todavia no eres usuario...</div>
          <Link href={'/register'}><button className='rounded bg-blue-900 font-bold mt-3 px-3 py-2'>Registrate</button></Link>
      </div>
      <div>
        <Image src={'/images/dropper.png'} width={200} height={200} className='absolute bottom-5 left-5 opacity-25'></Image>
      </div>
    </main>
  )
}
