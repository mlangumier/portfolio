# PROJECT MANAGEMENT

This file is a way to organise the developpement process and regroup some useful links and tips that are used throughout the project. Some tools like Notion, Jira or Trello are much more efficient at doing this, but the goal here is not to be precise and have a strict organisation, but to have an overview of the project that is easily accesible while working on it.

## Table of Content

- [Table of Content](#table-of-content)
- [Dependencies](#dependencies)
- [ROADMAP - Current Tasks](#roadmap---current-tasks)
- [Roadmap - Fixes \& Updates](#roadmap---fixes--updates)
- [Future Roadmap \& Ideas](#future-roadmap--ideas)
  - [Pages](#pages)
  - [Potential projects](#potential-projects)
    - [Project Task Manager](#project-task-manager)
    - [Interactive Dashboard](#interactive-dashboard)
- [ROADMAP - Done](#roadmap---done)
  - [Initialisation](#initialisation)
  - [Setup](#setup)
  - [Pages Layout](#pages-layout)
  - [Homepage](#homepage)
  - [Rework project](#rework-project)
    - [Design \& planning](#design--planning)
    - [Layout \& Homepage](#layout--homepage)
    - [Animation \& interaction](#animation--interaction)

## Dependencies

Currently used:

- React 19
- Next.js 15
- Typescript 5
- Tailwind CSS
- Prettier, ESLint, Husky
- Next-intl
- Docker
- Zod
- Nodemailer

To add later / when relevant:

- Axios & Tanstack Query
- Redux
- Database (PostgreSQL?, RESTful API, auth, assets storage)
- Jest (tests unitaires)
- Shadcn

## ROADMAP - Current Tasks

- [x] Internationalization - Check issue with Next-Intl always using 'en' as default locale (check setup, provider & cookies)
- [x] Markdown - Update files & formatting, add table of contents (cf. extension)
- [x] Theme - Dark mode integration
- [x] Update Tailwind CSS to v4
- [ ] Architecture - Use `FSD` ([Feature-Slided Design](https://feature-sliced.design/docs/guides/tech/with-nextjs#app-router)) for better clarity & scaling
  - [ ] (Optional) Add eslint-plugin-boundaries to enforce architectural rules ([example here](https://www.youtube.com/watch?v=xyxrB2Aa7KE))
  - [ ] (Optional) Refactor files & components names to work with React snippets extension (-> PascalCase)
- [ ] Internationalization (check if both work together, or pick one):
  - [ ] Reorganize dictionnaires into different files (separate pages & features)
  - [ ] Add i18n-ally extension for VSCode for easier messages setup & preview

## Roadmap - Fixes & Updates

Not linked to any roadmap, to do when relevant or if necessary.

- [ ] Upgrade - Tailwind v4
- [ ] Config - Transfer VSCode local config to the projet's `.vscode` file (extensions & extensions's setup)
- [ ] Component - Change language switcher to a `Select` component (if theme switcher is onClick)
- [ ] Component - Add a scroll-to-top button
- [ ] Routes - Upon adding new pages, reorganise routes (& reorganize `/data` & `/utils`)
- [ ] Internationalization - Add translations for accessibility & common items (links, buttons)
- [ ] Theme - When creating project, check if relevant to use different style files specific to the project's route to override generic style (layout, component, fonts etc.).

## Future Roadmap & Ideas

### Pages

- **About me**: more in-depth and personnal introduction
- **Contact**: contact form on its own page
- **Projects**: overview of projets available on this website (when multiple projects added), with a tag filter (can select techs, frameworks, deps).

### Potential projects

- Project Manager
- Interactive Dashboard
- D&D Character Creator
- Mini-game
- Next.js boilerplate repository

#### Project Task Manager

(This project would replace this file)

Would be similar to Notion and Jira, but with basic features (inspired by [Aurora Sharff's demo at Next.js Conf 2024](https://www.youtube.com/watch?v=CvAySC5ex9c)).

**Objective**: have a better task management interface for this project, allow other people to suggest changes. Later, perhaps allow for other people to create & manage their own projects and tasks.

**Skills & tools**: form validation, CRUD/services + database, authentication, user permissions, admin dashboard with notifications, drag-n-drop, data fetching optimization (get a lot of data, perhaps images)

**Features**: visitors can view the project, users can suggest modifications (which will appear on their view after that), admins can edit the project management page, view and compare the suggested changes (similar to versionning tools).

#### Interactive Dashboard

Dashboard showing statistics about dev languages & tech:

**Skills & tools**: forms validation, CRUD/services + database, public API fetch (optional), diagrams display (library), specific UI style (ex: neon?), dark mode

**Features**: Allows the user to answer to a poll, then display results of all users answers, using different types of interactive diagrams (use data from this website only, but can compare to other polls if APIs available)

## ROADMAP - Done

### Initialisation

- [x] Install dependencies and create basic project structure
- [x] Setup Docker for local environment (Vercel doesn't support Docker in production)
- [x] Import style template and setup first layout and page files

### Setup

- [x] Theme: Choose color scheme, fonts (inspired by template, but personnal color)
- [x] Setup ESLint, Prettier & Husky pre-commit script
- [x] Create "work in progress" template
- [x] Deploy on Vercel with Github

### Pages Layout

- [x] Layout responsive
- [x] Header: Navigation + burger menu, title, links
- [x] Footer links and contact
- [x] Internationalization FR/EN

### Homepage

- [x] Create card component
- [x] Design & fill in introduction content
- [x] Fix mobile navigation scroll down issue
- [x] Finish SEO setup & performance tests

### Rework project

Here, we have a very basic version website, not well thought and hastily done. We now need to work on a proper design and think about the content in advance.

#### Design & planning

- [x] Update `TASKS.md` file
- [x] Wireframe and design with Figma
- [x] Add credits to designs that helped me create this portfolio (top of this file)
- [x] Define texts content
- [x] Change fonts to Google Fonts
- [x] Rework Tailwind CSS setup to use Tailwind default values and reorganise style
- [x] Update `README.md` file

#### Layout & Homepage

Using our new design, we're going to rework our homepage, making it more enjoyable to see, with its reworked style, organised sections, and a few simple animations.

- [x] Update Layout

  - [x] Update typography & setup new classes & names
  - [x] Update theme & layout's style
  - [x] Setup full translations for header & footer
  - [x] Footer: replace with categories & responsive grid layout, adapt links style
  - [x] Header: modify title, manage the language icon & update the mobile navigation menu
  - [x] Finalize colors theme & setup styles for links (navigation & external)

- [x] Dependencies

  - [x] Check Node version with Vercel deployment's warning message (upgrade to Node 22.x ?)
  - [x] Update dependencies (+ check deprecated)
  - [x] UX - Fix mobile navigation overflow-hidden when increasing browser page width or switching from portrait to landscape.
  - [x] Clean up code to prepare for next steps (comment sections and remove unused code)

- [x] Hero section: LCP -> image priority, must load fast.

  - [x] Setup translations (basic; texts will be updated later)
  - [x] Setup block
  - [x] Section full screen height
  - [x] Button: links to LinkedIn or #contact-section ? Setup generic button style & variants

- [x] Contact section:

  - [x] Setup translations (basic; texts will be updated later)
  - [x] Use the SectionIntroBlock to create a basic title/description/btn. (We'll create a contact-form later)
  - [x] Buttons: LinkedIn, Github, mailto.

- [x] Deployement (v0.6)

  - [x] Optimize FCP/LCP
  - [x] Add tailwind-merge and the function to work with clsx
  - [x] Check code, fix bugs, clean up code
  - [x] Deploy & test

- [x] Skills section:

  - [x] Setup translations
  - [x] Prepare items content in a data object (separate file if can get translation there, or directly in component)
  - [x] Use icon library for cards
  - [x] Develop generic Card component with simple animation on hover (temporary animation)

- [x] Experience section:

  - [x] Setup translations
  - [x] Prepare items content as data object
  - [x] Setup basic vertical (grid?) layout, check vertical line
  - [x] Use Card component for experiences

- [x] Deploy full basic homepage

#### Animation & interaction

Now that our page is looking much better, we're going to add some animations and interaction, to better improve the user experience, and display more interesting skills.

- [x] Skills section:

  - [x] Card animations: Slide-in from bottom with fade-in while appearing.
  - [x] Delay the animation on desktop so the cards don't appear all at once.
  - [x] Make sure the animation only happens once: the cards stay after appearing.

- [x] Experience section:

  - [x] Card animations: slide-in from side with fade-in while appearing.
  - [x] Timeline: make the line & circles change color or appear with scroll.

- [x] Contact section:

  - [x] Choose what tools to use for sending email -> Nodemailer
  - [x] Update the description text
  - [x] Setup form translations
  - [x] Setup the contact form:
    - [x] Create the input & text-area components
    - [x] Add pending state animation (+disable fields) on submit
    - [x] Display confirmation/error message (toast? message to form?)
  - [x] Setup form validation with Zod
  - [x] Setup email sender
  - [x] Send confirmation email when message is received?
