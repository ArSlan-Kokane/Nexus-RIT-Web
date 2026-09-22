// JSON-based storage for recruitment applications
// This is a temporary solution - upgrade to PostgreSQL for production

import { RecruitmentApplication, RecruitmentFormData, ApplicationStatus } from './schema';
import { v4 as uuidv4 } from 'uuid';
import { promises as fs } from 'fs';
import path from 'path';

const STORAGE_FILE = path.join(process.cwd(), 'data', 'recruitment-applications.json');

// Initialize storage file if it doesn't exist
export async function initializeStorage(): Promise<void> {
  try {
    const dataDir = path.join(process.cwd(), 'data');
    
    // Create data directory if it doesn't exist
    try {
      await fs.access(dataDir);
    } catch {
      await fs.mkdir(dataDir, { recursive: true });
    }
    
    // Create storage file if it doesn't exist
    try {
      await fs.access(STORAGE_FILE);
    } catch {
      await fs.writeFile(STORAGE_FILE, JSON.stringify([], null, 2), 'utf8');
    }
  } catch (error) {
    console.error('Error initializing storage:', error);
    throw new Error('Failed to initialize storage system');
  }
}

// Read all applications from storage
export async function getAllApplications(): Promise<RecruitmentApplication[]> {
  try {
    await initializeStorage();
    const data = await fs.readFile(STORAGE_FILE, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading applications:', error);
    return [];
  }
}

// Get application by ID
export async function getApplicationById(id: string): Promise<RecruitmentApplication | null> {
  try {
    const applications = await getAllApplications();
    return applications.find(app => app.id === id) || null;
  } catch (error) {
    console.error('Error getting application by ID:', error);
    return null;
  }
}

// Create new application
export async function createApplication(formData: RecruitmentFormData): Promise<RecruitmentApplication> {
  try {
    await initializeStorage();
    
    const applications = await getAllApplications();
    
    const newApplication: RecruitmentApplication = {
      id: uuidv4(),
      submittedAt: new Date().toISOString(),
      status: 'pending',
      ...formData,
    };
    
    applications.push(newApplication);
    await saveApplications(applications);
    
    return newApplication;
  } catch (error) {
    console.error('Error creating application:', error);
    throw new Error('Failed to create application');
  }
}

// Update application status
export async function updateApplicationStatus(
  id: string, 
  status: ApplicationStatus,
  adminNotes?: string
): Promise<RecruitmentApplication | null> {
  try {
    const applications = await getAllApplications();
    const index = applications.findIndex(app => app.id === id);
    
    if (index === -1) {
      return null;
    }
    
    applications[index].status = status;
    if (adminNotes !== undefined) {
      applications[index].adminNotes = adminNotes;
    }
    
    await saveApplications(applications);
    
    return applications[index];
  } catch (error) {
    console.error('Error updating application status:', error);
    throw new Error('Failed to update application status');
  }
}

// Delete application
export async function deleteApplication(id: string): Promise<boolean> {
  try {
    const applications = await getAllApplications();
    const filteredApplications = applications.filter(app => app.id !== id);
    
    if (filteredApplications.length === applications.length) {
      return false; // Application not found
    }
    
    await saveApplications(filteredApplications);
    return true;
  } catch (error) {
    console.error('Error deleting application:', error);
    throw new Error('Failed to delete application');
  }
}

// Save applications to storage
async function saveApplications(applications: RecruitmentApplication[]): Promise<void> {
  try {
    await fs.writeFile(STORAGE_FILE, JSON.stringify(applications, null, 2), 'utf8');
  } catch (error) {
    console.error('Error saving applications:', error);
    throw new Error('Failed to save applications');
  }
}

// Filter applications by status
export async function getApplicationsByStatus(status: ApplicationStatus): Promise<RecruitmentApplication[]> {
  try {
    const applications = await getAllApplications();
    return applications.filter(app => app.status === status);
  } catch (error) {
    console.error('Error filtering applications by status:', error);
    return [];
  }
}

// Filter applications by department
export async function getApplicationsByDepartment(department: string): Promise<RecruitmentApplication[]> {
  try {
    const applications = await getAllApplications();
    return applications.filter(app => 
      app.departmentInterest.firstChoice === department ||
      app.departmentInterest.secondChoice === department ||
      app.departmentInterest.thirdChoice === department
    );
  } catch (error) {
    console.error('Error filtering applications by department:', error);
    return [];
  }
}

// Search applications by name or email
export async function searchApplications(query: string): Promise<RecruitmentApplication[]> {
  try {
    const applications = await getAllApplications();
    const lowerQuery = query.toLowerCase();
    
    return applications.filter(app =>
      app.personalInfo.fullName.toLowerCase().includes(lowerQuery) ||
      app.personalInfo.email.toLowerCase().includes(lowerQuery)
    );
  } catch (error) {
    console.error('Error searching applications:', error);
    return [];
  }
}

// Get application statistics
export async function getApplicationStats(): Promise<{
  total: number;
  byStatus: Record<ApplicationStatus, number>;
  byDepartment: Record<string, number>;
}> {
  try {
    const applications = await getAllApplications();
    
    const byStatus: Record<ApplicationStatus, number> = {
      pending: 0,
      review: 0,
      interview: 0,
      accepted: 0,
      rejected: 0,
    };
    
    const byDepartment: Record<string, number> = {};
    
    applications.forEach(app => {
      byStatus[app.status]++;
      
      const firstChoice = app.departmentInterest.firstChoice;
      byDepartment[firstChoice] = (byDepartment[firstChoice] || 0) + 1;
    });
    
    return {
      total: applications.length,
      byStatus,
      byDepartment,
    };
  } catch (error) {
    console.error('Error getting application stats:', error);
    return {
      total: 0,
      byStatus: { pending: 0, review: 0, interview: 0, accepted: 0, rejected: 0 },
      byDepartment: {},
    };
  }
}