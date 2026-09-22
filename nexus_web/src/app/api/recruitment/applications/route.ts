import { NextRequest, NextResponse } from 'next/server';
import { getAllApplications, getApplicationStats } from '@/lib/recruitment/storage';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const status = searchParams.get('status');
    const department = searchParams.get('department');
    const search = searchParams.get('search');
    const stats = searchParams.get('stats');
    
    // Return statistics if requested
    if (stats === 'true') {
      const statistics = await getApplicationStats();
      return NextResponse.json(statistics);
    }
    
    let applications = await getAllApplications();
    
    // Filter by status if provided
    if (status) {
      applications = applications.filter(app => app.status === status);
    }
    
    // Filter by department if provided
    if (department) {
      applications = applications.filter(app =>
        app.departmentInterest.firstChoice === department ||
        app.departmentInterest.secondChoice === department ||
        app.departmentInterest.thirdChoice === department
      );
    }
    
    // Search if query provided
    if (search) {
      const lowerQuery = search.toLowerCase();
      applications = applications.filter(app =>
        app.personalInfo.fullName.toLowerCase().includes(lowerQuery) ||
        app.personalInfo.email.toLowerCase().includes(lowerQuery)
      );
    }
    
    // Sort by submission date (newest first)
    applications.sort((a, b) => 
      new Date(b.submittedAt).getTime() - new Date(a.submittedAt).getTime()
    );
    
    return NextResponse.json(applications);
  } catch (error) {
    console.error('Error fetching applications:', error);
    return NextResponse.json(
      { error: 'Failed to fetch applications' },
      { status: 500 }
    );
  }
}