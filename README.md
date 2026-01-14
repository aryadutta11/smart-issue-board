
## 1. Frontend Stack Choice

I chose **React with Vite** for the frontend.

**Reasons:**
- React is widely used in production and well-suited for building component-based UIs.
- Vite provides a very fast development server and simple configuration compared to older tools.
- The combination is lightweight, easy to debug, and appropriate for a time-boxed assignment without over-engineering.

---

## 2. Firestore Data Structure 

Although the current implementation focuses on authentication and deployment, the intended Firestore structure was:

### Collection: `issues`

Each issue document would contain:
```json
{
  "title": "Login bug",
  "description": "Login fails on mobile devices",
  "priority": "High",
  "status": "Open",
  "assignedTo": "user@email.com",
  "createdBy": "creator@email.com",
  "createdAt": "timestamp"
}
```
---

## 3. Similar Issue Handling 

The planned approach for handling similar issues was:

When creating a new issue, fetch existing issues from Firestore.

Compare the new issue title with existing titles using simple string matching.

If a similar issue is found, show a warning to the user before allowing creation.

This approach is simple, transparent to the user, and avoids unnecessary complexity.

---

## 4. What Was Confusing or Challenging

Initial setup issues on Windows (Node, npm, PowerShell execution policies).

Understanding how environment variables work with Vite and Firebase.

Connecting Firebase Authentication correctly and handling errors during login/signup.

Managing project setup, Git, and deployment together within a limited time.

These challenges helped reinforce real-world debugging and setup skills.

---

## 5. What I Would Improve Next

Given more time, I would:

Complete the issue creation and listing features using Firestore.

Add filtering by status and priority.

Improve UI/UX with better layout and form validation.

Add proper routing using React Router.

Implement real-time updates using Firestore listeners.

---

## Deployment

Frontend deployed on Vercel

Firebase Authentication used for user login/signup

Environment variables used for secure configuration

---
