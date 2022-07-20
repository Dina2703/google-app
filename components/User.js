import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";

function User({ className }) {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        <picture>
          <img
            onClick={signOut}
            src={session.user.image}
            alt="user avatar"
            className={`h-10 w-10 rounded-full cursor-pointer hover:bg-gray-200 p-1 ${className}`}
          />
        </picture>
      </>
    );
  }

  return (
    <button
      onClick={signIn}
      className={`bg-blue-500 text-white px-5 py-2 font-medium rounded-md hover:brightness-110 hover:shadow-md ${className}`}
    >
      Sign In
    </button>
  );
}

export default User;
