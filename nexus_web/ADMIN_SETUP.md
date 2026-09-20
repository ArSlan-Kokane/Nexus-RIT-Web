# Admin Panel Setup Guide

## Secret Admin Panel Installation

The NEXUS website now includes a secret admin panel accessible only to the Tech Director.

## Access Method

**Keyboard Shortcut**: Type `nexus` + `Enter` anywhere on the website to open the admin login modal.

## Authentication

The admin panel uses username + passkey authentication.

## Configuration

### Step 1: Create Environment File

Create a `.env.local` file in the `nexus_web` directory:

```bash
cd nexus_web
touch .env.local
```

### Step 2: Add Credentials

Add your admin credentials to `.env.local`:

```env
NEXT_PUBLIC_ADMIN_USERNAME=your_username_here
NEXT_PUBLIC_ADMIN_PASSKEY=your_passkey_here
```

### Step 3: Default Credentials (For Testing)

The system has default fallback credentials:
- Username: `techdirector`
- Passkey: `nexus2026`

**IMPORTANT**: Change these in production by setting the environment variables.

## Security Notes

- The `.env.local` file is already in `.gitignore` and won't be committed
- Never commit actual credentials to version control
- Use strong, unique passkeys in production
- Consider using a password manager for generating secure passkeys
- All login attempts are logged (feature to be implemented)

## Admin Panel Features

Once logged in, the Tech Director can access:

1. **Dashboard** - Overview of website statistics and recent activity
2. **Team Members** - Manage team member profiles, roles, and departments
3. **Projects** - Create, edit, and manage project listings
4. **Events** - Schedule and manage events and hackathons
5. **All Content** - Unified content management for all website sections
6. **Settings** - Admin panel configuration and security settings

## Development

To test the admin panel during development:

1. Start the development server: `npm run dev`
2. Navigate to any page on the website
3. Type `nexus` + `Enter` to open the login modal
4. Enter your credentials (or use defaults)
5. Access the admin panel

## Production Deployment

For production deployment:

1. Set the environment variables in your hosting platform (Vercel, Netlify, etc.)
2. Ensure the `.env.local` file is NOT deployed
3. Use strong, unique credentials
4. Consider implementing additional security measures like IP restrictions
5. Enable HTTPS for secure credential transmission

## Future Enhancements

Planned security and feature improvements:

- [ ] IP-based access restrictions
- [ ] Two-factor authentication (2FA)
- [ ] Session timeout and auto-logout
- [ ] Audit logging for all admin actions
- [ ] Role-based access control for different admin levels
- [ ] Integration with external authentication providers
- [ ] Rate limiting for login attempts