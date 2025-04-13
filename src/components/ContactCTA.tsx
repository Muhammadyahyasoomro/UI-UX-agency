import { SiGmail, SiLinkedin, SiBehance } from "react-icons/si";
import { useState } from "react";
import toast from "react-hot-toast"; // Make sure you have react-hot-toast installed

const ContactCTA = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    services: {
      websiteDesign: false,
      appDesign: false,
      uxDesign: false,
      brandingDesign: false,
      userResearch: false,
      other: false,
    },
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      services: {
        ...prev.services,
        [name]: checked,
      },
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const selectedServices = Object.entries(formData.services)
      .filter(([_, isSelected]) => isSelected)
      .map(([service]) => service);

    const dataToSubmit = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
      services: selectedServices.join(", "),
    };

    try {
      const response = await fetch("https://formspree.io/f/xpwpygyb", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSubmit),
      });

      if (response.ok) {
        toast.success("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          message: "",
          services: {
            websiteDesign: false,
            appDesign: false,
            uxDesign: false,
            brandingDesign: false,
            userResearch: false,
            other: false,
          },
        });
      } else {
        toast.error("Failed to send message. Please try again.");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again later.");
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

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
              icon={<SiGmail className="hover:text-[#FF952A]" />}
              label="Email"
              value="talhahanif120@gmail.com"
              link="mailto:talhahanif120@gmail.com"
            />
            <ContactItem
              icon={<SiLinkedin className="hover:text-[#FF952A]" />}
              label="LinkedIn"
              value="Talha Hanif"
              link="https://www.linkedin.com/in/talha-hanif-59173a221/"
            />
            <ContactItem
              icon={<SiBehance className="hover:text-[#FF952A]" />}
              label="Behance"
              value="behance.net/talhahanif"
              link="https://www.behance.net/talhahanif"
            />
          </div>
        </div>

        {/* Right Panel - Form */}
        <form
          className="flex-1 bg-black p-6 rounded-2xl text-white space-y-4"
          onSubmit={handleSubmit}
        >
          <div>
            <label className="block text-sm font-medium mb-1">Your name*</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-2 rounded-md bg-gray-800 border border-gray-600 focus:outline-[#FF952A]"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Email*</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-2 rounded-md bg-gray-800 border border-gray-600 focus:outline-[#FF952A]"
              placeholder="you@gmail.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Message*</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-2 rounded-md bg-gray-800 border border-gray-600 h-32 resize-none focus:outline-[#FF952A]"
              placeholder="Type your message here..."
            ></textarea>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Services*</label>
            <div className="grid grid-cols-2 gap-2 text-sm">
              {[
                { label: "Website design", name: "websiteDesign" },
                { label: "App design", name: "appDesign" },
                { label: "UX design", name: "uxDesign" },
                { label: "Branding And Visual design", name: "brandingDesign" },
                { label: "User Research", name: "userResearch" },
                { label: "Other", name: "other" },
              ].map((service, index) => (
                <label key={index} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    name={service.name}
                    checked={(formData.services as any)[service.name]}
                    onChange={handleCheckboxChange}
                    className="accent-[#FF952A]"
                  />
                  <span>{service.label}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-[#FF9933] text-black font-medium py-3 px-8 rounded-lg hover:bg-[#e88a2a] transition-colors disabled:opacity-70"
            >
              {isSubmitting ? "Sending..." : "Send"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

// Reusable component for contact info
type ContactItemProps = {
  icon: JSX.Element;
  label: string;
  value: string;
  link: string;
};

const ContactItem = ({ icon, label, value, link }: ContactItemProps) => (
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
