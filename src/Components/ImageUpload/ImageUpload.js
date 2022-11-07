import React, { useState } from 'react'
import { Link } from 'react-router-dom';
const ImageUpload = () => {
const [image, setImage ] = useState("");
const [ url, setUrl ] = useState("");

const uploadImage = () => {
    const data = new FormData()
    data.append("file", image)
    data.append("upload_preset", "singapore")
    data.append("cloud_name","dnceb1qqy")
    fetch("https://api.cloudinary.com/v1_1/dnceb1qqy/image/upload",{
    method:"post",
    body: data
    })
    .then(resp => resp.json())
    .then(data => {
    setUrl(data.url)
    })
    .catch(err => console.log(err))
}
return (
<div>
<div className='upload__container'>
    <h4>Upload a clear image of your item here:</h4>
    <input type="file" onChange= {(e)=> setImage(e.target.files[0])}></input>
    <Link to='/listings'>
        <button onClick={uploadImage}>Upload Image</button>
    </Link>
</div>
<div>
<h4>Preview your image here</h4>
<img 
src={url} 
alt="description"
width="125px"/>
</div>
</div>
)
}
export default ImageUpload;