# 🚀 Quick Reference Card

## Essential Commands

```bash
# Install all dependencies (run once after setup)
pnpm install

# Start development server
pnpm dev                           # All apps/packages
pnpm dev --filter=task-manager-web # Specific app

# Build for production
pnpm build
pnpm build --filter=@task-manager/utils

# Lint code
pnpm lint

# Clean everything
pnpm clean
```

## Import Examples

### UI Components
```typescript
import { Button, Card, Dialog, Form } from '@task-manager/ui'

// Use in component
<Button onClick={handleClick}>Click me</Button>
```

### Utilities
```typescript
import { cn } from '@task-manager/utils'

// Use in component
const className = cn('px-4 py-2', isActive && 'bg-blue-500')
```

### Types
```typescript
import { Task, User } from '@task-manager/types'

// Use in code
const task: Task = {
  id: '1',
  title: 'My Task',
  status: 'todo',
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString()
}
```

## File Locations

| What | Location |
|------|----------|
| Main app | `apps/web/` |
| Pages/Routes | `apps/web/app/` |
| Components | `apps/web/components/` |
| Hooks | `apps/web/hooks/` |
| Styles | `apps/web/styles/` |
| UI Library | `packages/ui/` |
| Utilities | `packages/utils/` |
| Types | `packages/types/` |

## Directory Structure

```
.
├── apps/web/              ← Your Next.js app here
├── packages/
│   ├── ui/               ← Reusable components
│   ├── utils/            ← Helper functions
│   └── types/            ← Type definitions
├── pnpm-workspace.yaml   ← Workspace config
├── turbo.json           ← Build cache config
└── package.json         ← Root config
```

## Common Tasks

### Add a dependency to web app
```bash
cd apps/web
pnpm add some-package
```

### Add a dev dependency
```bash
cd apps/web
pnpm add -D typescript
```

### Link to local package
```json
{
  "dependencies": {
    "@task-manager/utils": "workspace:*"
  }
}
```

### Create new package
```bash
mkdir packages/my-new-package
cd packages/my-new-package
cat > package.json << 'EOF'
{
  "name": "@task-manager/my-new-package",
  "version": "0.1.0",
  "private": true
}
EOF
```

## Debugging

| Issue | Solution |
|-------|----------|
| Import not found | Check package.json exports |
| Module not resolving | Run `pnpm install` |
| Old build artifacts | Run `pnpm clean` |
| TypeScript errors | Check tsconfig.json paths |
| Port 3000 already in use | Kill process on port 3000 |

## Useful pnpm Commands

```bash
# Show workspace info
pnpm list -r                    # Recursive list

# Run script in specific package
pnpm --filter=task-manager-web dev

# Run script in all packages
pnpm -r build                   # Run build in all

# Install for specific package
pnpm add -C packages/ui some-package

# Check which packages depend on another
pnpm why @task-manager/utils
```

## Folder Structure at a Glance

```
Root (workspace config)
│
├─ apps/web (Main app)
│  ├─ app/          (Next.js routes)
│  ├─ components/   (App components)
│  ├─ lib/          (App utilities)
│  ├─ styles/       (CSS)
│  ├─ public/       (Static files)
│  ├─ package.json  (App dependencies)
│  └─ tsconfig.json (App TS config)
│
├─ packages/ui (Component library)
│  ├─ button.tsx
│  ├─ card.tsx
│  ├─ ... (50+ components)
│  ├─ index.ts      (Exports all)
│  └─ package.json
│
├─ packages/utils (Helpers)
│  ├─ index.ts      (Exports: cn())
│  └─ package.json
│
├─ packages/types (Schemas)
│  ├─ index.ts      (Exports: Task, User)
│  └─ package.json
│
├─ scripts/         (Database migrations)
│
└─ Config files
   ├─ pnpm-workspace.yaml
   ├─ turbo.json
   ├─ package.json
   └─ tsconfig.json
```

## Port & URL Mapping

| Service | URL | Port |
|---------|-----|------|
| Web App | http://localhost:3000 | 3000 |
| Supabase Studio | http://localhost:54323 | 54323 |

## Environment Files

```
.env.local          ← Local environment (don't commit)
.env.example        ← Template for env vars
```

## CI/CD Quick Setup

### GitHub Actions
```yaml
- name: Install dependencies
  run: pnpm install

- name: Build
  run: pnpm build

- name: Lint
  run: pnpm lint
```

### Vercel
```json
{
  "buildCommand": "pnpm build --filter=task-manager-web"
}
```

## IDE Setup

### VS Code Path Intellisense
Already configured via `tsconfig.json` paths:
```json
{
  "@/*": ["./*"],
  "@task-manager/ui": ["../../packages/ui"],
  "@task-manager/utils": ["../../packages/utils"],
  "@task-manager/types": ["../../packages/types"]
}
```

### Extensions Recommended
- ESLint
- Prettier
- TypeScript Vue Plugin
- Tailwind CSS IntelliSense

## Deployment

### Vercel
```bash
# No changes needed - Vercel auto-detects monorepo
vercel deploy
```

### Docker
```dockerfile
FROM node:18 AS builder
WORKDIR /app
COPY . .
RUN pnpm install
RUN pnpm build --filter=task-manager-web

FROM node:18-slim
WORKDIR /app
COPY --from=builder /app/apps/web/.next ./.next
# ...rest of Dockerfile
```

## Troubleshooting Checklist

- [ ] Run `pnpm install`
- [ ] Run `pnpm clean && pnpm install`
- [ ] Check `pnpm --version` (should be 8+)
- [ ] Check Node version (should be 18+)
- [ ] Restart IDE/terminal
- [ ] Check git status for changes
- [ ] Check console for errors
- [ ] Ask in team Slack/Discord

## Documentation Files

| File | Purpose |
|------|---------|
| `README.md` | Complete documentation |
| `MIGRATION.md` | What changed & how to migrate |
| `CLEANUP.md` | How to delete old directories |
| `SETUP_SUMMARY.md` | Setup overview |
| `ARCHITECTURE.md` | System design & architecture |
| `QUICK_REFERENCE.md` | This file |

## Keyboard Shortcuts

### VS Code
```
Ctrl+F  Find
Ctrl+H  Find & Replace
Ctrl+/  Comment/Uncomment
Ctrl+S  Save
Shift+Alt+F  Format code
```

### Terminal
```
Ctrl+C  Stop running process
Ctrl+L  Clear screen
↑ ↓     Command history
```

## Support

**Getting help:**
1. Check the docs: `README.md`
2. Check migration guide: `MIGRATION.md`
3. Review architecture: `ARCHITECTURE.md`
4. Ask in team chat

---

**Version**: Monorepo v1.0 (pnpm + Turborepo)
**Last Updated**: 2024
**Node Version**: 18+
**pnpm Version**: 8+