// immutable-api.js
// .envファイル読み込み (Node.js環境)
require('dotenv').config();

const fetch = require('node-fetch');
const config = require('./config');

/**
 * Simple script to query Immutable X API directly
 */
async function getImmutableXData() {
  try {
    console.log('Connecting to Immutable X API...');
    console.log('API URL:', config.apiUrl);
    console.log('Publishable Key:', config.publishableKey);
    
    // Fetch collections as an example
    const response = await fetch(`${config.apiUrl}/collections?page_size=5`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'x-immutable-publishable-key': config.publishableKey
      }
    });
    
    if (!response.ok) {
      throw new Error(`API Error: ${response.status} ${response.statusText}`);
    }
    
    const data = await response.json();
    console.log(`Found ${data.result.length} collections:`);
    
    // Display collections
    data.result.forEach((collection, index) => {
      console.log(`${index + 1}. ${collection.name || 'Unnamed Collection'}`);
    });
    
    return data;
  } catch (error) {
    console.error('Error connecting to Immutable X API:', error);
    throw error;
  }
}

// For use with Node.js
module.exports = {
  getImmutableXData
};

// Execute if this file is run directly
if (require.main === module) {
  (async () => {
    try {
      await getImmutableXData();
      console.log('\nNote: For interactive usage with wallet connection, use the HTML file in a browser with MetaMask installed');
    } catch (error) {
      console.error('Error in execution:', error);
    }
  })();
}