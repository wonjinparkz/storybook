#!/usr/bin/env node

/**
 * 자동 통합 번들 빌드 스크립트
 * 모든 Government 컴포넌트를 자동으로 스캔하고 통합 파일 생성
 */

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// 설정
const CONFIG = {
  srcDir: 'src/government',
  distDir: 'dist',
  outputTs: 'government-components.tsx',
  outputCss: 'government-components.css',
  excludeFiles: [
    '*.stories.tsx',
    '*.test.tsx', 
    '*.spec.tsx',
    'index.ts',
    'types.ts',
    'DesignTokens.tsx',
    'Button.tsx',
    'components/*',
    'styles/*',
    'scripts/*',
    'utils/*'
  ]
};

console.log('🚀 Starting Government Components Bundle Build...\n');

// 1. 컴포넌트 파일 스캔
async function scanComponents() {
  console.log('📁 Scanning component files...');
  
  const pattern = path.join(CONFIG.srcDir, '*.tsx');
  
  return new Promise((resolve, reject) => {
    glob(pattern, (err, files) => {
      if (err) {
        reject(err);
        return;
      }
      
      // 제외할 파일 필터링
      const componentFiles = files.filter(file => {
        const basename = path.basename(file);
        return !CONFIG.excludeFiles.some(pattern => {
          if (pattern.includes('*')) {
            const regex = new RegExp(pattern.replace('*', '.*'));
            return regex.test(basename);
          }
          return basename === pattern;
        });
      });
      
      console.log(`✅ Found ${componentFiles.length} components:`);
      componentFiles.forEach(file => {
        console.log(`   - ${path.basename(file, '.tsx')}`);
      });
      
      resolve(componentFiles);
    });
  });
}

// 2. 타입 정의 추출
async function extractTypes() {
  console.log('\n📝 Extracting type definitions...');
  
  const typesFile = path.join(CONFIG.srcDir, 'types.ts');
  if (!fs.existsSync(typesFile)) {
    throw new Error('types.ts not found!');
  }
  
  const typesContent = fs.readFileSync(typesFile, 'utf8');
  console.log('✅ Types extracted from types.ts');
  
  return typesContent;
}

// 3. 컴포넌트 코드 추출 및 변환
async function extractComponentCode(files) {
  console.log('\n🔄 Processing component code...');
  
  const components = [];
  const imports = new Set();
  
  for (const file of files) {
    const content = fs.readFileSync(file, 'utf8');
    const componentName = path.basename(file, '.tsx');
    
    console.log(`   Processing ${componentName}...`);
    
    // import 문 추출
    const importMatches = content.match(/^import.*$/gm) || [];
    importMatches.forEach(imp => {
      // React와 types만 유지, 상대 경로 제거
      if (imp.includes('react') || imp.includes('./types')) {
        if (imp.includes('./types')) {
          // types import는 제거 (이미 위에서 포함됨)
          return;
        }
        imports.add(imp);
      }
    });
    
    // 컴포넌트 본문 추출 (export 부분)
    let componentCode = content;
    
    // import 문 제거
    componentCode = componentCode.replace(/^import.*$/gm, '');
    
    // withGovernmentAssets HOC 제거
    componentCode = componentCode.replace(/withGovernmentAssets\((.*?)\)/, '$1');
    
    // export default 제거
    componentCode = componentCode.replace(/export default.*$/gm, '');
    
    // 주석과 빈 줄 정리
    componentCode = componentCode.replace(/^\s*\/\/.*$/gm, '');
    componentCode = componentCode.replace(/^\s*\/\*[\s\S]*?\*\/\s*$/gm, '');
    componentCode = componentCode.replace(/^\s*\n/gm, '');
    
    // 컴포넌트 함수를 export const로 변환
    const functionMatch = componentCode.match(/const\s+(\w+)\s*=[\s\S]*?^};/m);
    if (functionMatch) {
      componentCode = componentCode.replace(
        functionMatch[0], 
        `// ${componentName} Component\nexport ${functionMatch[0]}`
      );
    }
    
    components.push({
      name: componentName,
      code: componentCode.trim()
    });
  }
  
  console.log('✅ Component processing complete');
  
  return { components, imports: Array.from(imports) };
}

// 4. 스타일 파일 통합
async function combineStyles() {
  console.log('\n🎨 Combining CSS styles...');
  
  const stylesDir = path.join(CONFIG.srcDir, 'styles');
  
  return new Promise((resolve, reject) => {
    glob(path.join(stylesDir, '*.css'), (err, cssFiles) => {
      if (err) {
        reject(err);
        return;
      }
      
      let combinedCSS = `/* Korean Government Design System - Complete CSS Bundle */
/* 모든 Government 컴포넌트 스타일을 하나의 파일로 통합 */
/* Auto-generated on ${new Date().toISOString()} */

`;
      
      for (const cssFile of cssFiles) {
        const basename = path.basename(cssFile);
        console.log(`   Adding ${basename}...`);
        
        const cssContent = fs.readFileSync(cssFile, 'utf8');
        combinedCSS += `\n/* ===== ${basename.toUpperCase()} ===== */\n`;
        combinedCSS += cssContent + '\n';
      }
      
      console.log('✅ CSS combination complete');
      resolve(combinedCSS);
    });
  });
}

// 5. TypeScript 파일 생성
async function generateTypeScriptBundle(types, components, imports) {
  console.log('\n📦 Generating TypeScript bundle...');
  
  const header = `// Korean Government Design System - Complete Components Package
// 모든 Government 컴포넌트를 하나의 파일로 통합
// Auto-generated on ${new Date().toISOString()}

`;

  // React imports 정리
  const reactImports = `import { useState, useEffect, useRef } from 'react';

// Swiper 타입 정의
declare global {
  interface Window {
    Swiper: any;
  }
}

`;

  // Assets hook
  const assetsHook = `// ===== HOOKS =====
const useGovernmentAssets = () => {
  useEffect(() => {
    // Government assets loading logic would go here
    // This is a placeholder for the actual asset loading
  }, []);
};

`;

  // 컴포넌트 코드
  const componentsCode = components.map(comp => comp.code).join('\n\n');
  
  // Export statement
  const exportNames = components.map(comp => comp.name).join(',\n  ');
  const exportStatement = `\n// Export all components
export default {
  ${exportNames}
};`;

  const fullContent = header + reactImports + types + '\n' + assetsHook + '// ===== COMPONENTS =====\n\n' + componentsCode + exportStatement;
  
  return fullContent;
}

// 6. 파일 저장
async function saveFiles(tsContent, cssContent) {
  console.log('\n💾 Saving bundle files...');
  
  // dist 디렉토리 생성
  if (!fs.existsSync(CONFIG.distDir)) {
    fs.mkdirSync(CONFIG.distDir, { recursive: true });
  }
  
  // TypeScript 파일 저장
  const tsPath = path.join(CONFIG.distDir, CONFIG.outputTs);
  fs.writeFileSync(tsPath, tsContent, 'utf8');
  console.log(`✅ Saved: ${tsPath}`);
  
  // CSS 파일 저장
  const cssPath = path.join(CONFIG.distDir, CONFIG.outputCss);
  fs.writeFileSync(cssPath, cssContent, 'utf8');
  console.log(`✅ Saved: ${cssPath}`);
  
  // 파일 크기 표시
  const tsSize = (fs.statSync(tsPath).size / 1024).toFixed(1);
  const cssSize = (fs.statSync(cssPath).size / 1024).toFixed(1);
  
  console.log(`\n📊 Bundle sizes:`);
  console.log(`   TypeScript: ${tsSize} KB`);
  console.log(`   CSS: ${cssSize} KB`);
  console.log(`   Total: ${(parseFloat(tsSize) + parseFloat(cssSize)).toFixed(1)} KB`);
}

// 7. 문서 업데이트
async function updateDocumentation(components) {
  console.log('\n📚 Updating documentation...');
  
  const componentList = components.map(comp => `- \`${comp.name}\``).join('\n');
  
  // AI_QUICK_ACCESS.md의 컴포넌트 목록 업데이트
  const quickAccessPath = 'AI_QUICK_ACCESS.md';
  if (fs.existsSync(quickAccessPath)) {
    let content = fs.readFileSync(quickAccessPath, 'utf8');
    
    // 컴포넌트 목록 패턴 찾기
    const pattern = /\*\*포함된 컴포넌트\*\*:\s*\n(- `.*`\n?)*/;
    const replacement = `**포함된 컴포넌트**: \n${componentList}\n`;
    
    content = content.replace(pattern, replacement);
    fs.writeFileSync(quickAccessPath, content, 'utf8');
    console.log('✅ Updated AI_QUICK_ACCESS.md');
  }
}

// 메인 빌드 함수
async function buildBundle() {
  try {
    const startTime = Date.now();
    
    // 1. 컴포넌트 스캔
    const componentFiles = await scanComponents();
    
    // 2. 타입 추출
    const types = await extractTypes();
    
    // 3. 컴포넌트 코드 추출
    const { components, imports } = await extractComponentCode(componentFiles);
    
    // 4. 스타일 결합
    const cssContent = await combineStyles();
    
    // 5. TypeScript 번들 생성
    const tsContent = await generateTypeScriptBundle(types, components, imports);
    
    // 6. 파일 저장
    await saveFiles(tsContent, cssContent);
    
    // 7. 문서 업데이트
    await updateDocumentation(components);
    
    const endTime = Date.now();
    console.log(`\n🎉 Bundle build completed in ${endTime - startTime}ms`);
    console.log(`📍 Generated ${components.length} components in 2 files\n`);
    
  } catch (error) {
    console.error('\n❌ Build failed:', error.message);
    process.exit(1);
  }
}

// 명령줄에서 실행 시
if (require.main === module) {
  buildBundle();
}

module.exports = { buildBundle };