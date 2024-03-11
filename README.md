# ElasticON Project

Welcome to the ElasticON project repository. This project is dedicated to building and maintaining the website for Elastic's various global conferences, hosted under a separate codebase from the main Elastic website.

This project uses Next.js and it's part of the Elastic website, proxied through the path `elastic.co/events/elasticon`. For local development, you need to access it at `http://localhost:3000/events/elasticon`.

## Prerequisites

- Node.js (latest version)
- npm (latest version)
- Vercel Account using your primary Github email (request access via Help-at-Elastic)
- Vercel CLI (optional)
- Github CLI (optional)

## Setup & Installation

Follow these steps to set up your development environment:
1. Clone the repository: `git clone <repository-url>`
2. Navigate to the project directory: `cd elasticon`
3. Install project dependencies with npm: `npm i`
4. Copy the staging/preview environment variables from the Vercel console and save them in a `.env.local` file at the root directory of the project:
```
CONTENTSTACK_API_KEY=<api_key>
CONTENTSTACK_DELIVERY_TOKEN=<delivery_token>
CONTENTSTACK_ENVIRONMENT=staging
SITE_URL=http://localhost:3000
```
1. Start the local development server: `npm run dev`
2. At this point, the website should be accessible at `http://localhost:3000/events/elasticon`

## Codebase Structure

The majority of relevant code resides within the `/src` directory. Key elements include:
- `src/pages/[location]/index.js`: This is the template used for individual event pages.
- `src/pages/sao-paulo-pt`: This is a one-off page for the Sao Paulo event and is a Portuguese translation of the individual Sao Paulo event. It was the only page that needed translation, so it was done manually.

## Styling

Interface styling is performed using TailwindCSS. ESLint is used for code style/checks. Optionally, developers can use a Prettier plugin in their code editor for additional assistance.

## Making Changes

To make code changes, branch off the most recent `staging` branch commit, make your changes, and then open a PR to merge your changes back into `staging`.

Ideally, each PR should have at least one reviewer/approver—though this is not strictly enforced. Once the PR is approved, it can be merged into `staging`.

To updated production, opening a PR from `staging` to `main` is acceptable, but it might be easier to checkout to `main` and merge `staging` into it. Once that is done, a simply push to Github will trigger a Vercel build and deploy the changes to production.

## Project management

Project update requests and communication between developer and events/brand teams will be handled by Denise Gonzalez, who will create additional Github issues as needed.

## Content Management

Contentstack plays a major role in content management for this project. All data is stored in "ElasticON Next", with outdated content in "ElasticON". "ElasticON Next" should be the only stack needed for development and production as "ElasticON" contains oudatted content and is only used to manage the display of ElasticON-specific content at elastic.co/events.

So, only changes to "ElasticON Next" will reflect across local, staging, and production environments for this website .

## Staging & Production Deployment

Vercel triggers builds whenever changes to a respective Contentstack stack or to the `main` or `staging` branches are detected.

If you face challenges and need access to the Vercel console for debugging or any other reason, please create a Help-at-Elastic ticket and reach out to Casey Zumwalt or John Barrier Wilson.

## Contacts

- Denise Gonzalez: primary contact for project management and communication.
- Brian Potstra: responsible for design.
- Casey Zumwalt and/or John Barrier Wilson: additional help and/or accessing Vercel console.

Happy coding!