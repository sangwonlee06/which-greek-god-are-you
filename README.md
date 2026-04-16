# Which Greek God Are You?

A personality quiz that reveals which Greek god matches your vibe. Answer 10 questions, consult the oracle, and share your divine identity.

**[which-greek-god-are-you.vercel.app](https://which-greek-god-are-you.vercel.app)**

---

## The Gods

Zeus, Athena, Poseidon, Aphrodite, Apollo, Artemis, Ares, Hermes, Hades, or Dionysus — each with a unique personality profile, color scheme, and shareable result card.

## Features

- **10 questions** covering personality, values, and lifestyle
- **Animated result reveal** with god-themed visuals
- **Share as image** — exports your result card for Instagram Stories, iMessage, and more
- **Dynamic OG image** for social sharing previews
- **Vercel Analytics** for usage tracking

## Tech Stack

- [Next.js](https://nextjs.org) 15 (App Router)
- React 19
- TypeScript
- Tailwind CSS 4
- [html-to-image](https://github.com/bubkoo/html-to-image) for result card export
- [@vercel/analytics](https://vercel.com/analytics)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
app/
  components/
    Quiz.tsx          # Quiz state manager
    StartScreen.tsx   # Intro screen
    QuestionCard.tsx  # Question + answer buttons
    ResultScreen.tsx  # Result reveal + share
  opengraph-image.tsx # Dynamic OG image
lib/
  gods.ts             # God profiles
  questions.ts        # Questions + answer scoring
  scoring.ts          # Result calculation
```

## Deployment

Deployed on [Vercel](https://vercel.com). Push to `main` to deploy.
