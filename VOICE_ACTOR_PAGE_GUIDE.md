# Voice Actor Page Implementation Guide

## Overview
This guide provides professional voice acting consultant recommendations for completing the voice-actor.html page. The page structure has been built to match your site's aesthetic while following industry-standard casting practices.

---

## Page Structure (As Built)

### 1. **Hero Section**
- Clean title hierarchy: "VOICE ACTOR" → "NOPHEROS"
- Availability badge (currently shows "AVAILABLE FOR BOOKINGS")
- **Action:** Update availability badge if you're unavailable for new work

### 2. **Voice Profile**
Technical spec grid showing:
- Voice Type: "Baritone to Mid-Tenor"
- Range: "Conversational to Authoritative"
- Specialties: "Long-form, Character Work, Broadcast Delivery"
- Studio: "Home Studio, Professional Setup"

**Action Required:**
- Verify voice type accuracy (have someone with audio production background assess if needed)
- Update "Studio" section with your actual microphone model when ready
- Example: "Shure SM7B • Treated space • Source-Connect ready"

### 3. **Demo Reels**
Three demo placeholders provided:

**COMMERCIAL DEMO (60-90 sec)** — PRIORITY #1
- Mix of conversational, upbeat, and authoritative reads
- 6-8 different clips, 8-15 seconds each
- Light music bed acceptable (avoid overdoing it)
- This is your workhorse reel — invest time here

**CHARACTER/NARRATIVE DEMO (60-90 sec)** — PRIORITY #2
- Character voices, accents, vocal variety
- Narrative/audiobook excerpts
- NO music beds on character work
- Shows acting range and performance ability

**LONG-FORM/PODCAST DEMO (90-120 sec)** — OPTIONAL
- Only include if material is strong
- Warm, sustained, intimate delivery
- Highlights broadcast endurance
- Can be removed if you don't have strong material yet

### 4. **About Section**
Pre-written casting-friendly bio provided. Current text emphasizes:
- Capability over personality
- Broadcast background as training (not a gap)
- Professional setup
- Availability

**Action:**
- Replace placeholder technical setup line with your actual gear
- Format: `[Mic Model] • [Recording Space] • [DAW] • [Interface] • [Remote Protocol]`
- Example: `Shure SM7B • Treated home studio • Reaper • Focusrite Scarlett • Source-Connect Standard`

### 5. **Booking CTA**
Gradient button linking to email with pre-filled subject: "Voice Actor Booking Inquiry"

---

## Demo Reel Production Guidelines

### General Rules
- **Length:** Keep total runtime under 90 seconds per reel (60-75 is ideal)
- **Clip Length:** Individual clips should be 8-15 seconds max
- **Transitions:** Quick cuts, no fade transitions
- **Processing:** Clean, minimal processing — no heavy radio compression
- **Format:** Upload as high-quality MP3 (320kbps) or embed via SoundCloud/similar

### Production Checklist
- [ ] No slate/introduction ("This is Nopheros...") — jump straight into reads
- [ ] Remove mouth clicks, breaths between clips
- [ ] Normalize volume across all clips
- [ ] No station IDs, radio imaging, or "announcer voice" posturing
- [ ] Commercial demo: light music acceptable, -20dB under voice minimum
- [ ] Character demo: NO music, dry vocal only
- [ ] Test playback on phone speakers — must be intelligible

### What NOT to Include
- ❌ Radio station sweepers or promos
- ❌ Live DJ mixes or show excerpts
- ❌ Low-quality recordings or phone audio
- ❌ Inside jokes or niche references
- ❌ Clips longer than 15 seconds
- ❌ More than one accent per character demo (spread them out)

---

## Embedding Audio Players

### Recommended Services
1. **SoundCloud** (Free tier sufficient)
   - Upload demo
   - Get embed code
   - Replace placeholder `<div class="demo-placeholder">` with SoundCloud iframe
   
2. **Custom HTML5 Audio Player** (More control)
   ```html
   <audio controls style="width: 100%;">
     <source src="/audio/commercial-demo.mp3" type="audio/mpeg">
     Your browser does not support the audio element.
   </audio>
   ```

3. **Hosted on Google Drive / Dropbox** (Quick solution)
   - Upload to cloud storage
   - Generate shareable link
   - Embed using HTML5 audio tag

### Implementation
Replace the placeholder divs:
```html
<!-- BEFORE -->
<div class="demo-placeholder">
  [ Audio player embed placeholder — upload your commercial demo reel ]
</div>

<!-- AFTER (Example with HTML5) -->
<audio controls style="width: 100%; border-radius: 8px;">
  <source src="/audio/nopheros-commercial-demo.mp3" type="audio/mpeg">
  Your browser does not support the audio element.
</audio>
```

---

## Common Mistakes to Avoid

### 1. **Leading with "DJ/Broadcaster turned VO"**
- ❌ Don't: "Former radio DJ now doing voice acting"
- ✅ Do: "Voice actor with broadcast training background"
- **Why:** Framing matters. You're a VO with relevant experience, not a career-switcher.

### 2. **Radio Demo Aesthetics**
- ❌ Don't: Heavy compression, reverb, station IDs, "radio voice"
- ✅ Do: Clean, neutral, conversational delivery
- **Why:** Casting directors want raw capability, not processed radio sound.

### 3. **Overselling "Unique Voice"**
- ❌ Don't: "My unique tone and timbre set me apart..."
- ✅ Do: Let demos speak for themselves
- **Why:** Everyone claims uniqueness. Your demos prove it or they don't.

### 4. **Testimonials from Non-Industry Sources**
- ❌ Don't: "My listeners say I have a great voice!"
- ✅ Do: Only include testimonials from directors, producers, or clients (if you have them)
- **Why:** Fan testimonials don't translate to casting credibility.

### 5. **Mentioning "Passion for Voice Acting"**
- ❌ Don't: "I'm passionate about bringing scripts to life..."
- ✅ Do: Be matter-of-fact about capabilities and experience
- **Why:** Professionals don't lead with passion — they lead with skill.

### 6. **Gear Fetishization**
- ❌ Don't: "Recording on a vintage Neumann U87 through a Neve 1073..."
- ✅ Do: Brief, functional mention in tech specs section
- **Why:** Gear doesn't book jobs. Talent and professionalism do.

### 7. **Inflating Credits**
- ❌ Don't: "Thousands of hours of on-air experience..."
- ✅ Do: "Background in live broadcasting and long-form content"
- **Why:** Specific numbers sound desperate. Be confident but understated.

---

## Next Steps (Priority Order)

### Immediate (This Week)
1. [ ] Verify voice profile technical specs are accurate
2. [ ] Update "About" section with your actual studio gear
3. [ ] Decide if you want to keep optional 3rd demo slot or remove it

### Short-Term (Next 2-4 Weeks)
1. [ ] Record and edit Commercial Demo (60-90 sec)
2. [ ] Record and edit Character/Narrative Demo (60-90 sec)
3. [ ] Choose audio hosting platform (SoundCloud recommended for simplicity)
4. [ ] Upload demos and embed players

### Optional (When Ready)
1. [ ] Add professional headshot (if typical for your market)
2. [ ] Add credits section (only when you have legitimate VO credits)
3. [ ] Add "As Heard On" logos (only for actual placements, not broadcasts)

---

## Benchmark: What "Good" Looks Like

### Professional VO Page Must-Haves
✅ Clean, fast-loading design  
✅ Demos above the fold or one scroll down  
✅ Clear contact CTA  
✅ Technical specs visible  
✅ Mobile-responsive  
✅ No auto-play audio  

### Red Flags to Avoid
❌ Long bio text walls  
❌ Cluttered design  
❌ Generic stock photos  
❌ Overly sales-y language  
❌ More than 4 demo reels  
❌ Demos longer than 2 minutes  

---

## Testing Checklist

Before going live with demos:

- [ ] Test audio playback on desktop (Chrome, Safari, Firefox)
- [ ] Test audio playback on mobile (iOS Safari, Android Chrome)
- [ ] Verify email booking link opens correctly
- [ ] Check page load speed (should be < 3 seconds)
- [ ] Read bio out loud — does it sound natural or overly scripted?
- [ ] Get feedback from someone in audio production (not family/friends)
- [ ] Compare to 3-5 professional VO websites for tone check

---

## Additional Resources

### Demo Reel Editing
- Audacity (free) or Adobe Audition (paid)
- Target -3dB RMS for voice, -20dB for music beds
- High-pass filter at 80Hz to remove rumble
- Light de-esser if needed (don't overdo it)

### Where to Study Professional VO Pages
- [voices.com/talent](https://www.voices.com/talent) — Browse working professionals
- [vdc.com](https://www.vdc.com) — Industry-standard casting platform
- Search "[voice actor name] + demo reel" on Google for individual sites

### What to Do After Page is Live
1. Share page link in your email signature
2. Include in social media bios (LinkedIn, Twitter, etc.)
3. Submit to casting platforms (Voices.com, Voice123, etc.)
4. Update regularly as you get new credits

---

## Final Notes

This page is designed to be **casting-friendly**, not marketing-heavy. The goal is to:
- Communicate capability quickly
- Let demos do the heavy lifting
- Make it easy to contact you
- Project professionalism without overselling

Your broadcast background is an **asset** when framed correctly. You have mic technique, vocal control, and performance endurance that many VO newcomers lack. The page structure emphasizes this without making it sound like you're transitioning careers.

**Remember:** The page is a skeleton. Your demos are the muscle. Invest time in creating strong, professionally-edited demo reels — everything else is secondary.

---

**Questions or need clarification?** Review the "Common Mistakes" section or compare your draft against professional VO pages listed in Additional Resources.
