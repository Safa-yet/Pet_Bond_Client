'use client'

import { authClient } from "@/lib/auth-client";
import {Button, Description, FieldError, Form, Input, Label, TextField} from "@heroui/react";
import { useRouter } from "next/navigation";

import { useState } from "react";
const SignupForm = () => {

    
const router = useRouter();
      const [confirmError, setConfirmError] = useState("");
 const Registration = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const userData = Object.fromEntries(formData.entries());
        // console.log(userData)

        
    // Password Match Check
    if (userData.password !== userData.confirmPassword) {
      setConfirmError("Passwords do not match");
      return;
    }

    setConfirmError("");
        const { data, error } = await authClient.signUp.email({
    name: userData.name, // required
    email: userData.email, // required
    password: userData.password, // required
    profile: userData.profile, // optional
    // callbackURL: "https://example.com/callback",

});

console.log(data,error);

  if (!error) {
    router.push("/dashboard");
  }
 
    
    };

    return (
      
            <Form className="flex  flex-col gap-4" onSubmit={Registration}>
      <TextField
        isRequired
        name="name"
        type="text"
        
        >
        <Label className="text-sm font-semibold text-on-surface-variant ml-2">Name</Label>
        <Input placeholder="John Doe"                  className="w-full h-14 px-6 rounded-full bg-surface-container border border-outline-variant/30 outline-none focus:ring-2 focus:ring-primary transition-all"
 />
        <FieldError />
      </TextField>
      <TextField
        isRequired
        name="profile"
        type="url"
      >
        <Label className="text-sm font-semibold text-on-surface-variant ml-2">Upload Your Profile URL</Label>
        <Input placeholder="john@example.com"    className="w-full h-14 px-6 rounded-full bg-surface-container border border-outline-variant/30 outline-none focus:ring-2 focus:ring-primary transition-all" />
        <FieldError />
      </TextField>
      <TextField
        isRequired
        name="email"
        type="email"
        validate={(value) => {
          if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
            return "Please enter a valid email address";
          }

          return null;
        }}
      >
        <Label className="text-sm font-semibold text-on-surface-variant ml-2">Email</Label>
        <Input placeholder="john@example.com"     className="w-full h-14 px-6 rounded-full bg-surface-container border border-outline-variant/30 outline-none focus:ring-2 focus:ring-primary transition-all"/>
        <FieldError />
      </TextField>

      <TextField
        isRequired
        minLength={8}
        name="password"
        type="password"
        validate={(value) => {
          if (value.length < 8) {
            return "Password must be at least 8 characters";
          }
          if (!/[A-Z]/.test(value)) {
            return "Password must contain at least one uppercase letter";
          }
          if (!/[0-9]/.test(value)) {
            return "Password must contain at least one number";
          }

          return null;
        }}
      >
        <Label className="text-sm font-semibold text-on-surface-variant ml-2">Password</Label>
        <Input placeholder="Enter your password"     className="w-full h-14 px-6 rounded-full bg-surface-container border border-outline-variant/30 outline-none focus:ring-2 focus:ring-primary transition-all"/>

        <FieldError />
      </TextField>
      <TextField
        isRequired
        minLength={8}
        name="confirmPassword"
        type="password"
      >
        <Label className="text-sm font-semibold text-on-surface-variant ml-2">Confirm Password</Label>
        <Input placeholder="Enter your password" />
        {/* <FieldError /> */}

        {confirmError && (
          <p className="text-sm text-red-500 mt-1 ml-2">
            {confirmError}
          </p>
        )}

        <FieldError />
      </TextField>

        <Button type="submit" className="w-full bg-pri text-white hover:bg-pri/80 ">
          Sign Up
        </Button>

    </Form>
 
    );
};

export default SignupForm;