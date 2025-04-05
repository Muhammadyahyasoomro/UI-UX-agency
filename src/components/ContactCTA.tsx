const ContactCTA = () => {
  return (
    <div className="pb-36">
      <div className="mt-10 flex flex-col items-center justify-center p-6 text-white">
        <div className="bg-gradient-to-br from-gray-800/70 to-gray-700/50 p-6 rounded-2xl shadow-lg text-center w-full max-w-md border border-gray-700 hover:border-orange-500 transition duration-300">
          <p className="text-sm text-gray-400">Start a project!</p>
          <h2 className="text-2xl font-bold mt-2">Drop a Message!</h2>
          <button className="mt-4 bg-orange-500 hover:bg-orange-600 text-black px-6 py-2 rounded-lg transition">
            Get Started
          </button>
        </div>
      </div>

      <p className="mt-8 text-xl text-center">
        <span className="text-white">Email: Talhahanif120@gmail.com</span>
      </p>
    </div>
  );
};

export default ContactCTA;
