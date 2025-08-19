#!/usr/bin/env node

/**
 * 전체 통합 빌드 스크립트
 * 컴포넌트, 스타일, 스크립트를 모두 빌드
 */

const { buildBundle } = require('./build-bundle');
const { buildScripts } = require('./build-scripts');

async function buildAll() {
  console.log('🏗️ Starting Complete Government Design System Build...\n');
  
  try {
    // 1. 컴포넌트 번들 빌드
    console.log('Step 1: Building component bundle...');
    await buildBundle();
    
    console.log('\n' + '='.repeat(60) + '\n');
    
    // 2. 스크립트 번들 빌드
    console.log('Step 2: Building script bundle...');
    await buildScripts();
    
    console.log('\n' + '='.repeat(60) + '\n');
    console.log('🎉 Complete build finished successfully!');
    console.log('\n📦 Generated files:');
    console.log('   - dist/government-components.tsx (React components + types)');
    console.log('   - dist/government-components.css (Complete styles)');
    console.log('   - dist/government-scripts.js (Interactive scripts)');
    console.log('   - dist/government-scripts.min.js (Minified scripts)');
    console.log('\n✨ Ready for deployment!\n');
    
  } catch (error) {
    console.error('\n❌ Build failed:', error.message);
    process.exit(1);
  }
}

// 명령줄에서 실행 시
if (require.main === module) {
  buildAll();
}

module.exports = { buildAll };