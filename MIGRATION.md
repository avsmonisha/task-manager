# Monorepo Migration Guide

## ✅ What Was Done

Your project has been successfully converted to a monorepo structure using **pnpm workspaces** and **Turborepo**.

### Changes Made

#### 1. **Root Configuration Files**
- ✅ `pnpm-workspace.yaml` - Configured workspaces at `apps/*` and `packages/*`
- ✅ `turbo.json` - Set up Turborepo for task caching and parallel execution
- ✅ `tsconfig.json` - Root TypeScript configuration
- ✅ `package.json` - Root package file with monorepo scripts
- ✅ `.npmrc` - pnpm configuration for hoisting
- ✅ `.gitignore` - Updated with monorepo-specific patterns

#### 2. **Apps Directory**
- ✅ `apps/web/` - Your Next.js application (moved from root)
  - All app files, components, lib, hooks, and config files
  - Updated `tsconfig.json` with path mappings
  - Updated `package.json` with internal dependencies
  - Updated all imports from `@/lib/utils` to use `@task-manager/utils`

#### 3. **Packages Directory**

##### `packages/types/`
- ✅ Shared TypeScript type definitions
- Files: `package.json`, `index.ts`
- Example types: `Task`, `User`

##### `packages/utils/`
- ✅ Shared utility functions
- Files: `package.json`, `index.ts`, `tsconfig.json`
- Includes: `cn()` class merging utility
- Exports for building

##### `packages/ui/`
- ✅ Shared React UI components
- Files: `package.json`, `index.ts`
- All 50+ Radix UI components
- Re-exports all UI components for easy importing

#### 4. **Import Updates**
- ✅ All UI components now import `cn` from `@task-manager/utils`
- ✅ `lib/utils.ts` re-exports from the shared package
- ✅ Web app can import shared packages using `workspace:*` protocol

### 📋 File Structure Before vs After

**Before:**
```
project/
├── components/ui/
├── lib/
├── app/
├── hooks/
├── package.json
└── ...
```

**After:**
```
monorepo/
├── apps/web/              (your Next.js app)
├── packages/
│   ├── ui/               (shared UI components)
│   ├── utils/            (shared utilities)
│   └── types/            (shared types)
├── pnpm-workspace.yaml
├── turbo.json
├── tsconfig.json
└── package.json
```

## 🚀 Getting Started

### 1. **Install Dependencies**
```bash
pnpm install
```

### 2. **Start Development**
```bash
# Run all apps/packages
pnpm dev

# Or run specific app
pnpm dev --filter=task-manager-web
```

### 3. **Build**
```bash
# Build everything
pnpm build

# Or build specific package
pnpm build --filter=@task-manager/utils
```

## 📝 How to Use the Packages

### Using UI Components
In any file within the monorepo:
```typescript
import { Button, Card, Dialog } from '@task-manager/ui'
```

### Using Utilities
```typescript
import { cn } from '@task-manager/utils'

const className = cn('px-4', isDark && 'dark')
```

### Using Types
```typescript
import { Task, User } from '@task-manager/types'

const task: Task = {
  id: '1',
  title: 'My Task',
  status: 'todo',
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString()
}
```

## 🔄 Common Commands

### Development
```bash
pnpm dev                          # All packages
pnpm dev --filter=task-manager-web  # Specific app
```

### Building
```bash
pnpm build                        # Build all
pnpm build --filter='./packages/*'  # Only packages
pnpm build --filter='./apps/*'      # Only apps
```

### Linting
```bash
pnpm lint                         # Lint all
pnpm lint --filter=task-manager-web  # Specific app
```

### Cleanup
```bash
pnpm clean   # Remove all node_modules and .turbo
```

## 📦 Adding New Packages

To add a new package (e.g., `@task-manager/api`):

1. Create directory:
```bash
mkdir packages/api
```

2. Create `packages/api/package.json`:
```json
{
  "name": "@task-manager/api",
  "version": "0.1.0",
  "private": true
}
```

3. Add files as needed

4. pnpm workspaces will automatically recognize it

5. Reference in other packages:
```json
{
  "dependencies": {
    "@task-manager/api": "workspace:*"
  }
}
```

## 🔗 How Workspace Protocol Works

When you use `workspace:*` in dependencies:
```json
{
  "dependencies": {
    "@task-manager/utils": "workspace:*"
  }
}
```

This tells pnpm to link to the local package instead of npm registry. Benefits:
- ✅ Instant updates when you change code
- ✅ No need to publish/republish during development
- ✅ Type hints work perfectly with IDEs

## 🎯 Next Steps

1. **Run `pnpm install`** to install all dependencies
2. **Run `pnpm dev`** to start the development server
3. **Review** the README.md for detailed documentation
4. **Update CI/CD** pipelines to use `pnpm` instead of `npm`
5. **Share** this MIGRATION.md with your team

## ⚠️ Important Notes

- Old root-level files (that aren't part of the config) might still exist. You can delete them safely:
  - Old `components/` directory (now in `apps/web/components`)
  - Old `app/` directory (now in `apps/web/app`)
  - Old `lib/` directory (now in `apps/web/lib`)
  - Old `hooks/` directory (now in `apps/web/hooks`)
  - Old `styles/` directory (now in `apps/web/styles`)
  - Old `public/` directory (now in `apps/web/public`)

- The `.next/` directory can be deleted - it will be regenerated on next build

- Keep the monorepo root clean - only root configuration files should be at the top level

## 📚 Resources

- [pnpm Workspaces](https://pnpm.io/workspaces)
- [Turborepo Documentation](https://turbo.build/repo/docs)
- [Monorepo Best Practices](https://turbo.build/repo/docs/handbook)

## ✅ Verification Checklist

- [ ] Run `pnpm install` successfully
- [ ] Run `pnpm dev` starts the web app
- [ ] UI components render correctly
- [ ] Imports from `@task-manager/*` work
- [ ] Build completes successfully
- [ ] No TypeScript errors

## 📞 Need Help?

If you encounter any issues:
1. Check that all dependencies are installed: `pnpm install`
2. Clear cache: `pnpm clean`
3. Restart dev server: `pnpm dev`
4. Check that pnpm version is 8+: `pnpm --version`

---

**Migration completed successfully!** 🎉