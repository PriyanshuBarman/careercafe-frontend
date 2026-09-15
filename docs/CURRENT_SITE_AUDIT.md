# CareerCafe - Current Site Audit vs. Frozen v3.2 Spec

**Audited:** [careercafe-frontend-rx91.vercel.app](https://careercafe-frontend-rx91.vercel.app/) (preview deployment; canonical `careercafe.in`)  
**Audited Against:** `CAREERCAFE_DESIGN_SYSTEM_v3.2.md`  
**Method:** Rendered page content + metadata. This is a content and structure audit; exact colours, spacing, and font rendering still need a visual pass once you have the repo open.

---

## PO - Fix Today, Before Anything Else

### 1. The testimonials section contains a competitor's copy

The section titled "Loved by job seekers worldwide" carries eight testimonials that are not CareerCafe's. Several of them name Teal—a different product—directly in the quote text. The names and job titles attached to them (Alin Florea, Brittany Archard, Meg Thomas, Therese Sollars, Billy Lechert, Janice Simpson, Allie Jacobs, Roger McClung) appear to belong to real people who endorsed that other product, not yours.

This is a bigger problem than a design inconsistency:

- It is false proof on a live, publicly reachable page.
- It uses real individuals' names and titles without their consent.
- It reproduces another company's marketing copy.
- One quote literally reads as praise for Teal, so any visitor who reads carefully sees it.

The spec's own "Do today" instruction covers this: remove borrowed or placeholder proof, and do not leave competitor copy or false trust elements on a live preview.

> **Action:** Delete the entire section now. Do not replace it with rewritten versions of the same quotes—rewriting someone else's testimonial is still fabricated proof. Ship the page with no testimonials until you have real, written, approved student statements. Spec Section 9 allows a maximum of three, and only real ones.

### 2. Every footer link is dead

All links across the five footer groups (Product, Company, Resources, Social, Legal) point to `#`, plus six more empty icon links below the copyright. Spec Section 10 requires "no dead links" and a maximum of three compact groups.

> **Action:** Cut to three groups containing only routes that actually exist. Remove the social row entirely until the accounts exist.

### 3. Verify the student proof is real

Five student cards (Riya, Ananya, Aarav, Kabir, Neel) with photos, placements, and a "Verified Result" badge, plus a "100+ analysts placed" claim and a row of four employer logos in the hero.

I cannot tell from outside whether these are real. If any of them are placeholders, stock photos, or aspirational numbers, they fall under the same rule as the testimonials and must come down before launch. If they are real, you need written consent on file for each name, photo, and employer mention.

> **Action:** Confirm provenance for each. The 100+ analysts placed figure needs to be defensible if challenged.

---

## P1 - Structural Gaps vs. the Frozen 12-Section Layout

| #      | Spec section                         | Current state                                                                               | Work needed                                                                                                                                 |
| :----- | :----------------------------------- | :------------------------------------------------------------------------------------------ | :------------------------------------------------------------------------------------------------------------------------------------------ |
| **1**  | Navigation                           | Logo, "Toggle theme", "Signup", "Start Practicing Free" only                                | Add Programmes / Practice / Company Prep / How It Works. Change "Signup" to "Sign In". Make it a sticky compact header.                     |
| **2**  | Hero + compact proof                 | Present, but 5 student cards and no capability row                                          | Cut to 3 cards. Add the capability row: SQL & Python Cases & Guesstimates. Interview Questions Company Prep.                                |
| **3**  | Choose Your Programme                | Present and close to spec                                                                   | Trim bullets to 3 max per card. Make Placement Pass visually stronger, Foundation quieter.                                                  |
| **4**  | How Career Cafe Prepares You         | Present, 3 steps                                                                            | Verify it is de-carded (numbered steps + whitespace + simple connector, no card containers).                                                |
| **5**  | Real Product Experience              | Missing                                                                                     | Blocked—see P3 below.                                                                                                                       |
| **6**  | Analyst Directions                   | Present, 4 cards, labels duplicated                                                         | Fix duplicate tag/title pairs (see P2). Border-only cards, 3 chips max.                                                                     |
| **7**  | AI for Analysts                      | Missing                                                                                     | Add compact inset panel: 4 concepts + 1 CTA, no syllabus.                                                                                   |
| **8**  | Company Preparation                  | Present, disclaimer present                                                                 | Fix CTA hierarchy—"Explore ZS Associates Preparation" must be primary over "Start ZS Associates Mock". Surface coverage/last-reviewed date. |
| **9**  | Human Validation + Verified Outcomes | Wrong content occupied by the region, or left out borrowed testimonials until proof exists. | Delete existing. Rebuild as one editorial trust region, max 3 real approved stories.                                                        |
| **10** | Campus Analyst Challenge             | Present                                                                                     | Keep compact; must not dominate the student funnel. Fix "Challange" typo.                                                                   |
| **11** | Final Student CTA                    | Missing                                                                                     | Add full-width dark Charcoal band with one orange CTA + reassurance line.                                                                   |
| **12** | Footer                               | Present but oversized and dead                                                              | See PO item 2.                                                                                                                              |

---

## P2 - Copy and Label Defects

| Location           | Current                                                                             | Should be                                                                                                                                        |
| :----------------- | :---------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------- |
| How It Works       | "AI feedback on approach, accuracy, step 2 and communication"                       | "AI feedback..." - capital I (currently a lowercase `a`i).                                                                                       |
| Company Prep panel | "AI mock interview"                                                                 | "AI mock interview"                                                                                                                              |
| Campus CTA card    | "Host a Campus Challange"                                                           | "Host a Campus Challenge"                                                                                                                        |
| Directions card 1  | "Business & Operations Business & Operations Business decisions, operations, cases" | Label rendered twice—pick one tag, one title.                                                                                                    |
| Directions card 4  | Title "Consulting Analyst", tag "Consulting & Strategy"                             | Lock one taxonomy label and use it consistently.                                                                                                 |
| Hero + nav CTA     | "Start Practicing Free"                                                             | Spec writes "Start Practising Free" (British). Pick one spelling and apply site-wide—this is your call, not Claude's, but it must be consistent. |

---

## P3 - Theme System

- The control is currently a single "Toggle theme" button. Spec Section 3 and Section 13 both forbid a binary-only toggle—it must be a three-state **System / Light / Dark** selector with an accessible label reflecting current state.
- `meta-theme-color` is hardcoded `#ffffff`. It should resolve per theme: (`#F8F7F4` light, `#10181C` dark).
- Theme must resolve before first paint. Needs verification—a flash of light theme on load is an explicit spec failure.
- Open graph image points at `/screenshots/wide-light.png`. If that is a mockup rather than a real screen, it falls under "no fake product screenshots."

---

## P4 - Blocked, Not Skipped

Section 5, **Real Product Experience**, cannot be built. It requires real Practice Mode and Interview Mode screenshots in both themes, and the spec explicitly forbids placeholder mockups or fake dashboards.

Do not let any AI tool generate a "representative" product screenshot to fill this space. Leave the section out of the page entirely until the screens exist. This is the single highest-value section on the page once unblocked—it is named the page's visual peak.

---

## Summary of Order of Work

1. **Strip false proof and dead links (PO)** — ship same day.
2. **Token + type + theme foundation (P3)** plus the design system tokens.
3. **Structural gaps**, section by section, in spec order (P1).
4. **Copy fixes (P2)** can ride along with each section.
5. **Real Product Experience last**, when screenshots exist (P4).
