# Form Submission & Thank You Page Setup

## Overview
When a customer submits the booking form, they'll be redirected to a beautiful thank you page that reassures them their request was received and they'll hear back within 24 hours.

## Setup Options

### Option 1: Formspree (Recommended - Easiest)

1. **Sign up for Formspree**
   - Go to https://formspree.io
   - Create a free account
   - Create a new form

2. **Configure Your Form**
   - Copy your Formspree form ID (looks like: `mxxxxxxx`)
   - In `booking.html`, line 45, replace `YOUR_FORM_ID` with your actual ID:
     ```html
     <form class="booking-form" id="bookingForm" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
     ```

3. **Set Up Redirect in Formspree**
   - In your Formspree dashboard, go to your form settings
   - Under "Redirect Settings" or "Success Redirect"
   - Set redirect URL to: `https://royalphoenixhealth.com/thankyou.html`
   - Formspree will automatically redirect users after successful submission

4. **Email Notifications**
   - Formspree will send submissions to your email automatically
   - Configure which email receives submissions in Formspree settings

**Pros:**
- No coding required
- Automatic spam protection
- Email notifications included
- Free for up to 50 submissions/month

---

### Option 2: Google Forms

1. **Create Google Form**
   - Go to forms.google.com
   - Create form with same fields as booking form
   - Get the form's shareable link

2. **Update booking.html**
   - Replace the form action with your Google Form action URL
   - Or embed the Google Form directly

3. **Manual Redirect**
   - Use JavaScript redirect after submission
   - Google Forms has built-in redirect options

**Pros:**
- Free unlimited submissions
- Integrates with Google Sheets
- Easy to access responses

**Cons:**
- Less elegant integration
- Requires more setup

---

### Option 3: Custom Backend (Advanced)

If you have your own server/backend:

1. **Uncomment JavaScript Code**
   - In `booking.js`, lines 40-57 have commented code
   - Uncomment this section
   - Update the fetch URL to your backend endpoint

2. **Backend Setup**
   - Create endpoint to receive form data
   - Send email notification
   - Return success response
   - JavaScript will redirect to thankyou.html

**Pros:**
- Full control
- Custom logic possible
- No third-party dependencies

**Cons:**
- Requires backend development
- More complex setup

---

## What the Thank You Page Includes

✅ Success checkmark animation
✅ Clear confirmation message
✅ "What Happens Next" section with 3 steps
✅ 24-hour response time reassurance
✅ Email contact if they don't hear back
✅ Links to return home or learn more
✅ Professional, calming design

## Files Involved

- `booking.html` - Contains the form
- `thankyou.html` - Thank you page shown after submission
- `booking.js` - Handles form logic and redirect
- `styles.css` - Styling for both pages

## Testing

1. Fill out the booking form with test data
2. Submit the form
3. You should be redirected to thankyou.html
4. Check that you receive the email notification

## Email Template Suggestion

When you receive a booking, respond with:

---

Subject: Welcome to Royal Phoenix Health & Wellness - Next Steps

Dear [First Name],

Thank you for choosing to begin your healing journey with Royal Phoenix Health & Wellness. I'm honored to support you.

**Your Package:** [Package Name] - $[Price]

**Next Steps:**
1. Payment can be made via:
   - Venmo: @yourhandle
   - Zelle: your@email.com
   - Credit Card: [payment link]

2. Once payment is received, I'll send you a scheduling link to book your first session at a time that works best for you.

3. Before our first session, I'll send you a brief questionnaire to help me better understand your needs and goals.

I look forward to working with you!

Warmly,
[Your Name]
Royal Phoenix Health & Wellness

---

## Troubleshooting

**Form not submitting?**
- Check that Formspree ID is correct
- Verify all required fields are filled
- Check browser console for errors

**Not redirecting to thank you page?**
- Verify redirect URL in Formspree is correct
- Ensure thankyou.html is uploaded to GitHub
- Check that URL is https://royalphoenixhealth.com/thankyou.html

**Not receiving email notifications?**
- Check spam folder
- Verify email address in Formspree settings
- Test with a different email address

## Quick Start Checklist

- [ ] Sign up for Formspree
- [ ] Create new form in Formspree
- [ ] Update booking.html with your Formspree ID
- [ ] Set redirect to thankyou.html in Formspree
- [ ] Upload all files to GitHub
- [ ] Test the form with dummy data
- [ ] Verify you receive email notification
- [ ] Verify redirect to thank you page works
- [ ] Update email addresses if needed
