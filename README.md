# Vaibhav & Tonakshi

A mobile-first wedding invitation for 25–26 November 2026 at Nirvana River Resort, Rishikesh.

## Preview locally

Run `npx http-server . -p 4190 -c-1` and open http://localhost:4190.

## Editing

- `index.html`: story, schedule, dress codes, travel and RSVP markup.
- `styles.css`: warm burgundy, gold and paper design; phone layouts and reduced motion.
- `config.js`: couple, countdown target, venue and RSVP destination.
- `app.js`: countdown, optional music, same-tab world transition.
- `rsvp.js`: validated response submission and progressive questions.
- `celebrations.ics`: all event times in UTC for correct calendar conversion.
- `3d-world-source/`: editable Three.js source. Run `npm ci` then `npm run build`; copy the generated index.html and assets into `world/`.

The invitation does not load any world code or audio until a guest explicitly uses those features. It uses one optimized illustrative palace image, with locally hosted fonts and no scroll-scrub videos.

## RSVP must be activated before guest release

Follow [RSVP-SETUP.md](RSVP-SETUP.md). The destination inbox owner must activate FormSubmit and verify a real test arrives. This repository contains no private guest dashboard. Automated testing uses mock responses and never sends client emails.

## Media

The palace is an artistic, AI-generated illustration, not a photograph of Nirvana River Resort. No private client audio, transcript or previous client's videos are included. Existing background piano audio is retained from the supplied project; obtain the appropriate public-use permission before distributing the invitation broadly.
