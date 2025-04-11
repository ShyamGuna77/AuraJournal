

import { SignedIn, SignedOut, RedirectToSignIn } from '@clerk/nextjs';

export default function DashboardPage() {
  return (
    <>
      <SignedIn>
        <h1>Welcome to your dashboard!</h1>
        {/* Protected content goes here */}
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  );
}
