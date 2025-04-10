# Countries Explorer - Crehana Technical Test

## Technologies Used

- Next.js
- TailwindCSS
- GraphQL
- Apollo Client

## Prerequisites

- Node.js (v14 or higher)
- npm

## Getting Started

1. Clone the repository

```bash
git clone https://github.com/gonzalochale/crehana-frontend-challenge
cd crehana-frontend-challenge
```

2. Install dependencies

```bash
npm install
```

3. Configure environment variables
   Create a `.env` file in the root directory with:

```
GRAPHQL_URL="https://countries.trevorblades.com/graphql"
```

4. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## Features

- Country list view with detailed information
- Filtering capabilities:
  - By country name
  - By currency
  - By continent
- Country detail view

## Current Functionalities

- Display comprehensive information about countries
- Multi-filter system
- Responsive design
- GraphQL integration

## Potential Improvements

1. Pagination

   - Implement pagination for better performance

2. UX

   - Add clear all filters button
