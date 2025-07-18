import React from "react";
import { Section, Button } from "@/components/UI";

type ContactFormProps = {
id: string
onFormSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>
}

export const ContactForm: React.FC<ContactFormProps> = ({id, onFormSubmit })  => {
  return (
    <Section id={id} className="py-16 px-4 bg-white">
    <div className="container mx-auto max-w-md">
      <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>

      <form
        onSubmit={onFormSubmit}
        method="POST"
        className="bg-gray-50 p-8 rounded-lg shadow-md"
      >
        <div className="mb-6">
          <label
            htmlFor="fullName"
            className="block text-gray-700 font-medium mb-2"
          >
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            placeholder="Enter your full name"
            className="form-input w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="email"
            className="block text-gray-700 font-medium mb-2"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="your@email.com"
            pattern="^[^@]+@[^@]+\.[^@]+$"
            className="form-input w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="message"
            className="block text-gray-700 font-medium mb-2"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            placeholder="How can we help you?"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>

        <Button
          submit={true}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg transition duration-300">
          Send Message
        </Button>
      </form>

      <div
        id="formSuccess"
        className="hidden mt-4 p-4 bg-green-100 text-green-700 rounded-lg"
      >
        Thank you for contacting us!
      </div>

      <div
        id="formError"
        className="hidden mt-4 p-4 bg-red-100 text-red-700 rounded-lg"
      >
        Something went wrong. Please try again.
      </div>
    </div>
  </Section>);
}

export default ContactForm