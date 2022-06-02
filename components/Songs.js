import { playlistState } from 'atoms/playlistAtom'
import { useRecoilValue } from 'recoil'
import Song from '@components/Song'

export default function Songs() {
  const playlist = useRecoilValue(playlistState)
  return (
    <div className="flex flex-col space-y-1 px-8 pb-28 text-white">
      {playlist?.tracks.items.map((track, i) => (
        <Song key={track.track.id} track={track} order={i} />
      ))}
    </div>
  )
}
