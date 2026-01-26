import { useState } from "react";
import useLoginApi from "../hooks/useLoginApi";

const Login = () => {
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const { mutation } = useLoginApi();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    mutation.mutate({ password, userName })
  }

  return (
    <>
      <h1>Login</h1>

      <form
        className="border-2 border-white flex flex-col gap-8 p-4 w-80 mt-20"
        onSubmit={handleSubmit}
      >
        <label htmlFor="">
          <p>Email</p>

          <input
            className="border-2 my-2 py-2 bg-green-800"
            id="email"
            name="email"
            onChange={(e) => setUserName(e.target.value)}
            placeholder="Email"
            type="text"
            value={userName}
          />
        </label>

        <label htmlFor="">
          <p>heslo</p>

          <input
            className="border-2 my-2 py-2 bg-green-800"
            id="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            type="password"
            value={password}
          />
        </label>

        {/* Display feedback based on mutation state */}
        {mutation.isError && (
          <div className="text-red-500 font-bold">
            Přihlášení se nezdařilo!
          </div>
        )}

        {mutation.isSuccess && (
          <div className="text-green-500 font-bold">
            Úspěšně přihlášeno!
            <p>
              vítej {mutation.data?.userName}
            </p>
          </div>
        )}

        <button
          className="bg-red-600 cursor-pointer py-2 disabled:bg-red-900"
          disabled={mutation.isPending}
          type="submit"
        >
          {mutation.isPending ? "Ověřování..." : "Login"}
        </button>
      </form>
    </>
  )
}

export default Login
