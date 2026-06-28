# Coop Search Group — Website

A clean, responsive one-page site for Coop Search Group LLC (executive recruiting).
Plain HTML/CSS — no build step, deploys to Vercel instantly.

## Files
- `index.html` — all page content
- `styles.css` — styling
- `.gitignore`

## Edit before launch
Search `index.html` for `[EDIT:` — there are a few spots to fill in:
- Phone number
- City/location (optional)
Update the email (`hello@coopsearchgroup.com`) if you use a different address.

## Preview locally
Just double-click `index.html`, or run a tiny local server from this folder:
```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

## Deploy: GitHub + Vercel (terminal)

> Run these on YOUR computer, where you're logged into GitHub and Vercel.
> Replace YOUR-GITHUB-USERNAME below.

### 1. Put the code on GitHub
```bash
cd path/to/coopsearch-site

git init
git add .
git commit -m "Initial Coop Search Group website"
git branch -M main
```

Create the repo. Easiest with the GitHub CLI (`gh`):
```bash
gh repo create coopsearch-site --public --source=. --remote=origin --push
```

No `gh`? Create an empty repo at https://github.com/new (name it `coopsearch-site`, don't add a README), then:
```bash
git remote add origin https://github.com/YOUR-GITHUB-USERNAME/coopsearch-site.git
git push -u origin main
```

### 2. Deploy to Vercel
Install the CLI once and log in:
```bash
npm install -g vercel
vercel login
```

From the project folder:
```bash
vercel          # creates a preview deployment, answer the prompts (accept defaults)
vercel --prod   # promotes it to your live production URL
```

Vercel auto-detects this as a static site — no framework, no build command needed.
You'll get a live URL like `https://coopsearch-site.vercel.app`.

### Tip: auto-deploy on every push
In the Vercel dashboard, import the GitHub repo once (Add New → Project → pick `coopsearch-site`).
After that, every `git push` to `main` redeploys automatically.

### Custom domain (when ready)
Vercel dashboard → your project → Settings → Domains → add `coopsearchgroup.com`
and follow the DNS instructions.
