# Alternative Navbar Component

This directory contains an alternative navbar implementation that was created based on a specific design request.

## Files

- `navbar-alternative.tsx` - New navbar component with:
  - Sticky behavior on scroll (activates after 50px)
  - Responsive mobile menu
  - Icon support via @iconify/react
  - Collaborate button with handshake icon
  - Full Sanity CMS integration

## Usage

To use this navbar instead of the default one, update your layout file:

```tsx
// In src/app/layout.tsx or wherever the navbar is used
import { Navbar } from "@/components/navbar-alternative";

// Then use it with your Sanity data:
<Navbar 
  navbarData={navbarData} 
  settingsData={settingsData} 
/>
```

## Features

### Sticky Navbar
The navbar becomes sticky and adds a backdrop blur effect after scrolling 50px down the page.

### Mobile Responsive
- Desktop: Shows full navigation menu with links and collaborate button
- Mobile: Collapses into a hamburger menu with slide-down navigation

### Sanity Integration
The component receives navigation data from Sanity CMS via props and supports:
- Link-type navigation items (direct links)
- Column-type navigation items (dropdown menus - can be extended)

Data is fetched at the layout/page level and passed to the component.

### Icons
Uses @iconify/react for icon support. The collaborate button uses the handshake icon (`mdi:handshake`).

## Dependencies

- `@iconify/react` - Icon library (added to package.json)
- `@workspace/ui` - UI components (Button, NavigationMenu)
- Sanity CMS integration via existing API

## Customization

To customize the navbar:

1. **Change the collaborate button**: Edit the `CollaborateButton` component
2. **Modify sticky behavior**: Adjust the `handleScroll` threshold (currently 50px)
3. **Add dropdown menus**: Extend the navigation rendering to support column-type items with dropdowns
4. **Styling**: Modify Tailwind classes in the JSX

## Note

The original navbar component (`navbar.tsx`) has more features including:
- Full dropdown support for column-type navigation
- Sanity live preview integration with SWR
- More sophisticated error handling
- Mobile menu in a separate component

Choose the navbar that best fits your needs.
