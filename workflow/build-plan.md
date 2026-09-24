# Build Plan: Full Website Redesign Rebuild

## Target Specification
Rebuild the Squad Creatives agency website to match the complete full-page prototype in `images/prototypes/`.

## Planned Implementation Steps

### Step 1: Base Design Tokens & Global CSS Setup
- [x] Define crimson dark design system tokens (`#05070A`, `#0A0D14`, `#141A28`, `#E50914`, `#FF1E27`) in `style.css` ([`style.css:1-500`](file:///c:/Users/Khaleelullah/Squad-Creatives/style.css)).
- [x] Setup typography, marquee keyframe animations, glassmorphism card borders, and utility classes.

### Step 2: Full HTML Structure Rebuild (`index.html`)
- [x] **Header**: Logo, CAC badge, navigation links, `DISCIPLINED DIGITAL CRAFT` badge, and `Contact ↗` CTA button ([`index.html:15-39`](file:///c:/Users/Khaleelullah/Squad-Creatives/index.html#L15-L39)).
- [x] **Hero Section**: Ronin background artwork, philosophy quote, `SQUAD CREATIVES` display headline, `Discover More →` & `START A PROJECT` buttons ([`index.html:42-60`](file:///c:/Users/Khaleelullah/Squad-Creatives/index.html#L42-L60)).
- [x] **Value Statement**: Bold transformation headline banner ([`index.html:63-69`](file:///c:/Users/Khaleelullah/Squad-Creatives/index.html#L63-L69)).
- [x] **First Principles Grid**: Agency story narrative + 4 metric cards (`Speed`, `Ownership`, `Architecture`, `Integrity`) ([`index.html:72-113`](file:///c:/Users/Khaleelullah/Squad-Creatives/index.html#L72-L113)).
- [x] **Craft Without Compromise**: 5 discipline cards (`Brand Identity`, `Creative Direction`, `UI/UX Design`, `Motion & Web Engineering`, `Digital Strategy`) ([`index.html:116-180`](file:///c:/Users/Khaleelullah/Squad-Creatives/index.html#L116-L180)).
- [x] **Mission Archive**: List view of agency capabilities with `Explore →` buttons ([`index.html:183-238`](file:///c:/Users/Khaleelullah/Squad-Creatives/index.html#L183-L238)).
- [x] **Results Marquee**: Continuous scrolling marquee banner ([`index.html:241-245`](file:///c:/Users/Khaleelullah/Squad-Creatives/index.html#L241-L245)).
- [x] **Built To Stand Out**: Ronin execution card + 5 key metric stat cards (`50+ Projects`, `180% Sales Increase`, `98% Satisfaction`, `2020 Founded`, `420% Traffic Growth`) ([`index.html:248-306`](file:///c:/Users/Khaleelullah/Squad-Creatives/index.html#L248-L306)).
- [x] **Products In Active Deployment**: Interactive product showcase for Ryzon, Tripa, and Duella with live specs, terminal UI, and metrics ([`index.html:309-380`](file:///c:/Users/Khaleelullah/Squad-Creatives/index.html#L309-L380)).
- [x] **How We Work**: 4-phase protocol workbench (01 Discover, 02 Design, 03 Build, 04 Deploy & Support) with deliverables and data pipeline flowchart ([`index.html:383-437`](file:///c:/Users/Khaleelullah/Squad-Creatives/index.html#L383-L437)).
- [x] **Team Section**: Leadership roster cards for Mustapha Aliyu, Abubakar Mustapha, and Suleiman Usman ([`index.html:440-493`](file:///c:/Users/Khaleelullah/Squad-Creatives/index.html#L440-L493)).
- [x] **FAQ Accordion**: Interactive Q&A list + bespoke consultation Ronin card (`WhatsApp / Phone: +234 903 940 5554`) ([`index.html:496-574`](file:///c:/Users/Khaleelullah/Squad-Creatives/index.html#L496-L574)).
- [x] **Contact Intake Section**: Watermark background, contact info, and Web3Forms lead form (`SEND REQUEST 🚀`) ([`index.html:577-615`](file:///c:/Users/Khaleelullah/Squad-Creatives/index.html#L577-L615)).
- [x] **Footer**: `THANK YOU FOR COMING` headline, Katana artwork, agency metadata (`RC/BN 7237172`), column links, and `Back to top ↑` ([`index.html:618-670`](file:///c:/Users/Khaleelullah/Squad-Creatives/index.html#L618-L670)).

### Step 3: JavaScript Interactive Engine (`script.js`)
- [x] Product Showcase state engine (Ryzon, Tripa, Duella dynamic tab switching) ([`script.js:6-125`](file:///c:/Users/Khaleelullah/Squad-Creatives/script.js#L6-L125)).
- [x] Workbench Protocol step engine (01-04 phase switching) ([`script.js:127-219`](file:///c:/Users/Khaleelullah/Squad-Creatives/script.js#L127-L219)).
- [x] Accordion toggle logic for FAQ items ([`script.js:221-235`](file:///c:/Users/Khaleelullah/Squad-Creatives/script.js#L221-L235)).
- [x] Web3Forms contact form submission handler ([`script.js:237-285`](file:///c:/Users/Khaleelullah/Squad-Creatives/script.js#L237-L285)).

### Step 4: UI Polishing & Interactive Enhancements
- [x] Integrate `Syne` display font family globally across all titles, heroes, badges, and CTAs.
- [x] Place high-fidelity artwork assets (Sakura branch, Ronin characters, Katana).
- [x] Replace all markup icons/emojis with Lucide Vector Icons library.
- [x] Configure `.discipline-card:hover` crimson gradient state (`#E50914` to `#B20710`).
- [x] Set FAQ accordion first item to collapsed by default.
- [x] Implement "Start a Project" modal container form with multi-select discipline pills, SLA guarantee, and Web3Forms AJAX handler.
- [x] Verification checks passed (11/11).

