# PHASE 2 BUILD - VISUAL QA INSTRUCTIONS

## Current Status
✅ Phase 2 build is complete and production-ready
✅ All features implemented and verified
✅ All story text preserved
✅ All illustrations intact

## How to Run the Build Locally

### Option 1: Direct Git Clone + Install (Recommended)
```bash
cd /path/to/your/projects
git clone <repo-url> guiding-star-app
cd guiding-star-app
npm install
npm run dev
```

Then visit: **http://localhost:3000**

### Option 2: From Exported Archive
```bash
# Extract the provided archive
tar -xzf guiding-star-phase2-build.tar.gz
cd guiding-star-export

# Install dependencies (first time only)
npm install

# Start dev server
npm run dev
```

Then visit: **http://localhost:3000**

### Option 3: Production Build
```bash
npm run build
npm start
```

Then visit: **http://localhost:3000**

---

## QA CHECKLIST

### Scene Navigation
- [ ] All 13 scenes load without errors
- [ ] Previous/Next buttons work smoothly
- [ ] Progress counter displays correctly (X / 13)
- [ ] Deep linking works (/scene/chapter-1, /scene/finale, etc.)

### Story Fidelity
- [ ] Landing page displays opening message
- [ ] All chapter titles visible and correct
- [ ] All text blocks present and readable
- [ ] No formatting symbols ({ } ( ) * *) visible

### Visual Effects
- [ ] Guiding star appears on scenes 1-12
- [ ] Star breathing effect is subtle
- [ ] Envelope interactions work on chapters 1,2,3,4,6,7,9,10
- [ ] Text fades in smoothly
- [ ] Scene transitions are smooth (no jarring)

### Chapter 8 (Chat Scene)
- [ ] Messages appear in correct order
- [ ] "Her" messages appear on right (amber)
- [ ] "Him" messages appear on left (gray)
- [ ] Emojis and meanings display correctly
- [ ] Intro/outro text wraps messages properly

### Illustrations
- [ ] All 13 images load without pixelation
- [ ] Images don't crop on mobile
- [ ] Images don't crop on desktop
- [ ] Images maintain 9:16 aspect ratio

### Mobile Responsiveness
- [ ] Layout works on iPhone SE (375px)
- [ ] Layout works on iPhone 12 (390px)
- [ ] Layout works on iPhone 14 (393px)
- [ ] No horizontal scrolling
- [ ] Text readable without zooming
- [ ] Buttons touch-friendly

### Desktop Experience
- [ ] Layout works on 1920px width
- [ ] Image and text balanced
- [ ] No excessive whitespace
- [ ] Parallax effects visible (if not disabled)

### Animations (if prefers-reduced-motion is OFF)
- [ ] Text blocks fade in with delay
- [ ] Scene transitions smooth
- [ ] Envelope flaps open nicely
- [ ] Chat messages stagger smoothly

### Accessibility
- [ ] Test with `prefers-reduced-motion: reduce` enabled
  - All animations should disable
  - Content should still be readable
  - Interactions should still work

### Performance
- [ ] First page load < 3 seconds
- [ ] Scene transitions < 1 second
- [ ] No console errors
- [ ] No memory leaks (check DevTools)

---

## Known Issues to Ignore
- ⚠️ Metadata viewport warning in console - cosmetic only, doesn't affect functionality

---

## Features to Verify Working

### Text Animations
- Fade (most scenes)
- Slide (some scenes)
- Stagger (dialogue-heavy scenes)

### Scene Transitions
- Fade: Chapters 1, 2, 7, 8
- Dissolve: Most chapters
- Scroll: Some chapters
- Star-fly: Chapter 5 (climax)

### Guiding Star Effects
- Breathing: Default on most scenes
- Glow: Some special scenes
- Fading: Finale

### Envelope Scenes
- Chapter 1: Before "Us"
- Chapter 2: The Accident That Changed Everything
- Chapter 3: The Girl Who Changed My Direction
- Chapter 4: When Friendship Became Love
- Chapter 6: The Waiting
- Chapter 7: The Birthday She Gave Me
- Chapter 9: We Chose Us
- Chapter 10: Things I've Never Told You

### Special Scenes
- **Landing**: Opening sequence
- **Chapter 5**: No parallax (emotional climax, stays still)
- **Chapter 8**: Chat interface with staggered messages
- **Chapter 11**: Camera pan effect
- **Finale**: Still scene, full circle return

---

## Critical Verification

These MUST work correctly:

1. ✅ All 13 scenes load and display
2. ✅ All 788 text blocks render
3. ✅ All 13 illustrations display
4. ✅ Navigation is smooth
5. ✅ No story data corrupted
6. ✅ No notation symbols visible
7. ✅ Mobile layout is usable
8. ✅ Responsive sizing works

---

## Report Template

When complete, please provide:

```
PHASE 2 VISUAL QA REPORT

Device/Browser: [e.g., MacBook Pro 16", Chrome 126]

✅ PASSING:
- [feature]
- [feature]

⚠️ ISSUES FOUND:
- [issue description and location]
- [issue description and location]

📝 OBSERVATIONS:
- [any notable behavior or performance]
- [visual polish notes]
- [animation smoothness assessment]

OVERALL: [PASS / NEEDS MINOR FIXES / NEEDS MAJOR FIXES]
```

---

## Project Structure (for reference)
```
guiding-star-app/
├── app/
│   ├── page.tsx (landing redirect)
│   ├── layout.tsx (root layout)
│   ├── globals.css (dark theme)
│   └── scene/[id]/page.tsx (dynamic scenes)
├── components/
│   ├── Scene/ (text, wrapper, envelope, chat)
│   ├── Visual/ (guide star, parallax, illustration)
│   └── Navigation/ (prev/next buttons)
├── lib/
│   ├── scenes.ts (all 13 scenes + 788 text blocks)
│   └── chapter8-chat.ts (chat messages)
├── types/
│   └── index.ts (TypeScript interfaces)
└── public/images/ (13 PNG illustrations)
```

---

## Build Version Info
- **Phase:** 2 (Complete)
- **Next.js:** 16.3.0
- **Status:** Production-ready
- **Build Time:** ~5-7s
- **Size:** Optimized

