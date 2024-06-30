'use client';

import { useRouter } from "next/navigation";

const NewUser = () => {
  const router = useRouter();
  return (
    <>
      <h1>Add User Page</h1>

      <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />

      <button onClick={() => router.push('/users')} className="btn btn-primary ml-3">Create</button>
    </>
  );
};

export default NewUser;
