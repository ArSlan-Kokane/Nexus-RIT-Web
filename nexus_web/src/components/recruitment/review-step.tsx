"use client";

import { RecruitmentFormData } from "@/lib/recruitment/schema";
import { Department } from "@/lib/recruitment/schema";

interface ReviewStepProps {
  formData: RecruitmentFormData;
  onChange: (data: RecruitmentFormData) => void;
  errors: Record<string, string>;
}

const DEPARTMENT_LABELS: Record<Department, string> = {
  ADMINISTRATION: "Administration",
  TECHNOLOGY: "Technology",
  MEDIA_AND_MARKETING: "Media & Marketing",
  OPERATIONS: "Operations",
  PARTNERSHIPS: "Partnerships",
};

export function ReviewStep({ formData, onChange, errors }: ReviewStepProps) {
  const handleEdit = (step: string) => {
    // This would typically navigate to the specific step
    // For now, we'll just scroll to that section
    console.log(`Navigate to ${step}`);
  };

  return (
    <div className="space-y-6">
      <div className="bg-[#1a1a2e] border border-[#2a2a3e] rounded-lg p-4">
        <p className="text-sm text-gray-400">
          <span className="text-[#4f9eff] font-medium">Review your application:</span> Please review all information carefully before submitting. 
          You can go back to any section to make changes.
        </p>
      </div>

      {/* Personal Information Review */}
      <div className="bg-[#12121a] border border-[#1a1a2e] rounded-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-white">Personal Information</h3>
          <button
            onClick={() => handleEdit('personal')}
            className="text-[#4f9eff] hover:underline text-sm"
          >
            Edit
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-gray-400">Full Name</p>
            <p className="text-white">{formData.personalInfo.fullName}</p>
          </div>
          <div>
            <p className="text-sm text-gray-400">Email</p>
            <p className="text-white">{formData.personalInfo.email}</p>
          </div>
          <div>
            <p className="text-sm text-gray-400">Phone</p>
            <p className="text-white">{formData.personalInfo.phone}</p>
          </div>
          <div>
            <p className="text-sm text-gray-400">Year</p>
            <p className="text-white">{formData.personalInfo.year}</p>
          </div>
          <div>
            <p className="text-sm text-gray-400">Branch</p>
            <p className="text-white">{formData.personalInfo.branch}</p>
          </div>
          <div>
            <p className="text-sm text-gray-400">Student ID</p>
            <p className="text-white">{formData.personalInfo.studentId}</p>
          </div>
        </div>
      </div>

      {/* Department Interest Review */}
      <div className="bg-[#12121a] border border-[#1a1a2e] rounded-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-white">Department Interest</h3>
          <button
            onClick={() => handleEdit('department')}
            className="text-[#4f9eff] hover:underline text-sm"
          >
            Edit
          </button>
        </div>
        <div className="space-y-3">
          <div>
            <p className="text-sm text-gray-400">First Choice</p>
            <p className="text-white">{DEPARTMENT_LABELS[formData.departmentInterest.firstChoice]}</p>
          </div>
          <div>
            <p className="text-sm text-gray-400">Second Choice</p>
            <p className="text-white">{DEPARTMENT_LABELS[formData.departmentInterest.secondChoice]}</p>
          </div>
          {formData.departmentInterest.thirdChoice && (
            <div>
              <p className="text-sm text-gray-400">Third Choice</p>
              <p className="text-white">{DEPARTMENT_LABELS[formData.departmentInterest.thirdChoice]}</p>
            </div>
          )}
          <div>
            <p className="text-sm text-gray-400">Reason</p>
            <p className="text-white">{formData.departmentInterest.reason}</p>
          </div>
        </div>
      </div>

      {/* Skills Review */}
      <div className="bg-[#12121a] border border-[#1a1a2e] rounded-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-white">Skills & Experience</h3>
          <button
            onClick={() => handleEdit('skills')}
            className="text-[#4f9eff] hover:underline text-sm"
          >
            Edit
          </button>
        </div>
        <div className="space-y-3">
          <div>
            <p className="text-sm text-gray-400">Technical Skills</p>
            <div className="flex flex-wrap gap-2 mt-1">
              {formData.skills.technicalSkills.map((skill) => (
                <span key={skill} className="bg-[#4f9eff]/10 text-[#4f9eff] px-3 py-1 rounded-lg text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div>
            <p className="text-sm text-gray-400">Experience</p>
            <p className="text-white">{formData.skills.experience}</p>
          </div>
          <div>
            <p className="text-sm text-gray-400">Projects</p>
            <p className="text-white">{formData.skills.projects}</p>
          </div>
          {(formData.skills.portfolioUrl || formData.skills.githubUrl || formData.skills.linkedinUrl) && (
            <div>
              <p className="text-sm text-gray-400">Links</p>
              <div className="space-y-1 mt-1">
                {formData.skills.portfolioUrl && (
                  <a href={formData.skills.portfolioUrl} target="_blank" rel="noopener noreferrer" className="text-[#4f9eff] hover:underline text-sm block">
                    Portfolio
                  </a>
                )}
                {formData.skills.githubUrl && (
                  <a href={formData.skills.githubUrl} target="_blank" rel="noopener noreferrer" className="text-[#4f9eff] hover:underline text-sm block">
                    GitHub
                  </a>
                )}
                {formData.skills.linkedinUrl && (
                  <a href={formData.skills.linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-[#4f9eff] hover:underline text-sm block">
                    LinkedIn
                  </a>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Motivation Review */}
      <div className="bg-[#12121a] border border-[#1a1a2e] rounded-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-white">Motivation & Commitment</h3>
          <button
            onClick={() => handleEdit('motivation')}
            className="text-[#4f9eff] hover:underline text-sm"
          >
            Edit
          </button>
        </div>
        <div className="space-y-3">
          <div>
            <p className="text-sm text-gray-400">Why do you want to join NEXUS?</p>
            <p className="text-white">{formData.responses.whyJoin}</p>
          </div>
          <div>
            <p className="text-sm text-gray-400">How can you contribute?</p>
            <p className="text-white">{formData.responses.contribution}</p>
          </div>
          <div>
            <p className="text-sm text-gray-400">Time Commitment</p>
            <p className="text-white">{formData.responses.timeCommitment}</p>
          </div>
          {formData.responses.otherActivities && (
            <div>
              <p className="text-sm text-gray-400">Other Activities</p>
              <p className="text-white">{formData.responses.otherActivities}</p>
            </div>
          )}
        </div>
      </div>

      {/* Agreement */}
      <div className="bg-[#1a1a2e] border border-[#2a2a3e] rounded-lg p-4">
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            required
            className="mt-1 w-4 h-4 bg-[#12121a] border-[#1a1a2e] rounded"
          />
          <div>
            <p className="text-white text-sm">
              I confirm that all information provided is accurate and complete. I understand that providing false information may result in disqualification from the recruitment process.
            </p>
          </div>
        </label>
      </div>

      {errors.submit && (
        <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-3 text-red-400">
          {errors.submit}
        </div>
      )}
    </div>
  );
}