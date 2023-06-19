import React ,{useContext, useRef, useState} from 'react'
import {AuthContext} from "../context/AuthContext"
import "./share.css"
import { PermMedia, Label, Room, EmojiEmotions, Cancel } from '@material-ui/icons';
import axios from 'axios';
const Share = () => {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const URLR = process.env.REACT_APP_URL;
    const {user} = useContext(AuthContext);
   const desc = useRef()
   const [file, setFile]= useState(null);
   const submitHandler = async (e) =>{
    e.preventDefault()
    const newPost = {
        userId: user._id,
        desc: desc.current.value
    };
    if (file) {
        let data = new FormData();
        const fileName = Date.now() + file.name;
        data.append("file", file);
        data.append("name", fileName);
        newPost.img = fileName;
      
        try {
          await axios.post("http://localhost:8000/api/upload", data, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
            params: {
              name: fileName,
            },
          });
        } catch (error) {
          console.log(error);
        }
      }
      
    try {
await axios.post(`${URLR}/posts`, newPost);
        window.location.reload()
    } catch (error) {
        
    }
   }
    return (
        <div className="share">
            <div className="shareWrapper">
                <div className="shareTop">
                <img src={user.profilePicture ? PF + '/person/'+user.profilePicture : `${PF}/person/noAvatar.png`} alt="" className="shareProfileImg" />
                <input placeholder={'Whats in your mind ' + user.username + "?"} className="shareInput" 
                    ref={desc}
                />
                </div>
                <hr className="shareHr" />
                {file && (
                    <div className='shareImgContainer'>
                        <img src={URL.createObjectURL(file)} alt='shareImg'/>
                        <Cancel className='shareCancelImg' onClick={()=> setFile(null)} />
                    </div>
                )}
                <form className="shareBottom" onSubmit={submitHandler}>
                    <div className="shareOptions flex-wrap ">
                        <label htmlFor='file' className="shareOption py-2">
                            <PermMedia htmlColor='tomato' className='shareIcon ' />
                            <span className="shareOptionText">Photo or Video </span>
                            <input style={{display: "none"}} type='file' id='file' accept='.png,.jpeg,.jpg' onChange={(e) => setFile(e.target.files[0])}/>
                        </label>
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
                    <button className="shareButton" type='submit'>Share</button>
                </form>
            </div>
        </div>
    )
}

export default Share