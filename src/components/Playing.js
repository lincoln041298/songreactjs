import React, { useContext } from 'react'
import AudioPlayer from 'react-h5-audio-player'
import 'react-h5-audio-player/lib/styles.css';
import { songs } from '../context'

export default function Playing() {
    const {song, handleSetSong} = useContext(songs)
    const handleClickNext = () => {
        handleSetSong(song.id + 1)
    }

    const handleClickPre = () => {
        handleSetSong(song.id - 1)
    }
    return (
        <div>
            <AudioPlayer className="player-music" src={song.url} layout="stacked-reverse" showSkipControls={true} showJumpControls={false}
            onClickNext={handleClickNext}
            onClickPrevious={handleClickPre}
            />
        </div>
    )
}