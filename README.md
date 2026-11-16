# Jach

**Jach** (ਜਾਚ, "the art of living, learning how") is a small mobile web app of daily life lessons drawn from Japji Sahib, sakhis and real-life moments.

It is a trial build. The Gurbani meanings are simple working paraphrases, and the narration is computer-generated. Both still need review by a scholar before any public release.

## What is inside

- **Today:** a mood check-in, a story of the day, a moment to reflect on, and a small daily practice.
- **Explore:** search, plus stories by feeling (12 feelings), by topic (17 stories) and by life area (moments).
- **Reflect:** an endless, draggable field of bubbles. Each bubble is a real-life moment (family, friends, nature, civic sense, study, work, joy). You hear the situation and choose what you would do. After you answer, you get encouragement, a line of Gurbani with its meaning, a short sakhi and a longer reflection, all narrated.
- **Stories:** 7 narrated cards each, in English (with Indian pronunciation), Hindi and Punjabi.
- Light and dark themes, three narration speeds, and progress saved on the device. No account is needed.

## Install on your phone

1. Open the GitHub Pages link in **Safari** on an iPhone, or **Chrome** on Android.
2. On iPhone, tap Share, then **Add to Home Screen**. On Android, tap the menu, then **Install app** (or **Add to Home screen**).
3. Jach opens full screen, with its layout kept clear of the notch and the home bar.

## Files

| Path | What it is |
|---|---|
| `index.html` | The whole app: markup, styles, script and content |
| `audio/en`, `audio/hi`, `audio/pa` | Story narration, 9 clips per story |
| `audio/sc` | Narration for the Reflect moments (English) |
| `manifest.webmanifest`, `sw.js`, `icons/` | Installable app setup and offline support |

## Sources for the sakhis

Puratan and Bala Janamsakhis, the Vaaran of Bhai Gurdas, M. A. Macauliffe's *The Sikh Religion*, Bhai Vir Singh, Harbans Singh's *Encyclopaedia of Sikhism*, and widely told Sikh tradition. Where tellings differ, the most commonly told version is used, and the text says "tradition remembers" where the account is traditional rather than documented.

## Chat

The Chat tab answers life questions in the light of Gurbani.

- **Gurbani comes from a database, not from memory.** `gb/` holds every line of Sri Guru Granth Sahib from the open [Shabad OS database](https://github.com/shabados/database) (MIT): Gurmukhi, Ang, author, raag, an English translation (Dr. Sant Singh Khalsa) and Prof. Sahib Singh's Punjabi teeka. The AI must search it and read the **whole shabad** before explaining a line.
- **Every quoted line is checked.** Lines found in the database show "Checked in Sri Guru Granth Sahib · Ang N". Anything else is flagged.
- **AI engine:** inside the Claude app the chat runs on the viewer's own Claude account. In the installed app, paste a Google Gemini API key (free tier, from aistudio.google.com) under Me › Chat engine. The key stays on the device.
