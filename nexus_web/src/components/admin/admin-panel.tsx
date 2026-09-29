"use client";

import { useState, useEffect } from "react";
import { X, LayoutDashboard, Users, FolderKanban, Calendar, FileText, Settings, LogOut, Menu, UserPlus, UsersRound, Rocket, CalendarPlus, Download, Settings2 } from "lucide-react";
import { TeamManagement } from "./team-management";
import { ProjectsManagement } from "./projects-management";
import { EventsManagement } from "./events-management";
import { ContentManagement } from "./content-management";
import { SettingsContent } from "./settings-content";
import { RecruitmentManagement } from "./recruitment-management";
import { teamMembers } from "@/data/team";
import { projectsData } from "@/data/projects";

interface AdminPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

type AdminSection = "dashboard" | "team" | "recruitment" | "projects" | "events" | "content" | "settings";

export function AdminPanel({ isOpen, onClose }: AdminPanelProps) {
  const [activeSection, setActiveSection] = useState<AdminSection>("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  if (!isOpen) return null;

  const navigation = [
    { id: "dashboard" as AdminSection, label: "Dashboard", icon: LayoutDashboard },
    { id: "team" as AdminSection, label: "Team Members", icon: Users },
    { id: "recruitment" as AdminSection, label: "Recruitment", icon: UserPlus },
    { id: "projects" as AdminSection, label: "Projects", icon: FolderKanban },
    { id: "events" as AdminSection, label: "Events", icon: Calendar },
    { id: "content" as AdminSection, label: "All Content", icon: FileText },
    { id: "settings" as AdminSection, label: "Settings", icon: Settings },
  ];

  return (
    <div className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex flex-col lg:flex-row">
      {/* Mobile Header */}
      <div className="lg:hidden bg-[#0a0a0f] border-b border-[#1a1a2e] p-4 flex items-center justify-between">
        <div>
          <h2 className="text-lg font-bold text-white">NEXUS Admin</h2>
          <p className="text-xs text-gray-500">Tech Director Panel</p>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="text-gray-400 hover:text-white transition-colors p-2"
          >
            <Menu size={20} />
          </button>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors p-2"
          >
            <X size={20} />
          </button>
        </div>
      </div>

      {/* Sidebar - Drawer on mobile, fixed on desktop */}
      <div className={`${sidebarOpen ? "fixed inset-y-0 left-0 z-50 lg:static lg:inset-auto" : "hidden lg:flex"} ${sidebarOpen ? "w-64" : "lg:w-64"} bg-[#0a0a0f] border-r border-[#1a1a2e] flex flex-col transition-all duration-300`}>
        {/* Desktop Header */}
        <div className="hidden lg:flex p-4 border-b border-[#1a1a2e] items-center justify-between">
          <div>
            <h2 className="text-lg font-bold text-white">NEXUS Admin</h2>
            <p className="text-xs text-gray-500">Tech Director Panel</p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Mobile Close Button */}
        <div className="lg:hidden p-4 border-b border-[#1a1a2e] flex items-center justify-between">
          <div>
            <h2 className="text-lg font-bold text-white">Navigation</h2>
          </div>
          <button
            onClick={() => setSidebarOpen(false)}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          {navigation.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveSection(item.id);
                  setSidebarOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-3 py-3 rounded-lg transition-colors ${
                  activeSection === item.id
                    ? "bg-[#4f9eff]/10 text-[#4f9eff]"
                    : "text-gray-400 hover:text-white hover:bg-[#1a1a2e]"
                }`}
              >
                <Icon size={20} />
                <span className="text-sm font-medium">{item.label}</span>
              </button>
            );
          })}
        </nav>

        <div className="p-4 border-t border-[#1a1a2e]">
          <button
            onClick={onClose}
            className="w-full flex items-center gap-3 px-3 py-3 rounded-lg text-red-400 hover:text-red-300 hover:bg-red-500/10 transition-colors"
          >
            <LogOut size={20} />
            <span className="text-sm font-medium">Logout</span>
          </button>
        </div>
      </div>

      {/* Mobile Backdrop */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Desktop Header */}
        <div className="hidden lg:flex bg-[#0a0a0f] border-b border-[#1a1a2e] p-4 items-center justify-between">
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
        <div className="flex-1 overflow-auto p-4 lg:p-6">
          {activeSection === "dashboard" && <DashboardContent setActiveSection={setActiveSection} />}
          {activeSection === "team" && <TeamManagement />}
          {activeSection === "recruitment" && <RecruitmentManagement />}
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
function DashboardContent({ setActiveSection }: { setActiveSection: (section: AdminSection) => void }) {
  const [stats, setStats] = useState({
    teamMembers: teamMembers.length,
    activeProjects: projectsData.length,
    applications: 0,
    departments: 5
  });

  useEffect(() => {
    // Fetch real statistics
    const fetchStats = async () => {
      try {
        // Fetch application statistics
        const appResponse = await fetch('/api/recruitment/applications?stats=true');
        if (appResponse.ok) {
          const appStats = await appResponse.json();
          setStats(prev => ({
            ...prev,
            applications: appStats.total || 0
          }));
        }
      } catch (error) {
        console.error('Error fetching stats:', error);
      }
    };

    fetchStats();
  }, []);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
        <StatCard title="Team Members" value={stats.teamMembers.toString()} change="Core Leadership" />
        <StatCard title="Active Projects" value={stats.activeProjects.toString()} change="Featured Projects" />
        <StatCard title="Applications" value={stats.applications.toString()} change="Total Applications" />
        <StatCard title="Departments" value={stats.departments.toString()} change="Full Organization" />
      </div>

      <div className="bg-[#0a0a0f] border border-[#1a1a2e] rounded-lg p-4 lg:p-6">
        <h3 className="text-base lg:text-lg font-semibold text-white mb-4">Quick Actions</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4">
          <QuickActionButton 
            title="View Applications" 
            description="Review recruitment applications"
            icon={<UsersRound size={24} />}
            onClick={() => setActiveSection('recruitment')}
          />
          <QuickActionButton 
            title="Add Team Member" 
            description="Add new team member to organization"
            icon={<Users size={24} />}
            onClick={() => setActiveSection('team')}
          />
          <QuickActionButton 
            title="Create Project" 
            description="Add new project to portfolio"
            icon={<Rocket size={24} />}
            onClick={() => setActiveSection('projects')}
          />
          <QuickActionButton 
            title="Schedule Event" 
            description="Create new event or hackathon"
            icon={<CalendarPlus size={24} />}
            onClick={() => setActiveSection('events')}
          />
          <QuickActionButton 
            title="Export Data" 
            description="Download all website data"
            icon={<Download size={24} />}
            onClick={() => console.log('Export functionality')}
          />
          <QuickActionButton 
            title="System Settings" 
            description="Check system health"
            icon={<Settings2 size={24} />}
            onClick={() => setActiveSection('settings')}
          />
        </div>
      </div>

      <div className="bg-[#0a0a0f] border border-[#1a1a2e] rounded-lg p-4 lg:p-6">
        <h3 className="text-base lg:text-lg font-semibold text-white mb-4">System Information</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-4">
          <div className="p-3 lg:p-4 bg-[#12121a] border border-[#1a1a2e] rounded-lg">
            <p className="text-gray-400 text-xs lg:text-sm">Framework</p>
            <p className="text-white font-medium mt-1 text-sm lg:text-base">Next.js 16.3.3</p>
          </div>
          <div className="p-3 lg:p-4 bg-[#12121a] border border-[#1a1a2e] rounded-lg">
            <p className="text-gray-400 text-xs lg:text-sm">React Version</p>
            <p className="text-white font-medium mt-1 text-sm lg:text-base">React 19.2.8</p>
          </div>
          <div className="p-3 lg:p-4 bg-[#12121a] border border-[#1a1a2e] rounded-lg">
            <p className="text-gray-400 text-xs lg:text-sm">Styling</p>
            <p className="text-white font-medium mt-1 text-sm lg:text-base">Tailwind CSS v4</p>
          </div>
          <div className="p-3 lg:p-4 bg-[#12121a] border border-[#1a1a2e] rounded-lg">
            <p className="text-gray-400 text-xs lg:text-sm">TypeScript</p>
            <p className="text-white font-medium mt-1 text-sm lg:text-base">v5.x</p>
          </div>
        </div>
      </div>

      <div className="bg-[#0a0a0f] border border-[#1a1a2e] rounded-lg p-4 lg:p-6">
        <h3 className="text-base lg:text-lg font-semibold text-white mb-4">Recent Admin Activity</h3>
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
    <div className="bg-[#0a0a0f] border border-[#1a1a2e] rounded-lg p-3 lg:p-6">
      <h3 className="text-xs lg:text-sm font-medium text-gray-400 mb-1 lg:mb-2">{title}</h3>
      <p className="text-xl lg:text-2xl font-bold text-white mb-0.5 lg:mb-1">{value}</p>
      <p className="text-[10px] lg:text-xs text-[#4f9eff]">{change}</p>
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

function QuickActionButton({ title, description, icon, onClick }: { title: string; description: string; icon: React.ReactNode; onClick?: () => void }) {
  return (
    <button onClick={onClick} className="p-3 lg:p-4 bg-[#12121a] border border-[#1a1a2e] rounded-lg hover:border-[#4f9eff] transition-colors text-left min-h-[100px]">
      <div className="text-[#4f9eff] mb-2">{icon}</div>
      <h4 className="text-white font-medium text-sm lg:text-base">{title}</h4>
      <p className="text-xs lg:text-sm text-gray-400 mt-1 line-clamp-2">{description}</p>
    </button>
  );
}









