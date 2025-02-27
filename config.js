// config.js
// 環境変数またはデフォルト値を使用
function getConfig() {
  // Node.js環境の場合
  if (typeof process !== 'undefined' && process.env) {
    return {
      apiUrl: process.env.IMMUTABLE_X_API_URL || 'https://api.sandbox.immutable.com/v1',
      publishableKey: process.env.IMMUTABLE_X_PUBLISHABLE_KEY || 'YOUR_PUBLISHABLE_KEY'
    };
  }
  
  // ブラウザ環境の場合
  return {
    apiUrl: window.imxConfig?.apiUrl || 'https://api.sandbox.immutable.com/v1',
    publishableKey: window.imxConfig?.publishableKey || 'YOUR_PUBLISHABLE_KEY'
  };
}

const config = getConfig();

// Node.js かブラウザかで適切にエクスポート
if (typeof module !== 'undefined' && module.exports) {
  module.exports = config;
}
