import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function AuthSelection() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-background via-primary/5 to-accent/10">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Welcome
          </h1>
          <p className="text-muted-foreground">Choose how you&apos;d like to continue</p>
        </div>

        <Card className="shadow-xl border-2 border-primary/20 bg-card/90 backdrop-blur-sm">
          <CardHeader className="text-center pb-4">
            <CardTitle className="text-xl text-card-foreground flex items-center justify-center gap-2">
              <span className="w-2 h-2 bg-primary rounded-full"></span>
              Get Started
              <span className="w-2 h-2 bg-accent rounded-full"></span>
            </CardTitle>
            <CardDescription>Sign in to your account or create a new one</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Link href="/login" className="block">
              <Button
                className="w-full h-12 text-base font-medium bg-primary hover:bg-accent text-primary-foreground transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-[1.02]"
                size="lg"
              >
                Sign In
              </Button>
            </Link>

            <Link href="/signup" className="block">
              <Button
                variant="outline"
                className="w-full h-12 text-base font-medium border-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground transition-all duration-200 bg-transparent shadow-md hover:shadow-lg hover:scale-[1.02]"
                size="lg"
              >
                Create Account
              </Button>
            </Link>
          </CardContent>
        </Card>

        <div className="text-center">
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            Secure authentication powered by modern technology
          </div>
        </div>
      </div>
    </div>
  )
}
