"use client";

export default function RegisterForm() {

  return (
    <>
      <form className="flex flex-col gap-2">
        <label htmlFor="email">Enter Name</label>
        <input
          type="text"
          placeholder="John Doe"
          className="input input-bordered w-full max-w-xs"
        />
        <label htmlFor="email">Enter Email</label>
        <input
          type="email"
          placeholder="example@email.com"
          className="input input-bordered w-full max-w-xs"
        />
        <label htmlFor="password">Enter Password</label>
        <input
          type="password"
          placeholder="******"
          className="input input-bordered w-full max-w-xs"
        />
        <button type="submit" className="btn-brand mt-2">
          Register
        </button>
      </form>
    </>
  );
}
