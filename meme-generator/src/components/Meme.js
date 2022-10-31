import React from "react"
import memesData from "../memesData"

export default function Meme() {
    function getRandomImage() {
        const memesArray = memesData.data.memes
        const randomMeme = memesArray[Math.floor(Math.random() * memesArray.length)]
        console.log(randomMeme.url)
    }
    return (
        <main>
            <div className="form">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                />
                <button 
                    className="form--button"
                    onClick={getRandomImage}
                >
                    Get a new meme image 🖼
                </button>
            </div>
        </main>
    )
}