# GitHub Pages Starter (Static HTML/CSS/JS)

This is a minimal, professional portfolio/CV skeleton for **GitHub Pages**. Edit the content in `index.html`, styles in `css/style.css`, and JavaScript in `js/main.js`.

---

## Quick Start (No Terminal)
1. **Sign up** or **log in** to GitHub: https://github.com
2. Click **New repository** and name it **`YOUR-USERNAME.github.io`** (replace with your GitHub username exactly).
3. Set **Public**, then click **Create repository**.
4. Click **Add file → Upload files** and **drag** the contents of this folder (not the folder itself) into the repo.
   - You should see files like `index.html`, `css/style.css`, etc. at the **root** of the repo.
5. Click **Commit changes**.
6. Go to **Settings → Pages** and ensure **Source = Deploy from a branch**, **Branch = `main`**, **Folder = `/ (root)`**, then **Save**.
7. Wait ~1–2 minutes. Your site will be live at:
   - `https://YOUR-USERNAME.github.io`

> If you create a *project* site instead (any other repo name), enable Pages the same way; your URL will be `https://YOUR-USERNAME.github.io/REPO-NAME/`.

---

## Edit Your Site
- Open `index.html` in GitHub’s editor (or clone locally) and replace placeholder text: your name, bio, links, email, etc.
- Put a real resume at `assets/cv.pdf` and a square `assets/favicon.png` for the tab icon.
- Add/remove **Projects** cards, **Publications** list items, and **Contact** links as needed.
- Style in `css/style.css` and small behaviors in `js/main.js`.

---

## Custom Domain (Optional)
1. Buy a domain (e.g. Namecheap, Cloudflare, Google Domains).
2. In your repo: **Settings → Pages → Custom domain** → enter `yourdomain.com`, Save.
3. In your DNS provider, add an **A**/**AAAA** or **CNAME** record as GitHub Pages instructs.
4. GitHub will create a `CNAME` file automatically; or you can add one manually with your domain inside.
5. Wait for DNS to propagate (can take minutes to hours). Ensure **Enforce HTTPS** is checked when available.

---

## Make Public / Private
- Your Pages site must be from a **public** repo (recommended). Toggle in **Settings → General → Visibility**.
- If you need a private repo with Pages, use **GitHub Pro/Enterprise** or serve with **Netlify/Vercel** instead.

---

## Local Editing (Optional, with Git)
```bash
git clone https://github.com/YOUR-USERNAME/YOUR-USERNAME.github.io.git
cd YOUR-USERNAME.github.io
# edit files...
git add .
git commit -m "Update content"
git push origin main
```

---

## Extras
- The `.nojekyll` file disables Jekyll processing so all folders (like `assets/`) serve as-is.
- Add a `404.html` to customize your not-found page (one is included).
- Consider adding a `LICENSE` if you want others to reuse your template.

---

Happy publishing! 🚀
