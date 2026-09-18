function User({ id, name, email, username }) {
  return (
  <div style={{ border: `2px solid black`}}>
          <div>{email}</div>
          <div>{name.toUpperCase()}</div>
          <div>{id}</div>
          <div>{username}</div>
       </div>
    );
}

export default User;