# Spagyria - A Modern Alchemical Apothecary Website

This document provides a comprehensive overview of the Spagyria website project, including its architecture, features, and instructions for setup, hosting, and customization.

## 1. Project Overview

Spagyria is a minimalist and elegant website for a modern spagyric apothecary. It serves as a digital storefront and informational hub, offering handcrafted plant-based elixirs. The site is designed to be aesthetically pleasing, responsive, and performant.

### Key Features

-   **Zero Build:** Runs directly in the browser without any build steps or package installation, making it incredibly easy to deploy and maintain.
-   **Responsive Design:** Optimized for a seamless experience across desktops, tablets, and mobile devices.
-   **Product Showcase:** A clean grid layout for product listings and a detailed view for each product, complete with an image gallery and rich descriptions.
-   **Events & Bookings:** A dedicated page for workshops and webinars, including a form for personal consultation requests.
-   **Resources Library:** A curated page of links to key websites, communities, and texts for further study in alchemy and herbalism.
-   **Static Data-Driven:** Product, event, and resource information is managed in simple TypeScript files, making content updates easy without needing a database.
-   **Modern & Fast:** Built with React and served statically, ensuring fast load times. It uses modern browser features like import maps and an in-browser transpiler (Babel).

## 2. Tech Stack

The project leverages a modern, lightweight, build-free tech stack:

-   **Frontend Library:** [React](https://react.dev/) (v19)
-   **Client-Side Routing:** [React Router](https://reactrouter.com/)
-   **Styling:** [Tailwind CSS](https://tailwindcss.com/) (via CDN)
-   **Language:** [TypeScript](https://www.typescriptlang.org/) (transpiled in-browser)
-   **JSX Transpilation:** [Babel Standalone](https://babeljs.io/docs/babel-standalone)
-   **Module Loading:** ES6 modules with an `importmap` in `index.html`.

## 3. Project Structure

The codebase is organized into logical directories:

```
/
├── components/         # Reusable React components (Header, Footer, etc.)
├── data/               # Static data files (products, events, resources)
├── pages/              # Top-level page components (HomePage, AboutPage, etc.)
├── services/           # Services for external APIs (e.g., Gemini AI)
├── App.tsx             # Main app component with routing logic
├── index.html          # The single HTML entry point for the app
├── index.tsx           # React root rendering
├── metadata.json       # Application metadata
├── README.md           # This documentation file
└── types.ts            # TypeScript type definitions
```

## 4. Getting Started & Local Development

This project is a pure static site and requires no build step or package installation. It uses Babel Standalone to transpile JSX directly in the browser.

### Development

1.  **Clone the Repository (or download the files):**
    Get all the project files onto your local machine.

2.  **Run a Local Server:**
    While you can try opening `index.html` directly in your browser, modern browser security policies (CORS) can interfere with loading modules from the filesystem. The recommended approach is to use a simple local web server.
    -   If you have Node.js, you can use `npx`:
        ```bash
        # From the project's root directory
        npx serve
        ```
    -   Alternatively, many code editors (like VS Code with the "Live Server" extension) have built-in static server capabilities.

    -   Open the provided URL (e.g., `http://localhost:3000`) in your browser to view the site.

## 5. Hosting & Deployment

As a fully static website, deployment is as simple as uploading the files to a static hosting provider.

### Recommended Providers

-   Vercel
-   Netlify
-   GitHub Pages
-   Cloudflare Pages

### Deployment Steps

Deployment is straightforward: simply point your hosting provider to the repository. There is **no build step** required.

-   **GitHub Pages:** Enable GitHub Pages in your repository settings and select the main branch as the source.
-   **Vercel/Netlify:** Connect your Git repository. The platform should auto-detect that it's a static site. No build command or output directory needs to be configured.

### A Note on AI Features

The project includes a service file (`services/geminiService.ts`) for interacting with the Google Gemini API. In its current static configuration, this feature will not work because it requires a secure way to provide an API key, which cannot be safely stored in client-side code. To enable AI functionality, you would need to introduce a backend or a build step to securely manage the `API_KEY`.

## 6. Editing and Customization

### Modifying Content

-   **Products:** To add, remove, or edit products, modify the `products` array in `data/products.ts`. The `Product` interface in `types.ts` defines the required data structure for each item.
-   **Events:** To update events or the consultation details, edit the `events` array in `data/events.ts`.
-   **Resources:** To update the curated list of websites and books, edit the `resources` array in `data/resources.ts`.
-   **General Text:** To change text on pages like the Homepage or Contact page, edit the content directly within the JSX of the corresponding file in the `pages/` directory.

### Changing Styles & Appearance

-   **Colors, Spacing, etc.:** Most styling is handled by [Tailwind CSS utility classes](https://tailwindcss.com/docs/utility-first) directly on the HTML elements in the `.tsx` files. For example, `bg-black`, `text-white`, `p-8`.
-   **Fonts & Global Styles:** The primary fonts (`Cormorant Garamond` and `Inter`) and base styles are defined in the `<style>` block within `index.html`. You can change the fonts or add global CSS rules here.
-   **Images:** Replace the placeholder image URLs in `data/products.ts` and the page components with your own image URLs.

### Adding a New Page

1.  **Create the Page Component:** Add a new file in the `pages/` directory (e.g., `BlogPage.tsx`).
2.  **Add the Route:** In `App.tsx`, import your new page and add a new `<Route>` component within the `<Routes>` block.
    ```jsx
    import BlogPage from './pages/BlogPage';
    // ...
    <Route path="/blog" element={<BlogPage />} />
    ```
3.  **Add to Navigation:** In `components/Header.tsx`, add a new `<NavLink>` to the navigation bar so users can find the page.
    ```jsx
    <NavLink to="/blog" className={getNavLinkClass}>
      Blog
    </NavLink>
    ```