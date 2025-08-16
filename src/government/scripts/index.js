// Government Scripts - Combined Export

// UI Scripts
export * from './ui-script.js';
export * from './ui-pattern-script.js';

// Include Scripts (safe versions preferred)
export * from './include-safe.js';

// Prism for syntax highlighting
export * from './prism.js';

// Default export for easy import
import './ui-script.js';
import './ui-pattern-script-safe.js';
import './include-safe.js';

console.log('Government scripts loaded successfully');