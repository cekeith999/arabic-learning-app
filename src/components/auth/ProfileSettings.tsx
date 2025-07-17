"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useAppStore } from "@/store";
import { Settings, Save } from "lucide-react";
import type { User } from "@/types";

export default function ProfileSettings() {
  const { user, setUser } = useAppStore();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: user?.name || "",
    dialectPreference: user?.dialectPreference || "MSA",
  });

  const handleSave = () => {
    if (user) {
      const updatedUser: User = {
        ...user,
        name: formData.name,
        dialectPreference: formData.dialectPreference as "MSA" | "Egyptian",
        lastActive: new Date(),
      };
      setUser(updatedUser);
      setIsEditing(false);
    }
  };

  const handleCancel = () => {
    setFormData({
      name: user?.name || "",
      dialectPreference: user?.dialectPreference || "MSA"
    });
    setIsEditing(false);
  };

  if (!user) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-white rounded-2xl shadow-lg p-6"
    >
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <Settings className="w-6 h-6 text-indigo-600" />
          <h2 className="text-xl font-bold text-gray-900">Profile Settings</h2>
        </div>
        {!isEditing && (
          <button
            onClick={() => setIsEditing(true)}
            className="text-indigo-600 hover:text-indigo-700-medium"
          >
            Edit
          </button>
        )}
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Name
          </label>
          {isEditing ? (
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              placeholder="Enter your name"
            />
          ) : (
            <p className="text-gray-900 font-medium">{user.name}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email
          </label>
          <p className="text-gray-600">{user.email}</p>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Arabic Dialect Preference
          </label>
          {isEditing ? (
            <select
              value={formData.dialectPreference}
              onChange={(e) => setFormData({ ...formData, dialectPreference: e.target.value as "MSA" | "Egyptian" })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            >
              <option value="MSA">Modern Standard Arabic (MSA)</option>
              <option value="Egyptian">Egyptian Arabic</option>
            </select>
          ) : (
            <p className="text-gray-900 font-medium">{user.dialectPreference}</p>
          )}
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Level
            </label>
            <p className="text-gray-900 font-medium">{user.level}</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              XP
            </label>
            <p className="text-gray-900 font-medium">{user.xp}</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Streak
            </label>
            <p className="text-gray-900 font-medium">{user.streak} days</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Lingots
            </label>
            <p className="text-gray-900 font-medium">{user.lingots}</p>
          </div>
        </div>

        {isEditing && (
          <div className="flex space-x-3 pt-4">
            <button
              onClick={handleSave}
              className="flex items-center space-x-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700"
            >
              <Save className="w-4 h-4" />
              <span>Save Changes</span>
            </button>
            <button
              onClick={handleCancel}
              className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
            >
              Cancel
            </button>
          </div>
        )}
      </div>
    </motion.div>
  );
} 