import {
  HomeIcon,
  SearchIcon,
  PlusSmIcon,
  CollectionIcon,
  LogoutIcon
} from '@heroicons/react/outline'
import Image from 'next/image'
import { signOut, useSession } from 'next-auth/react'
import { HeartIcon, BookmarkIcon } from '@heroicons/react/solid'
import { useEffect, useState } from 'react'
import useSpotify from '../hooks/useSpotify'
import { useRecoilState } from 'recoil'
import { playlistIdState } from '../atoms/playlistAtom'

function Sidebar() {
  const spotifyApi = useSpotify()
  const { data: session, status } = useSession()
  const [playlist, setPlaylist] = useState([])
  const [playlistId, setPlaylistId] = useRecoilState(playlistIdState)

  useEffect(() => {
    if (spotifyApi.getAccessToken()) {
      spotifyApi.getUserPlaylists().then(data => {
        setPlaylist(data.body.items)
      })
    }
  }, [session, spotifyApi])

  return (
    <div className="hidden h-screen flex-col border-r border-gray-900 p-5 pb-28 text-xs text-gray-500 sm:max-w-[12rem] md:inline-flex lg:max-w-[15rem] lg:text-sm">
      <div className="space-y-4">
        <Image
          src="/images/spotify-logo-white.png"
          width={140}
          height={40}
          alt="Logo"
        />
        <hr className="border-none" />
        <button className="sidebar-button">
          <HomeIcon className="mr-3 h-6 w-6" />
          <p className="font-semibold">Home</p>
        </button>
        <button className="sidebar-button">
          <SearchIcon className="mr-3 h-6 w-6" />
          <p className="font-semibold">Search</p>
        </button>
        <button className="sidebar-button">
          <CollectionIcon className="mr-3 h-6 w-6" />
          <p className="font-semibold">Your Library</p>
        </button>
        <hr className="border-none" />
        <button className="sidebar-button">
          <PlusSmIcon className="mr-3 h-6 w-6 rounded-sm bg-[#b3b3b3] text-gray-600" />
          <p className="font-semibold">Create Playlist</p>
        </button>
        <button className="sidebar-button">
          <HeartIcon className="mr-3 h-6 w-6 rounded-sm bg-gradient-to-r from-indigo-500 to-purple-500 p-1 text-white" />
          <p className="font-semibold">Like songs</p>
        </button>
        <button className="sidebar-button">
          <BookmarkIcon className="mr-3 h-6 w-6 rounded-sm bg-green-800 p-1 text-green-500" />
          <p className="font-semibold">Your episodes</p>
        </button>
        <hr className="border-t-[0.1px] border-gray-900" />
        {/** Playlist */}
      </div>
      <div className="space-y-4 overflow-y-scroll  pt-4 scrollbar-hide">
        {playlist.map(playlist => (
          <p
            key={playlist.id}
            onClick={() => setPlaylistId(playlist.id)}
            className="cursor-pointer truncate text-[#b3b3b3] hover:text-white"
          >
            {playlist.name}
          </p>
        ))}
      </div>
    </div>
  )
}

export default Sidebar
