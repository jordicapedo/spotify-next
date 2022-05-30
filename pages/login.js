import { getProviders, signIn } from 'next-auth/react'
import Image from 'next/image'

function Login(providers) {
  const SpotifyLogoSrc = '/images/spotify-logo-green.png'
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center bg-black">
      {Object.values(providers).map(provider => (
        <div key={provider.spotify.name}>
          <button
            className="mt-10 rounded-full bg-[#2dd760] py-4 px-24 text-sm font-bold tracking-[2px]"
            onClick={() => signIn(provider.spotify.id, { callbackUrl: '/' })}
          >
            START SESSION
          </button>
        </div>
      ))}
    </div>
  )
}

export default Login

export async function getServerSideProps() {
  const providers = await getProviders()
  return {
    props: {
      providers
    }
  }
}
