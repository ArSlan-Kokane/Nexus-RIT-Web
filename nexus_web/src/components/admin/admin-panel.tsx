"use client";

import { useState } from "react";
import { X, LayoutDashboard, Users, FolderKanban, Calendar, FileText, Settings, LogOut, Menu } from "lucide-react";
import { TeamManagement } from "./team-management";
import { ProjectsManagement } from "./projects-management";
import { EventsManagement } from "./events-management";
import { ContentManagement } from "./content-management";
import { SettingsContent } from "./settings-content";

interface AdminPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

type AdminSection = "dashboard" | "team" | "projects" | "events" | "content" | "settings";

export function AdminPanel({ isOpen, onClose }: AdminPanelProps) {
  const [activeSection, setActiveSection] = useState<AdminSection>("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(true);

  if (!isOpen) return null;

  const navigation = [
    { id: "dashboard" as AdminSection, label: "Dashboard", icon: LayoutDashboard },
    { id: "team" as AdminSection, label: "Team Members", icon: Users },
    { id: "projects" as AdminSection, label: "Projects", icon: FolderKanban },
    { id: "events" as AdminSection, label: "Events", icon: Calendar },
    { id: "content" as AdminSection, label: "All Content", icon: FileText },
    { id: "settings" as AdminSection, label: "Settings", icon: Settings },
  ];

  return (
    <div className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex">
      {/* Sidebar */}
      <div className={`${sidebarOpen ? "w-64" : "w-16"} bg-[#0a0a0f] border-r border-[#1a1a2e] flex flex-col transition-all duration-300`}>
        <div className="p-4 border-b border-[#1a1a2e] flex items-center justify-between">
          {sidebarOpen && (
            <div>
              <h2 className="text-lg font-bold text-white">NEXUS Admin</h2>
              <p className="text-xs text-gray-500">Tech Director Panel</p>
            </div>
          )}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Menu size={20} />
          </button>
        </div>

        <nav className="flex-1 p-4 space-y-2">
          {navigation.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                  activeSection === item.id
                    ? "bg-[#4f9eff]/10 text-[#4f9eff]"
                    : "text-gray-400 hover:text-white hover:bg-[#1a1a2e]"
                }`}
              >
                <Icon size={20} />
                {sidebarOpen && <span className="text-sm font-medium">{item.label}</span>}
              </button>
            );
          })}
        </nav>

        <div className="p-4 border-t border-[#1a1a2e]">
          <button
            onClick={onClose}
            className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-red-400 hover:text-red-300 hover:bg-red-500/10 transition-colors"
          >
            <LogOut size={20} />
            {sidebarOpen && <span className="text-sm font-medium">Logout</span>}
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <div className="bg-[#0a0a0f] border-b border-[#1a1a2e] p-4 flex items-center justify-between">
          <h1 className="text-xl font-bold text-white capitalize">
            {navigation.find((n) => n.id === activeSection)?.label}
          </h1>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-auto p-6">
          {activeSection === "dashboard" && <DashboardContent />}
          {activeSection === "team" && <TeamManagement />}
          {activeSection === "projects" && <ProjectsManagement />}
          {activeSection === "events" && <EventsManagement />}
          {activeSection === "content" && <ContentManagement />}
          {activeSection === "settings" && <SettingsContent />}
        </div>
      </div>
    </div>
  );
}

// Dashboard Content Component
function DashboardContent() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard title="Team Members" value="5" change="Core Leadership" />
        <StatCard title="Active Projects" value="3" change="Featured Projects" />
        <StatCard title="Data Sections" value="6" change="All Content Areas" />
        <StatCard title="Departments" value="5" change="Full Organization" />
      </div>

      <div className="bg-[#0a0a0f] border border-[#1a1a2e] rounded-lg p-6">
        <h3 className="text-lg font-semibold text-white mb-4">Quick Actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <QuickActionButton 
            title="Add Team Member" 
            description="Add new team member to organization"
            icon="👥"
          />
          <QuickActionButton 
            title="Create Project" 
            description="Add new project to portfolio"
            icon="🚀"
          />
          <QuickActionButton 
            title="Schedule Event" 
            description="Create new event or hackathon"
            icon="📅"
          />
          <QuickActionButton 
            title="Export Data" 
            description="Download all website data"
            icon="📥"
          />
          <QuickActionButton 
            title="View Analytics" 
            description="Check website performance"
            icon="📊"
          />
          <QuickActionButton 
            title="System Status" 
            description="Check system health"
            icon="🔧"
          />
        </div>
      </div>

      <div className="bg-[#0a0a0f] border border-[#1a1a2e] rounded-lg p-6">
        <h3 className="text-lg font-semibold text-white mb-4">System Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-[#12121a] border border-[#1a1a2e] rounded-lg">
            <p className="text-gray-400 text-sm">Framework</p>
            <p className="text-white font-medium mt-1">Next.js 16.3.3</p>
          </div>
          <div className="p-4 bg-[#12121a] border border-[#1a1a2e] rounded-lg">
            <p className="text-gray-400 text-sm">React Version</p>
            <p className="text-white font-medium mt-1">React 19.2.8</p>
          </div>
          <div className="p-4 bg-[#12121a] border border-[#1a1a2e] rounded-lg">
            <p className="text-gray-400 text-sm">Styling</p>
            <p className="text-white font-medium mt-1">Tailwind CSS v4</p>
          </div>
          <div className="p-4 bg-[#12121a] border border-[#1a1a2e] rounded-lg">
            <p className="text-gray-400 text-sm">TypeScript</p>
            <p className="text-white font-medium mt-1">v5.x</p>
          </div>
        </div>
      </div>

      <div className="bg-[#0a0a0f] border border-[#1a1a2e] rounded-lg p-6">
        <h3 className="text-lg font-semibold text-white mb-4">Recent Admin Activity</h3>
        <div className="space-y-3">
          <ActivityItem
            action="Admin panel accessed"
            target="Tech Director logged in"
            time="Just now"
          />
          <ActivityItem
            action="System initialized"
            target="Admin panel setup complete"
            time="Session start"
          />
        </div>
      </div>
    </div>
  );
}

function StatCard({ title, value, change }: { title: string; value: string; change: string }) {
  return (
    <div className="bg-[#0a0a0f] border border-[#1a1a2e] rounded-lg p-6">
      <h3 className="text-sm font-medium text-gray-400 mb-2">{title}</h3>
      <p className="text-2xl font-bold text-white mb-1">{value}</p>
      <p className="text-xs text-[#4f9eff]">{change}</p>
    </div>
  );
}

function ActivityItem({ action, target, time }: { action: string; target: string; time: string }) {
  return (
    <div className="flex items-center justify-between py-2 border-b border-[#1a1a2e] last:border-0">
      <div>
        <p className="text-sm text-white">
          <span className="text-gray-400">{action}:</span> {target}
        </p>
      </div>
      <p className="text-xs text-gray-500">{time}</p>
    </div>
  );
}

function QuickActionButton({ title, description, icon }: { title: string; description: string; icon: string }) {
  return (
    <button className="p-4 bg-[#12121a] border border-[#1a1a2e] rounded-lg hover:border-[#4f9eff] transition-colors text-left">
      <div className="text-2xl mb-2">{icon}</div>
      <h4 className="text-white font-medium">{title}</h4>
      <p className="text-sm text-gray-400 mt-1">{description}</p>
    </button>
  );
}









