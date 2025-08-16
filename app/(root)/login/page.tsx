"use client";

import type React from "react";
import { login } from "../actions";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft } from "lucide-react";

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // TODO: Implement Supabase authentication
    console.log("Login attempt:", formData);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-background via-primary/5 to-accent/10">
      <div className="w-full max-w-4xl space-y-6">
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
          <CardContent className="grid p-0 md:grid-cols-2">
            <form className="p-6 md:p-8" onSubmit={handleSubmit}>
              <div className="flex flex-col gap-6">
                <div className="flex flex-col items-center text-center">
                  <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Welcome back
                  </h1>
                  <p className="text-balance text-muted-foreground">
                    Login to your account
                  </p>
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
                  <div className="flex items-center">
                    <Label
                      htmlFor="password"
                      className="text-card-foreground font-medium"
                    >
                      Password
                    </Label>
                    <a
                      href="#"
                      className="ml-auto text-sm text-primary hover:text-accent underline-offset-2 hover:underline transition-colors"
                    >
                      Forgot your password?
                    </a>
                  </div>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="border-border focus:border-primary focus:ring-primary/20 bg-input"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-accent text-primary-foreground font-medium h-11 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-[1.02]"
                  disabled={isLoading}
                  formAction={login}
                >
                  {isLoading ? "Signing In..." : "Login"}
                </Button>
                <div className="text-center text-sm text-muted-foreground">
                  Don&apos;t have an account?{" "}
                  <Link
                    href="/signup"
                    className="text-secondary hover:text-primary underline underline-offset-4 font-medium transition-colors"
                  >
                    Sign up
                  </Link>
                </div>
              </div>
            </form>
            <div className="relative hidden bg-gradient-to-br from-secondary/10 to-primary/10 md:block">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="flex items-center justify-center gap-2">
                    <span className="w-3 h-3 bg-primary rounded-full animate-pulse"></span>
                    <span className="w-2 h-2 bg-accent rounded-full animate-pulse delay-100"></span>
                    <span className="w-3 h-3 bg-secondary rounded-full animate-pulse delay-200"></span>
                  </div>
                  <p className="text-muted-foreground">
                    Welcome back to your account
                  </p>
                </div>
              </div>
            </div>
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
