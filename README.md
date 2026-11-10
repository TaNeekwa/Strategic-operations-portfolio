# Strategic Operations Portfolio

Project management, energy operations, and process improvement—supported by practical workflow automation.

## Overview

This React and TypeScript website presents Naomi’s professional experience and selected case studies for hiring teams evaluating project coordination, business operations, and process improvement capabilities.

Start here for the current project-management and operations narrative.

## Business capabilities demonstrated

- **Project coordination:** organizing stakeholders, documentation, approvals, and delivery milestones.
- **Energy operations:** translating technical requirements into structured proposal and project workflows.
- **Process improvement:** identifying repetitive work and designing consistent handoffs.
- **Automation:** connecting business requirements with forms, spreadsheets, and document workflows.

## Selected case studies

The site describes proposal automation, pricing workflows, and customer coordination. Case studies summarize professional experience; this repository contains the portfolio website, not the underlying employer applications.

Reported workplace outcomes are distinct from the features implemented in this website or in separate public prototypes. Employer systems, customer information, pricing, and internal templates should not be reused without permission.

## Technology

React 19 · TypeScript · Vite

## Run locally

Requires Node.js and npm.

```bash
npm ci
npm run dev
```

Create a production build with `npm run build`, then inspect it with `npm run preview`.

**No API key is needed for the portfolio’s static content.** Do not put secrets into this frontend. The existing Vite configuration maps Gemini environment variables into the browser build; any value supplied there can become public.

## Repository guide

- `sections/`: homepage content, capabilities, career, and projects.
- `pages/`: expanded experience and tools.
- `components/`: navigation and shared presentation.
- `public/`: static images and resume assets.

## Connect

[LinkedIn](https://www.linkedin.com/in/taneekwadonley/)

## Publication review

Employer screenshots and resume assets require a separate visual and confidentiality review before this repository is promoted as a featured work sample. This README does not certify those assets as cleared for disclosure.
