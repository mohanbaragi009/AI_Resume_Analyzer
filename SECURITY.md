# Security Guidelines for AI Resume Analyzer

## API Key Protection

### Never Commit API Keys to Git
- All `.env` files are in `.gitignore` and will NOT be committed
- This includes `server/backend/.env`, `.env.local`, etc.
- The `.env.example` file shows the required variables WITHOUT actual keys

### Environment Variables Only
- Store all sensitive data in **Vercel Environment Variables**
- Access via `process.env.VARIABLE_NAME` in code
- Never hardcode API keys in source files
- Never log sensitive data to console

### If You Accidentally Expose Your API Key
1. Immediately revoke the key at https://makersuite.google.com/app/apikey
2. Generate a new API key
3. Update the key in Vercel Environment Variables
4. The exposed key will no longer work

## Vercel Environment Variables Setup

### Step 1: Go to Your Project Settings
- Vercel Dashboard → Your Project → Settings → Environment Variables

### Step 2: Add Variables (Recommended)
```
GEMINI_API_KEY = your_new_api_key
JWT_SECRET = your_secure_random_string
```

### Step 3: Redeploy
- After adding environment variables, redeploy your project
- Vercel automatically uses these variables during build and runtime

## Code Security

### Backend API Routes
- Always use `process.env.GEMINI_API_KEY` to access the key
- Never pass the API key to the frontend
- API calls should always go through your backend

### Frontend
- Never store API keys on the frontend
- All API calls must go through your backend API routes
- The backend handles actual API authentication

## Git Workflow

### Before Pushing Code
```bash
# Verify .env is in .gitignore
cat .gitignore | grep ".env"

# Make sure no .env files are staged
git status

# Only commit if .env files are NOT listed
git add .
git commit -m "Your message"
git push
```

### What Gets Committed
✓ `.env.example` (template only)
✓ Source code files
✓ Configuration (vercel.json, package.json, etc.)

### What Does NOT Get Committed
✗ `.env` files (any variant)
✗ `.env.local`
✗ `.env.*.local`
✗ `node_modules/`

## Monitoring & Alerts

### Vercel Deployment Secrets
- Vercel encrypts all environment variables
- Only accessible during build and runtime
- Not visible in build logs

### Check Deployment Logs
- Go to Vercel Dashboard → Deployments
- View logs to ensure no sensitive data is logged
- Vercel masks environment variables in logs automatically

## Incident Response

If you suspect an API key was exposed:

1. **Immediate Action**: Revoke the key
2. **Vercel Update**: Update the key in Environment Variables
3. **Redeploy**: Trigger a new deployment
4. **Monitor**: Check for unusual API usage

## Additional Security

- Keep dependencies updated: `npm audit fix`
- Use strong JWT_SECRET (32+ characters, random)
- Enable CORS only for your domain in production
- Never disable HTTPS on Vercel (automatic)
- Regularly rotate secrets (recommended: quarterly)
