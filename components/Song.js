import useSpotify from 'hooks/useSpotify'
import { millisToMinutesAndSeconds } from '../lib/time'
import { currentTrackIdState, isPlayingState } from '../atoms/songAtom'
import { useRecoilState } from 'recoil'

export default function Song({ order, track }) {
  const spotifyApi = useSpotify()
  const [currentTrackId, setCurrentTrackId] =
    useRecoilState(currentTrackIdState)
  const [isPlaying, setIsPlaying] = useRecoilState(isPlayingState)

  const playSong = async () => {
    setCurrentTrackId(track.track.id)
    setIsPlaying(true)
    await spotifyApi.play({
      uris: [track.track.uri]
    })
  }

  return (
    <div
      onClick={playSong}
      className="grid cursor-pointer grid-cols-[1fr_7fr_7fr] rounded-xl py-2 px-5 text-[#b3b3b3] hover:bg-[#2a2a2a] md:grid-cols-[1fr_10fr_10fr] xl:grid-cols-[1fr_14fr_14fr]"
    >
      <div className="flex items-center">
        <p className="">{order + 1}</p>
      </div>
      <div className="flex items-center space-x-4">
        <img
          className="h-10 w-10"
          src={track.track.album.images[0]?.url}
          alt=""
        />
        <div>
          {setIsPlaying && currentTrackId === track.track.id ? (
            <p
              id="song-name"
              className="w-36 truncate font-light text-green-500 lg:w-64"
            >
              {track.track.name}
            </p>
          ) : (
            <p
              id="song-name"
              className="w-36 truncate font-light text-white lg:w-64"
            >
              {track.track.name}
            </p>
          )}

          <p className="w-40 text-xs font-light">
            {track.track.artists[0].name}
          </p>
        </div>
      </div>
      <div className="ml-auto flex items-center justify-between md:ml-0">
        <p className="hidden w-40 truncate text-sm font-light md:inline">
          {track.track.album.name}
        </p>
        <p className="text-sm font-light">
          {millisToMinutesAndSeconds(track.track.duration_ms)}
        </p>
      </div>
    </div>
  )
}
