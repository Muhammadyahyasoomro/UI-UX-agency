const ContactCTA = () => {
  return (
    <div className="bg-black min-h-screen flex items-center justify-center px-4 py-16">
      <div className="bg-[#FF952A] p-6 rounded-3xl flex flex-col md:flex-row w-full max-w-6xl gap-8">
        {/* Left Panel - Contact Info */}
        <div className="flex-1 text-black flex flex-col justify-between gap-6">
          <div>
            <h2 className="text-3xl font-bold">Let’s Work together</h2>
            <p className="text-md mt-2 font-medium">
              Please fill out the form below or <br />
              Send a message and I’ll get back to you.
            </p>
          </div>

          {/* Contact Items */}
          <div className="space-y-4">
            <ContactItem
              icon="📧"
              label="Email"
              value="talhahanif120@gmail.com"
              link="mailto:talhahanif120@gmail.com"
            />
            <ContactItem
              icon="🔗"
              label="LinkedIn"
              value="Talha Hanif"
              link="https://www.linkedin.com/in/talha-hanif-59173a221/"
            />
            <ContactItem
              icon="🎨"
              label="Behance"
              value="behance.net/talhahanif"
              link="https://www.behance.net/talhahanif"
            />
          </div>
        </div>

        {/* Right Panel - Form */}
        <form
          className="flex-1 bg-black p-6 rounded-2xl text-white space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            // Submit handler here (left empty as per your request)
          }}
        >
          <div>
            <label className="block text-sm font-medium mb-1">Your name*</label>
            <input
              type="text"
              required
              className="w-full p-2 rounded-md bg-gray-800 border border-gray-600 focus:outline-[#FF952A]"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Email*</label>
            <input
              type="email"
              required
              className="w-full p-2 rounded-md bg-gray-800 border border-gray-600 focus:outline-[#FF952A]"
              placeholder="you@gmail.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Message*</label>
            <textarea
              required
              className="w-full p-2 rounded-md bg-gray-800 border border-gray-600 h-32 resize-none focus:outline-[#FF952A]"
              placeholder="Type your message here..."
            ></textarea>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Services*</label>
            <div className="grid grid-cols-2 gap-2 text-sm">
              {[
                "Website design",
                "App design",
                "UX design",
                "Branding And Visual design",
                "User Research",
                "Other",
              ].map((service, index) => (
                <label key={index} className="flex items-center space-x-2">
                  <input type="checkbox" className="accent-[#FF952A]" />
                  <span>{service}</span>
                </label>
              ))}
            </div>
          </div>

            <div className="flex justify-center">
            <button
              type="submit"
              className="bg-[#FF952A] text-black py-2 px-6 rounded-lg hover:bg-orange-500 transition"
            >
              Send
            </button>
            </div>
        </form>
      </div>
    </div>
  );
};

// Reusable component for contact info
const ContactItem = ({
  icon,
  label,
  value,
  link,
}: {
  icon: string;
  label: string;
  value: string;
  link: string;
}) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center justify-between bg-black text-white px-4 py-3 rounded-xl border border-gray-700 hover:border-orange-500 transition"
  >
    <div className="flex items-center gap-3">
      <span className="text-xl">{icon}</span>
      <div className="text-left">
        <p className="text-sm text-gray-400">{label}</p>
        <p className="font-semibold">{value}</p>
      </div>
    </div>
    <span className="text-lg">↗</span>
  </a>
);

export default ContactCTA;
