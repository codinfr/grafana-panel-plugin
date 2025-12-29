# Grafana panel plugin template

## What are Grafana panel plugins?

Panel plugins allow you to add new types of visualizations to your dashboard, such as maps, clocks, pie charts, lists, and more.

Use panel plugins when you want to do things like visualize data returned by data source queries, navigate between dashboards, or control external systems (such as smart home devices).

## Overview
This project is a **beginner-level Grafana panel plugin** developed as part of guided learning
and coursework. The goal was to understand how **dashboard visualizations**, **frontend plugin
architecture**, and **observability tools** work in real-world systems.

Grafana is widely used in **cloud and infrastructure environments** for monitoring and
visualizing system metrics, which made this project especially valuable for learning purposes.

## Getting started

### Frontend

1. Install dependencies

   ```bash
   npm install
   ```

2. Build plugin in development mode and run in watch mode

   ```bash
   npm run dev
   ```

3. Build plugin in production mode

   ```bash
   npm run build
   ```

4. Run the tests (using Jest)

   ```bash
   # Runs the tests and watches for changes, requires git init first
   npm run test

   # Exits after running all the tests
   npm run test:ci
   ```

5. Spin up a Grafana instance and run the plugin inside it (using Docker)

   ```bash
   npm run server
   ```

6. Run the E2E tests (using Playwright)

   ```bash
   # Spins up a Grafana instance first that we tests against
   npm run server

   # If you wish to start a certain Grafana version. If not specified will use latest by default
   GRAFANA_VERSION=11.3.0 npm run server

   # Starts the tests
   npm run e2e
   ```

7. Run the linter

   ```bash
   npm run lint

   # or

   npm run lint:fix
   ```

   ## Technologies Used
- Grafana
- TypeScript
- React
- HTML / CSS
- Node.js
- Docker (for local Grafana environment)

## What I Worked On
- Explored the **Grafana panel plugin architecture**
- Developed and modified a **custom panel plugin** using React and TypeScript
- Ran the plugin inside a **Docker-based Grafana environment**
- Learned how frontend plugins interact with dashboards and data sources
- Built and tested the plugin using development and build workflows

## Learning Focus
- Understanding **observability and monitoring concepts**
- Working with **TypeScript and React** in a real-world plugin structure
- Gaining exposure to **cloud-related tooling** commonly used in infrastructure monitoring
- Learning how dashboards visualize and present system data

## Notes
This is a **learning-focused project** built with guidance.
The primary objective was to gain hands-on exposure to Grafana, plugin development,
and cloud-relevant monitoring tools rather than to create a production-ready plugin.

