# NEXUS Recruitment System Plan

## Overview
Replace the current Google Form with a custom, website-integrated recruitment system featuring interactive forms, database storage, and admin management capabilities.

## System Architecture

### 1. Database Layer
- **Initial Solution**: JSON-based storage for rapid development
- **Future Upgrade**: PostgreSQL/SQLite for production scalability
- **Data Schema**: Structured applicant information with validation

### 2. Backend API
- **Framework**: Next.js API Routes
- **Endpoints**:
  - `POST /api/recruitment/submit` - Form submission
  - `GET /api/recruitment/applications` - Admin fetch all applications
  - `GET /api/recruitment/applications/[id]` - Get specific application
  - `PUT /api/recruitment/applications/[id]` - Update application status
  - `DELETE /api/recruitment/applications/[id]` - Delete application

### 3. Frontend Components
- **Multi-step Form Wizard**: Progressive disclosure for better UX
- **Interactive Question Types**:
  - Text input (short/long)
  - Multiple choice (single/multiple select)
  - Dropdown selection
  - Rating scales
  - File upload (resume/portfolio)
  - Skills assessment with tags
- **Real-time Validation**: Instant feedback on form fields
- **Responsive Design**: Mobile-first approach

### 4. Admin Integration
- **New Admin Section**: "Recruitment Management"
- **Features**:
  - View all applications
  - Filter by status, department, date
  - Export applications to CSV/JSON
  - Change application status (Pending, Review, Interview, Accepted, Rejected)
  - Add notes to applications
  - Send email notifications (future)

## Implementation Phases

### Phase 1: Database & API Foundation
- [ ] Create data schema for recruitment applications
- [ ] Set up JSON-based storage system
- [ ] Implement API endpoints for CRUD operations
- [ ] Add data validation and sanitization

### Phase 2: Form Development
- [ ] Create multi-step form wizard component
- [ ] Implement basic form fields (text, email, phone)
- [ ] Add interactive question types (multiple choice, dropdowns)
- [ ] Implement file upload functionality
- [ ] Add real-time validation
- [ ] Create responsive design

### Phase 3: Admin Panel Integration
- [ ] Add Recruitment Management section to admin panel
- [ ] Create applications list view
- [ ] Implement filtering and search
- [ ] Add application detail view
- [ ] Create status management system
- [ ] Add export functionality

### Phase 4: Enhancement & Polish
- [ ] Add progress indicators
- [ ] Implement auto-save functionality
- [ ] Add confirmation emails (future)
- [ ] Create analytics dashboard
- [ ] Add interview scheduling (future)

## Technical Specifications

### Data Schema
```typescript
interface RecruitmentApplication {
  id: string;
  submittedAt: string;
  status: 'pending' | 'review' | 'interview' | 'accepted' | 'rejected';
  
  // Personal Information
  personalInfo: {
    fullName: string;
    email: string;
    phone: string;
    year: string;
    branch: string;
    studentId: string;
  };
  
  // Department Interest
  departmentInterest: {
    firstChoice: string;
    secondChoice: string;
    thirdChoice?: string;
    reason: string;
  };
  
  // Skills & Experience
  skills: {
    technicalSkills: string[];
    experience: string;
    projects: string;
    portfolioUrl?: string;
    githubUrl?: string;
    linkedinUrl?: string;
  };
  
  // Questions
  responses: {
    whyJoin: string;
    contribution: string;
    timeCommitment: string;
    otherActivities?: string;
  };
  
  // Resume
  resumeUrl?: string;
  
  // Admin Notes
  adminNotes?: string;
}
```

### Form Structure
1. **Step 1: Personal Information**
   - Full Name
   - Email Address
   - Phone Number
   - Current Year (1st/2nd/3rd/4th)
   - Branch/Department
   - Student ID

2. **Step 2: Department Interest**
   - First Choice Department
   - Second Choice Department
   - Third Choice Department (Optional)
   - Reason for department preference

3. **Step 3: Skills & Experience**
   - Technical Skills (tag-based selection)
   - Previous Experience
   - Projects Description
   - Portfolio URL (Optional)
   - GitHub URL (Optional)
   - LinkedIn URL (Optional)
   - Resume Upload

4. **Step 4: Motivation & Commitment**
   - Why do you want to join NEXUS?
   - How can you contribute to NEXUS?
   - Time commitment availability
   - Other campus activities (Optional)

5. **Step 5: Review & Submit**
   - Summary of all responses
   - Final confirmation
   - Submit button

### Interactive Components
- **Tag Input**: For skills selection with autocomplete
- **Star Rating**: For experience level assessment
- **Progress Bar**: Visual form completion indicator
- **Character Counter**: For text fields with limits
- **File Upload**: Drag-and-drop resume upload
- **Auto-save**: Local storage for form progress

## File Structure
```
src/
├── app/
│   ├── recruitment/
│   │   └── page.tsx              # Main recruitment page
│   └── api/
│       └── recruitment/
│           ├── submit/
│           │   └── route.ts      # Form submission endpoint
│           └── applications/
│               ├── route.ts       # Get all applications
│               └── [id]/
│                   ├── route.ts   # Get/update/delete application
├── components/
│   ├── recruitment/
│   │   ├── recruitment-form.tsx   # Main form component
│   │   ├── form-step.tsx         # Individual step component
│   │   ├── personal-info-step.tsx
│   │   ├── department-step.tsx
│   │   ├── skills-step.tsx
│   │   ├── motivation-step.tsx
│   │   ├── review-step.tsx
│   │   ├── tag-input.tsx         # Interactive tag selector
│   │   ├── file-upload.tsx       # Resume upload component
│   │   └── progress-bar.tsx      # Form progress indicator
│   └── admin/
│       └── recruitment-management.tsx  # Admin recruitment panel
├── lib/
│   ├── recruitment/
│   │   ├── schema.ts             # Data schemas
│   │   ├── storage.ts            # Database operations
│   │   └── validation.ts         # Form validation
└── data/
    └── recruitment-applications.json  # JSON storage (temporary)
```

## Security Considerations
- Input sanitization and validation
- File upload restrictions (type, size)
- Rate limiting for form submissions
- CSRF protection
- Admin authentication for application access
- Data encryption for sensitive information

## Timeline Estimate
- Phase 1: 2-3 hours
- Phase 2: 4-5 hours  
- Phase 3: 3-4 hours
- Phase 4: 2-3 hours
- **Total**: 11-15 hours

## Success Criteria
- [ ] Form successfully submits data to database
- [ ] Admin can view and manage all applications
- [ ] Form is fully responsive on mobile devices
- [ ] Interactive elements work smoothly
- [ ] Data validation prevents invalid submissions
- [ ] Admin can export application data
- [ ] User receives confirmation after submission

## Future Enhancements
- Email notifications for applicants
- Interview scheduling system
- Automated skill matching
- Analytics dashboard for recruitment trends
- Integration with existing team management
- Multi-language support
- AI-powered application screening