This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).
 
## Getting Started
 
First, run the development server:
 
# 🚀 NEXUS Web Platform
 
<div align="center">
 
![NEXUS Logo](/images/nexus-official-mark.jpg)
 
**Innovation & Leadership Collective at Rajarambapu Institute of Technology**
 
[![Next.js](https://img.shields.io/badge/Next.js-16.3.3-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.8-black?style=for-the-badge&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-black?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-black?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge)](LICENSE)
 
[![GitHub stars](https://img.shields.io/github/ArSlan-Kokane/Nexus-RIT-Web/stars?style=social)](https://github.com/ArSlan-Kokane/Nexus-RIT-Web/stargazers)
[![GitHub forks](https://img.shields.io/github/ArSlan-Kokane/Nexus-RIT-Web/forks?style=social)](https://github.com/ArSlan-Kokane/Nexus-RIT-Web/network/members)
[![GitHub issues](https://img.shields.io/github/ArSlan-Kokane/Nexus-RIT-Web/issues-style=social)](https://github.com/ArSlan-Kokane/Nexus-RIT-Web/issues)
 
</div>
 
---
 
## 📖 About
 
NEXUS is the official Innovation & Leadership Collective at Rajarambapu Institute of Technology (RIT). This project represents the cutting-edge digital infrastructure powering the organization's online presence, featuring a modern, performance-optimized web platform built with the latest web technologies.
 
The platform serves as the central hub for:
- **Recruitment**: Streamlined application system with database integration
- **Project Showcase**: Display of engineering projects and technical work
- **Team Management**: Leadership board and organizational structure
- **Event Coordination**: Hackathons, workshops, and technical events
- **Resources**: Developer tools and technical insights
 
---
 
## ✨ Features
 
### 🎯 Core Functionality
- **Secret Admin Panel**: Keyboard shortcut access (`nexus` + `Enter`) for privileged users
- **Recruitment System**: Multi-step application form with SQLite database
- **Team Management**: Dynamic team member profiles and department structure
- **Project Gallery**: Featured projects with "Working Under The Hood" indicators
- **Event Timeline**: Animated curtain effect for upcoming events
- **Contact Integration**: Official email and social media channels
 
### 🎨 Design & UX
- **Dark-First Aesthetic**: Modern, immersive dark theme with blue accents
- **Responsive Design**: Mobile-first approach for all screen sizes
- **Smooth Animations**: Framer Motion for engaging interactions
- **Performance Optimized**: Sub-100ms server component response times
- **Accessibility**: WCAG compliant with proper semantic HTML
 
### 🔧 Technical Architecture
- **Next.js 16 App Router**: Latest React framework with server components
- **TypeScript**: Full type safety across the codebase
- **SQLite Database**: Persistent storage for recruitment applications
- **Tailwind CSS v4**: Utility-first CSS for rapid development
- **Lucide React**: Consistent icon system
 
---
 
## 🛠️ Tech Stack
 
### Frontend
- **Framework**: Next.js 16.3.3 (App Router)
- **Language**: TypeScript 5.0
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: Lucide React
 
### Backend
- **Database**: SQLite (better-sqlite3)
- **API**: Next.js Route Handlers
- **Validation**: Custom validation with TypeScript schemas
 
### Development
- **Package Manager**: npm
- **Version Control**: Git
- **Code Quality**: ESLint, Prettier
 
---
 
## 📁 Project Structure
 
```
nexus_web/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── (public)/          # Public-facing pages
│   │   ├── api/               # API route handlers
│   │   └── layout.tsx         # Root layout
│   ├── components/            # React components
│   │   ├── admin/            # Admin panel components
│   │   ├── common/           # Shared components
│   │   ├── layout/           # Layout components
│   │   ├── sections/         # Page sections
│   │   └── ui/               # UI components
│   ├── lib/                   # Utility libraries
│   │   ├── data/             # Data access layer
│   │   └── recruitment/      # Recruitment system
│   ├── data/                  # Static data files
│   └── contexts/             # React contexts
├── public/                   # Static assets
├── data/                     # Database storage
└── .env.local               # Environment variables
```
 
---
 
## 🚀 Getting Started
 
### Prerequisites
- Node.js 18+ 
- npm or yarn
- Git
 
### Installation
 
1. **Clone the repository**
```bash
git clone https://github.com/ArSlan-Kokane/Nexus-RIT-Web.git
cd Nexus-RIT-Web
```
 
2. **Install dependencies**
```bash
npm install
```
 
3. **Set up environment variables**
```bash
cp .env.example .env.local
```
 
Edit `.env.local` with your configuration:
```env
NEXT_PUBLIC_ADMIN_USERNAME=your_username
NEXT_PUBLIC_ADMIN_PASSKEY=your_passkey
```
 
4. **Run the development server**
```bash
npm run dev
```
 
5. **Open your browser**
Navigate to [http://localhost:3000](http://localhost:3000)
 
---
 
## 🎮 Usage
 
### **Accessing the Admin Panel**
1. Navigate to any page on the website
2. Type `nexus` and press `Enter`
3. Login with your admin credentials
4. Access the full admin dashboard
 
### **Recruitment System**
- **For Applicants**: Navigate to `/recruitment` to submit applications
- **For Admin**: Use the admin panel to review and manage applications
 
### **API Endpoints**
- `POST /api/recruitment/submit` - Submit new application
- `GET /api/recruitment/applications` - Get all applications
- `GET /api/recruitment/applications/[id]` - Get specific application
- `PUT /api/recruitment/applications/[id]` - Update application status
- `DELETE /api/recruitment/applications/[id]` - Delete application
 
---
 
## 🏗️ Deployment
 
### **Build for Production**
```bash
npm run build
```
 
### **Start Production Server**
```bash
npm start
```
 
### **Environment Variables for Production**
Ensure these are set in your hosting environment:
- `NEXT_PUBLIC_ADMIN_USERNAME`
- `NEXT_PUBLIC_ADMIN_PASSKEY`
- `DATABASE_PATH` (for SQLite)
 
### **Recommended Platforms**
- **Vercel**: Native Next.js hosting (recommended)
- **Netlify**: With Next.js adapter
- **Railway**: Full-stack deployment
- **DigitalOcean**: VPS with custom setup
 
---
 
## 📊 Database
 
The recruitment system uses SQLite for data persistence. The database file is located at:
- Development: `./data/recruitment.db`
 
### **Database Schema**
- **Applications**: Stores recruitment form submissions
- **Fields**: Personal info, department interest, skills, responses, status
- **Status Workflow**: Pending → Review → Interview → Accepted/Rejected
 
### **Backup Recommendations**
- Regular database backups
- Consider migrating to PostgreSQL for production
- Implement proper migration scripts
 
---
 
## 🧪 Testing
 
### **Run Development Server**
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
 
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
 
You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.
 
This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.
 
## Learn More
 
To learn more about Next.js, take a look at the following resources:
 
- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
 
You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!
 
## Deploy on Vercel
 
The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.
 
Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
 
```
 
### **Build Verification**
```bash
npm run build
```
 
### **Type Checking**
```bash
npx tsc --noEmit
```
 
---
 
## 🤝 Contributing
 
We welcome contributions from the NEXUS community! Here's how you can help:
 
1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/AmazingFeature`)
3. **Commit your changes** (`git commit -m 'Add some AmazingFeature'`)
4. **Push to the branch** (`git push origin feature/AmazingFeature`)
5. **Open a Pull Request**
 
### **Development Guidelines**
- Follow the existing code style
- Write descriptive commit messages
- Add tests for new features
- Update documentation as needed
 
---
 
## 📝 License
 
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
 
---
 
## 👥 Team
 
### **Core Leadership**
- **Siddharth Pawar** - President
- **Arslan Kokane** - Tech Director & Lead Developer
- **Shubham Zambare** - Media & Marketing Director
- **Satyajeet Howale** - Partnerships Head
 
### **Faculty Coordinator**
- **Gautami Shingan** - Faculty Advisor
 
---
 
## 📞 Contact
 
- **Email**: [nexus@ritindia.edu](mailto:nexus@ritindia.edu)
- **Instagram**: [@nexus_rit](https://www.instagram.com/nexus_rit)
- **GitHub**: [ArSlan-Kokane/Nexus-RIT-Web](https://github.com/ArSlan-Kokane/Nexus-RIT-Web)
- **LinkedIn**: [NEXUS at RIT](https://linkedin.com/company/nexus-rit)
 
---
 
## 🏛️ Institution
 
**Rajarambapu Institute of Technology (RIT)**
- **Location**: Islampur, Sangli District, Maharashtra, India
- **Website**: [ritindia.edu](https://ritindia.edu)
 
---
 
## 🙏 Acknowledgments
 
- Next.js team for the amazing framework
- The NEXUS community for their support
- RIT administration for institutional backing
- All contributors to the open-source community
 
---
 
## 📄 License
 
This project is open source and available under the [MIT License](LICENSE).
 
---
 
<div align="center">
 
**Built with ❤️ by Arslan Kokane**
 
[⬆ Back to Top](#)
 
</div>

