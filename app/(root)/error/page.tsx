"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AlertCircle, ArrowLeft } from "lucide-react";

export default function ErrorPage() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-background via-destructive/5 to-muted/20">
      <div className="w-full max-w-md space-y-6">
        <div className="flex items-center space-x-2">
          <Link href="/">
            <Button
              variant="ghost"
              size="sm"
              className="text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4 mr-1" />
              Back to Home
            </Button>
          </Link>
        </div>

        <Card className="shadow-xl border-2 border-destructive/20 bg-card/90 backdrop-blur-sm">
          <CardHeader className="text-center pb-4">
            <CardTitle className="text-xl text-card-foreground flex items-center justify-center gap-2">
              <AlertCircle className="h-5 w-5 text-destructive" />
              Authentication Error
            </CardTitle>
            <CardDescription>
              There was a problem with your authentication request
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-center text-sm text-muted-foreground space-y-2">
              <p>This could be due to:</p>
              <ul className="text-left list-disc list-inside space-y-1">
                <li>Incorrect email or password</li>
                <li>Account already exists (for signup)</li>
                <li>Network connection issues</li>
                <li>Server configuration problems</li>
              </ul>
            </div>

            <div className="flex flex-col gap-3">
              <Link href="/login" className="block">
                <Button variant="outline" className="w-full">
                  Try Login Again
                </Button>
              </Link>

              <Link href="/signup" className="block">
                <Button variant="outline" className="w-full">
                  Try Signup Again
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
