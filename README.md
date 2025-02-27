# Immutable X Hands-on

Simple example of connecting to Immutable X API and MetaMask wallet.

## Live Demo

Check out the live demo on GitHub Pages: [https://timeless-residents.github.io/handson-immutable-x/](https://timeless-residents.github.io/handson-immutable-x/)

## Setup

1. Clone the repository:
```bash
git clone https://github.com/timeless-residents/handson-immutable-x.git
cd handson-immutable-x
```

2. Install dependencies:
```bash
yarn install
```

3. Set up environment variables (required):
```bash
cp .env.example .env
# Edit .env with your own Immutable X Publishable Key
```

**Note:** You'll need to obtain your own Publishable Key from the [Immutable Developer Hub](https://hub.immutable.com/) before the application will work properly.

## Development

Start a local development server:
```bash
yarn dev
```

Open http://localhost:3000 in your browser.

## Node.js API Example

Run the Node.js example to query the Immutable X API:

```bash
yarn start
```

This will display collections from Immutable X in a read-only mode.

## Building for Production

To build for production deployment:

```bash
yarn build
```

This will create a `dist` folder with all necessary files for deployment.

## GitHub Pages Deployment

This repository is set up with GitHub Actions to automatically deploy to GitHub Pages.

1. Fork or clone this repository
2. Set up your GitHub repository secrets (optional):
   - `IMMUTABLE_X_API_URL`: Your Immutable X API URL
   - `IMMUTABLE_X_PUBLISHABLE_KEY`: Your Immutable X Publishable Key
3. Push to the main branch to trigger deployment

## Implementation Details

This example uses:

1. Direct REST API calls to Immutable X (no SDK dependency)
2. MetaMask for wallet connection in browser
3. Configuration via environment variables for API keys
4. GitHub Actions for automated deployment

## Important Notes

- MetaMask or another Web3 wallet is required for wallet connection in browser
- The Sandbox environment (testnet) is used by default
- For production, change the API URL to mainnet: `https://api.x.immutable.com/v1`
- This approach avoids SDK loading issues in browsers