#!/usr/bin/env node

/**
 * 정부 디자인 시스템 스크립트 번들 빌드
 * src/government/scripts 폴더의 모든 스크립트를 통합
 */

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// 설정
const CONFIG = {
  scriptsDir: 'src/government/scripts',
  distDir: 'dist',
  outputJs: 'government-scripts.js',
  outputMinJs: 'government-scripts.min.js'
};

console.log('🔧 Starting Government Scripts Bundle Build...\n');

// 1. 스크립트 파일 스캔
async function scanScripts() {
  console.log('📁 Scanning script files...');
  
  const pattern = path.join(CONFIG.scriptsDir, '*.{js,ts}');
  
  return new Promise((resolve, reject) => {
    glob(pattern, (err, files) => {
      if (err) {
        reject(err);
        return;
      }
      
      console.log(`✅ Found ${files.length} script files:`);
      files.forEach(file => {
        console.log(`   - ${path.basename(file)}`);
      });
      
      resolve(files);
    });
  });
}

// 2. 스크립트 통합
async function combineScripts(files) {
  console.log('\n🔗 Combining scripts...');
  
  const header = `/**
 * Korean Government Design System - Scripts Bundle
 * Auto-generated on ${new Date().toISOString()}
 * 
 * 사용법:
 * <script src="government-scripts.js"></script>
 * <script>
 *   // 정부 디자인 시스템 스크립트 자동 초기화
 *   GovernmentScripts.init();
 * </script>
 */

(function(window) {
  'use strict';
  
  const GovernmentScripts = {
    version: '1.0.0',
    initialized: false,
    
    // 자동 초기화
    init: function() {
      if (this.initialized) return;
      
      console.log('🏛️ Government Design System Scripts initialized');
      
      // 각 스크립트 모듈 초기화
      this.initializeCarousels();
      this.initializeForms();
      this.initializeInteractions();
      
      this.initialized = true;
    },
    
    // 스크립트별 초기화 함수들이 여기에 추가됨
`;

  const footer = `
  };
  
  // 전역 객체에 등록
  window.GovernmentScripts = GovernmentScripts;
  
  // DOM 로드 완료 시 자동 초기화
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      GovernmentScripts.init();
    });
  } else {
    GovernmentScripts.init();
  }
  
})(window);`;

  let combinedScript = header;
  
  for (const file of files) {
    const basename = path.basename(file, path.extname(file));
    console.log(`   Processing ${basename}...`);
    
    let content = fs.readFileSync(file, 'utf8');
    
    // TypeScript인 경우 간단한 변환 (타입 제거)
    if (file.endsWith('.ts')) {
      content = content
        .replace(/:\s*\w+(\[\])?/g, '') // 타입 어노테이션 제거
        .replace(/interface\s+\w+\s*{[^}]*}/g, '') // 인터페이스 제거
        .replace(/type\s+\w+\s*=\s*[^;]+;/g, ''); // 타입 별칭 제거
    }
    
    // 모듈 래핑
    combinedScript += `\n    // ===== ${basename.toUpperCase()} =====\n`;
    combinedScript += `    ${basename}: (function() {\n`;
    combinedScript += content.split('\n').map(line => '      ' + line).join('\n');
    combinedScript += `\n    })(),\n`;
  }
  
  combinedScript += footer;
  
  console.log('✅ Script combination complete');
  return combinedScript;
}

// 3. 스크립트 최소화 (간단한 버전)
function minifyScript(script) {
  console.log('\n📦 Minifying script...');
  
  return script
    .replace(/\/\*[\s\S]*?\*\//g, '') // 블록 주석 제거
    .replace(/\/\/.*$/gm, '') // 라인 주석 제거
    .replace(/\s+/g, ' ') // 여러 공백을 하나로
    .replace(/;\s+/g, ';') // 세미콜론 후 공백 제거
    .replace(/\{\s+/g, '{') // 중괄호 후 공백 제거
    .replace(/\s+\}/g, '}') // 중괄호 전 공백 제거
    .trim();
}

// 4. 파일 저장
async function saveScripts(script, minScript) {
  console.log('\n💾 Saving script files...');
  
  // dist 디렉토리 생성
  if (!fs.existsSync(CONFIG.distDir)) {
    fs.mkdirSync(CONFIG.distDir, { recursive: true });
  }
  
  // 일반 스크립트 저장
  const jsPath = path.join(CONFIG.distDir, CONFIG.outputJs);
  fs.writeFileSync(jsPath, script, 'utf8');
  console.log(`✅ Saved: ${jsPath}`);
  
  // 최소화 스크립트 저장
  const minJsPath = path.join(CONFIG.distDir, CONFIG.outputMinJs);
  fs.writeFileSync(minJsPath, minScript, 'utf8');
  console.log(`✅ Saved: ${minJsPath}`);
  
  // 파일 크기 표시
  const jsSize = (fs.statSync(jsPath).size / 1024).toFixed(1);
  const minJsSize = (fs.statSync(minJsPath).size / 1024).toFixed(1);
  
  console.log(`\n📊 Script sizes:`);
  console.log(`   Development: ${jsSize} KB`);
  console.log(`   Production: ${minJsSize} KB`);
  console.log(`   Compression: ${((1 - minJsSize/jsSize) * 100).toFixed(1)}%`);
}

// 메인 빌드 함수
async function buildScripts() {
  try {
    const startTime = Date.now();
    
    // 1. 스크립트 스캔
    const scriptFiles = await scanScripts();
    
    if (scriptFiles.length === 0) {
      console.log('⚠️ No script files found, creating empty bundle...');
      
      const emptyScript = `/**
 * Korean Government Design System - Scripts Bundle (Empty)
 * No scripts found in ${CONFIG.scriptsDir}
 */
(function(window) {
  window.GovernmentScripts = {
    version: '1.0.0',
    init: function() {
      console.log('🏛️ Government Design System Scripts (empty bundle)');
    }
  };
})(window);`;
      
      await saveScripts(emptyScript, emptyScript);
      return;
    }
    
    // 2. 스크립트 통합
    const combinedScript = await combineScripts(scriptFiles);
    
    // 3. 스크립트 최소화
    const minifiedScript = minifyScript(combinedScript);
    
    // 4. 파일 저장
    await saveScripts(combinedScript, minifiedScript);
    
    const endTime = Date.now();
    console.log(`\n🎉 Scripts build completed in ${endTime - startTime}ms`);
    console.log(`📍 Combined ${scriptFiles.length} scripts into 2 files\n`);
    
  } catch (error) {
    console.error('\n❌ Scripts build failed:', error.message);
    process.exit(1);
  }
}

// 명령줄에서 실행 시
if (require.main === module) {
  buildScripts();
}

module.exports = { buildScripts };