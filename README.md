# Spagyria - A Modern Alchemical Apothecary Website

This document provides a comprehensive overview of the Spagyria website project, including its architecture, features, and instructions for setup, hosting, and customization.

## 1. Project Overview

Spagyria is a minimalist and elegant website for a modern spagyric apothecary. It serves as a digital storefront and informational hub, offering handcrafted plant-based elixirs. The site is designed to be aesthetically pleasing, responsive, and performant.

### Key Features

-   **Responsive Design:** Optimized for a seamless experience across desktops, tablets, and mobile devices.
-   **Product Showcase:** A clean grid layout for product listings and a detailed view for each product, complete with an image gallery and rich descriptions.
-   **Events & Bookings:** A dedicated page for workshops and webinars, including a form for personal consultation requests.
-   **Resources Library:** A curated page of links to key websites, communities, and texts for further study in alchemy and herbalism.
-   **Static Data-Driven:** Product, event, and resource information is managed in simple TypeScript files, making content updates easy without needing a database.
-   **Modern & Fast:** Built with React and served statically, ensuring fast load times. It uses modern browser features like import maps, eliminating the need for a complex build step for development.
-   **Component-Based Architecture:** A logical structure of pages and components makes the codebase easy to navigate and maintain.

## 2. Tech Stack

The project leverages a modern, lightweight tech stack:

-   **Frontend Library:** [React](https://react.dev/) (v19)
-   **Client-Side Routing:** [React Router](https://reactrouter.com/)
-   **Styling:** [Tailwind CSS](https://tailwindcss.com/) (via CDN) for utility-first styling, supplemented with custom CSS in `index.html` for fonts and base styles.
-   **Module Loading:** Uses ES6 modules with an `importmap` in `index.html`. This allows browsers to import packages directly from a CDN (`esm.sh`) without a local `node_modules` folder or a bundler like Webpack/Vite.
-   **Language:** [TypeScript](https://www.typescriptlang.org/)
-   **AI Integration:** [@google/genai](https://www.npmjs.com/package/@google/genai) for potential AI-driven features.

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

Because this project uses an `importmap`, you do **not** need to run `npm install`. You only need a simple local web server to serve the files.

### Prerequisites

1.  A local web server. We recommend `serve`, which can be run with `npx`.

### Setup Instructions

1.  **Clone the Repository (or download the files):**
    Get all the project files onto your local machine.

2.  **Serve the Files:**
    -   Open your terminal in the project's root directory.
    -   Run the following command:
        ```bash
        npx serve
        ```
    -   Your terminal will output a local URL (e.g., `http://localhost:3000`). Open this URL in your browser to see the website.

## 5. Hosting & Deployment

This is a static website and can be deployed to any modern static hosting provider.

### Recommended Providers

-   Vercel
-   Netlify
-   GitHub Pages
-   Cloudflare Pages

### Deployment Steps

1.  **Connect Your Git Repository:**
    Connect the git repository containing your project to your chosen hosting provider.

2.  **Configure Build Settings:**
    Since there is no build step, you can configure the provider as follows:
    -   **Build Command:** Leave this blank or use `echo "No build step needed"`.
    -   **Output Directory:** `.` (the root directory).

3.  **Deploy:**
    Trigger a deployment. Your site will be live!

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