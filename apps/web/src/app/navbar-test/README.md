# Navbar Test Page

This test page demonstrates the alternative navbar component implementation.

## Access the Test Page

Once the application is running, visit: **`http://localhost:3000/navbar-test`**

## What to Test

### 1. Sticky Navbar Behavior
- **Action**: Scroll down the page
- **Expected**: After scrolling past 50px, the navbar should:
  - Become sticky (fixed position)
  - Add a backdrop blur effect
  - Show a subtle shadow
  - Maintain smooth transitions

### 2. Navigation Links
The navbar includes six test navigation items:
- About us (#about)
- Services (#services)
- Work (#work)
- Team (#team)
- Pricing (#pricing)
- Awards (#awards)

**Action**: Click on any navigation link
**Expected**: Page should smoothly scroll to the corresponding section

### 3. Collaborate Button
- **Location**: Right side of the navbar (desktop)
- **Icon**: Handshake icon from @iconify/react
- **Action**: Click the button
- **Expected**: Console log message (can be customized with actual functionality)

### 4. Mobile Responsiveness
**Action**: Resize browser window to less than 768px width or view on mobile device

**Expected**:
- Desktop navigation menu should hide
- Hamburger menu icon should appear (☰)
- Clicking hamburger opens mobile menu with:
  - All navigation links
  - Collaborate button

### 5. Mobile Menu Interactions
When mobile menu is open:
- **Click outside menu**: Should close the menu
- **Click a navigation link**: Should close menu and scroll to section
- **Press Escape key**: Should close the menu
- **Resize to desktop width**: Should automatically close menu

### 6. Accessibility Features
- **ARIA labels**: Mobile menu button has proper aria-label and aria-expanded
- **Keyboard navigation**: Tab through links, use Escape to close menu
- **Semantic HTML**: Proper nav, header, and role attributes
- **Screen reader support**: All interactive elements are properly labeled

### 7. Visual Elements to Test

The test page includes multiple sections with different backgrounds:
- **Hero Section**: Blue-to-purple gradient with feature badges
- **About Section**: Gray background with text content
- **Services Section**: White background with three service cards
- **Work Section**: Gray background with feature cards
- **Team Section**: White background with mobile menu instructions
- **Pricing Section**: Gray background with feature checklist
- **Awards Section**: White background with success indicators

## Features Demonstrated

### Performance
- ✅ Throttled scroll events using `requestAnimationFrame`
- ✅ Optimized re-renders
- ✅ Smooth animations and transitions

### Design
- ✅ Modern gradient hero section
- ✅ Backdrop blur on sticky navbar
- ✅ Responsive card layouts
- ✅ Dark mode support (inherits from theme)

### User Experience
- ✅ Smooth scrolling to anchor links
- ✅ Visual feedback on interactions
- ✅ Clear section separation
- ✅ Informative content about features

## Mock Data

The test page uses mock Sanity data that matches the production schema:

```typescript
{
  navbarData: {
    _id: "navbar-test",
    columns: [/* navigation items */],
    buttons: []
  },
  settingsData: {
    _id: "settings",
    _type: "settings",
    siteTitle: "Test Website",
    logo: { /* mock logo data */ }
  }
}
```

## Customization

To modify the test page:

1. **Change navigation items**: Edit the `mockNavigationData.navbarData.columns` array
2. **Add more sections**: Create new section elements in the JSX
3. **Modify styling**: Update Tailwind classes
4. **Test different data**: Modify the mock data structure

## Comparison with Production

The test page isolates the alternative navbar by:
- Using a custom layout (doesn't include root layout's navbar)
- Providing mock data instead of fetching from Sanity
- Focusing solely on navbar functionality

In production, you would:
- Fetch data from Sanity using `getNavigationData()`
- Include the navbar in your main layout
- Use real logo and navigation data from CMS

## Development Notes

- The page does not require Sanity connection to run
- All data is mocked locally for testing
- Can be used for development and screenshot purposes
- Safe to delete after testing is complete
