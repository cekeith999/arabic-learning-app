"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useAppStore } from "@/store";
import type { User } from "@/types";

export default function LoginForm() {
  const { setUser, setAuthenticated } = useAppStore();
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState<{
    email: string;
    password: string;
    name: string;
    dialectPreference: "MSA" | "Egyptian";
  }>({
    email: "",
    password: "",
    name: "",
    dialectPreference: "MSA",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate authentication delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    if (isLogin) {
      // For demo purposes, create a user with the provided email
      const user: User = {
        id: `user-${Date.now()}`,
        email: formData.email,
        name: formData.email.split("@")[0], // Use email prefix as name
        level: 1,
        dialectPreference: formData.dialectPreference,
        xp: 0,
        streak: 0,
        lingots: 10,
        createdAt: new Date(),
        lastActive: new Date(),
      };
      setUser(user);
      setAuthenticated(true);
    } else {
      // Sign up - create new user
      const user: User = {
        id: `user-${Date.now()}`,
        email: formData.email,
        name: formData.name || formData.email.split("@")[0],
        level: 1,
        dialectPreference: formData.dialectPreference,
        xp: 0,
        streak: 0,
        lingots: 10,
        createdAt: new Date(),
        lastActive: new Date(),
      };
      setUser(user);
      setAuthenticated(true);
    }
    setIsLoading(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, y: 0 }}
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100"
    >
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <div className="text-4xl mb-4">🌍</div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            {isLogin ? "Welcome Back!" : "Join Arabic Learning"}
          </h1>
          <p className="text-gray-600">
            {isLogin ? "Sign in to continue your Arabic journey" : "Start your Arabic learning adventure"}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {!isLogin && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Name
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                placeholder="Enter your name"
                required={!isLogin}
              />
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <input
              type="password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              placeholder="Enter your password"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Arabic Dialect Preference
            </label>
            <select
              value={formData.dialectPreference}
              onChange={(e) => setFormData({ ...formData, dialectPreference: e.target.value as "MSA" | "Egyptian" })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            >
              <option value="MSA">Modern Standard Arabic (MSA)</option>
              <option value="Egyptian">Egyptian Arabic</option>
            </select>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-indigo-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <div className="flex items-center justify-center">
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                {isLogin ? "Signing in..." : "Creating account..."}
              </div>
            ) : (
              isLogin ? "Sign In" : "Create Account"
            )}
          </button>
        </form>

        <div className="mt-6 text-center">
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-indigo-600 hover:text-indigo-700-medium"
          >
            {isLogin ? "Dont have an account? Sign up" : "Already have an account? Sign in"}
          </button>
        </div>

        <div className="mt-6 text-center">
          <button
            onClick={() => {
              // Demo login with a default user
              const demoUser: User = {
                id: `demo-${Date.now()}`,
                email: "demo@arabiclearning.com",
                name: "Demo User",
                level: 1,
                dialectPreference: "MSA",
                xp: 150,
                streak: 3,
                lingots: 25,
                createdAt: new Date(),
                lastActive: new Date(),
              };
              setUser(demoUser);
              setAuthenticated(true);
            }}
            className="text-gray-500 hover:text-gray-700-medium"
          >
            Continue as Demo User
          </button>
        </div>
      </div>
    </motion.div>
  );
} 