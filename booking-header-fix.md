# Booking Page Header Fix — `booking.html`

## Problem
The "Begin Your Healing Journey" heading is being clipped/cut off by the fixed navigation bar.

## Root Cause
The page's hero/header section doesn't have enough top padding to account for the fixed navbar sitting on top of it.

## Fix
In your `booking.html`, find the CSS rule for your hero header section (likely named `.hero`, `.booking-hero`, `.page-header`, or `header`) and increase the `padding-top` value.

### Option A — Quick CSS patch (add to your `<style>` block or stylesheet):
```css
/* Booking page hero fix */
header,
.page-header,
.hero {
  padding-top: 110px; /* adjust up/down until text is fully visible */
}
```

### Option B — If you use a fixed navbar with a known height (e.g. 80px):
```css
header {
  padding-top: calc(80px + 40px); /* navbar height + desired breathing room */
}
```

### Option C — Universal fix for fixed navbars:
Add this to the `<body>` or the first full-width section:
```css
body {
  padding-top: 80px; /* match your navbar height */
}
```

## How to Find the Right Selector
1. Open `booking.html` in your browser
2. Right-click "Begin Your Healing Journey" → Inspect
3. Look for the parent container — its class name is your selector
4. Increase its `padding-top` until the text clears the navbar
