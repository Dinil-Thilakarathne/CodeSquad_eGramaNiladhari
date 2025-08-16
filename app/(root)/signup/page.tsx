"use client";

import type React from "react";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft } from "lucide-react";
import { signup } from "../actions";

export default function SignupPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    username: "",
    nicNumber: "",
    houseNumber: "",
    streetName: "",
    addressLine2: "",
    province: "",
    gramaNiladhariNo: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      setIsLoading(false);
      return;
    }

    try {
      const formDataToSubmit = new FormData();
      formDataToSubmit.append("email", formData.email);
      formDataToSubmit.append("password", formData.password);
      formDataToSubmit.append("name", formData.name);
      formDataToSubmit.append("phone", formData.phone);
      formDataToSubmit.append("username", formData.username);
      formDataToSubmit.append("nicNumber", formData.nicNumber);
      formDataToSubmit.append("houseNumber", formData.houseNumber);
      formDataToSubmit.append("streetName", formData.streetName);
      formDataToSubmit.append("addressLine2", formData.addressLine2);
      formDataToSubmit.append("province", formData.province);
      formDataToSubmit.append("gramaNiladhariNo", formData.gramaNiladhariNo);

      await signup(formDataToSubmit);
    } catch (error) {
      console.error("Signup error:", error);
      setIsLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-background via-primary/5 to-accent/10">
      <div className="w-full max-w-2xl space-y-6">
        <div className="flex items-center space-x-2">
          <Link href="/">
            <Button
              variant="ghost"
              size="sm"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft className="h-4 w-4 mr-1" />
              Back
            </Button>
          </Link>
        </div>

        <Card className="overflow-hidden shadow-xl border-2 border-primary/20 bg-card/90 backdrop-blur-sm">
          <CardContent className="p-6 md:p-8">
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col gap-6">
                <div className="flex flex-col items-center text-center">
                  <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Create your account
                  </h1>
                  <p className="text-balance text-muted-foreground">
                    Fill in your details to get started
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label
                      htmlFor="name"
                      className="text-card-foreground font-medium"
                    >
                      Full Name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="border-border focus:border-primary focus:ring-primary/20 bg-input"
                      required
                    />
                  </div>

                  <div className="grid gap-2">
                    <Label
                      htmlFor="email"
                      className="text-card-foreground font-medium"
                    >
                      Email
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="m@example.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="border-border focus:border-primary focus:ring-primary/20 bg-input"
                      required
                    />
                  </div>

                  <div className="grid gap-2">
                    <Label
                      htmlFor="phone"
                      className="text-card-foreground font-medium"
                    >
                      Phone
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="Phone number"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="border-border focus:border-primary focus:ring-primary/20 bg-input"
                    />
                  </div>

                  <div className="grid gap-2">
                    <Label
                      htmlFor="username"
                      className="text-card-foreground font-medium"
                    >
                      Username
                    </Label>
                    <Input
                      id="username"
                      name="username"
                      type="text"
                      placeholder="Username"
                      value={formData.username}
                      onChange={handleInputChange}
                      className="border-border focus:border-primary focus:ring-primary/20 bg-input"
                    />
                  </div>

                  <div className="grid gap-2">
                    <Label
                      htmlFor="nicNumber"
                      className="text-card-foreground font-medium"
                    >
                      NIC Number
                    </Label>
                    <Input
                      id="nicNumber"
                      name="nicNumber"
                      type="text"
                      placeholder="Enter your NIC number"
                      value={formData.nicNumber}
                      onChange={handleInputChange}
                      className="border-border focus:border-primary focus:ring-primary/20 bg-input"
                      required
                    />
                  </div>

                  {/* Empty space for alignment */}
                  <div></div>

                  {/* Address Section Header - spans both columns */}
                  <div className="md:col-span-2 border-t pt-4">
                    <h3 className="text-sm font-medium text-card-foreground mb-4">
                      Address Information
                    </h3>
                  </div>

                  <div className="grid gap-2">
                    <Label
                      htmlFor="houseNumber"
                      className="text-card-foreground font-medium"
                    >
                      House Number
                    </Label>
                    <Input
                      id="houseNumber"
                      name="houseNumber"
                      type="text"
                      placeholder="House No."
                      value={formData.houseNumber}
                      onChange={handleInputChange}
                      className="border-border focus:border-primary focus:ring-primary/20 bg-input"
                    />
                  </div>

                  <div className="grid gap-2">
                    <Label
                      htmlFor="streetName"
                      className="text-card-foreground font-medium"
                    >
                      Street Name
                    </Label>
                    <Input
                      id="streetName"
                      name="streetName"
                      type="text"
                      placeholder="Street name"
                      value={formData.streetName}
                      onChange={handleInputChange}
                      className="border-border focus:border-primary focus:ring-primary/20 bg-input"
                    />
                  </div>

                  <div className="grid gap-2">
                    <Label
                      htmlFor="addressLine2"
                      className="text-card-foreground font-medium"
                    >
                      Address Line 2
                    </Label>
                    <Input
                      id="addressLine2"
                      name="addressLine2"
                      type="text"
                      placeholder="City/Town"
                      value={formData.addressLine2}
                      onChange={handleInputChange}
                      className="border-border focus:border-primary focus:ring-primary/20 bg-input"
                    />
                  </div>

                  <div className="grid gap-2">
                    <Label
                      htmlFor="province"
                      className="text-card-foreground font-medium"
                    >
                      Province
                    </Label>
                    <Input
                      id="province"
                      name="province"
                      type="text"
                      placeholder="Province"
                      value={formData.province}
                      onChange={handleInputChange}
                      className="border-border focus:border-primary focus:ring-primary/20 bg-input"
                    />
                  </div>

                  <div className="grid gap-2">
                    <Label
                      htmlFor="gramaNiladhariNo"
                      className="text-card-foreground font-medium"
                    >
                      Grama Niladhari Number
                    </Label>
                    <Input
                      id="gramaNiladhariNo"
                      name="gramaNiladhariNo"
                      type="text"
                      placeholder="GN Division number"
                      value={formData.gramaNiladhariNo}
                      onChange={handleInputChange}
                      className="border-border focus:border-primary focus:ring-primary/20 bg-input"
                    />
                  </div>

                  {/* Empty space for alignment */}
                  <div></div>

                  <div className="grid gap-2">
                    <Label
                      htmlFor="password"
                      className="text-card-foreground font-medium"
                    >
                      Password
                    </Label>
                    <Input
                      id="password"
                      name="password"
                      type="password"
                      placeholder="Create a password"
                      value={formData.password}
                      onChange={handleInputChange}
                      className="border-border focus:border-primary focus:ring-primary/20 bg-input"
                      required
                    />
                  </div>

                  <div className="grid gap-2">
                    <Label
                      htmlFor="confirmPassword"
                      className="text-card-foreground font-medium"
                    >
                      Confirm Password
                    </Label>
                    <Input
                      id="confirmPassword"
                      name="confirmPassword"
                      type="password"
                      placeholder="Confirm your password"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      className="border-border focus:border-primary focus:ring-primary/20 bg-input"
                      required
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-accent text-primary-foreground font-medium h-11 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-[1.02]"
                  disabled={isLoading}
                >
                  {isLoading ? "Creating Account..." : "Create Account"}
                </Button>

                <div className="text-center text-sm text-muted-foreground">
                  Already have an account?{" "}
                  <Link
                    href="/login"
                    className="text-secondary hover:text-primary underline underline-offset-4 font-medium transition-colors"
                  >
                    Sign in
                  </Link>
                </div>
              </div>
            </form>
          </CardContent>
        </Card>
        <div className="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 [&_a]:text-secondary hover:[&_a]:text-primary">
          By clicking continue, you agree to our{" "}
          <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.
        </div>
      </div>
    </div>
  );
}
