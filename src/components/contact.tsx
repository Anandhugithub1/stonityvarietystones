import React from "react";
import { Label } from "./label";
import { Input } from "./input";
import { cn } from "../utlis/cn";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

export function SignupFormDemo() {
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    const formData = new FormData(event.target);

    // Construct data object from form data
    const values = {};
    for (let [key, value] of formData.entries()) {
      values[key] = value;
    }

    try {
      const response = await axios.post('https://backendcontact-mqfy.onrender.com/submitForm', values);
      alert("Form submitted successfully!");
      event.target.reset(); // Reset the form on success
    } catch (error) {
      if (error.response && error.response.status === 400) {
        // Handle validation errors from backend
        const errors = error.response.data.errors;
        
        const errorMessage = "Validation failed: \n" + errors.map(err => err.message).join('\n');
        
        // Check if there's already an error message displayed, and if so, remove it
        const container = document.getElementById('error-container');
        if (container) {
            container.innerHTML = '';
        }
        
        // Create a div element to show the error message
        const errorContainer = document.createElement('div');
        errorContainer.innerHTML = `
            <div class="font-medium text-red-500">
                ${errorMessage}
            </div>
        `;
        
        // Append the error message to a container element in your HTML
        container!.appendChild(errorContainer);
    }
    }
  };
  return (
    <div className="max-w-md w-full mx-auto rounded-none p-8 md:p-8 bg-green-50 lg:ml-28 conatct-form" id="contact">
      <h2 className="font-bold text-xl text-customColors-customgreen dark:text-neutral-200">
        Contact Us
      </h2>
      <form className="my-8 sm:w-96" onSubmit={handleSubmit} >
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 sm:space-x-4 mb-4">
          <input type="hidden" name="form-name" value="contact-form" />

          <LabelInputContainer>
            <Label htmlFor="firstname">First name</Label>
            <Input id="firstname" name="firstname" placeholder="Tyler" type="text" required />
          </LabelInputContainer>

          <LabelInputContainer>
            <Label htmlFor="lastname">Last name</Label>
            <Input id="lastname" name="lastname" placeholder="Durden" type="text" required />
          </LabelInputContainer>
        </div>

        <LabelInputContainer className="mb-4">
          <Label htmlFor="phone">Phone Number</Label>
          <Input id="phone" name="phone" placeholder="Enter phone number" type="tel" required />
        </LabelInputContainer>

        <LabelInputContainer className="mb-4">
          <Label htmlFor="message">Enter your Message</Label>
          <Input id="message" name="message" placeholder="Enter your message" type="text" className="h-10" required />
        </LabelInputContainer>

        <button
          className="bg-customColors-customgreen relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
          Contact Us →
          <BottomGradient />
        </button>
      </form>
      <div id="error-container">

      </div>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return <div className={cn("flex flex-col space-y-2 w-full", className)}>{children}</div>;
};
