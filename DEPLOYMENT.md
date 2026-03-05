# Deployment Guide - AI Resume Analyzer

## Prerequisites
- GitHub account with the repository pushed
- Vercel account (https://vercel.com)
- Gemini API key already configured

## Step 1: Push to GitHub

```bash
git add .
git commit -m "Configure for Vercel deployment"
git push origin master
```

## Step 2: Deploy to Vercel

### Option A: Using Vercel CLI (Recommended)

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel --prod
```

3. Follow the prompts to:
   - Confirm the project settings
   - Set environment variables (GEMINI_API_KEY, JWT_SECRET)

### Option B: Using Vercel Web Dashboard

1. Go to https://vercel.com/dashboard
2. Click "Add New..." → "Project"
3. Import your GitHub repository
4. Configure settings:
   - **Root Directory**: Leave blank (monorepo)
   - **Build Command**: `npm run build:all`
   - **Output Directory**: `client/dist`
5. Add Environment Variables:
   - `GEMINI_API_KEY`: Your Gemini API key
   - `JWT_SECRET`: A secure random string
6. Click "Deploy"

## Step 3: Configure Environment Variables in Vercel

⚠️ **IMPORTANT SECURITY NOTICE**: Never commit your API keys to GitHub!

In Vercel Dashboard → Project Settings → Environment Variables, add:

```
GEMINI_API_KEY=your_actual_gemini_api_key_here
JWT_SECRET=a_strong_random_string_with_32_characters_minimum
MONGO_URI=optional_mongodb_atlas_uri (if using database)
```

**Security Best Practices:**
- Do NOT expose your GEMINI_API_KEY in code or Git
- Store sensitive keys only in Vercel Environment Variables
- The .env file is in .gitignore and will NOT be committed
- Rotate your API key if accidentally exposed

## Step 4: Verify Deployment

After deployment completes:
1. Check the deployment URL
2. Test the application:
   - Register a new user
   - Upload a resume
   - Analyze the resume with job description

## Local Development

To run locally before deployment:

```bash
# Install all dependencies
npm run install:all

# Run dev server
npm run dev

# Access at http://localhost:3000
```

## Troubleshooting

If you encounter deployment errors:

1. Check build logs in Vercel dashboard
2. Verify all environment variables are set
3. Ensure backend dependencies install correctly
4. Check that client build completes without errors

## Production Notes

- The app runs without MongoDB (in-memory storage)
- User data is lost when the server restarts
- For persistent data, configure MongoDB Atlas and add MONGO_URI

## Performance Tips

- Build optimization: Client is minified with Terser
- API timeouts are set to 5 seconds for MongoDB attempts
- Resume uploads have 50MB limit
