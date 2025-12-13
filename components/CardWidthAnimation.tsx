"use client";

import { useState } from "react";
import { Home, BarChart2, User, Settings } from "lucide-react";

const NAV_ITEMS = [
  {
    id: "home",
    label: "Home",
    icon: Home,
    content: "This is Home content",
  },
  {
    id: "stats",
    label: "Stats",
    icon: BarChart2,
    content: "Analytics & stats content",
  },
  {
    id: "profile",
    label: "Profile",
    icon: User,
    content: "User profile content",
  },
  {
    id: "settings",
    label: "Settings",
    icon: Settings,
    content: "Settings content",
  },
];

const CardWidthAnimation = () => {
  const [activeTab, setActiveTab] = useState("");

  return (
    <div className="h-screen flex items-center justify-center bg-neutral-100">
      {/* Main Card */}
      <div className="w-80 h-96 bg-white rounded-2xl shadow-lg flex flex-col overflow-hidden">
        {/* Content Area */}
        <div
          className={`flex-1 p-4 transition-all duration-300 ${
            activeTab ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          {activeTab && (
            <div className="text-sm text-neutral-700">
              {NAV_ITEMS.find((item) => item.id === activeTab)?.content}
            </div>
          )}
        </div>

        {/* Bottom Navigation */}
        <div className="h-16 border-t flex items-center justify-around">
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;

            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center gap-2 px-3 py-2 rounded-full transition-all duration-300
                  ${
                    isActive
                      ? "bg-neutral-200 text-neutral-900"
                      : "text-neutral-500"
                  }
                `}
              >
                <Icon size={18} />
                {isActive && (
                  <span className="text-xs font-medium">{item.label}</span>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CardWidthAnimation;
