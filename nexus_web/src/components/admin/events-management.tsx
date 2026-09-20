"use client";

import { useState } from "react";
import { Plus, Edit, Trash2, Search, Calendar as CalendarIcon, MapPin, Clock, ChevronDown, ChevronUp, Star } from "lucide-react";

interface EventItem {
  id: string;
  slug: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  status: "UPCOMING" | "ONGOING" | "COMPLETED" | "CANCELLED";
  category: string;
  featured: boolean;
  registrationUrl?: string;
  maxParticipants?: number;
  currentParticipants?: number;
}

export function EventsManagement() {
  const [events, setEvents] = useState<EventItem[]>([
    {
      id: "hackathon-2026",
      slug: "hackathon-2026",
      title: "NEXUS Annual Hackathon 2026",
      description: "24-hour innovation challenge bringing together the brightest minds to solve real-world problems.",
      date: "2026-03-15",
      time: "09:00",
      location: "RIT Main Auditorium",
      status: "UPCOMING",
      category: "HACKATHON",
      featured: true,
      registrationUrl: "https://nexusrit.org/register",
      maxParticipants: 200,
      currentParticipants: 45,
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [editingEvent, setEditingEvent] = useState<EventItem | null>(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [expandedEvent, setExpandedEvent] = useState<string | null>(null);

  const filteredEvents = events.filter(event =>
    event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    event.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
    event.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDelete = (id: string) => {
    if (confirm("Are you sure you want to delete this event?")) {
      setEvents(events.filter(e => e.id !== id));
    }
  };

  const handleEdit = (event: EventItem) => {
    setEditingEvent(event);
    setIsAddModalOpen(true);
  };

  const handleSave = (event: EventItem) => {
    if (editingEvent) {
      setEvents(events.map(e => e.id === event.id ? event : e));
    } else {
      setEvents([...events, { ...event, id: event.slug }]);
    }
    setIsAddModalOpen(false);
    setEditingEvent(null);
  };

  const toggleFeatured = (id: string) => {
    setEvents(events.map(e => 
      e.id === id ? { ...e, featured: !e.featured } : e
    ));
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "UPCOMING": return "bg-blue-500/10 text-blue-400";
      case "ONGOING": return "bg-green-500/10 text-green-400";
      case "COMPLETED": return "bg-gray-500/10 text-gray-400";
      case "CANCELLED": return "bg-red-500/10 text-red-400";
      default: return "bg-gray-500/10 text-gray-400";
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white">Events</h2>
          <p className="text-gray-400 mt-1">Manage events, hackathons, and schedules</p>
        </div>
        <button
          onClick={() => {
            setEditingEvent(null);
            setIsAddModalOpen(true);
          }}
          className="flex items-center gap-2 bg-[#4f9eff] hover:bg-[#3a8aee] text-white px-4 py-2 rounded-lg transition-colors"
        >
          <Plus size={20} />
          Add Event
        </button>
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
        <input
          type="text"
          placeholder="Search events..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full bg-[#0a0a0f] border border-[#1a1a2e] rounded-lg py-3 pl-10 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-[#4f9eff] transition-colors"
        />
      </div>

      {/* Events List */}
      <div className="space-y-3">
        {filteredEvents.map((event) => (
          <div key={event.id} className="bg-[#0a0a0f] border border-[#1a1a2e] rounded-lg overflow-hidden">
            <div className="p-4 flex items-center justify-between">
              <div className="flex items-center gap-4 flex-1">
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="text-white font-semibold">{event.title}</h3>
                    {event.featured && <Star className="text-yellow-500 fill-yellow-500" size={16} />}
                  </div>
                  <div className="flex items-center gap-4 mt-2 text-sm text-gray-400">
                    <div className="flex items-center gap-1">
                      <CalendarIcon size={14} />
                      {new Date(event.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={14} />
                      {event.time}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin size={14} />
                      {event.location}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <span className={`text-xs px-2 py-1 rounded ${getStatusColor(event.status)}`}>
                      {event.status}
                    </span>
                    <span className="text-xs bg-[#1a1a2e] text-gray-300 px-2 py-1 rounded">{event.category}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => toggleFeatured(event.id)}
                  className={`p-2 rounded-lg transition-colors ${event.featured ? 'text-yellow-500 bg-yellow-500/10' : 'text-gray-500 hover:text-yellow-500'}`}
                  title={event.featured ? "Remove from featured" : "Add to featured"}
                >
                  <Star size={18} />
                </button>
                <button
                  onClick={() => setExpandedEvent(expandedEvent === event.id ? null : event.id)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {expandedEvent === event.id ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>
                <button
                  onClick={() => handleEdit(event)}
                  className="text-gray-400 hover:text-[#4f9eff] transition-colors"
                >
                  <Edit size={20} />
                </button>
                <button
                  onClick={() => handleDelete(event.id)}
                  className="text-gray-400 hover:text-red-400 transition-colors"
                >
                  <Trash2 size={20} />
                </button>
              </div>
            </div>

            {expandedEvent === event.id && (
              <div className="px-4 pb-4 border-t border-[#1a1a2e] pt-4">
                <div className="space-y-4">
                  <div>
                    <p className="text-gray-500 text-sm">Description</p>
                    <p className="text-white mt-1">{event.description}</p>
                  </div>

                  {event.registrationUrl && (
                    <div>
                      <p className="text-gray-500 text-sm">Registration URL</p>
                      <a href={event.registrationUrl} target="_blank" rel="noopener noreferrer" className="text-[#4f9eff] hover:underline mt-1 block">
                        {event.registrationUrl}
                      </a>
                    </div>
                  )}

                  {event.maxParticipants && (
                    <div>
                      <p className="text-gray-500 text-sm">Participants</p>
                      <div className="mt-2">
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-white">{event.currentParticipants || 0} registered</span>
                          <span className="text-gray-400">{event.maxParticipants} max</span>
                        </div>
                        <div className="w-full bg-[#1a1a2e] rounded-full h-2">
                          <div
                            className="bg-[#4f9eff] h-2 rounded-full transition-all"
                            style={{
                              width: `${((event.currentParticipants || 0) / event.maxParticipants) * 100}%`
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Add/Edit Modal */}
      {isAddModalOpen && (
        <EventModal
          event={editingEvent}
          onSave={handleSave}
          onClose={() => {
            setIsAddModalOpen(false);
            setEditingEvent(null);
          }}
        />
      )}
    </div>
  );
}

function EventModal({
  event,
  onSave,
  onClose,
}: {
  event: EventItem | null;
  onSave: (event: EventItem) => void;
  onClose: () => void;
}) {
  const [formData, setFormData] = useState<EventItem>(
    event || {
      id: "",
      slug: "",
      title: "",
      description: "",
      date: "",
      time: "",
      location: "",
      status: "UPCOMING",
      category: "HACKATHON",
      featured: false,
      registrationUrl: "",
      maxParticipants: 0,
      currentParticipants: 0,
    }
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-[#0a0a0f] border border-[#1a1a2e] rounded-lg max-w-2xl w-full p-6 max-h-[90vh] overflow-y-auto">
        <h3 className="text-xl font-bold text-white mb-6">
          {event ? "Edit Event" : "Add Event"}
        </h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Title</label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="w-full bg-[#12121a] border border-[#1a1a2e] rounded-lg py-2 px-3 text-white focus:outline-none focus:border-[#4f9eff]"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Slug</label>
              <input
                type="text"
                value={formData.slug}
                onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                className="w-full bg-[#12121a] border border-[#1a1a2e] rounded-lg py-2 px-3 text-white focus:outline-none focus:border-[#4f9eff]"
                placeholder="event-slug"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Description</label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="w-full bg-[#12121a] border border-[#1a1a2e] rounded-lg py-2 px-3 text-white focus:outline-none focus:border-[#4f9eff] h-24"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Date</label>
              <input
                type="date"
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                className="w-full bg-[#12121a] border border-[#1a1a2e] rounded-lg py-2 px-3 text-white focus:outline-none focus:border-[#4f9eff]"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Time</label>
              <input
                type="time"
                value={formData.time}
                onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                className="w-full bg-[#12121a] border border-[#1a1a2e] rounded-lg py-2 px-3 text-white focus:outline-none focus:border-[#4f9eff]"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Location</label>
            <input
              type="text"
              value={formData.location}
              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
              className="w-full bg-[#12121a] border border-[#1a1a2e] rounded-lg py-2 px-3 text-white focus:outline-none focus:border-[#4f9eff]"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Status</label>
              <select
                value={formData.status}
                onChange={(e) => setFormData({ ...formData, status: e.target.value as any })}
                className="w-full bg-[#12121a] border border-[#1a1a2e] rounded-lg py-2 px-3 text-white focus:outline-none focus:border-[#4f9eff]"
              >
                <option value="UPCOMING">Upcoming</option>
                <option value="ONGOING">Ongoing</option>
                <option value="COMPLETED">Completed</option>
                <option value="CANCELLED">Cancelled</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Category</label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="w-full bg-[#12121a] border border-[#1a1a2e] rounded-lg py-2 px-3 text-white focus:outline-none focus:border-[#4f9eff]"
              >
                <option value="HACKATHON">Hackathon</option>
                <option value="WORKSHOP">Workshop</option>
                <option value="MEETUP">Meetup</option>
                <option value="COMPETITION">Competition</option>
                <option value="SEMINAR">Seminar</option>
                <option value="OTHER">Other</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Registration URL</label>
            <input
              type="url"
              value={formData.registrationUrl || ""}
              onChange={(e) => setFormData({ ...formData, registrationUrl: e.target.value })}
              className="w-full bg-[#12121a] border border-[#1a1a2e] rounded-lg py-2 px-3 text-white focus:outline-none focus:border-[#4f9eff]"
              placeholder="https://..."
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Max Participants</label>
              <input
                type="number"
                value={formData.maxParticipants || 0}
                onChange={(e) => setFormData({ ...formData, maxParticipants: parseInt(e.target.value) || 0 })}
                className="w-full bg-[#12121a] border border-[#1a1a2e] rounded-lg py-2 px-3 text-white focus:outline-none focus:border-[#4f9eff]"
                min="0"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Current Participants</label>
              <input
                type="number"
                value={formData.currentParticipants || 0}
                onChange={(e) => setFormData({ ...formData, currentParticipants: parseInt(e.target.value) || 0 })}
                className="w-full bg-[#12121a] border border-[#1a1a2e] rounded-lg py-2 px-3 text-white focus:outline-none focus:border-[#4f9eff]"
                min="0"
              />
            </div>
          </div>

          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              id="featured"
              checked={formData.featured}
              onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
              className="w-4 h-4 bg-[#12121a] border-[#1a1a2e] rounded"
            />
            <label htmlFor="featured" className="text-sm font-medium text-gray-300">Featured Event</label>
          </div>

          <div className="flex justify-end gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-lg border border-[#1a1a2e] text-gray-300 hover:text-white transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded-lg bg-[#4f9eff] hover:bg-[#3a8aee] text-white transition-colors"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}