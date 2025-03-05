# Magandang Balita

Magandang Balita is a simple website you can visit every morning to brighten your day with uplifting news from the Philippines.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Scripts](#scripts)
- [Project Structure](#project-structure)

## Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/your-username/magandang-balita.git
   cd magandang-balita
   ```

2. Install the dependencies:
   ```sh
   npm install
   ```

## Usage

To start the development server, run:

```sh
npm run dev
```

To build the project, run:

```
npm run build
```

To preview the production build, run:

```
npm run preview
```

## Scripts

- dev: Starts the development server using Vite.
- build: Builds the project using TypeScript and Vite.
- lint: Runs ESLint to lint the codebase.
- preview: Previews the production build.
- deploy: Runs the prebuild script and then builds the project.

## Project Structure

```
.
├── LICENSE
├── README.md
├── data
│   └── content.json
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── prebuild.js
├── src
│   ├── MainRouter.css
│   ├── MainRouter.tsx
│   ├── assets
│   ├── components
│   │   ├── ArchiveCard.tsx
│   │   ├── Card.tsx
│   │   ├── CardCollection.tsx
│   │   ├── Footer.tsx
│   │   ├── LatestArticle.tsx
│   │   ├── Navbar.tsx
│   │   └── css
│   │       ├── ArchiveCard.css
│   │       ├── Card.css
│   │       ├── CardCollection.css
│   │       ├── Footer.css
│   │       ├── LatestArticle.css
│   │       └── Navbar.css
│   ├── hooks
│   │   └── useContent.ts
│   ├── interface
│   │   └── CardProps.ts
│   ├── main.tsx
│   ├── pages
│   │   ├── About.tsx
│   │   ├── Archive.tsx
│   │   ├── Article.tsx
│   │   ├── Contact.tsx
│   │   ├── Home.tsx
│   │   ├── Subscribe.tsx
│   │   └── css
│   │       ├── About.css
│   │       ├── Archive.css
│   │       ├── Article.css
│   │       ├── Contact.css
│   │       ├── Home.css
│   │       └── Subscribe.css
│   └── vite-env.d.ts
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```
