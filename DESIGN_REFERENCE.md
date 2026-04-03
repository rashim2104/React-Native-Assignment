# Figma Design Reference — Ready! App

> Extracted from Figma on 2026-04-02. MCP calls exhausted for this month.
> Asset URLs expire ~2026-04-09. Download before then.

---

## Color Palette (from Figma)

### Primary (Orange)
- `#FF7800` — primary/orange, gradient start
- `#FF5000` — gradient end, button shadow

### Green
- `#DAF2E6` — green/10, feedback screen bg
- `#95E5BD` — green/20, close button bg
- `#57D997` — green/30, streak counter bg
- `#13BF69` — green/40, accent, button shadow, question card bg

### Yellow
- `#FFF6D9` — yellow/10, course switcher bg
- `#FFF0BF` — yellow card bg (first question)
- `#FFD033` — yellow/40, popup dialog bg, price text
- `#BF9C26` — yellow/50, course switcher shadow, promo text
- `#806B26` — AI VS AI button bg
- `#403616` — yellow/70, AI VS AI button shadow

### Grey Scale
- `#FFFFFF` — surface/10, white
- `#F5F5F8` — surface/00, settings bg, grey/10
- `#EFEFF4` — grey/15, question card bg (inactive), borders
- `#E5E5EA` — grey/20, surface/30, borders
- `#D1D1D6` — grey/25, inactive badge bg
- `#AEAEB2` — grey/30, secondary text
- `#8E8E93` — surface/50, inactive card shadow
- `#6C6C70` — grey/50, surface/60, secondary text
- `#48484A` — grey/60, surface/70, body text
- `#2C2C2E` — grey/70, surface/80, dark text
- `#1C1C1E` — grey/80, headings, dark card bg
- `#0B0B0D` — grey/90, near-black

### Blue
- `#E5F2FF` — blue/10, store button bg
- `#B2D9FF` — blue/20, store button border/shadow

### Other
- `#152623` — primary/70, settings title
- `#886418` — trial CTA text
- `#F8E9CB` → `#FEFAF5` — trial CTA gradient
- `#FBECD3` — trial CTA shadow

---

## Typography

### Font Families
- **Onest ExtraBold** — Logo "Ready" text only
- **Manrope** — Headings, question text, company names
  - SemiBold (600) — subtitles, company names, tab labels
  - Bold (700) — question text, section headings
  - ExtraBold (800) — number badges, trial CTA
  - Medium (500) — body text, course switcher subtitle
  - Regular (400) — inactive tab labels
- **Inter** — Body text, buttons, nav labels
  - Medium (500) — menu items, nav labels, body
  - Semi Bold (600) — streak counter, nav labels
  - Bold (700) — feedback/AI button labels (uppercase, tracking 0.51px)
  - Extra Bold (800) — trial CTA (uppercase, tracking 0.8px)
  - Regular (400) — secondary text, phone number

### Text Sizes
- `36px` — Logo "Ready", number badges
- `32px` — Trial price "₹1"
- `24px` — Logo "Ready!" in nav
- `23px` — Welcome tagline
- `18px` — Settings title "Your Profile"
- `17px` — iOS status bar time
- `16px` — Buttons, question text, section headings, course switcher title
- `15px` — FEEDBACK/AI button labels
- `14px` — Body text, company names, menu items, tab labels
- `13px` — Footer text
- `12px` — Terms text, pro promo
- `11px` — Bottom nav labels

---

## Screen 1 — Splash (node: 2:17621)

- White background
- Centered logo: "Ready" in Onest ExtraBold 36px, orange gradient (#FF7800 → #FF5000)
- "ai" badge: dark bg (#1C1C1E), white text "ai" in Onest ExtraBold 24px, rounded 7px
- Auto-navigate after ~2 seconds

---

## Screen 2 — Welcome (node: 2:16312)

- White background
- **Logo** at top center: "Ready" + "ai" badge (smaller, 36px + badge)
- **Character illustration**: 250x250px circle, 3D Memoji-style girl with glasses in orange hoodie
  - Company logos floating around (48px circles with white bg, border #E6F2F0):
    - Top-left: Swiggy
    - Top-right: Microsoft
    - Right: Google
    - Left: Amazon
    - Bottom-right: Zomato
- **Tagline**: "Practice Top Interview" / "Questions **with AI**"
  - Font: Manrope SemiBold 23px, tracking -0.23px
  - "with AI" in orange (#FF7800)
- **CTA Button**: "Let's go" with checkmark icon
  - Orange gradient (#FF7800 → #FF5000)
  - Shadow: `0px 8px 0px rgba(0,0,0,0.2)` + `0px 8px 0px #FF5000`
  - Rounded 12px, padding 12px/16px
  - White text, Inter Medium 16px
- **Terms text** at bottom:
  - "By continuing, you acknowledge agreeing to our terms of service and privacy policy"
  - Inter Regular 12px, color #6C6C70
  - "terms of service" and "privacy policy" underlined

---

## Screen 3 — Login (node: 2:16340)

- White background
- **Back button**: hidden in Figma but described in README (Icon Button)
- **Title**: "Kickstart your journey" — large heading
- **Subtitle**: "We will send you an OTP to verify your number." — 14px text at y=146
- **Phone input** (y=198):
  - Label: "Mobile number" (Label Text, 16px)
  - Input field: Region selector "+91 ▼" | divider | phone number input
  - 345px wide, 44px height input area
  - Optional details text below
- **OTP Input** (y=326):
  - Label: "Enter the OTP" (12px)
  - 6 number fields (44x52px each), gap 8px
  - Pre-filled: "1 2 3 4 _ _" in Figma
  - Font: 28px for digits
- **Submit button** at bottom (y=734):
  - Full-width button inside Actions frame
  - Same orange gradient style as Welcome CTA
  - 361px wide, 52px height

---

## Screen 4 — Home (node: 2:16245)

### Top Nav (y=49, h=56)
- "Ready!" logo (Onest ExtraBold 24px, orange gradient)
- **Streak counter**: Green bg (#57D997), shadow 4px #13BF69, lightning icon + "8", rounded 28px
- **Menu button**: Grey bg (#F5F5F8), shadow 4px #E5E5EA, hamburger icon, rounded 28px

### Course Switcher (y=105, h=92)
- Yellow bg (#FFF6D9), rounded 24px, shadow `0px 4px 0px #BF9C26`
- Muscle/flexed bicep emoji (32x32)
- Text: "Practicing Top 50 Questions for" (Manrope Medium 14px, grey)
- "Big Tech Companies" (Manrope SemiBold 16px, dark)
- Chevron-down icon on right

### Question List (y=197)
- Vertical list with varying left padding (creates wave/zigzag pattern):
  - Q1: pl=48, Q2: pl=80, Q3: pl=120, Q4: pl=160, Q5: pl=120, Q6: pl=80, Q7: pl=40, Q8: pl=80, Q9: pl=120, Q10: pl=160
- Each card: Company pill (206x73px, rounded 30px) + Number badge (74x74px, rounded 30px)
- **First card (Q1)**: Yellow bg (#FFF0BF), shadow `1px 8px 0px #C19400`, badge yellow (#FFD033)
- **Other cards**: Grey bg (#EFEFF4), shadow `1px 8px 0px #8E8E93`, badge grey (#D1D1D6)
- Company name (Manrope SemiBold/Medium 14px) + small company logo (22px circle)
- Number in badge: Manrope ExtraBold 36px, white

### Companies in order:
1. PhonePe (yellow/active)
2. Amazon
3. PhonePe
4. Google
5. Microsoft
6. Facebook
7. Amazon
8. Facebook
9. Microsoft
10. Google

### Pro Promo Banner (between Q3 and Q4)
- Dashed bottom border (#BF9C26)
- Flag icons on each side
- "2,312 users completed Question 3 today" (Manrope Bold 14px, #BF9C26)

### Bottom Nav (y=750)
- Pill-shaped bar: white bg, border #EFEFF4, shadow 4px #EFEFF4, rounded full
- **Home** tab: orange icon (#FF7800), "Home" label
- **Progress** tab: grey icon, "Progress" label
- **Store** button: Separate, blue bg (#E5F2FF), border #B2D9FF, shadow 4px #B2D9FF, shopping bag icon

### Fade Gradient
- Bottom fade: white gradient overlay above bottom nav

---

## Screen 5 — Home Open State (node: 2:16676)

Same as Home screen but with popup dialog overlay.

### Popup Question Dialog
- Positioned at y=296, width=345
- **Arrow/caret** at top: Yellow (#FFD033) diamond rotated 45°, 14px
- **Card body**: Yellow (#FFD033) bg, rounded 12px, padding 16px
- **Question text**: "API latency is variable & app is sluggish, How do you design UI safely?"
  - Manrope Bold 16px, dark (#1C1C1E)
- **Meta row**:
  - "Asked by PhonePe" (Manrope SemiBold 14px, #48484A) with PhonePe logo
  - Stopwatch icon + "2 mins" (Manrope SemiBold 14px, #48484A)
- **FEEDBACK button**:
  - White bg, rounded 12px
  - Shadow: `0px 3px 0px rgba(0,0,0,0.2)` + `0px 3px 0px white`
  - "FEEDBACK" text: Inter Bold 15px, green (#13BF69), uppercase, tracking 0.51px
- **AI VS AI (LISTEN) button**:
  - Dark bg (#806B26), rounded 12px
  - Shadow: `0px 3px 0px #403616`
  - Headphones icon (white) + "AI VS AI (LISTEN)" (Inter Bold 15px, white, uppercase)

---

## Screen 6 — Feedback / Session Result (node: 2:16384)

### Background
- Light green (#DAF2E6)

### Top Nav (y=49)
- Right-aligned close button: Green bg (#95E5BD), shadow 4px #13BF69, X icon (18px), rounded 28px

### Header (y=59)
- **Two avatar characters**: ~107px circles, overlapping
  - Left: Male character (no border)
  - Right: Female character (border 2.724px #DAF2E6)
- **Question card**: Green bg (#13BF69), rounded 16px, padding 16px
  - Arrow/caret at top: Green diamond
  - Question text: Manrope Bold 16px, white
  - "Asked by PhonePe" with company logo (Manrope SemiBold 14px, #EFEFF4)

### Content Area (white bg, rounded 24px top)
- **Tab Bar**: Two tabs, border-bottom 1px #EFEFF4
  - "Smart summary" — active (Manrope Medium 14px, #2C2C2E, underline 2px)
  - "Key moments" — inactive (Manrope Regular 14px, #6C6C70)

### Smart Summary Tab
- **"What worked well"** heading (Manrope SemiBold 16px, #48484A)
- Bullet items: Star icon (10px) + text (Manrope Medium 14px, #48484A), gap 8px
- 4 bullet points
- **Divider**: Dashed/dotted line
- **"Overall takeaways"** heading
- 4 more bullet points

---

## Screen 7 — Highlights / Key Moments (node: 2:16462)

Same header as Feedback screen.

### Key Moments Tab
- **Audio player bar** (y=68):
  - Pause button (44x44px circle)
  - "Mock Interview" title (Manrope, 19px height)
  - Progress bar (277px wide, 6px height, filled partially)
  - Timestamps: left "01:37" / right "05:00" (14px)
- **Key moments list** (y=97):
  - Each item: timestamp heading (19px) + description (14px, 38px height, 2 lines)
  - Separated by dashed dividers (8px)
  - 5 key moments visible

---

## Screen 8 — Settings (node: 2:16529)

### Top Nav
- Back chevron-left (26px)
- "Your Profile" (Manrope SemiBold 18px, #152623, centered)

### Trial Card
- Dark bg (#1C1C1E), rounded 24px, overflow clip
- Diagonal light stripes (rgba(255,255,255,0.08))
- "3 days free trial for" (Manrope Bold 16px, white)
- "₹1" (Manrope Bold 32px, #FFD033)
- "Then ₹299/month" (Manrope Regular 14px, #E5E5EA)
- Character illustration on right side
- CTA: "START 3 DAYS TRIAL @ ₹1" (Inter ExtraBold 14px, #886418, uppercase, tracking 0.8px)
  - Gold gradient bg (#F8E9CB → #FEFAF5), rounded 16px
  - Shadow: `0px 4px 0px rgba(0,0,0,0.21)` + `0px 4px 0px #FBECD3`

### Update Banner
- White bg, border #E5E5EA, rounded 24px
- Elements icon + "New update available" (Inter Medium 14px)
- Download button: green bg (#E6F2F0), rounded 9px, import icon

### Info Card (rounded 24px, white bg, border)
- "Phone number" — "+91 9608184703" (Inter Regular 14px, #AEAEB2)
- Divider
- "Learning since" — "August 17, 2025"
- Icons: phone, calendar-plus (16px)

### Menu Card (rounded 24px, white bg, border)
- Chat with us → chevron-right
- Share the app → chevron-right
- Rate the app → chevron-right
- Log out → chevron-right
- Icons: comments-2, export-2, star, log-out (16px)
- Dividers between items

### Footer
- "App version v2.14.2" (Inter Medium 13px, opacity 0.4)
- "Made with ❤️ from India" (same style)

---

## Asset URLs (expire ~2026-04-09)

### Welcome Screen
- Character illustration: https://www.figma.com/api/mcp/asset/6a8690ed-9a08-43a8-8170-0d7ba649013d (social_u5495515738 image)
- Swiggy logo: https://www.figma.com/api/mcp/asset/6eb3ccea-cd46-4125-a11d-25dbadd3a08b
- Zomato logo: https://www.figma.com/api/mcp/asset/6efecf58-4afb-4ec9-b013-7c33dfa1c14f
- Google logo (image 270): https://www.figma.com/api/mcp/asset/1a2618a5-db39-4bb6-ae26-579e4f772bc6
- Amazon logo (image 265): https://www.figma.com/api/mcp/asset/6a8690ed-9a08-43a8-8170-0d7ba649013d
- Microsoft logo (image 269): https://www.figma.com/api/mcp/asset/d216ca4c-ab80-4857-83a7-4dc9dc6833fc

### Home Screen
- PhonePe logo (image 268): https://www.figma.com/api/mcp/asset/b755adcb-c292-4279-b958-4c6508b31fcd
- Amazon logo (image 265): https://www.figma.com/api/mcp/asset/53bcbdb3-7032-4bda-94c1-2d57e44a4f9f
- Google logo (image 270): https://www.figma.com/api/mcp/asset/f6735684-598e-406c-b5d8-9f17f0e28463
- Microsoft logo (image 269): https://www.figma.com/api/mcp/asset/6f8ee443-456c-42ec-883d-1d0c926d3d18
- Facebook logo: https://www.figma.com/api/mcp/asset/15ab71ef-2b31-48a8-9036-ae5384ede2e6
- Muscle emoji: https://www.figma.com/api/mcp/asset/67b9581f-2ffb-4f6d-8541-682a942edf8a
- Lightning icon: https://www.figma.com/api/mcp/asset/ec9f0f68-cec9-40a3-bea7-7cc9033e99ae
- Store bg: https://www.figma.com/api/mcp/asset/3ac47eff-1ca4-46d3-8c06-8c827fabfd22
- Headphones icon: https://www.figma.com/api/mcp/asset/f5d560a2-ccb9-4ae9-a8c2-93fdff627d31

### Feedback Screen
- Avatar 1 (male): https://www.figma.com/api/mcp/asset/85c5b52c-a343-4ae0-b964-f6bb5ebafd29
- Avatar 2 (female): https://www.figma.com/api/mcp/asset/4f8610e4-ef91-4ef7-bf1d-e3619644129e
- PhonePe logo: https://www.figma.com/api/mcp/asset/e9e56794-0165-4fd6-9a7c-ea1a6e0ffe1b
- Star icon: https://www.figma.com/api/mcp/asset/2e597dc5-9d31-4f0d-a714-fd22d3eb36d2

### Settings Screen
- Trial card character: https://www.figma.com/api/mcp/asset/8c49b6c2-0815-47f8-87af-ae5dd52e611d

---

## Layout Patterns

### Question Card Wave Pattern (left padding)
```
Q1:  48px  (→)
Q2:  80px  (→→)
Q3:  120px (→→→)
Q4:  160px (→→→→)
Q5:  120px (←←←)
Q6:  80px  (←←)
Q7:  40px  (←)
Q8:  80px  (→→)
Q9:  120px (→→→)
Q10: 160px (→→→→)
```

### Card Dimensions
- Question card pill: 206x73px, rounded 30px
- Number badge: 74x74px, rounded 30px
- Company logo (small): 22px circle
- Company logo (welcome): 48px circle
- Bottom nav pill: rounded full, px 16, py 5
- Store button: 68x68px

### Spacing
- Screen padding: 16px (horizontal)
- Card padding: 16px
- Section gaps: 12px
- Item gaps: 8px
- Course switcher: 16px padding, 24px rounded

---

## Navigation Structure

```
RootNavigator (Stack)
├── AuthNavigator (Stack)
│   ├── Splash
│   ├── Welcome
│   └── Login
└── MainNavigator (Bottom Tabs)
    ├── Home (Stack)
    │   ├── HomeScreen
    │   └── SessionResultScreen
    ├── Progress (placeholder)
    └── Store (placeholder)
Settings is accessed from Home via hamburger menu or separate navigation
```

---

## Bottom Nav Tabs
1. **Home** — house icon (home-4), orange when active
2. **Progress** — chart icon (presentation-chart), grey
3. **Store** — shopping bag icon (shopping-bag-2), separate blue pill button
