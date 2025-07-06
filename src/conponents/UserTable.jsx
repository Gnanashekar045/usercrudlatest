import React from 'react'

const UserTable = ({listUsers = [], DeleteUser, EditUser}) => {
   return (
    <div>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Language</th>
                    <th>Hobbies</th>
                    <th>Gender</th>
                    <th>Options</th>
                    <th>Course</th>
                    <th>Address</th>
                    <th>Files</th>
                    <th>Delete</th>
                    <th>Edit</th>
                </tr>
            </thead>
            <tbody>
                {listUsers.map((val, i)=>(
                    <tr key={i}>
                        <td>{val.name}</td>
                        <td>{val.email}</td>
                        <td>{val.language}</td>
                        <td>{val.hobbies}</td>
                        <td>{val.gender}</td>
                        <td>{val.option}</td>
                        <td>{val.course}</td>
                        <td>{val.address}</td>
                        <td>{val.file ? val.file.name : ""}</td>
                        <td><button onClick={()=>{DeleteUser(i)}}>Delete</button></td>
                        <td><button onClick={()=>(EditUser(i))}>Edit</button></td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default UserTable