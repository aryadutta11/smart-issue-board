import { collection, getDocs, updateDoc, doc } from "firebase/firestore";
import { db } from "../firebase";
import { useEffect, useState } from "react";

export default function IssueList() {
  const [issues, setIssues] = useState([]);
  const [filter, setFilter] = useState("");

  const load = async () => {
    const snap = await getDocs(collection(db, "issues"));
    setIssues(snap.docs.map(d => ({ id: d.id, ...d.data() })));
  };

  useEffect(() => {
    load();
  }, []);

  const updateStatus = async (issue, newStatus) => {
    if (issue.status === "Open" && newStatus === "Done") {
      alert("Cannot move directly from Open to Done");
      return;
    }
    await updateDoc(doc(db, "issues", issue.id), { status: newStatus });
    load();
  };

  return (
    <>
      <h3>Issues</h3>
      <select onChange={e => setFilter(e.target.value)}>
        <option value="">All</option>
        <option>Open</option>
        <option>In Progress</option>
        <option>Done</option>
      </select>

      {issues
        .filter(i => !filter || i.status === filter)
        .map(issue => (
          <div key={issue.id}>
            <h4>{issue.title}</h4>
            <p>{issue.description}</p>
            <p>{issue.priority} | {issue.status}</p>
            <button onClick={() => updateStatus(issue, "In Progress")}>In Progress</button>
            <button onClick={() => updateStatus(issue, "Done")}>Done</button>
          </div>
        ))}
    </>
  );
}
