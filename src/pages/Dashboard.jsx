import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import IssueForm from "../components/IssueForm";
import IssueList from "../components/IssueList";

export default function Dashboard({ user }) {
  const logout = async () => {
    await signOut(auth);
    window.location.reload();
  };

  return (
    <div>
      <h2>Smart Issue Board</h2>
      <p>Logged in as: {user.email}</p>
      <button onClick={logout}>Logout</button>

      <hr />

      <IssueForm user={user} />
      <IssueList />
    </div>
  );
}