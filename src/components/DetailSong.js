import React, { useContext } from 'react'

export default function DetailSong() {
    
    return (
        <div className="col-span-1 p-3">
            <h2 className="text-cyan-500 font-bold">Now Playing</h2>
            <h2 className="text-gray-700 text-2xl">Don't Break my heart</h2>
            <div className="w-[240px] m-auto mt-10">
                <img className="w-full" src="https://kgo.googleusercontent.com/profile_vrt_raw_bytes_1587515396_10843.jpg" alt="avatar"></img>
            </div>
            <div className="flex justify-evenly items-center mt-10">
                <img className='w-[70px] rounded-full' src="https://kgo.googleusercontent.com/profile_vrt_raw_bytes_1587515396_10843.jpg" alt="avatar"></img>
                <span className="text-xl text-white">The Weekend</span>
            </div>
        </div>
    )
}