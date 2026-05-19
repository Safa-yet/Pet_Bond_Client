import { authClient } from "@/lib/auth-client";
import {Button, Description, FieldError, Form, Input, Label, TextField} from "@heroui/react";

const SigninForm = () => {
     const onSubmit =async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const userData= Object.fromEntries(formData.entries())
   console.log(userData)
   const { data, error } = await authClient.signIn.email({
    email: userData.email, // required
    password: userData.password, // required
    rememberMe: true,
    callbackURL: "/",
});
console.log(data,error ,"From Signin");
  };

    return (
            <Form className="flex  flex-col gap-4" onSubmit={onSubmit}>
           

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
                 <button
                  type="button"
                  className="text-pri text-sm font-semibold hover:underline"
                >
                  Forgot Password?
                </button>
             
        
                <Button type="submit" size="lg" className="w-full bg-pri text-white hover:bg-pri/80 ">
                  Sign In
                </Button>
        
            </Form>
    );
};

export default SigninForm;