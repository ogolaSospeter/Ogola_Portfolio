"use client";

import { useEffect } from "react";
import Image from "next/image";
import {
  FaHeadset,
  FaUser,
  FaEnvelope,
  FaPhone,
  FaCommentDots,
  FaPaperPlane,
} from "react-icons/fa";
import { init, sendForm } from "@emailjs/browser";

const ContactSection = () => {
  useEffect(() => {
    const initScrollReveal = async () => {
      if (typeof window !== "undefined" && window.innerWidth > 768) {
        const ScrollReveal = (await import("scrollreveal")).default;
        const sr = ScrollReveal({
          origin: "top",
          distance: "80px",
          duration: 1000,
          reset: true,
        });

        sr.reveal(".contact .container", { delay: 400 });
        sr.reveal(".contact .container .form-group", { delay: 400 });
      }
    };

    initScrollReveal();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!);

      const response = await sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        e.currentTarget as HTMLFormElement,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
s
      if (response.status === 200) {
        alert("Thank you for Leaving us a message. We will get back to you soon!\nKeep an eye on your inbox.");
        (e.target as HTMLFormElement).reset();
      }
    } catch (error) {
      console.error("FAILED...", error);
      alert(`Form Submission Failed due to the error: ${JSON.stringify(error)}`);
    }
  };

  return (
    <section className="min-h-[60vh] bg-[#e5ecfb] py-16" id="contact">
      {/* Section Heading */}
      <h2 className="text-center text-[#2506ad] text-[clamp(1.8rem, 2vw, 2.2rem)] font-bold mb-8">
        <FaHeadset className="inline-block mr-2" /> Get in{" "}
        <span className="text-[#ff7b00]">Touch</span>
      </h2>

      <div className="max-w-7xl w-full mx-auto bg-white rounded-3xl shadow-lg px-10 lg:px-14 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 lg:gap-x-16">
          {/* Image Section - Visible & Side by Side on Medium Screens & Above */}
          <div className="w-full md:w-[45%] flex justify-center">
            <div className="relative w-full max-w-[400px] h-[350px] lg:h-[380px]">
              <Image
                src="/contact1.png"
                alt="Contact"
                fill
                className="object-contain"
                draggable={false}
              />
            </div>
          </div>

          {/* Contact Form */}
          <form
            id="contact-form"
            onSubmit={handleSubmit}
            className="w-full md:w-[50%]"
          >
            <div className="flex flex-col justify-center">
              {/* Input Fields */}
              {[
                { name: "name", type: "text", placeholder: "Name", icon: <FaUser /> },
                { name: "email", type: "email", placeholder: "Email", icon: <FaEnvelope /> },
                { name: "phone", type: "tel", placeholder: "Phone", icon: <FaPhone /> },
              ].map((input, index) => (
                <div key={index} className="relative w-full m-4 flex items-center">
                  <span className="absolute left-4 text-gray-700 text-[clamp(0.9rem, 1vw, 1.1rem)]">
                    {input.icon}
                  </span>
                  <input
                    type={input.type}
                    name={input.name}
                    placeholder={input.placeholder}
                    required={input.name !== "phone"}
                    className="w-full h-[50px] pl-12 pr-4 text-[clamp(0.9rem, 1vw, 1.1rem)] font-poppins rounded-md border border-gray-700 bg-[#e5ecfb] outline-none focus:border-2 focus:border-[rgb(115,3,167)]"
                  />
                </div>
              ))}

              {/* Textarea */}
              <div className="relative w-full m-4 flex items-center">
                <span className="absolute left-4 top-4 text-gray-700 text-[clamp(0.9rem, 1vw, 1.1rem)]">
                  <FaCommentDots />
                </span>
                <textarea
                  name="message"
                  placeholder="Message"
                  required
                  className="w-full min-h-[130px] max-h-[230px] pl-12 pr-4 pt-3 text-[clamp(0.9rem, 1vw, 1.1rem)] font-poppins rounded-md border border-gray-700 bg-[#e5ecfb] outline-none focus:border-2 focus:border-[rgb(115,3,167)]"
                />
              </div>
            </div>

            {/* Submit Button - Centers on Small Screens, Proper Rounded Corners */}
            <div className="flex justify-center md:justify-start mt-6">
              <button
                type="submit"
                className="px-6 py-3 text-lg text-white bg-[#2506ad] rounded-lg hover:bg-[#421cecf5] shadow-lg shadow-blue-600/40 transition-all duration-300 font-nunito group"
              >
                Submit{" "}
                <FaPaperPlane className="inline-block ml-2 group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
