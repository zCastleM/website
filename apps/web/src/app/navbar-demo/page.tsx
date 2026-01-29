import NewNavbar from "@/components/new-navbar";

export default function NavbarDemoPage() {
  return (
    <>
      <NewNavbar />
      <main className="pt-16">
        <div className="container mx-auto px-4 py-12">
          <h1 className="mb-8 text-4xl font-bold">New Navbar Demo</h1>
          
          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-semibold">Features</h2>
            <ul className="space-y-2 list-disc list-inside">
              <li>Sticky header that changes appearance on scroll (scroll down to see)</li>
              <li>Desktop navigation with NavigationMenu component</li>
              <li>Mobile dropdown menu (resize window to see)</li>
              <li>"Let's Collaborate" call-to-action button</li>
              <li>Responsive design with breakpoint at 768px</li>
              <li>Smooth transitions and backdrop blur effects</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-semibold">Navigation Items</h2>
            <p className="mb-2">The navbar includes the following sections:</p>
            <ul className="space-y-1 list-disc list-inside">
              <li>About us</li>
              <li>Services</li>
              <li>Work</li>
              <li>Team</li>
              <li>Pricing</li>
              <li>Awards</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-semibold">Scroll Test</h2>
            <p className="mb-4">
              Scroll down this page to see the sticky navbar effect. 
              After scrolling 50px, the navbar will have a backdrop blur and shadow.
            </p>
            {Array.from({ length: 20 }).map((_, i) => (
              <p key={i} className="mb-4 text-muted-foreground">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
                culpa qui officia deserunt mollit anim id est laborum.
              </p>
            ))}
          </section>
        </div>
      </main>
    </>
  );
}
