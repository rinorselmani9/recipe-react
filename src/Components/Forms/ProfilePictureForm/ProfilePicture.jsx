import React, {useRef} from 'react'

const ProfilePicture = ({imageData='', changeImage}) => {
    const fileRef = useRef(null)

    const handleImageChange = (e) => {
        e.preventDefault()
        changeImage(fileRef.current.files[0])
    }
  return (
    <div>
        <img  src={imageData.startsWith('http') ? imageData : process.env.REACT_APP_API_URL + imageData} alt={'profile'} />
        <input ref={fileRef} type='file' onChange={handleImageChange} name='profile-image'/>
    </div>
  )
}

export default ProfilePicture