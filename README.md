# Income Shuvo – Personal Travel Blog & Tourism Guide

> **Tagline:** *Explore More. Travel Better. Discover the World.*  
> **Author & Creator:** Income Shuvo  
> **Official Contact:** shuvorajofficial@gmail.com  
> **Production Domain:** https://incomeshuvo.com  

---

## 🧭 About The Project

**Income Shuvo** is a premier, production-ready travel publication and tourism guide built for discerning travelers. It blends an editorial travel magazine aesthetic with practical on-the-ground route itineraries, transparent expense breakdowns, and documentary photography.

### Design System & Visual Palette
- **Deep Ocean Blue:** `#0f2942` & `#0B1E33` (Structure, brand authority, headers)
- **Turquoise & Sky:** `#0284c7` & `#38bdf8` (High-intent action points, active indicators)
- **Warm Sand:** `#FAF9F5` & `#F3EFE6` (Paper-like reading comfort)
- **Typography:** *Playfair Display* (Editorial headlines) paired with *Plus Jakarta Sans* (Readable modern body prose)
- **Anti-Slop Discipline:** Strict zero-pill metadata formatting (unboxed text with `·` separators), no decorative pulsating dots, and no fabricated rates.

---

## 🚀 Key Features

1. **Editorial Travel Guides & Itineraries**
   - High-resolution photography featuring Bangladesh (Sajek Valley, Cox's Bazar & Marine Drive, Sreemangal) and international journeys (Kyoto Japan, Cappadocia Turkey, Swiss Alps).
   - Clear, transparent estimated trip costs with an ethical pricing disclaimer.
   - Interactive day-by-day collapsible schedules with transport tips and recommended stays.
   - Packing checklists and field photography gallery.
   - Interactive traveler community notes/comments system.

2. **Decap CMS Content Management (`/admin/`)**
   - Decap CMS (formerly Netlify CMS) mounted at `/admin/` and `/public/admin/`.
   - Full YAML schema in `config.yml` managing `content/posts/`, `content/destinations/`, and `content/settings/general.json`.
   - Editorial workflow support (Drafts, In Review, Ready to Publish).
   - In-app interactive Markdown Studio for drafting and downloading `.md` posts directly.

3. **Adsterra Advertising Integration**
   - Documented placements for:
     - **Leaderboard & In-Article Banners:** 728x90 and 300x250 containers with explicit publisher script placeholders.
     - **Social Bar:** Discreet notification-style travel tip bar with easy user dismiss.
     - **Popunder:** Safe delay-controlled placement documentation adhering to Google's Better Ads Standards.

4. **Social Sharing & SEO**
   - One-click native **Facebook Share**, **WhatsApp Share**, **X (Twitter) Share**, and **Copy Link** (with animated clipboard feedback).
   - Dynamic **Open Graph** and **Twitter Card** metadata on all pages.
   - Dynamic **JSON-LD Schema.org** structured data (`BlogPosting`, `Article`, `BreadcrumbList`, and `WebSite`).
   - `sitemap.xml` and `robots.txt` pre-configured.

---

## 🛠️ Netlify Deployment & Git Gateway Setup

Follow this step-by-step workflow to connect Decap CMS to Netlify and trigger automatic deployments on publish:

### Step 1: Push Repository to GitHub
```bash
git init
git add .
git commit -m "feat: Income Shuvo travel blog initial release"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/incomeshuvo-blog.git
git push -u origin main
```

### Step 2: Import into Netlify
1. Log into your [Netlify Dashboard](https://app.netlify.com).
2. Click **Add new site** > **Import an existing project** > **GitHub**.
3. Select your repository. Netlify automatically picks up settings from `netlify.toml`:
   - **Build Command:** `npm run build`
   - **Publish Directory:** `dist`
4. Click **Deploy Site**.

### Step 3: Enable Netlify Identity
1. In your Netlify site settings, navigate to **Site configuration** > **Identity**.
2. Click **Enable Identity**.
3. Under **Registration preferences**, select **Invite only** (this prevents external visitors from registering as editors on your personal blog).
4. Under **External providers**, you may optionally enable GitHub or Google login.

### Step 4: Enable Git Gateway
1. In **Site configuration** > **Identity** > **Services**, locate **Git Gateway**.
2. Click **Enable Git Gateway**.
3. Authorize Netlify to interact with your GitHub repository. This allows Decap CMS to commit Markdown articles and image uploads directly to your GitHub repo without exposing tokens in the browser.

### Step 5: Invite the Editor
1. In **Identity** tab > **Invite users**, enter `shuvorajofficial@gmail.com`.
2. Open the invite email, accept the invitation, and set your password.
3. Visit `https://your-site.netlify.app/admin/` and log in with your credentials!

---

## 📢 Adsterra Placement Documentation

Place your real Adsterra publisher keys inside the designated containers:

### 1. Banner Ads (Leaderboard 728x90 & In-Article 300x250)
Located in `src/components/AdsterraAd.tsx`. Replace the placeholder `div` with:
```html
<script type="text/javascript">
  atOptions = {
    'key' : 'YOUR_ADSTERRA_BANNER_KEY',
    'format' : 'iframe',
    'height' : 90,
    'width' : 728,
    'params' : {}
  };
</script>
<script type="text/javascript" src="//www.topcreativeformat.com/YOUR_ADSTERRA_BANNER_KEY/invoke.js"></script>
```

### 2. Social Bar
Add this script snippet to your `<head>` tag in `index.html`:
```html
<script type="text/javascript" src="//pl1234567.highcpmgate.com/socialbar.js"></script>
```

### 3. Popunder (OnClick)
Place before `</body>` in `index.html`:
```html
<script type="text/javascript" src="//pl9999999.highcpmgate.com/popunder.js"></script>
```
*Note: Always set frequency capping to 1 impression per 24 hours per unique IP in your Adsterra dashboard to respect user experience.*

---

## 💻 Local Development & Verification

```bash
# Install dependencies
npm install

# Start local Vite development server
npm run dev

# Run TypeScript lint check
npm run lint

# Compile production build
npm run build

# Preview production build locally
npm run preview
```

---

## 📄 License & Attribution
- **Author:** Income Shuvo (shuvorajofficial@gmail.com)
- **Copyright:** © 2026 Income Shuvo. All rights reserved.
