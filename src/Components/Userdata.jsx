const Userdata = ({ users, currentPage, usersPerPage }) => {
    return (
      <>
        {users.map((user, index) => (
          <tr key={index}>
            <td>{(currentPage - 1) * usersPerPage + index + 1}</td>
            <td>{user.id}</td>
            <td>{user.type}</td>
            <td>{user.properties.title}</td>
            <td>{user.properties.place}</td>
            <td>{user.properties.mag}</td>
            <td>{user.properties.status}</td>
            <td>{new Date(user.properties.time).toLocaleString()}</td>
            <td>{new Date(user.properties.updated).toLocaleString()}</td>
          </tr>
        ))}
      </>
    );
  };
  
  export default Userdata;
  