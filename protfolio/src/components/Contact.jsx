import React, { useState } from "react";
import Footer from "./Footer";

const Contact = () => {
  const [result, setResult] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    formData.append(
      "access_key",
      "5757e514-c3be-476a-8449-e719956ced8d"
    );

    setResult("Sending...");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Message sent successfully!");

        e.target.reset();
      } else {
        setResult("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error(error);
      setResult("Failed to send message. Please try again.");
    }
  };

  return (
    <section className="min-h-screen flex flex-col justify-between">
      <div className="max-w-3xl mx-auto w-full px-6 py-10">

        <h1 className="text-4xl font-bold text-center text-white underline mb-10">
          Contact
        </h1>

        <form
          onSubmit={handleSubmit}
          className="space-y-6 bg-gray-900 p-8 rounded-xl shadow-lg"
        >
          {/* Full Name */}
          <div>
            <label className="block mb-2 text-white font-medium">
              Full Name
            </label>

            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              required
              className="w-full rounded-lg border border-gray-300 p-3 bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-2 text-white font-medium">
              Email
            </label>

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              className="w-full rounded-lg border border-gray-300 p-3 bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block mb-2 text-white font-medium">
              Message
            </label>

            <textarea
              name="message"
              rows="6"
              placeholder="Write your message..."
              required
              className="w-full rounded-lg border border-gray-300 p-3 bg-white text-black resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 transition duration-300 text-white font-semibold py-3 rounded-lg"
          >
            Send Message
          </button>

          {/* Result Message */}
          {result && (
            <p className="text-center text-white font-medium">
              {result}
            </p>
          )}
        </form>
      </div>

      <Footer />
    </section>
  );
};

export default Contact;