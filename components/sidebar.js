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

function Sidebar() {
  const { data: session, status } = useSession()

  console.log(session)

  return (
    <div className="border-r border-gray-900 p-5 text-sm text-gray-500">
      <div className="space-y-4">
        <Image
          src="/images/spotify-logo-white.png"
          width={152}
          height={50}
          alt="Logo"
        />
        <button
          className="flex items-center space-x-2 hover:text-white"
          onClick={() => signOut()}
        >
          <LogoutIcon className="mr-3 h-5 w-5" />
          <p className="font-bold">Logout</p>
        </button>
        <button className="flex items-center space-x-2 hover:text-white">
          <HomeIcon className="mr-3 h-6 w-6" />
          <p className="font-bold">Home</p>
        </button>
        <button className="flex items-center space-x-2 hover:text-white">
          <SearchIcon className="mr-3 h-6 w-6" />
          <p className="font-bold">Search</p>
        </button>
        <button className="flex items-center space-x-2 hover:text-white">
          <CollectionIcon className="mr-3 h-6 w-6" />
          <p className="font-bold">Your Library</p>
        </button>
        <hr className="border-t-[0.1px] border-gray-900" />
        <button className="flex items-center space-x-2 hover:text-white">
          <PlusSmIcon className="mr-3 h-6 w-6 rounded-sm bg-gray-500 p-1 text-gray-800" />
          <p className="font-bold">Create Playlist</p>
        </button>
        <button className="flex items-center space-x-2 hover:text-white">
          <HeartIcon className="mr-3 h-6 w-6 rounded-sm bg-gradient-to-r from-indigo-500 to-purple-500 p-1 text-white" />
          <p className="font-bold">Like songs</p>
        </button>
        <button className="flex items-center space-x-2 hover:text-white">
          <BookmarkIcon className="mr-3 h-6 w-6 rounded-sm bg-green-800 p-1 text-green-500" />
          <p className="font-bold">Your episodes</p>
        </button>
        <hr className="border-t-[0.1px] border-gray-900" />
        {/** Playlist */}
        <p className="cursor-pointer hover:text-white">Playlist name...</p>
        <p className="cursor-pointer hover:text-white">Playlist name...</p>
        <p className="cursor-pointer hover:text-white">Playlist name...</p>
        <p className="cursor-pointer hover:text-white">Playlist name...</p>
        <p className="cursor-pointer hover:text-white">Playlist name...</p>
        <p className="cursor-pointer hover:text-white">Playlist name...</p>
        <p className="cursor-pointer hover:text-white">Playlist name...</p>
        <p className="cursor-pointer hover:text-white">Playlist name...</p>
        <p className="cursor-pointer hover:text-white">Playlist name...</p>
        <p className="cursor-pointer hover:text-white">Playlist name...</p>
      </div>
    </div>
  )
}

export default Sidebar
