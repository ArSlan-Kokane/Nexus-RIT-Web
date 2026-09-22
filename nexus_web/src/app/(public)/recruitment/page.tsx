import { RecruitmentForm } from "@/components/recruitment/recruitment-form";

export const metadata = {
  title: "Join NEXUS | Recruitment",
  description: "Apply to join NEXUS - Innovation & Leadership Collective at RIT",
};

export default function RecruitmentPage() {
  return (
    <div className="min-h-screen bg-[#050507] py-12">
      <div className="max-w-4xl mx-auto px-4 mb-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Join NEXUS
          </h1>
          <p className="text-xl text-gray-400 mb-6">
            BUILD. LEAD. CONNECT.
          </p>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Ready to make an impact? Join our community of innovators, leaders, and creators. 
            Fill out the application below to start your journey with NEXUS.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-[#0a0a0f] border border-[#1a1a2e] rounded-lg p-6 text-center">
            <div className="text-3xl mb-2">🚀</div>
            <h3 className="text-white font-semibold mb-2">Innovate</h3>
            <p className="text-sm text-gray-400">Work on cutting-edge projects and hackathons</p>
          </div>
          <div className="bg-[#0a0a0f] border border-[#1a1a2e] rounded-lg p-6 text-center">
            <div className="text-3xl mb-2">🎯</div>
            <h3 className="text-white font-semibold mb-2">Lead</h3>
            <p className="text-sm text-gray-400">Develop leadership skills and organizational experience</p>
          </div>
          <div className="bg-[#0a0a0f] border border-[#1a1a2e] rounded-lg p-6 text-center">
            <div className="text-3xl mb-2">🤝</div>
            <h3 className="text-white font-semibold mb-2">Connect</h3>
            <p className="text-sm text-gray-400">Network with peers and industry professionals</p>
          </div>
        </div>
      </div>

      <RecruitmentForm />
    </div>
  );
}