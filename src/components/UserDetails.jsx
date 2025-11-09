import UserContext from './UserContext.js'
import { from } from './../../../alx-react-app-new/node_modules/eslint/lib/rules/utils/ast-utils';
import { use } from 'react';

function UserDetails({ userData }) {
    const userData = useContext(UserContext);
  return (
    <div>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
    </div>
  );
}

export default UserDetails;