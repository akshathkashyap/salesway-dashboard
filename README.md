# Salesway Dashboard

Salesway Dashboard is a Next.js-based dashboard application that provides insights using data fetched from an external API and an SQLite database. It is deployed at [Salesway Dashboard](https://salesway-dashboard-iota.vercel.app/).

## Features

-   Home page (`/`)
-   Dashboard page (`/dashboard`)
-   Fetches data from an external API for some dashboard components
-   Uses an SQLite database (`salesway_db.sqlite`) for other dashboard components

## Installation & Setup

### Prerequisites

-   Node.js (latest LTS version recommended)
-   SQLite
-   Next.js

### Steps

1. Clone the repository:
    ```sh
    git clone <repository-url>
    cd salesway-dashboard
    ```
2. Install dependencies:
    ```sh
    npm install
    ```
3. Set up environment variables: Create a `.env.local` file in the root directory and configure the required API keys and database paths:
    ```sh
    NEXT_PUBLIC_API_USERNAME=<username>
    NEXT_PUBLIC_API_PASSWORD=<password>
    ```
4. Run the development server:
    ```sh
    npm run dev
    ```
    The app will be available at `http://localhost:3000`.

## Deployment

The application is deployed on Vercel at [Salesway Dashboard](https://salesway-dashboard-iota.vercel.app/).

## Issues

-   Currently, only the home (`/`) and dashboard (`/dashboard`) pages are working. Other navigational options may not function as expected.
-   The charts do not work in the deployed version but function correctly when run locally.
-   The external API is not being used properly due to security issues, leading to a mixed content error and authentication problems.
