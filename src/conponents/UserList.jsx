import React, { useEffect, useState } from 'react'
import UserTable from './UserTable'

const UserList = () => {
  const [listUsers, setListusers] = useState([])
    const [EditUserIndex, setEditUserIndex] = useState(null)
    const [user, setUser] = useState({
        name: "",
        email: "",
        language: [],
        hobbies: [],
        gender: "",
        option: "",
        course: "",
        address: "",
        file: ""
    })

    const handlechange = (e) => {
        const {name, value, checked, type, files} = e.target
        setUser((prev)=>({
            ...prev, [name]:
            type === "checkbox"
            ? Array.isArray(prev[name])
            ? checked
            ? [...prev[name], value]
            : prev[name].filter((val)=>val === value)
            : checked
            : type === "file"
            ? files[0] : value
            
        }))
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if(EditUserIndex !== null) {
            const updatedEditUsers = [...listUsers];
            updatedEditUsers[EditUserIndex] = user
            setListusers(updatedEditUsers)
            localStorage.setItem("UserDataInfo", JSON.stringify(updatedEditUsers))
            setEditUserIndex(null)
        } else {
            saveLocal()
        }

        setUser({
        name: "",
        email: "",
        language: [],
        hobbies: [],
        gender: "",
        option: "",
        course: "",
        address: "",    
        file: ""})

    }

    const DeleteUser = (i) => {
        const updatedDeletUser = listUsers.filter((_, index) => index !== i)
        setListusers(updatedDeletUser)
        localStorage.setItem("UserDataInfo", JSON.stringify(updatedDeletUser))
    }

    const EditUser = (i) => {
        const userToBeEdit = listUsers[i]
        setUser(userToBeEdit)
        setEditUserIndex(i)
    }

    useEffect(()=>{LoadData()},[])

    const LoadData = () => {
        const existingUsers = JSON.parse(localStorage.getItem("UserDataInfo")) || []
        setListusers(existingUsers)
    }

    const saveLocal = () => {
        const updatedUsers = [...listUsers, user];
        localStorage.setItem("UserDataInfo", JSON.stringify(updatedUsers))
        setListusers(updatedUsers)
    }
  return (
    <>
    <div>
        <label htmlFor="">Name</label>
        <input type="text" name='name' value={user.name} onChange={handlechange}/><br />
        <label htmlFor="">Email</label>
        <input type="email" name='email' value={user.email} onChange={handlechange}/><br />
        <label htmlFor="">Languages</label><br /><br />
        <label htmlFor=""><input type="checkbox" name='language' value='Telugu' checked={user.language.includes("Telugu")} onChange={handlechange}/>Telugu</label><br />
        <label htmlFor=""><input type="checkbox" name='language' value='kannada' checked={user.language.includes("kannada")} onChange={handlechange}/>Kannada</label><br />
        <label htmlFor=""><input type="checkbox" name='language' value='Tamil' checked={user.language.includes("Tamil")} onChange={handlechange}/>Tamil</label><br />
        <label htmlFor=""><input type="checkbox" name='language' value='Maliyalam' checked={user.language.includes("Maliyalam")} onChange={handlechange}/>Maliyalam</label><br />
        <label htmlFor="">Hobbies</label><br /> <br />
        <label htmlFor=""><input type="checkbox" name='hobbies'value='writting' checked={user.hobbies.includes("writting")} onChange={handlechange} />Writting</label><br />
        <label htmlFor=""><input type="checkbox" name='hobbies'value='eatting' checked={user.hobbies.includes("eatting")} onChange={handlechange} />Eatting</label><br />
        <label htmlFor=""><input type="checkbox" name='hobbies'value='playing' checked={user.hobbies.includes("playing")} onChange={handlechange} />Playing</label><br />
        <label htmlFor=""><input type="checkbox" name='hobbies'value='dancing' checked={user.hobbies.includes("dancing")} onChange={handlechange} />Dancing</label><br />
        <label htmlFor="">Gender</label><br />
        <label htmlFor=""><input type="radio" name='gender' value='male' checked={user.gender === "male"} onChange={handlechange}/>Male</label><br />
        <label htmlFor=""><input type="radio" name='gender' value='female' checked={user.gender === "female"} onChange={handlechange}/>Female</label><br />
        <label htmlFor=""><input type="radio" name='gender' value='trance' checked={user.gender === "trance"} onChange={handlechange}/>Trance</label><br /><br />
        <label htmlFor="">Opinian</label><br /><br /> 
        <label htmlFor=""><input type="radio" name='option' value='yes' checked={user.option === "yes"} onChange={handlechange}/>Yes</label><br />
        <label htmlFor=""><input type="radio" name='option' value='no' checked={user.option === 'no'} onChange={handlechange}/>No</label><br />
        <label htmlFor="">Select</label>
        <select name="course" value={user.course } onChange={handlechange}>
            <option value="pyton">Pyton</option>
            <option value="java">Java</option>
            <option value="javaScript">JavaScript</option>
        </select><br />
        <label htmlFor="">Address</label><br />
        <textarea name="address" rows={"4"} cols={"50"} value={user.address} onChange={handlechange}></textarea><br />
        <input type="file" name='file' onChange={handlechange}/>

        <button type='button' onClick={handleSubmit}>{EditUserIndex !== null ? "Update" : "Submit"}</button>
    </div>
    <div>
        <UserTable listUsers={listUsers} DeleteUser={DeleteUser} EditUser={EditUser} />
    </div>
    </>

    
  )
}
//crud applocation with
export default UserList
