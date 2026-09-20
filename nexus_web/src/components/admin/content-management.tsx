"use client";

import { useState } from "react";
import { Search, Download, Upload, RefreshCw, Database, FileText, Users, FolderKanban, Calendar, BookOpen, Award } from "lucide-react";

export function ContentManagement() {
  const [activeTab, setActiveTab] = useState<"overview" | "team" | "projects" | "events" | "insights" | "resources" | "alumni">("overview");
  const [searchTerm, setSearchTerm] = useState("");

  const tabs = [
    { id: "overview" as const, label: "Overview", icon: Database },
    { id: "team" as const, label: "Team Data", icon: Users },
    { id: "projects" as const, label: "Projects Data", icon: FolderKanban },
    { id: "events" as const, label: "Events Data", icon: Calendar },
    { id: "insights" as const, label: "Insights Data", icon: FileText },
    { id: "resources" as const, label: "Resources Data", icon: BookOpen },
    { id: "alumni" as const, label: "Alumni Data", icon: Award },
  ];

  const dataStats = [
    { label: "Team Members", count: 12, file: "team.ts", size: "4.2 KB" },
    { label: "Projects", count: 8, file: "projects.ts", size: "2.8 KB" },
    { label: "Events", count: 15, file: "events.ts", size: "3.1 KB" },
    { label: "Insights", count: 6, file: "insights.ts", size: "1.9 KB" },
    { label: "Resources", count: 24, file: "resources.ts", size: "5.4 KB" },
    { label: "Alumni", count: 45, file: "alumni.ts", size: "6.2 KB" },
  ];

  const handleExport = (dataType: string) => {
    // In a real implementation, this would export the data as JSON
    console.log(`Exporting ${dataType} data...`);
    alert(`Export functionality for ${dataType} would be implemented here.`);
  };

  const handleImport = (dataType: string) => {
    // In a real implementation, this would import data from a JSON file
    console.log(`Importing ${dataType} data...`);
    alert(`Import functionality for ${dataType} would be implemented here.`);
  };

  const handleRefresh = (dataType: string) => {
    // In a real implementation, this would refresh the data from source
    console.log(`Refreshing ${dataType} data...`);
    alert(`Data refresh would be implemented here.`);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold text-white">All Content Management</h2>
        <p className="text-gray-400 mt-1">Unified access to all website data and content</p>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-[#1a1a2e]">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-3 border-b-2 transition-colors ${
                activeTab === tab.id
                  ? "border-[#4f9eff] text-[#4f9eff]"
                  : "border-transparent text-gray-400 hover:text-white"
              }`}
            >
              <Icon size={18} />
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
        <input
          type="text"
          placeholder="Search across all content..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full bg-[#0a0a0f] border border-[#1a1a2e] rounded-lg py-3 pl-10 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-[#4f9eff] transition-colors"
        />
      </div>

      {/* Content */}
      {activeTab === "overview" && (
        <div className="space-y-6">
          <div className="bg-[#0a0a0f] border border-[#1a1a2e] rounded-lg p-6">
            <h3 className="text-lg font-semibold text-white mb-4">Data Overview</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {dataStats.map((stat) => (
                <div key={stat.file} className="bg-[#12121a] border border-[#1a1a2e] rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-white font-medium">{stat.label}</h4>
                    <span className="text-[#4f9eff] font-bold">{stat.count}</span>
                  </div>
                  <div className="text-sm text-gray-400 space-y-1">
                    <p>File: {stat.file}</p>
                    <p>Size: {stat.size}</p>
                  </div>
                  <div className="flex gap-2 mt-3">
                    <button
                      onClick={() => handleExport(stat.label)}
                      className="flex-1 flex items-center justify-center gap-1 text-xs bg-[#1a1a2e] text-gray-300 py-2 rounded hover:bg-[#2a2a3e] transition-colors"
                    >
                      <Download size={14} />
                      Export
                    </button>
                    <button
                      onClick={() => handleImport(stat.label)}
                      className="flex-1 flex items-center justify-center gap-1 text-xs bg-[#1a1a2e] text-gray-300 py-2 rounded hover:bg-[#2a2a3e] transition-colors"
                    >
                      <Upload size={14} />
                      Import
                    </button>
                    <button
                      onClick={() => handleRefresh(stat.label)}
                      className="flex-1 flex items-center justify-center gap-1 text-xs bg-[#1a1a2e] text-gray-300 py-2 rounded hover:bg-[#2a2a3e] transition-colors"
                    >
                      <RefreshCw size={14} />
                      Refresh
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#0a0a0f] border border-[#1a1a2e] rounded-lg p-6">
            <h3 className="text-lg font-semibold text-white mb-4">Quick Actions</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <button className="flex items-center gap-3 p-4 bg-[#12121a] border border-[#1a1a2e] rounded-lg hover:border-[#4f9eff] transition-colors text-left">
                <Download className="text-[#4f9eff]" size={24} />
                <div>
                  <h4 className="text-white font-medium">Export All Data</h4>
                  <p className="text-sm text-gray-400">Download complete website data as JSON</p>
                </div>
              </button>
              <button className="flex items-center gap-3 p-4 bg-[#12121a] border border-[#1a1a2e] rounded-lg hover:border-[#4f9eff] transition-colors text-left">
                <Upload className="text-[#4f9eff]" size={24} />
                <div>
                  <h4 className="text-white font-medium">Import Data</h4>
                  <p className="text-sm text-gray-400">Restore website data from backup</p>
                </div>
              </button>
              <button className="flex items-center gap-3 p-4 bg-[#12121a] border border-[#1a1a2e] rounded-lg hover:border-[#4f9eff] transition-colors text-left">
                <RefreshCw className="text-[#4f9eff]" size={24} />
                <div>
                  <h4 className="text-white font-medium">Refresh All Data</h4>
                  <p className="text-sm text-gray-400">Reload all data from source files</p>
                </div>
              </button>
              <button className="flex items-center gap-3 p-4 bg-[#12121a] border border-[#1a1a2e] rounded-lg hover:border-[#4f9eff] transition-colors text-left">
                <Database className="text-[#4f9eff]" size={24} />
                <div>
                  <h4 className="text-white font-medium">Data Health Check</h4>
                  <p className="text-sm text-gray-400">Validate data integrity and consistency</p>
                </div>
              </button>
            </div>
          </div>
        </div>
      )}

      {activeTab !== "overview" && (
        <div className="bg-[#0a0a0f] border border-[#1a1a2e] rounded-lg p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-white capitalize">
              {tabs.find((t) => t.id === activeTab)?.label}
            </h3>
            <div className="flex gap-2">
              <button
                onClick={() => handleExport(activeTab)}
                className="flex items-center gap-2 bg-[#1a1a2e] text-gray-300 px-3 py-2 rounded-lg hover:bg-[#2a2a3e] transition-colors"
              >
                <Download size={16} />
                Export
              </button>
              <button
                onClick={() => handleImport(activeTab)}
                className="flex items-center gap-2 bg-[#1a1a2e] text-gray-300 px-3 py-2 rounded-lg hover:bg-[#2a2a3e] transition-colors"
              >
                <Upload size={16} />
                Import
              </button>
              <button
                onClick={() => handleRefresh(activeTab)}
                className="flex items-center gap-2 bg-[#1a1a2e] text-gray-300 px-3 py-2 rounded-lg hover:bg-[#2a2a3e] transition-colors"
              >
                <RefreshCw size={16} />
                Refresh
              </button>
            </div>
          </div>

          <div className="bg-[#12121a] border border-[#1a1a2e] rounded-lg p-4">
            <div className="flex items-center gap-2 text-gray-400 mb-4">
              <FileText size={20} />
              <span className="font-mono text-sm">src/data/{activeTab}.ts</span>
            </div>
            <pre className="bg-[#0a0a0f] border border-[#1a1a2e] rounded-lg p-4 overflow-x-auto text-sm text-gray-300">
              <code>
                {`// ${activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} data structure
// This file contains the ${activeTab} data for the NEXUS website
// Total items: ${dataStats.find(s => s.label.toLowerCase().includes(activeTab))?.count || 0}

export const ${activeTab}Data = [
  // Data items would be displayed here
  // Use the specific management sections for full CRUD operations
];`}
              </code>
            </pre>
          </div>

          <div className="mt-6 p-4 bg-[#1a1a2e] border border-[#2a2a3e] rounded-lg">
            <p className="text-sm text-gray-300">
              <span className="text-[#4f9eff] font-medium">Tip:</span> For full CRUD operations on {activeTab} data, 
              use the dedicated management sections ({tabs.find(t => t.id === activeTab)?.label}) in the admin panel.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}