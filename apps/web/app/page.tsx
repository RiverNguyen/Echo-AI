"use client";

import { useMutation, useQuery } from "convex/react";
import { api } from "@workspace/backend/_generated/api";
import { Button } from "@workspace/ui/components/button";

/**
 * Displays a list of users and provides a button to add a new user.
 *
 * Fetches user data from the backend and renders it as formatted JSON. Includes an "Add" button that triggers a mutation to add a new user.
 */
export default function Page() {
  const users = useQuery(api.users.getMany);
  const addUser = useMutation(api.users.add);

  return (
    <div className="flex flex-col items-center justify-center min-h-svh">
      <p>web</p>
      <Button onClick={() => addUser()}>Add</Button>
      <div className="max-w-sm w-full mx-auto">
        {JSON.stringify(users, null, 2)}
      </div>
    </div>
  );
}
