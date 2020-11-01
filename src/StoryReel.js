import React from 'react'
import "./StoryReel.css"
import Story from "./Story"
function StoryReel() {
    return (
        <div className="storyReel">
            <Story 
            image= "https://picsum.photos/200"
            profileSrc= "https://picsum.photos/200"
            title = "Kunal Sarda" />

            <Story 
            image= "https://picsum.photos/200"
            profileSrc= "https://picsum.photos/200"
            title = "Himalaya Mishra" />

            <Story 
            image= "https://picsum.photos/200"
            profileSrc= "https://picsum.photos/200"
            title = "Krishna Keservani" />

            <Story 
            image= "https://picsum.photos/200"
            profileSrc= "https://picsum.photos/200"
            title = "Tanmay Gupta" />

            <Story 
            image= "https://picsum.photos/200"
            profileSrc= "https://picsum.photos/200"
            title = "Harshit Chauhan" />

        </div>
    )
}

export default StoryReel
