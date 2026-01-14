import { useState } from "react";

const Login = () => {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log("Form submitted", { password, username });
  }

  return (
    <>
      <h1>Login</h1>

      <form className="border-2 border-white flex flex-col gap-8 p-4 w-80 mt-20" onSubmit={handleSubmit}>
        <label htmlFor="">
          <p>Email</p>
          <input className="border-2 my-2 py-2 bg-green-800" name="email" onChange={(e) => setUserName(e.target.value)} placeholder="Email" type="email" />
        </label>

        <label htmlFor="">
          <p>heslo</p>
          <input className="border-2 my-2 py-2 bg-green-800" name="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" type="password" />
        </label>

        <button className="bg-red-600 cursor-pointer py-2" type="submit">Login</button>
      </form>
    </>
  )
}

export default Login
