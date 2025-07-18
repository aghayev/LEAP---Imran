"use client";

import React, { useState } from "react";
import router from "next/router";
import { useAuthentication } from "@/hooks/authentication.hook";
import { AuthForm } from "@/components/UI/Login";

export default function Login() {
  const { login } = useAuthentication();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!username.trim()) {
      setError("Username is required");
      return;
    }

    if (!password) {
      setError("Password is required");
      return;
    }

    setIsSubmitting(true);

    try {
      await login({ username, password });
      router.push("/dashboard");
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Invalid username or password"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            Sign in to your account
          </h2>
        </div>
        <AuthForm
          username={username}
          setUsername={setUsername}
          password={password}
          setPassword={setPassword}
          isSubmitting={isSubmitting}
          error={error}
          onFormSubmit={handleSubmit}
        />
      </div>
    </div>
  );
}
