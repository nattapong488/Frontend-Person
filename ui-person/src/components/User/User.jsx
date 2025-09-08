import "./User.css"
function user({PersonList, deleteUser}) {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Age</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {PersonList.map((u) => (
            <tr key={u.id}>
              <td>{u.id}</td>
              <td>{u.firstName}</td>
              <td>{u.lastName}</td>
              <td>{u.age}</td>
              <td>
                <button style={{marginRight : '5px'}}>View</button>
                <button onClick={()=> {alert(u.id); deleteUser(u.id);}}>Delete</button>         
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
export default user;