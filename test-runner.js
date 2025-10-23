// Simple test verification script
// Run this after installing dependencies to verify setup

const fs = require('fs');
const path = require('path');

function checkTestSetup() {
  console.log('🧪 Checking Test Setup...\n');
  
  const requiredFiles = [
    'jest.config.js',
    'jest.setup.js', 
    'components/landing/hero.test.tsx',
    'TEST_SETUP.md'
  ];
  
  const requiredDependencies = [
    'jest',
    '@testing-library/react',
    '@testing-library/jest-dom',
    '@testing-library/user-event',
    'jest-environment-jsdom',
    '@types/jest'
  ];
  
  console.log('✅ Required Files:');
  requiredFiles.forEach(file => {
    const exists = fs.existsSync(path.join(__dirname, file));
    console.log(`  ${exists ? '✅' : '❌'} ${file}`);
  });
  
  console.log('\n📦 Required Dependencies:');
  try {
    const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
    const devDeps = packageJson.devDependencies || {};
    
    requiredDependencies.forEach(dep => {
      const installed = dep in devDeps;
      console.log(`  ${installed ? '✅' : '❌'} ${dep}`);
    });
  } catch (error) {
    console.log('  ❌ Could not read package.json');
  }
  
  console.log('\n🔧 Test Scripts in package.json:');
  try {
    const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
    const scripts = packageJson.scripts || {};
    
    ['test', 'test:watch', 'test:coverage'].forEach(script => {
      const exists = script in scripts;
      console.log(`  ${exists ? '✅' : '❌'} npm run ${script}`);
    });
  } catch (error) {
    console.log('  ❌ Could not read package.json scripts');
  }
  
  console.log('\n📝 Next Steps:');
  console.log('1. Install dependencies: npm install --save-dev jest @testing-library/react @testing-library/jest-dom @testing-library/user-event jest-environment-jsdom @types/jest');
  console.log('2. Run tests: npm test');
  console.log('3. Read TEST_SETUP.md for detailed instructions');
}

checkTestSetup();