import { useAuthDispatch, logout } from '../../Context';

function Options() {
  const dispatch = useAuthDispatch();

  function handleLogout() {
    logout(dispatch)
  }

  return (
    <div className="options-container">
      <h4>Settings</h4>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Options;
