# New Navbar Component

A modern, responsive navbar component with sticky behavior and smooth scroll effects.

## Features

- **Sticky Header**: The navbar stays at the top and changes appearance when scrolling past 50px
- **Responsive Design**: Desktop navigation menu with mobile dropdown menu (breakpoint at 768px)
- **Smooth Transitions**: Backdrop blur and shadow effects on scroll
- **Static Navigation**: Includes pre-defined navigation items:
  - About us
  - Services
  - Work
  - Team
  - Pricing
  - Awards
- **Call-to-Action**: "Let's Collaborate" button prominently displayed

## Usage

```tsx
import NewNavbar from "@/components/new-navbar";

export default function Page() {
  return (
    <>
      <NewNavbar />
      <main className="pt-16">
        {/* Your page content */}
      </main>
    </>
  );
}
```

## Components Used

- `Button` from @workspace/ui
- `DropdownMenu` components from @workspace/ui
- `NavigationMenu` components from @workspace/ui
- `Logo` component
- Icons from lucide-react

## Demo

Visit `/navbar-demo` to see the component in action with scroll and responsive behavior testing.

## Customization

To customize the navigation items, edit the `navigationData` array in the component:

```tsx
const navigationData: NavigationSection[] = [
  {
    title: "Your Title",
    href: "/your-link",
  },
  // Add more items...
];
```

To customize the collaborate button text, edit the `CollaborateButton` component:

```tsx
const CollaborateButton = ({ className }: { className?: string }) => (
  <Button className={className} variant="default">
    Your Button Text
  </Button>
);
```
