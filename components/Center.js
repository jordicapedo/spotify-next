import { ChevronDownIcon, LogoutIcon } from '@heroicons/react/outline'
import { playlistIdState, playlistState } from 'atoms/playlistAtom'
import useSpotify from 'hooks/useSpotify'
import { signOut, useSession } from 'next-auth/react'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import Songs from '@components/Songs'

const colors = [
  'from-indigo-500',
  'from-purple-500',
  'from-pink-500',
  'from-red-500',
  'from-orange-500',
  'from-yellow-500',
  'from-green-500',
  'from-teal-500',
  'from-blue-500'
]

export default function Center() {
  const { data: session } = useSession()
  const spotifyApi = useSpotify()
  const [color, setColor] = useState(null)
  const playlistId = useRecoilValue(playlistIdState)
  const [playlist, setPlaylist] = useRecoilState(playlistState)

  useEffect(() => {
    setColor(colors[Math.floor(Math.random() * colors.length)])
  }, [playlistId])

  console.log('center Picked playlist: ', playlistId)

  useEffect(() => {
    spotifyApi
      .getPlaylist(playlistId)
      .then(data => {
        console.log('data:', data)
        setPlaylist(data.body)
      })
      .catch(err => {
        console.error('Something went wrong!', err)
      })
  }, [spotifyApi, playlistId])

  console.log('playlist: ', playlist)

  return (
    <div className="h-screen flex-grow overflow-y-scroll bg-[#121212] scrollbar-hide">
      <header className="absolute top-5 right-8">
        <div
          onClick={signOut}
          className="flex cursor-pointer items-center space-x-3 rounded-full bg-[#282828] bg-opacity-80 p-[2px] text-white hover:bg-opacity-100 lg:pr-2"
        >
          <img
            className="h-7 w-7 rounded-full"
            src={session?.user?.image}
            alt=""
          />
          <h2 className="hidden text-sm font-bold lg:inline">
            {session?.user.name}
          </h2>
          <ChevronDownIcon className=" hidden h-5 w-5 lg:inline" />
        </div>
      </header>
      <section
        className={`flex h-80 items-end
      space-x-7 bg-gradient-to-b p-8 ${color} to-[#121212] text-white
      `}
      >
        <img
          className="h-44 w-44 shadow-2xl"
          src={playlist?.images[0]?.url}
          alt="Playlist image"
        />
        <div className="flex flex-col">
          <p className="text-xs font-semibold opacity-80">PLAYLIST</p>
          <h1 className="mb-4 text-2xl font-bold sm:text-4xl md:text-4xl xl:text-6xl">
            {playlist?.name}
          </h1>
          <p className="opacity-50">{playlist?.description}</p>
          <div className="text-sm">
            <span className="font-semibold">
              {playlist?.owner.display_name} ·
            </span>{' '}
            {playlist?.followers.total > 0 ? (
              <span className="font-thin">
                {playlist?.followers.total} "likes" · {playlist?.tracks.total}{' '}
                songs
              </span>
            ) : (
              <span className="font-thin">{playlist?.tracks.total} songs</span>
            )}
          </div>
        </div>
      </section>
      <div className="">
        <Songs />
      </div>
    </div>
  )
}
