<<<<<<< HEAD
# Task Manager Monorepo

A modern monorepo setup for the Task Manager application using **pnpm workspaces** and **Turborepo**.

## 📁 Structure

```
.
├── apps/
│   └── web/                    # Next.js web application
├── packages/
│   ├── ui/                     # Shared UI components
│   ├── utils/                  # Shared utility functions
│   └── types/                  # Shared TypeScript types
├── turbo.json                  # Turborepo configuration
├── pnpm-workspace.yaml         # pnpm workspaces configuration
└── package.json                # Root package.json
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- pnpm 8+

### Installation

```bash
# Install dependencies for all workspaces
pnpm install
```

### Development

```bash
# Run dev server for all apps
pnpm dev

# Run specific app
pnpm dev --filter=task-manager-web
```

### Building

```bash
# Build all packages and apps
pnpm build

# Build specific package
pnpm build --filter=task-manager-web
```

### Linting

```bash
# Lint all packages and apps
pnpm lint

# Lint specific package
pnpm lint --filter=task-manager-web
```

## 📦 Workspaces

### `apps/web`
The Next.js web application. Main entry point for the task manager UI.

- **Port**: 3000 (development)
- **Build output**: `.next/`
- **Technologies**: Next.js, React, TypeScript, Tailwind CSS

**Key scripts:**
```bash
pnpm dev --filter=task-manager-web     # Start dev server
pnpm build --filter=task-manager-web   # Build for production
pnpm start --filter=task-manager-web   # Start production server
```

### `packages/ui`
Shared React UI components built with Radix UI and Tailwind CSS.

**Includes:**
- Button, Card, Dialog, etc.
- Form components
- Layout components
- Hooks for UI state management

**Usage in other packages:**
```typescript
import { Button, Card } from '@task-manager/ui'
```

### `packages/utils`
Shared utility functions.

**Includes:**
- `cn()` - Class name merging utility

**Usage in other packages:**
```typescript
import { cn } from '@task-manager/utils'
```

### `packages/types`
Shared TypeScript type definitions.

**Includes:**
- `Task` - Task interface
- `User` - User interface

**Usage in other packages:**
```typescript
import { Task, User } from '@task-manager/types'
```

## 🔗 Internal Dependencies

Packages can reference each other using the `workspace:*` protocol:

```json
{
  "dependencies": {
    "@task-manager/ui": "workspace:*",
    "@task-manager/utils": "workspace:*"
  }
}
```

## 🛠️ Turborepo

Turborepo is configured to:
- **Cache builds** for faster rebuild times
- **Run tasks in parallel** when possible
- **Respect dependency graphs** between packages

Key configuration in `turbo.json`:
- `build` - Depends on `^build` (dependencies must build first)
- `dev` - Runs in persistent mode (no caching)
- `lint` - No output caching

## 📝 Adding New Packages

To add a new package:

1. Create a new directory in `packages/`
2. Initialize with a `package.json`:
   ```json
   {
     "name": "@task-manager/package-name",
     "version": "0.1.0",
     "private": true
   }
   ```
3. pnpm workspaces will automatically include it

## 🔄 Running Commands

### Across all workspaces
```bash
pnpm build              # Build all packages
pnpm dev               # Dev all packages
pnpm lint              # Lint all packages
```

### Specific workspace
```bash
pnpm build --filter=task-manager-web
pnpm dev --filter=task-manager-web
```

### Multiple workspaces
```bash
pnpm build --filter='./packages/*'
pnpm dev --filter='./apps/*'
```

## 🧹 Cleanup

```bash
# Remove all node_modules and build artifacts
pnpm clean
```

## 📖 Learn More

- [pnpm workspaces documentation](https://pnpm.io/workspaces)
- [Turborepo documentation](https://turbo.build/repo/docs)
- [Next.js documentation](https://nextjs.org/docs)
- [Radix UI documentation](https://www.radix-ui.com/)

## 📄 License

MIT
=======
# task-manager
Deployed Task Manager App on Vercel with Supabase backend and automated CI/CD using GitHub Actions.
>>>>>>> 0d5a19bff600ca29b95968db95649475af2f90f8
