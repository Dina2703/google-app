import Header from "../../components/Header";
import { getProviders, signIn } from "next-auth/react";

function signin({ providers }) {
  return (
    <>
      <Header />
      <div className="mt-40">
        {Object.values(providers).map((provider) => (
          <div key={provider.name} className="flex flex-col items-center">
            <picture>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png"
                alt="google-logo"
                className="w-52 object-cover"
              />
            </picture>

            <p className="text-sm italic my-10 text-center">
              This website is created for learning purposes
            </p>
            <button
              className="bg-red-400 rounded-lg text-white p-3 hover:bg-red-500"
              onClick={() => signIn(provider.id, { callbackUrl: "/" })}
            >
              Sign in with {provider.name}
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default signin;

export async function getServerSideProps() {
  const providers = await getProviders();

  return {
    props: { providers },
  };
}
