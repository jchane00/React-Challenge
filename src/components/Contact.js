import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [nameMissing, setNameMissing] = useState(false)
  return (
    <div>
      <form>
        <label>
          Name:
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            onBlur={() => {
            //   if (!name) {
            //     alert("name is required");
            //   }
            setNameMissing(!name)
            }}
          />
          {nameMissing && "name is required"}
        </label>
        <label>
          Email:
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={() => {
              if (!email) {
                alert("email is required");
                return
              }
              if (!/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+$/.test(email)) {
                alert("email is invalid");
              }
            }}
          />
        </label>
        <label>
          Message:
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onBlur={() => {
              if (!message) {
                alert("message is required");
              }
            }}
          ></textarea>
        </label>
      </form>
    </div>
  );
}
