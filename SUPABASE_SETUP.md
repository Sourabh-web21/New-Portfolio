# Supabase Setup for Contact Form

## 1. Create Supabase Project
1. Go to [supabase.com](https://supabase.com)
2. Sign up/Login and create a new project
3. Wait for the project to be ready

## 2. Create Contacts Table
Run this SQL in the Supabase SQL Editor:

```sql
CREATE TABLE contacts (
  id BIGSERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security (optional but recommended)
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;

-- Create a policy to allow inserts (for contact form submissions)
CREATE POLICY "Allow contact form submissions" ON contacts
  FOR INSERT WITH CHECK (true);
```

## 3. Get API Credentials
1. Go to Settings > API in your Supabase dashboard
2. Copy your Project URL and anon/public key

## 4. Configure Environment Variables
1. Copy `.env.example` to `.env.local`
2. Replace the placeholder values with your actual Supabase credentials:

```env
VITE_SUPABASE_URL=https://your-project-id.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key-here
```

## 5. Test the Contact Form
1. Start your development server: `npm run dev`
2. Navigate to the contact section
3. Fill out and submit the form
4. Check your Supabase dashboard > Table Editor > contacts to see the submission

## 6. View Submissions
You can view all contact form submissions in your Supabase dashboard:
- Go to Table Editor
- Select the "contacts" table
- View all submissions with timestamps

## Optional: Email Notifications
To get email notifications when someone submits the contact form, you can:
1. Set up Supabase Edge Functions
2. Use a service like SendGrid, Mailgun, or Resend
3. Create a database trigger to send emails on new insertions

## Security Notes
- The anon key is safe to use in frontend applications
- Row Level Security is enabled to control data access
- Only INSERT operations are allowed through the public API
- Consider adding rate limiting for production use
