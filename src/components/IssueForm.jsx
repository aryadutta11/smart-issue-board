import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { useState } from "react";

export default function IssueForm({ user }) {
  const [title, setTitle] = useState("");
  const [description, setDesc] = useState("");
  const [priority, setPriority] = useState("Low");

  const submit = async () => {
    const snapshot = await getDocs(collection(db, "issues"));

    const similar = snapshot.docs.find(doc =>
      doc.data().title.toLowerCase().includes(title.toLowerCase())
    );

    if (similar && !window.confirm("Similar issue exists. Continue?")) {
      return;
    }

    await addDoc(collection(db, "issues"), {
      title,
      description,
      priority,
      status: "Open",
      assignedTo: user.email,
      createdBy: user.email,
      createdAt: new Date()
    });

    setTitle("");
    setDesc("");
  };

  return (
    <>
      <h3>Create Issue</h3>
      <input placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} />
      <textarea placeholder="Description" value={description} onChange={e => setDesc(e.target.value)} />
      <select onChange={e => setPriority(e.target.value)}>
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>
      <button onClick={submit}>Create</button>
    </>
  );
}
