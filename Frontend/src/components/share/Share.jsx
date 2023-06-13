import React from 'react'
import "./share.css"
import { PermMedia, Label, Room, EmojiEmotions } from '@material-ui/icons';
const Share = () => {
    return (
        <div className="share">
            <div className="shareWrapper">
                <div className="shareTop">
                    <img src="assets/person/1.jpeg" alt="" className="shareProfileImg" />
                    <input placeholder='Whats in your mind Safak' className="shareInput" />
                </div>
                <hr className="shareHr" />
                <div className="shareBottom">
                    <div className="shareOptions flex-wrap ">
                        <div className="shareOption py-2">
                            <PermMedia htmlColor='tomato' className='shareIcon ' />
                            <span className="shareOptionText">Photo or Video </span>
                        </div>
                        <div className="shareOption py-2">
                            <Label htmlColor='blue' className='shareIcon' />
                            <span className="shareOptionText">Tag </span>
                        </div>
                        <div className="shareOption py-2">
                            <Room htmlColor='green' className='shareIcon' />
                            <span className="shareOptionText">Location </span>
                        </div>
                        <div className="shareOption py-2">
                            <EmojiEmotions htmlColor='goldenrod' className='shareIcon' />
                            <span className="shareOptionText">Feelings </span>
                        </div>
                    </div>
                    <button className="shareButton">Share</button>
                </div>
            </div>
        </div>
    )
}

export default Share