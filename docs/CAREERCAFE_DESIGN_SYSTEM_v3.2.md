# CareerCafe — Final Visual Design System v3.2

## Developer Source of Truth — Section Numbers Synced to the Implementation Handoff

**Status:** FROZEN  
**Use in repo as:** `docs/CAREERCAFE_DESIGN_SYSTEM_v3.2.md`

> This version is intentionally numbered to match the Claude implementation prompts.
> Do not renumber Sections 1–15 without also updating the implementation handoff.

---

# 1. Brand and Design Principles — Frozen

CareerCafe must feel **premium, readable, technical — not playful edtech**.

Core rules:

- Orange = action
- Sage = state / progress
- Teal-cast Charcoal = structure / trust
- Minimal cards
- Strong real product screenshots
- Restrained shadows
- Large whitespace
- Real proof over decorative marketing
- Marketing, Question Bank, playgrounds and Interview Mode share one design system

Do not reopen frozen visual decisions unless user testing reveals a concrete usability, accessibility or conversion issue.

---

# 2. Typography System — Frozen

## Product fonts

- IBM Plex Sans — UI, headings, long-form content
- IBM Plex Mono — code, timers, IDs, result grids, changing numbers
- No third product typeface in V1

## Marketing scale

| Role     | Desktop |  Mobile | Weight / tracking |
| -------- | ------: | ------: | ----------------- |
| Hero H1  | 60 / 63 | 32 / 38 | 600 / `-0.03em`   |
| H2       | 40 / 48 | 26 / 32 | 600 / `-0.024em`  |
| H3       | 26 / 34 | 21 / 28 | 600 / `-0.012em`  |
| Lead     | 20 / 32 | 18 / 28 | 400               |
| Body     | 17 / 28 | 16 / 26 | 400               |
| Button   | 16 / 20 | 16 / 20 | 600               |
| Metadata | 13 / 18 | 13 / 18 | 500               |

## Product scale

| Role                     | Size / line-height |   Weight | Use                          |
| ------------------------ | ------------------ | -------: | ---------------------------- |
| Page title H1            | 30 / 38            |      600 | App screens                  |
| Section H2               | 24 / 32            |      600 | App sections                 |
| Subsection H3            | 19 / 28            |      600 | Product subsections          |
| UI body                  | 15 / 24            |      400 | Forms/panels/controls        |
| Long-form body           | 17 / 30            |      450 | Questions/cases/explanations |
| Reading toggle           | 19 / 34            |      450 | Optional larger reading mode |
| Card title               | 16 / 22            |      600 | Compact UI cards             |
| Card body                | 14 / 21            |      400 | Short support copy           |
| Metadata                 | 13 / 18            |      500 | Timestamps/counts            |
| Editor                   | 14 / 21.7          | 400 Mono | SQL/Python                   |
| Timer / changing numbers | 20–32              | 500 Mono | tabular numerals             |

Rules:

- Long-form measure ≤ 680px
- IBM Plex Mono ligatures OFF
- Use tabular numerals for changing numbers
- No CareerCafe-authored typography component or utility used by redesigned surfaces may use weight >600
- No decorative/handwritten/generic edtech display font

---

# 3. Theme Behaviour — Frozen

Theme states:

- System
- Light
- Dark

Behaviour:

- New/unset preference follows OS
- Manual Light/Dark persists
- System follows OS changes live
- Landing page is light-first in design, but respects the active theme
- Theme resolves before first paint; no light-theme flash

Theme selector:

- subtle nav/account control
- opens System / Light / Dark
- accessible label such as `Theme: System`
- selected state exposed to assistive technology
- fully keyboard operable
- no binary-only sun/moon toggle

---

# 4. Light / Dark Surface and Text Tokens — Frozen

| Token                 | Light     | Dark      |
| --------------------- | --------- | --------- |
| Canvas                | `#F8F7F4` | `#10181C` |
| Primary surface       | `#FFFFFF` | `#17252B` |
| Elevated surface      | `#FFFFFF` | `#1D2D33` |
| Sunken surface        | `#EFEDE7` | `#0D1518` |
| Practice/Sage surface | `#EEF3E8` | `#1B2A1E` |
| Static code surface   | `#F2F4F0` | `#1A282D` |
| Input background      | `#FFFFFF` | `#132025` |
| Heading/strong ink    | `#17252B` | `#F2F4F3` |
| UI body               | `#2C3B42` | `#D9E0DD` |
| Long-form reading     | `#33444B` | `#C9D2CF` |
| Secondary text        | `#4A5D64` | `#AEB6B9` |
| Metadata              | `#5B6E75` | `#95A3A7` |
| Subtle border         | `#E7E4DD` | `#40545D` |
| Control border        | `#767E86` | `#60747B` |
| Sage graphical        | `#7F9B6D` | `#9FB58D` |
| Sage text             | `#4F6640` | `#B7C9A8` |

Brand identity:

- `#17252B` is deliberately teal-cast Charcoal
- do not replace it with neutral grey-black
- Orange = action
- Sage = state
- Charcoal = structure

---

# 5. Interaction, Border and Semantic Tokens — Frozen

| Token               | Light                | Dark              | Rule                |
| ------------------- | -------------------- | ----------------- | ------------------- |
| Primary action fill | `#BC4A1E`            | `#BC4A1E`         | White text          |
| Primary hover       | `#A83E17`            | `#A83E17`         | Hover darkens       |
| Focus ring          | `#17252B`            | `#FFFFFF`         | 2px + 2px offset    |
| Hovered row         | `#F3F1EC`            | `#1B2C31`         | Subtle              |
| Selected row        | `#FBEEE8`            | `#233940`         | Pair with text/icon |
| Disabled bg         | `#F3F1EC`            | `#1A252A`         | No hover            |
| Disabled text       | `#8A9AA0`            | `#7F8D91`         | Identifiable        |
| Disabled border     | `#D9D5CC`            | `#33474F`         | Passive boundary    |
| Overlay             | `rgba(23,37,43,.28)` | `rgba(0,0,0,.68)` | Modal/sheet         |
| Marketing shadow    | `rgba(23,37,43,.08)` | `rgba(0,0,0,.32)` | Screenshots/proof   |
| Product UI shadow   | `rgba(23,37,43,.08)` | `rgba(0,0,0,.35)` | Minimal elevation   |

## 5.1 Border distinction

- `#E7E4DD` / `#40545D` = decorative dividers and passive card boundaries only
- `#767E86` / `#60747B` = inputs, outline buttons and interactive control boundaries
- subtle border must never be the sole boundary of an interactive control

## 5.2 Semantic states

| State   | Light     | Dark      | Dark surface |
| ------- | --------- | --------- | ------------ |
| Success | `#4F6640` | `#B7C9A8` | `#1B2A1E`    |
| Warning | `#8A5A00` | `#E8C47A` | `#2A2314`    |
| Error   | `#9E1C2B` | `#F29A9A` | `#321A1E`    |
| Info    | `#2F5D7C` | `#8FC3E0` | `#172833`    |

Always pair semantic colour with a text label and/or icon.

---

# 6. Component Geometry, Shadows and Motion

- Card radius: 8px
- Input radius: 8px
- Button radius: 6px
- Product screenshot radius: 12px
- Marketing proof shadow, light: `0 8px 24px rgba(23,37,43,0.08)`
- Marketing proof shadow, dark: `0 8px 24px rgba(0,0,0,0.32)`
- Product UI shadow max, light: `0 1px 3px rgba(23,37,43,0.08)`
- Product UI shadow max, dark: `0 1px 3px rgba(0,0,0,0.35)`
- Motion: `150ms ease-out`
- Minimum target: 44×44px; prefer 48px primary buttons

No gradients, glassmorphism, glowing badges, confetti, blobs, mascot illustrations, all-pill UI, or heavy shadows.

---

# 7. One Brand, Four Surface Behaviours

## Marketing landing page

Warm, spacious, 1200px max container, strong real screenshots, Orange CTA, restrained Sage.

## Question Bank / content

White reading column on warm canvas in light mode; dark reading surface in dark mode; max reading width 680px.

## SQL / Python playground

Denser controls; dark executable editor; IBM Plex Mono; Orange on Run/Submit only.

## Interview Mode

Near-monochrome and distraction-free. No Sage encouragement/success state during the active interview.

## 7.1 Playground editor

- Editor background `#132025`
- Editor chrome `#17252B`
- Foreground `#D4DCDA`
- Keyword `#B79BE8`
- String `#A9C295`
- Number `#E0B26A`
- Function `#7FB4E3`
- Type `#72C4B8`
- Operator `#E8825A`
- Comment `#7C8F94`
- Error `#E88070`
- IBM Plex Mono, 14px, line-height ~1.55, ligatures OFF

---

# 8. Landing Page Structure — Frozen

|   # | Section                              | Final treatment                                                                                 |
| --: | ------------------------------------ | ----------------------------------------------------------------------------------------------- |
|   1 | Navigation                           | Sticky compact header + secondary three-state theme selector                                    |
|   2 | Hero + compact proof                 | `Knowledge ≠ Performance` + 2 CTAs + max 3 real student cards                                   |
|   3 | Choose Your Programme                | Foundation + Placement Pass; Sprint compact                                                     |
|   4 | How CareerCafe Prepares You          | De-carded Practice → Interview → Human Validation                                               |
|   5 | Real Product Experience              | Real Practice + Interview screenshots; intentionally blocked until representative screens exist |
|   6 | Analyst Directions                   | 4 light cards; locked taxonomy                                                                  |
|   7 | AI for Analysts                      | Compact inset panel                                                                             |
|   8 | Company Preparation                  | Chips + selected panel; Explore Preparation primary                                             |
|   9 | Human Validation + Verified Outcomes | Human Validation always remains; outcome cards only when real/approved                          |
|  10 | Campus Analyst Challenge             | Compact B2B section                                                                             |
|  11 | Final Student CTA                    | Full-width Charcoal band + one Orange CTA                                                       |
|  12 | Footer                               | Compact; real links only                                                                        |

Do not add more sections.

---

# 9. Hero and Product Proof — Frozen

## 9.1 Hero

- Eyebrow: `Brewing Future Analysts`
- H1: `Knowledge ≠ Performance`
- Problem: `The gap between knowing and performing is where most candidates struggle.`
- Primary CTA: `Start Practising Free`
- Secondary CTA: `Explore Programmes`
- Capability row: `SQL & Python · Cases & Guesstimates · Interview Questions · Company Prep`
- Max 3 real student proof cards
- No company-partnership implication

## 9.2 Real Product Experience screenshot spec

- Container up to 1180px
- Approx. 16:10
- Radius 12px
- 1px subtle border
- Marketing proof shadow
- Desktop text/actions readable at 1× on 1366px
- Mobile uses art-directed crops
- Match active theme where possible
- Cross-theme screenshots must be clearly framed/captioned
- No fake dashboards or placeholder product screenshots

---

# 10. Section-by-Section Visual Treatment

- Programmes: 2 main cards, 3 bullets max, Placement Pass stronger
- How It Works: no cards; 3 numbered steps + whitespace + simple connector
- Directions: border-first, minimal shadow, 3 chips max
- AI for Analysts: compact Charcoal/Soft Sage inset panel, 4 concepts + 1 CTA
- Company Prep: selected-company panel, coverage/last reviewed visible, Explore Preparation primary
- Human Validation + Outcomes: Human Validation is always present; show 0 outcome/testimonial cards until approved proof exists
- Campus Challenge: compact; must not dominate student funnel
- Final CTA: only full-width dark conversion band
- Footer: max 3 compact groups; real links only

## 10.1 Spacing and visual rhythm

| Token                 | Desktop | Mobile |
| --------------------- | ------: | -----: |
| Major section padding |    96px |   64px |
| Eyebrow → heading     |    16px |   12px |
| Heading → body        |    16px |   12px |
| Body → major content  |    40px |   32px |
| Grid/card gap         |    24px |   16px |
| Card padding          |    32px |   24px |
| CTA gap               |    12px |   12px |
| Page gutter           |    48px |   24px |
| Max marketing width   |  1200px |   100% |

Rhythm:

- break repeated card-grid patterns
- use more left-aligned sections
- reserve full-width dark treatment for final CTA
- no more than two accent colours visible in one viewport

---

# 11. Responsive, Accessibility and Theme QA

Mandatory:

- 44×44px minimum target
- prefer 48px primary button
- visible keyboard focus
- colour never the only signal
- interactive controls use control border
- no inaccessible base-Sage or decorative-orange normal text
- no first-paint theme flash

Responsive:

- 360–390px: CTAs stack, no overflow, screenshots readable/art-directed
- 768–1024px: card wrapping, screenshot legibility, company panel transition
- 1366×768: hero CTA visible, product proof readable, first screen not oversized

## 11.1 Theme QA matrix

Test both Light and Dark across:

- Landing + navigation
- Question Bank
- SQL/Python playgrounds
- Interview Mode
- Company Prep
- product screenshots

Screenshots should match active theme or be explicitly presented as the other theme.

---

# 12. Implementation Priority — Frozen

Do immediately:

- remove borrowed/placeholder testimonials
- remove dead links
- verify remaining student proof
- check whether `/screenshots/wide-light.png` is a genuine product screenshot; remove/replace it if it is a mockup or fake product screen

Build order:

1. tokens
2. typography
3. theme
4. primitives
5. implementable landing sections
6. QA
7. real product proof when genuine screens exist

Token migration scope:

- establish the canonical token layer globally
- migrate the landing-page shell/components required by this redesign
- do not refactor unrelated logged-in product screens during this project
- other product surfaces migrate during their own visual pass

---

# 13. Explicit Visual Non-Goals

Do not build:

- third display font/serif
- gradient-mesh/aurora hero
- glassmorphism
- mascot/blob/3D emoji system
- heavy shadow system
- large Orange/Sage full-screen sections
- all-pill UI
- fake screenshots
- repeated all-caps eyebrows
- coloured word inside every headline
- forced-light public site
- binary-only theme selector

---

# 14. Final Visual Acceptance Checklist

- first screen explains CareerCafe clearly
- IBM Plex Sans/Mono applied
- Light + Dark tokens consistent
- System/Light/Dark works and persists correctly
- no theme flash
- Orange = action / Sage = state / Charcoal = structure
- long-form reading ≤ 680px
- no inaccessible Sage/orange normal text
- minimal cards / restrained shadows / large whitespace
- Human Validation remains even when no outcome stories are available
- Real Product Experience only uses real representative UI
- no placeholder proof or dead CTA/link
- 360/390, tablet and 1366×768 QA passed
- keyboard/focus QA passed
- senior developer has signed off token/theme architecture and final implementation

---

# 15. CSS Token Appendix

```css
:root {
  --cc-canvas: #f8f7f4;
  --cc-surface: #ffffff;
  --cc-surface-elevated: #ffffff;
  --cc-surface-sunken: #efede7;
  --cc-surface-sage: #eef3e8;
  --cc-code-surface: #f2f4f0;
  --cc-input-bg: #ffffff;

  --cc-ink-strong: #17252b;
  --cc-ink-body: #2c3b42;
  --cc-ink-reading: #33444b;
  --cc-ink-secondary: #4a5d64;
  --cc-ink-meta: #5b6e75;

  --cc-border-subtle: #e7e4dd;
  --cc-border-control: #767e86;

  --cc-orange: #c94f20;
  --cc-orange-fill: #bc4a1e;
  --cc-orange-hover: #a83e17;
  --cc-orange-text: #a03e18;

  --cc-sage: #7f9b6d;
  --cc-sage-text: #4f6640;

  --cc-success: #4f6640;
  --cc-warning: #8a5a00;
  --cc-error: #9e1c2b;
  --cc-info: #2f5d7c;

  --cc-radius-card: 8px;
  --cc-radius-input: 8px;
  --cc-radius-button: 6px;
  --cc-radius-screenshot: 12px;

  --cc-shadow-marketing: 0 8px 24px rgba(23, 37, 43, 0.08);
  --cc-shadow-ui: 0 1px 3px rgba(23, 37, 43, 0.08);

  --cc-motion-fast: 150ms ease-out;
}

[data-theme="dark"] {
  --cc-canvas: #10181c;
  --cc-surface: #17252b;
  --cc-surface-elevated: #1d2d33;
  --cc-surface-sunken: #0d1518;
  --cc-surface-sage: #1b2a1e;
  --cc-code-surface: #1a282d;
  --cc-input-bg: #132025;

  --cc-ink-strong: #f2f4f3;
  --cc-ink-body: #d9e0dd;
  --cc-ink-reading: #c9d2cf;
  --cc-ink-secondary: #aeb6b9;
  --cc-ink-meta: #95a3a7;

  --cc-border-subtle: #40545d;
  --cc-border-control: #60747b;

  --cc-sage: #9fb58d;
  --cc-sage-text: #b7c9a8;

  --cc-shadow-marketing: 0 8px 24px rgba(0, 0, 0, 0.32);
  --cc-shadow-ui: 0 1px 3px rgba(0, 0, 0, 0.35);
}
```

## Copy conventions

- British English is frozen: **Practise / Practising / Programme / Programmes**
- `AI` is always capital A + capital I
- no coloured word inside headlines
- no all-caps eyebrow above every section
