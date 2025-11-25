# Design Guidelines: High Barnet to Chancery Lane Journey Status App

## Design Approach
**Reference-Based with TfL Design System Integration**
This is a utility-focused transit app drawing heavily from Transport for London's established visual language. Reference TfL's official apps and website for authentic Underground aesthetic while maintaining modern web standards.

Key principles:
- Information clarity over decoration
- Scannable route comparisons
- Authentic London Underground visual identity
- Mobile-first, on-the-go usage pattern

## Typography

**Primary Font:** Johnston (TfL's official typeface) via web font, fallback to system sans-serif
- Route headers: 20px, semibold (600)
- Journey duration/times: 16px, medium (500)
- Station names: 15px, regular (400)
- Step instructions: 14px, regular (400)
- Metadata (disruptions, walking time): 13px, regular (400)

**Hierarchy:** Bold weights for primary information (duration, line names), regular for supporting details

## Layout System

**Spacing Scale:** Tailwind units of 2, 3, 4, 6, 8 for consistency
- Card padding: p-4 to p-6
- Section gaps: gap-4 to gap-6
- Icon-to-text spacing: gap-2
- Route card margins: mb-4

**Container:** max-w-2xl centered on desktop, full-width on mobile with px-4 padding

**Grid Structure:**
- Single column layout (no multi-column needed for route comparison)
- Vertical stack of route cards for easy scanning
- Each route card uses internal flex layouts for time/duration display

## Component Library

### Core Components

**App Header:**
- TfL roundel icon (left)
- "High Barnet → Chancery Lane" title (16px, semibold)
- Last updated timestamp (12px, muted)
- Compact height (h-16), fixed position on mobile

**Route Cards:**
- Bordered cards with subtle shadow for separation
- Journey duration prominently displayed (large text, 24px)
- Departure/arrival times in horizontal layout
- Line badges using official TfL line colors (circular or rounded-rectangle pills)
- Step-by-step leg breakdown with icons
- Collapsible detailed view (optional expansion for full directions)

**Journey Legs:**
- Icon + line name + direction (e.g., "Northern line towards High Barnet")
- Station count indicator ("5 stops")
- Walking segments with distance/time
- Transfer indicators with clear visual separation

**Status Indicators:**
- Disruption alerts in amber/red with icon
- "Good service" in green
- Real-time delay warnings inline with affected legs
- Badge/pill styling for status messages

**Line Badges:**
- Use authentic TfL line colors:
  - Northern line: #000000 (black)
  - Central line: #DC241F (red)
- White text on colored background
- Rounded-full or rounded-lg pills
- Small size (text-xs to text-sm)

### Navigation & Controls
- Refresh button (top-right, icon only)
- Auto-refresh indicator (subtle pulse animation when loading)
- No complex navigation needed (single-purpose app)

### Data Displays

**Time Display:**
- 24-hour format preferred (14:30)
- Relative time when relevant ("Departs in 5 min")
- Clear AM/PM if 12-hour used

**Duration Display:**
- Minutes format (e.g., "21 min")
- Fastest route highlighted visually (subtle accent background)

**Walking Segments:**
- Walking icon (person walking)
- Distance in meters/minutes
- Muted styling (less prominent than tube segments)

## Visual Style

**Card Design:**
- Light background with subtle border
- Rounded corners (rounded-lg)
- Slight shadow for depth (shadow-sm)
- Hover state: shadow-md transition

**Icons:**
- Use Heroicons for UI elements (refresh, clock, walking)
- TfL roundel as SVG for header
- Line icons minimal and functional

**Loading States:**
- Skeleton screens for route cards
- Subtle pulse animation
- Maintain layout structure during loading

**Empty/Error States:**
- Clear messaging if API fails
- Retry action button
- TfL-themed illustration or icon

## Responsive Behavior

**Mobile (default):**
- Full-width route cards
- Stacked time displays
- Larger touch targets (min 44px height)
- Fixed header with scroll-away on scroll down

**Desktop (md: breakpoint):**
- Centered container (max-w-2xl)
- Horizontal time/duration layout within cards
- More generous spacing (p-6 instead of p-4)

## Accessibility
- ARIA labels for route cards and status indicators
- Keyboard navigation for expandable route details
- Color contrast meeting WCAG AA standards
- Screen reader announcements for auto-refresh updates

## Branding Elements
- TfL roundel in header (iconic red-blue circles)
- "Powered by TfL Open Data" footer text
- Maintain official Underground aesthetic without exact replication

## Animations
**Minimal approach:**
- Smooth transitions on card expansion (duration-200)
- Fade-in for new route data after refresh
- Loading pulse for skeleton states
- No decorative animations

This utility app prioritizes clarity, speed, and authentic TfL visual identity over creative flourishes. Every design decision serves the core function: helping users quickly compare and choose their best route.