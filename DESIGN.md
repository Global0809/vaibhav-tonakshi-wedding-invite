---
name: Vaibhav & Tonakshi wedding invitation
description: A riverside love letter at dusk, expressed in burgundy, champagne and burnished gold.
colors:
  wine: "#35151e"
  wine-light: "#552332"
  gold: "#dabb7e"
  gold-hover: "#ead0a0"
  paper: "#f4eadb"
  cream: "#fff6e7"
  ink: "#42232a"
  muted: "#725651"
  line: "#b598734f"
  champagne: "#e8d8c2"
  rsvp-wine: "#49202b"
typography:
  display:
    fontFamily: '"Bodoni Moda", Georgia, serif'
    fontSize: "clamp(64px, 6.4vw, 92px)"
    fontWeight: 400
    lineHeight: 1.04
    letterSpacing: "-.03em"
  headline:
    fontFamily: '"Bodoni Moda", Georgia, serif'
    fontSize: "clamp(36px, 4vw, 56px)"
    fontWeight: 400
    lineHeight: 1.12
    letterSpacing: "-.025em"
  title:
    fontFamily: '"Bodoni Moda", Georgia, serif'
    fontSize: "27px"
    fontWeight: 400
    lineHeight: 1.12
  body:
    fontFamily: "Manrope, Arial, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.8
  label:
    fontFamily: "Manrope, Arial, sans-serif"
    fontSize: "12px"
    fontWeight: 600
    lineHeight: 1.8
rounded:
  control: "4px"
  hosted-stay: "12px"
  sound-toggle: "30px"
  portal: "80px 80px 0 0"
spacing:
  field-gap: "18px"
  button-gap: "22px"
  page-mobile: "25px"
  page-tablet: "38px"
  page-desktop: "64px"
  column-wide: "80px"
components:
  button-gold:
    backgroundColor: "{colors.gold}"
    textColor: "{colors.wine}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "14px 23px"
  button-gold-hover:
    backgroundColor: "{colors.gold-hover}"
    textColor: "{colors.wine}"
  button-wine:
    backgroundColor: "{colors.wine}"
    textColor: "{colors.cream}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "14px 23px"
  button-wine-hover:
    backgroundColor: "{colors.wine-light}"
    textColor: "{colors.cream}"
  input:
    backgroundColor: "#ffffff07"
    textColor: "{colors.cream}"
    rounded: "{rounded.control}"
    padding: "12px 13px"
  navigation:
    backgroundColor: "{colors.wine}"
    textColor: "{colors.cream}"
    height: "86px"
    padding: "0 5.2%"
  hosted-stay:
    backgroundColor: "{colors.champagne}"
    textColor: "{colors.ink}"
    rounded: "{rounded.hosted-stay}"
    padding: "31px"
  event-row:
    textColor: "{colors.ink}"
    padding: "27px 0"
  portal:
    rounded: "{rounded.portal}"
    width: "145px"
    height: "185px"
  sound-toggle:
    backgroundColor: "{colors.wine}"
    textColor: "{colors.cream}"
    rounded: "{rounded.sound-toggle}"
    padding: "10px 16px"
---

# Design System: Vaibhav & Tonakshi wedding invitation

## Overview

**Creative North Star: "A riverside love letter at dusk"**

Burgundy grounds, champagne paper, burnished gold and an imagined folded palace create a romantic guest folio. Expressive Bodoni lettering carries the feeling; restrained Manrope details make the invitation practical to read. This documents the completed invitation in `index.html`, `styles.css` and `app.js`, not the separate interactive world's implementation.

The atmosphere comes from one illustrated palace image, generous editorial spacing and alternation between light paper and dark wine sections. Fine rules, a small flourish and an arched doorway provide ornament without making every information block decorative. The approved direction excludes a blocking introduction and scroll-scrub footage. Its signature motion is the optional glowing portal door.

**Key Characteristics:**

- Burgundy and champagne surfaces with selectively placed burnished-gold emphasis.
- Oversized serif names, italic emotional phrases and quiet sans-serif practical details.
- Open calendar-like programme rows rather than a repeated card grid.
- Mobile-first access to information, with a separate world loaded only after deliberate entry.

## Colors

The palette is warm, low-gloss and material: dark wine, pale stationery and restrained metallic accents. Frontmatter values are normative; names below explain their use.

### Primary

- **Dusk Burgundy (`wine`):** Header, cover, dress section, footer and dark controls; the main atmospheric ground.
- **Lifted Burgundy (`wine-light`):** Hover state for wine buttons and the music control.
- **Intimate Wine (`rsvp-wine`):** A slightly lighter dark section for the RSVP, distinct from the cover.

### Secondary

- **Burnished Gold (`gold`):** Primary calls to action, italic emphasis on dark sections, navigation underline, radio selection and dark-surface focus rings.
- **Light Gold (`gold-hover`):** The primary button's hover fill.

### Neutral

- **Champagne Paper (`paper`):** Main reading canvas.
- **Warm Cream (`cream`):** Main text on wine surfaces.
- **Burgundy Ink (`ink`):** Primary text on paper.
- **Muted Cocoa (`muted`):** Supporting copy and secondary information on paper.
- **Fine Brass Rule (`line`):** Translucent divisions between programme rows and quiet links.
- **Folded Champagne (`champagne`):** Countdown band and hosted-stay panel.

Dress-code swatches are occasion-specific content, not global interface accents. Their pinks, metallics and pastels should not be promoted to new navigation or action colors. The declared but unused `--rose` variable is intentionally not a normative token.

**The Gold-as-Invitation Rule.** Use gold to guide attention to an action, a personal emphasis or a small ornament; keep long reading text cream or ink.

## Typography

**Display Font:** Bodoni Moda, with Georgia and serif fallbacks.  
**Body Font:** Manrope, with Arial and sans-serif fallbacks.

**Character:** Bodoni's high-contrast strokes give the invitation its graceful, print-like expression; Manrope makes dates, directions and form controls clear. The self-hosted Latin WOFF2 files use `font-display: swap`: Bodoni normal supports weights 400–500 and optical sizing, Bodoni italic uses 400, and Manrope supports 400–600.

### Hierarchy

- **Display:** Oversized, normal-weight stacked couple names; the gold ampersand is half the desktop name size. The exact desktop scale is in the frontmatter. Phone names use `clamp(54px,12.6vw,76px)` with line-height (1.02).
- **Headline:** Normal-weight section headings with balanced wrapping and occasional italic phrases. Individual sections deliberately vary their size; this is not a single rigid heading scale.
- **Title:** Event titles use the frontmatter title role. Other subheadings range from (25px) to (30px).
- **Body:** The base role is (15px); most story, welcome and travel copy is (14px). General paragraphs are capped at (68ch), welcome prose at (615px), and programme descriptions at (32ch) on desktop.
- **Label:** Actions use the semibold label role. Navigation, metadata and form labels generally use (11–12px); countdown labels and the month use tracked uppercase.
- **Numerals:** Large day numbers, time labels and countdown values use Bodoni. Event times and countdown digits use tabular numerals to stabilize alignment.

**The Serif-and-Service Rule.** Use Bodoni for names, expressive headings and ceremonial numerals; use Manrope for instructions, input values, controls and fine-print information.

## Layout

The desktop shell is centered with a maximum width of (1256px) and horizontal padding from `page-desktop`. It reduces to `page-tablet` at (1050px) and `page-mobile` at (760px). Desktop sections generally breathe with (85–110px) vertical padding; phone sections use approximately (55–65px). Spacing is an observed set of component-specific values, not an invented uniform scale.

The built cover uses a (46% / 54%) copy-to-art split, a minimum height of `min(790px, calc(100svh - 86px))`, and left-aligned stacked names. The image fills its column with `object-fit: cover`; burgundy gradients join its left and bottom edges to the page. On screens at least (1600px), the split becomes (44% / 56%) and the cover minimum height becomes (820px).

The story pairs a heading with a personal letter. The programme uses two equal day columns separated by a (70px) gap and hairline rules. Travel and RSVP use unequal (.85fr / 1.1fr) columns, with respective gaps of (100px) and (80px). Dress guidance is three open columns; the optional world entry uses a text column and a (330px) portal column.

At (1050px), gutters and inter-column gaps tighten. At (760px), the full navigation hides while the monogram and RSVP remain; the cover becomes centered copy over a (330px)-high image. Story, programme, dress, travel, RSVP and the world entry become single-column sections. Two-column form rows stack, the decorative RSVP signature hides, and input, select and textarea text all become (16px). The footer reserves (90px) bottom padding for the floating music control.

The static page contains one eagerly loaded WebP illustration and no blocking intro. The world is a normal link to another page; its 3D runtime is not part of the invitation's initial experience.

## Elevation & Depth

Depth is mostly tonal rather than card-based: wine sections, paper sections, the champagne stay inset and thin dividers establish hierarchy. The cover image supplies scenic depth. Shadows are reserved for the small glowing portal, the floating music control and the artwork caption.

### Shadow Vocabulary

- **Portal glow** (`0 16px 45px #be7c3333`): A warm, diffuse pool beneath the arched doorway.
- **Floating utility** (`0 5px 20px #35151e22`): Modest separation for the music toggle.
- **Artwork caption** (`0 2px 8px #000000aa`, text shadow): Legibility over the illustration.

**The Paper-First Rule.** Separate ordinary reading content with spacing, background tone or a fine rule; reserve atmospheric shadow for the doorway and floating utility.

## Shapes

Controls have lightly softened corners using `control`; the hosted-stay inset uses `hosted-stay`. Most reading sections have no enclosing box. The sound control is a compact pill. The doorway has a tall rounded arch with a square base and a concentric inset border; dress swatches echo this arch at a smaller scale, with gently alternating rotations.

Fine SVG line icons use rounded caps and joins, generally at (22px) with a (1.4px) stroke. Dividers are (1px). City endpoints are tiny rotated squares, connecting Seattle and Delhi with a quiet horizontal thread.

## Components

### Buttons

Restrained, substantial and easy to identify. Gold is the main invitation/RSVP action; wine is the resort-location action. Both use the frontmatter padding and radius, a (52px) minimum height, an inline arrow and a (22px) content gap. Hover shifts the button up (2px) and changes its background over (.25s). Disabled buttons reduce opacity to (.6), remove the lift and use a waiting cursor. The phone cover button is (48px) tall with slightly reduced padding.

### Inputs / Fields

Transparent wine-tinted fields, warm light text and a fine brass-colored border. Standard fields are at least (49px) high; the resizable textarea starts at (91px). Labels remain visible above the controls, required markers are gold, and optional text is explicitly labeled. Phone input, select and textarea values are (16px). Radios retain native controls with gold selection and (44px) label hit areas.

The form uses an explicit polite status region and a separate confirmation area; no submission success should be implied without the real response. Hidden conditional guest fields use the native `hidden` attribute. Email remains available as an alternative. This is a visual system, not confirmation that the external submission endpoint is activated.

### Navigation

A non-sticky burgundy header with a serif monogram, quiet text anchors and an underlined RSVP action. Links shift to gold on hover; no scroll-spy active state is implemented. At the phone breakpoint only the monogram and RSVP remain. A keyboard-visible skip link precedes the header.

### Hosted-stay Panel

A calm champagne inset, with a two-line serif promise above paired definition-list rows. Desktop padding is (31px); phone padding is (26px 22px). There is no drop shadow. Dates are aligned opposite their labels rather than converted into separate badges.

### Programme Rows

Editorial, not card-like. Each event is a (78px / 1fr) time-and-copy grid with a (20px) gap and top rule; desktop vertical padding is (27px). The phone grid becomes (73px / 1fr) with a (13px) gap. Dress links sit below the description and gain a (44px) minimum height on phones.

### Travel Accordions

Native `details` and `summary` disclose practical directions. The first route starts open, subsequent routes are closed. A fine bottom rule and rotated chevron communicate structure and state; content is ordinary prose with an external route link. Keyboard behavior comes from the native elements.

### Glowing Portal

The signature interaction is a CSS-built arched doorway, not another image. Door leaves shift from (16%) open to (55%) open on both hover and keyboard focus, easing over (.9s) with `cubic-bezier(.16,1,.3,1)`. Light gently pulses over (4s). Deliberate entry uses a (.4s) burgundy fade and a (420ms) navigation delay. Modified clicks remain normal browser navigation.

Reduced-motion preferences disable all animations and transitions, remove smooth scrolling, keep the light steady and skip the portal navigation delay. The cover's one-time (14px) upward settle over (.9s) is also disabled.

### Music Control

A fixed bottom-right pill, initially labeled “Music off.” Audio is only created after an explicit click, with preload disabled; it never autoplays on a fresh visit. Its label, pressed state and live error message reflect real playback. The desktop inset is (20px), becoming (14px) on phones. Its target is at least (46px) tall on desktop and (44px) on phones.

### Focus and States

The global focus indicator is a (2px) amber outline offset by (5px); header and RSVP surfaces use gold. Preserve this visible focus on links, controls and native summaries. Motion is enhancement only: every destination and action remains usable without animation.

## Do's and Don'ts

### Do:

- **Do** keep the burgundy, champagne and gold palette tied to the approved riverside-palace world.
- **Do** use self-hosted Bodoni Moda and Manrope with their documented fallbacks.
- **Do** keep the event programme, directions and RSVP readable independently of the optional world.
- **Do** retain visible keyboard focus, native form labels and 16px mobile field text.
- **Do** identify the palace artwork as an imagined illustration, not a resort photograph.
- **Do** honor reduced motion and require a deliberate action before audio or the separate world loads.

### Don't:

- **Don't** replace open programme rows with a uniform grid of rounded, shadowed cards.
- **Don't** promote occasion-specific dress swatches into global action colors.
- **Don't** add blocking introductions, scroll-scrub footage or page-wide continuous motion.
- **Don't** invent couple photographs or let decorative imagery obscure confirmed practical details.
- **Don't** show a successful RSVP state before the submission is actually accepted.

