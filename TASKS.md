# PROJECT ORGANISATION

This file is a way to organise the developpement process and regroup some useful links and tips that are used throughout the project. Some tools like Notion, Jira or Trello are much more efficient at doing this, but the goal here is not to be precise and have a strict organisation, but to have an overview of the project that is easily accesible while working on it.

## INSPIRATIONS

These are some designs I have taken inspiration from:

- [Maya Nelson](https://www.wix.com/website-template/view/html/2622?originUrl=https%3A%2F%2Fwww.wix.com%2Fwebsite%2Ftemplates%2Fhtml%2Fportfolio-cv&tpClick=view_button&esi=bab18c59-35d9-412d-986c-991e8416c5c8)
- [CodeBucks](https://minimal-nextjs-portfolio-website.vercel.app/)
- [Shirley Bacilio](https://www.figma.com/community/file/1083511139977440847)
- [Ahsan Habib](https://www.figma.com/community/file/1144519064091466465)
- [Andressa Belém](https://www.figma.com/community/file/946944225031473055)
- [Shah](https://www.figma.com/community/file/1116316830579955404/personal-portfolio-template)
- [Brooklyn Gilbert](https://www.figma.com/community/file/1170206889562959306)
<!-- Add design / color videos from Sajid (Youtube) and others -->

## STRUCTURE & DEPENDENCIES

These are the current dependencies and environment setup on this project, and a few that might be implemented later on if they are relevant.

- [x] React 19
- [x] Next.js 15
- [x] Typescript 5
- [x] Tailwind CSS
- [x] Prettier, ESLint, Husky
- [x] Next-intl
- [x] Docker
- [ ] Zod (typescript & forms)
- [ ] Axios & Tanstack Query
- [ ] Redux
- [ ] Database (Supabase? -> PostgreSQL, RESTful API, auth, assets storage)
- [ ] Jest (tests unitaires)

<!-- Add route organisation info when multiple pages in place -->

## ROADMAP - TODO

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

- [ ] Contact section:

  - [ ] Choose what tools to use for sending email -> Nodemailer
  - [ ] Update the description text
  - [ ] Setup form translations
  - [ ] Setup the contact form:
    - [x] Create the input & text-area components
    - [ ] Add pending state animation (+disable fields) on submit
    - [ ] Display confirmation/error message (toast? message to form?)
  - [ ] Setup form validation with Zod
  - [ ] Setup email sender
  - [ ] (?) Setup Google Re-Captcha
  - [ ] (?) Send confirmation email when message is received?

## ROADMAP - DONE

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

## FIXES & UPDATES

Not linked to any roadmap, to do when relevant or if necessary.

- [ ] Markdown - Update files & formatting, add table of contents (cf. extension)
- [ ] Theme - Setup dark mode integration (+ colored themes?)
- [ ] Component - Change language switcher to a `Select` component (if theme switcher is onClick)
- [ ] Component - Add a scroll-to-top button
- [ ] Architecture - Use `FSD` ([Feature-Slided Design](https://feature-sliced.design/docs/guides/tech/with-nextjs#app-router)) for better clarity & scaling
- [ ] Routes - Upon adding new pages, reorganise routes (& reorganize `/data` & `/utils`)
- [ ] Internationalization - Separate dictionaries in multiple files when starting projects
- [ ] Internationalization - Add translations for accessibility & common items (links, buttons)
- [ ] Theme - When creating project, check if relevant to use style files (.css + tailwind.config.ts) specific to the project's route to override generic style (layout, component, fonts etc.).

## FUTURE ROADMAP & IDEAS

### Pages

- **About me**: more in-depath and personnal introduction
- **Contact**: contact form on its own page
- **Projects**: overview of projets available on this website (when multiple projects added), with a tag filter (can select techs, frameworks, deps).

### Potential projects

- Project Manager
- Interactive Dashboard
- D&D Character Creator
- Mini-game

#### 1. Project Task Manager

(This project would replace this file)

Would be similar to Notion and Jira, but with basic features (inspired by [Aurora Sharff's demo at Next.js Conf 2024](https://www.youtube.com/watch?v=CvAySC5ex9c)).

**Objective**: have a better task management interface for this project, allow other people to suggest changes. Later, perhaps allow for other people to create & manage their own projects and tasks.

**Skills & tools**: form validation, CRUD/services + database, authentication, user permissions, admin dashboard with notifications, drag-n-drop, data fetching optimization (get a lot of data, perhaps images)

**Features**: visitors can view the project, users can suggest modifications (which will appear on their view after that), admins can edit the project management page, view and compare the suggested changes (similar to versionning tools).

#### 2. Interactive Dashboard

Dashboard showing statistics about dev languages & tech:

**Skills & tools**: forms validation, CRUD/services + database, public API fetch (optional), diagrams display (library), specific UI style (ex: neon?), dark mode

**Features**: Allows the user to answer to a poll, then display results of all users answers, using different types of interactive diagrams (use data from this website only, but can compare to other polls if APIs available)
