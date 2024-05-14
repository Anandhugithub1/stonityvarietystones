import React from "react";
import { Label } from "./label";
import { Input } from "./input";
import { cn } from "../utlis/cn";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export function SignupFormDemo() {
  return (
    <div className="max-w-md w-full mx-auto rounded-none  p-8 md:p-8  bg-green-50  lg:ml-28  conatct-form " id="contact">
      <h2 className="font-bold text-xl text-customColors-customgreen dark:text-neutral-200">
        Contact Us
      </h2>
      <Formik
        initialValues={{ firstname: "", lastname: "", email: "", message: "" }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            console.log(values);
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form className="my-8 sm:w-96">
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 sm:space-x-4 mb-4 ">
              <Field name="firstname">
                {({ field, form }) => (
                  <LabelInputContainer>
                    <Label htmlFor="firstname">First name</Label>
                    <Input {...field} id="firstname" placeholder="Tyler" type="text" />
                    <ErrorMessage name="firstname" component="div" className="text-red-500" />
                  </LabelInputContainer>
                )}
              </Field>
              <Field name="lastname">
                {({ field, form }) => (
                  <LabelInputContainer>
                    <Label htmlFor="lastname">Last name</Label>
                    <Input {...field} id="lastname" placeholder="Durden" type="text" />
                    <ErrorMessage name="lastname" component="div" className="text-red-500" />
                  </LabelInputContainer>
                )}
              </Field>
            </div>
            <Field name="phone">
  {({ field, form }) => (
    <LabelInputContainer className="mb-4">
      <Label htmlFor="phone">Phone Number</Label>
      <Input {...field} id="phone" placeholder="Enter phone number" type="tel" />
      <ErrorMessage name="phone" component="div" className="text-red-500" />
    </LabelInputContainer>
  )}
</Field>
            <Field name="message">
              {({ field, form }) => (
                <LabelInputContainer className="mb-4">
                  <Label htmlFor="message">Enter your Message</Label>
                  <Input {...field} id="message" placeholder="enter your message" type="text" className="h-10" />
                  <ErrorMessage name="message" component="div" className="text-red-500" />
                </LabelInputContainer>
              )}
            </Field>
           

            <button
              className="bg-customColors-customgreen relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Contact Us →"}
              <BottomGradient />
            </button>
          </Form>
        )}
      </Formik>
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

const validationSchema = Yup.object().shape({
  firstname: Yup.string().required("First name is required"),
  lastname: Yup.string().required("Last name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  message: Yup.string().required("Message is required"),
  phone: Yup.string()
  .matches(/^[0-9]+$/, "Phone number must contain only digits")
  .min(10, "Phone number must be at least 10 digits")
  .max(10, "Phone number can't exceed 10 digits")
  .required("Phone number is required"),
});