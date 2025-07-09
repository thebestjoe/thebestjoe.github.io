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
-   **Modern & Fast:** Built with React and bundled with esbuild for fast load times and a professional development workflow.
-   **Component-Based Architecture:** A logical structure of pages and components makes the codebase easy to navigate and maintain.

## 2. Tech Stack

The project leverages a modern, lightweight tech stack:

-   **Frontend Library:** [React](https://react.dev/) (v19)
-   **Client-Side Routing:** [React Router](https://reactrouter.com/)
-   **Bundler:** [esbuild](https://esbuild.github.io/) for fast and simple TypeScript/JSX transpilation and bundling.
-   **Styling:** [Tailwind CSS](https://tailwindcss.com/) (via CDN) for utility-first styling, supplemented with custom CSS in `index.html` for fonts and base styles.
-   **Package Manager:** [npm](https://www.npmjs.com/) for managing project dependencies.
-   **Language:** [TypeScript](https://www.typescriptlang.org/)
-   **AI Integration:** [@google/genai](https://www.npmjs.com/package/@google/genai) for potential AI-driven features.

## 3. Project Structure

The codebase is organized into a standard structure for a modern web application:

```
/
├── components/         # Reusable React components (Header, Footer, etc.)
├── data/               # Static data files (products, events, resources)
├── dist/               # Build output directory (generated, not committed by default)
├── pages/              # Top-level page components (HomePage, AboutPage, etc.)
├── services/           # Services for external APIs (e.g., Gemini AI)
├── .gitignore          # Tells Git which files to ignore
├── App.tsx             # Main app component with routing logic
├── build.mjs           # The esbuild build script
├── index.html          # The single HTML entry point for the app
├── index.tsx           # React root rendering
├── package.json        # Defines dependencies and scripts
├── README.md           # This documentation file
└── types.ts            # TypeScript type definitions
```

## 4. Getting Started & Local Development

This project requires Node.js and npm. The build process converts all the `.tsx` files into a single JavaScript file that the browser can understand.

### Setup Instructions

1.  **Clone the Repository:**
    Get all the project files onto your local machine.

2.  **Install Dependencies:**
    -   Open your terminal in the project's root directory.
    -   Run the following command. This will download all the necessary packages defined in `package.json`.
        ```bash
        npm install
        ```

3.  **Run the Development Server:**
    -   To build the project and start a local server, run:
        ```bash
        npm run start
        ```
    -   Your terminal will output a local URL (e.g., `http://localhost:3000`). Open this URL in your browser to see the website. The site will be rebuilt automatically if you make code changes.

## 5. Hosting & Deployment

This is a static website and can be deployed to any modern static hosting provider (Vercel, Netlify, GitHub Pages, etc.). The key is that you must run the build process before deploying.

### Deployment to GitHub Pages

1.  **Build the Project:**
    Run the build command to generate the final assets in the `dist/` directory.
    ```bash
    npm run build
    ```

2.  **Commit and Push All Files:**
    Commit all your source code AND the generated `dist` directory to your GitHub repository.
    ```bash
    git add .
    git commit -m "Build website for deployment"
    git push
    ```
    *Note: While committing build artifacts is not always standard practice, it is the simplest method for deploying to GitHub Pages without setting up a complex CI/CD pipeline (GitHub Actions).*

3.  **Configure GitHub Pages:**
    -   In your repository settings on GitHub, go to the "Pages" section.
    -   Set the source to "Deploy from a branch".
    -   Choose your `main` branch and the `/(root)` folder.
    -   Save the changes. Your site should be live at your GitHub Pages URL shortly.

## 6. Editing and Customization

### Modifying Content

-   **Products:** To add, remove, or edit products, modify the `products` array in `data/products.ts`.
-   **Events:** To update events, edit the `events` array in `data/events.ts`.
-   **Resources:** To update the curated list, edit the `resources` array in `data/resources.ts`.
-   **General Text:** To change text on pages, edit the content directly within the JSX of the corresponding file in the `pages/` directory.

After any changes, the project will need to be rebuilt to see them reflected in the browser. If `npm run start` is running, this will happen automatically.

### Changing Styles & Appearance

-   **Colors, Spacing, etc.:** Most styling is handled by [Tailwind CSS utility classes](https://tailwindcss.com/docs/utility-first) in the `.tsx` files.
-   **Fonts & Global Styles:** Fonts and base styles are defined in the `<style>` block within `index.html`.
-   **Images:** Replace the placeholder image URLs in `data/products.ts` and the page components with your own image URLs.
