# Test Setup Instructions

This document provides instructions for setting up and running tests for the Hero component and future components in the project.

## Prerequisites

Before running tests, you need to install the required testing dependencies.

### Installing Dependencies

Run one of the following commands based on your package manager:

```bash
# Using npm
npm install --save-dev jest @testing-library/react @testing-library/jest-dom @testing-library/user-event jest-environment-jsdom @types/jest

# Using pnpm (recommended for this project)
pnpm add --save-dev jest @testing-library/react @testing-library/jest-dom @testing-library/user-event jest-environment-jsdom @types/jest

# Using yarn
yarn add --dev jest @testing-library/react @testing-library/jest-dom @testing-library/user-event jest-environment-jsdom @types/jest
```

### PowerShell Execution Policy

If you encounter execution policy errors on Windows, you may need to enable script execution:

```powershell
# Run PowerShell as Administrator and execute:
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

## Test Files Created

### 1. Hero Component Tests
- **Location**: `components/landing/hero.test.tsx`
- **Coverage**: Tests for the Hero component functionality, accessibility, and content

### 2. Jest Configuration
- **Location**: `jest.config.js`
- **Purpose**: Configures Jest to work with Next.js and React

### 3. Jest Setup File
- **Location**: `jest.setup.js`
- **Purpose**: Global test setup, mocking framer-motion and Next.js components

## Test Scenarios Covered

The Hero component tests cover the following scenarios:

### Happy Path Tests
1. **renders without crashing** - Ensures the component mounts successfully
2. **displays correct heading text** - Verifies the main heading content
3. **renders both action buttons** - Checks for Get Started and Create Account buttons
4. **contains dashboard and signup links** - Validates navigation links are present
5. **displays hero image properly** - Ensures the dashboard preview image loads
6. **contains animated dots section** - Verifies the decorative animation elements

### Input Verification Tests
7. **has correct accessibility attributes** - Checks aria-labels and screen reader content
8. **contains all required sections** - Validates complete component structure and styling

## Running Tests

After installing dependencies, use these commands:

```bash
# Run all tests once
npm test

# Run tests in watch mode (re-runs on file changes)
npm run test:watch

# Run tests with coverage report
npm run test:coverage
```

## Test Structure

The tests use the following libraries:
- **Jest**: Test runner and assertion library
- **React Testing Library**: For rendering and querying React components
- **Jest DOM**: Additional matchers for DOM testing

### Mocking Strategy

The tests mock the following external dependencies:
- `framer-motion`: Replaces motion components with regular HTML elements
- `next/link`: Replaces Link component with standard anchor tags
- `next/image`: Replaces Next.js Image with regular img tags

## File Structure

```
project-root/
├── components/
│   └── landing/
│       ├── hero.tsx           # Component under test
│       └── hero.test.tsx      # Test file
├── jest.config.js             # Jest configuration
├── jest.setup.js             # Global test setup
├── types/
│   └── jest.d.ts             # TypeScript definitions for Jest
└── TEST_SETUP.md             # This documentation
```

## Troubleshooting

### Common Issues

1. **Module not found errors**: Ensure all dependencies are installed
2. **TypeScript errors**: Check that `@types/jest` is installed
3. **Component import errors**: Verify the component path is correct
4. **Mock not working**: Ensure mocks are defined before the component import

### Development Workflow

1. Write components in `components/` directory
2. Create test files with `.test.tsx` extension alongside components
3. Run tests frequently during development
4. Use watch mode for continuous feedback
5. Check coverage to ensure thorough testing

## Next Steps

After setting up the testing environment, you can:
1. Run the existing Hero component tests
2. Add tests for other components following the same pattern
3. Extend test coverage with additional scenarios
4. Set up CI/CD pipelines to run tests automatically

## Support

If you encounter any issues with the test setup, refer to the official documentation:
- [Jest Documentation](https://jestjs.io/docs/getting-started)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [Next.js Testing](https://nextjs.org/docs/testing)