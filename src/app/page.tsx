import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ModeToggle } from "@/components/mode-toggle";

export default async function Home() {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.getUser();

  // If user is authenticated, redirect to dashboard
  if (data?.user && !error) {
    redirect("/dashboard");
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted flex items-center justify-center p-4">
      <div className="absolute top-4 right-4">
        <ModeToggle />
      </div>
      <div className="max-w-md w-full">
        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold text-foreground">
              Billing Admin
            </CardTitle>
            <CardDescription>
              Welcome to your billing administration dashboard
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-center text-muted-foreground">
              Please sign in to access your dashboard and manage your billing
              system.
            </p>
            <div className="space-y-2">
              <Link href="/login" className="block">
                <Button className="w-full">Sign In</Button>
              </Link>
              <p className="text-center text-sm text-muted-foreground">
                Don't have an account? You can create one on the sign in page.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
