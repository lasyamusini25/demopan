# SMTP Email Configuration Guide

The contact form is now configured to send emails to **info@paninfra.com** using SMTP.

## Setup Instructions

### 1. Configure Environment Variables

Edit the `.env.local` file in the root directory with your SMTP credentials:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password
CONTACT_EMAIL=info@paninfra.com
SMTP_FROM=your-email@gmail.com
```

### 2. SMTP Provider Options

#### Option A: Gmail (Recommended for testing)

1. **Enable 2-Factor Authentication** on your Gmail account
2. **Create an App Password**:
   - Go to https://myaccount.google.com/apppasswords
   - Select "Mail" and "Other (Custom name)"
   - Name it "Pan Infra Contact Form"
   - Copy the 16-character password

3. **Configuration**:
   ```env
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your-gmail@gmail.com
   SMTP_PASSWORD=xxxx xxxx xxxx xxxx  (App Password)
   CONTACT_EMAIL=info@paninfra.com
   SMTP_FROM=your-gmail@gmail.com
   ```

#### Option B: Hostinger / cPanel Email

1. **Find SMTP Settings** in your hosting control panel
2. **Typical Configuration**:
   ```env
   SMTP_HOST=smtp.hostinger.com  (or your hosting provider's SMTP server)
   SMTP_PORT=587
   SMTP_USER=info@paninfra.com
   SMTP_PASSWORD=your-email-password
   CONTACT_EMAIL=info@paninfra.com
   SMTP_FROM=info@paninfra.com
   ```

#### Option C: Microsoft Outlook/Office 365

```env
SMTP_HOST=smtp-mail.outlook.com
SMTP_PORT=587
SMTP_USER=your-email@outlook.com
SMTP_PASSWORD=your-password
CONTACT_EMAIL=info@paninfra.com
SMTP_FROM=your-email@outlook.com
```

#### Option D: Custom Domain Email (Most Professional)

Contact your domain/hosting provider for SMTP settings. Common providers:
- **Hostinger**: smtp.hostinger.com
- **GoDaddy**: smtp.secureserver.net
- **Namecheap**: mail.privateemail.com

### 3. Test the Configuration

1. **Restart the development server**:
   ```bash
   npm run dev
   ```

2. **Visit** http://localhost:3000/contact

3. **Submit a test message** through the contact form

4. **Check** info@paninfra.com inbox for the email

### 4. Email Features

The contact form emails include:
- ✅ Professional HTML formatting with Pan Infra branding
- ✅ **Reply-To set to user's email** - Just click "Reply" to respond directly to the customer
- ✅ Displays user's name as the sender
- ✅ Includes user's email, phone (if provided), and full message
- ✅ Timestamp in Indian Standard Time (IST)
- ✅ Plain text fallback for email clients that don't support HTML

**How it works:**
- Email appears to be from the customer (shows their name)
- When you click "Reply" in your email client, it automatically addresses the customer
- No need to copy/paste email addresses - just hit reply!

### 5. Security Notes

- ✅ `.env.local` is already added to `.gitignore` - your credentials won't be committed
- ✅ Email validation prevents spam/invalid submissions
- ✅ Error handling provides user-friendly messages
- ✅ Uses TLS encryption for secure email transmission

### 6. Deployment (Production)

When deploying to Vercel/Netlify/other hosting:

1. **Add environment variables** in your hosting dashboard:
   - SMTP_HOST
   - SMTP_PORT
   - SMTP_USER
   - SMTP_PASSWORD
   - CONTACT_EMAIL
   - SMTP_FROM

2. **Vercel**: Settings → Environment Variables
3. **Netlify**: Site settings → Environment variables

### 7. Troubleshooting

**Error: "Failed to send message"**
- ✓ Check SMTP credentials are correct
- ✓ Verify SMTP server allows connections from your IP
- ✓ For Gmail: Ensure App Password is used (not regular password)
- ✓ Check port (587 for TLS, 465 for SSL)

**Emails not received**
- ✓ Check spam/junk folder
- ✓ Verify CONTACT_EMAIL is correct
- ✓ Check email server logs

**Connection timeout**
- ✓ Firewall may be blocking SMTP port
- ✓ Try port 465 with secure: true
- ✓ Contact hosting provider about SMTP restrictions

### 8. Support

If you need help configuring SMTP:
1. Check your email provider's SMTP documentation
2. Contact your hosting support for SMTP settings
3. Test with Gmail first (easiest setup for testing)

---

**Current Status**: ✅ Contact form is configured and ready. Just add your SMTP credentials to `.env.local`
