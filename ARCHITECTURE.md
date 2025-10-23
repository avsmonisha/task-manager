# Monorepo Architecture

## 🏗️ High-Level Structure

```
┌─────────────────────────────────────────────────────────────┐
│                  TASK MANAGER MONOREPO                      │
│                                                              │
│  Root (pnpm-workspace.yaml, turbo.json, package.json)      │
│                                                              │
│  ┌────────────────────────┬────────────────────────┐       │
│  │                        │                        │       │
│  │  📱 APPS               │  📦 PACKAGES           │       │
│  │                        │                        │       │
│  │  ┌──────────────────┐  │  ┌──────────────────┐  │       │
│  │  │  apps/web        │  │  │  packages/ui     │  │       │
│  │  │  (Next.js)       │  │  │  (Components)    │  │       │
│  │  │                  │  │  │                  │  │       │
│  │  │ ┌──────────────┐ │  │  │ ┌──────────────┐ │  │       │
│  │  │ │ app/         │ │  │  │ │ Button       │ │  │       │
│  │  │ │ components/  │ │  │  │ │ Card         │ │  │       │
│  │  │ │ lib/         │◄──┼──────│ Dialog       │ │  │       │
│  │  │ │ hooks/       │ │  │  │ │ Form         │ │  │       │
│  │  │ │ styles/      │ │  │  │ │ Input        │ │  │       │
│  │  │ │ public/      │ │  │  │ │ ...50 more   │ │  │       │
│  │  │ └──────────────┘ │  │  │ └──────────────┘ │  │       │
│  │  └────────┬─────────┘  │  └────────┬─────────┘  │       │
│  │           │            │           │            │       │
│  │           └────────────┼───────────┘            │       │
│  │                        │                        │       │
│  │           ┌────────────▼──────────┐            │       │
│  │           │  packages/utils       │            │       │
│  │           │  (cn, helpers)        │            │       │
│  │           └───────────┬───────────┘            │       │
│  │                       │                        │       │
│  │           ┌───────────▼───────────┐            │       │
│  │           │  packages/types       │            │       │
│  │           │  (Task, User, etc)    │            │       │
│  │           └───────────────────────┘            │       │
│  └────────────────────────────────────────────────┘       │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

## 📊 Dependency Graph

```
apps/web
  ├── depends on → @task-manager/ui
  ├── depends on → @task-manager/utils
  └── depends on → @task-manager/types

@task-manager/ui
  ├── depends on → @task-manager/utils
  ├── depends on → React
  └── depends on → Radix UI

@task-manager/utils
  ├── depends on → clsx
  └── depends on → tailwind-merge

@task-manager/types
  └── no dependencies
```

## 🔄 Data Flow

```
┌──────────────────────────────────────────────────────┐
│  apps/web (Next.js App)                              │
│                                                      │
│  ┌──────────────────────────────────────────────┐   │
│  │  Page Components & Features                  │   │
│  │                                              │   │
│  │  ┌──────────────────────────────────────┐   │   │
│  │  │  Uses: @task-manager/ui             │   │   │
│  │  │  ↓                                   │   │   │
│  │  │  Button, Card, Form, etc            │   │   │
│  │  │                                      │   │   │
│  │  │  Uses: @task-manager/utils          │   │   │
│  │  │  ↓                                   │   │   │
│  │  │  cn() for className merging         │   │   │
│  │  │                                      │   │   │
│  │  │  Uses: @task-manager/types          │   │   │
│  │  │  ↓                                   │   │   │
│  │  │  Task, User type definitions        │   │   │
│  │  └──────────────────────────────────────┘   │   │
│  └──────────────────────────────────────────────┘   │
│                                                      │
│  Business Logic                                      │
│  ├── Server Actions                                 │
│  ├── API Routes                                     │
│  └── Hooks                                          │
│                                                      │
│  Connected to:                                       │
│  ├── Supabase (Database & Auth)                    │
│  └── External APIs                                  │
└──────────────────────────────────────────────────────┘
```

## 🎯 Module Responsibilities

### `apps/web` - Next.js Application
**Responsibility**: Main user interface and business logic

**Contains**:
- Page components and routes
- UI layouts and sections
- Server actions and API integration
- Middleware and auth logic
- Styles and asset configuration

**Consumes**:
- `@task-manager/ui` - For all UI components
- `@task-manager/utils` - For utilities
- `@task-manager/types` - For type definitions

---

### `packages/ui` - Shared UI Components
**Responsibility**: Reusable React UI components

**Contains**:
- 50+ Radix UI-based components
- Button, Card, Dialog, Form, Input, etc.
- Each component: properly typed with React
- Tailwind CSS styling
- Export index for easy importing

**Consumes**:
- `@task-manager/utils` - For `cn()` utility
- Radix UI primitives
- Tailwind CSS

**Used By**:
- `apps/web` - Main consumer

---

### `packages/utils` - Shared Utilities
**Responsibility**: Common helper functions

**Current Exports**:
- `cn()` - Class name merging utility using clsx + tailwind-merge

**Future Exports** (examples):
- Formatting utilities
- Validation helpers
- API utilities
- Date utilities

**Consumes**:
- clsx - For conditional classnames
- tailwind-merge - For merging Tailwind classes

---

### `packages/types` - Shared Type Definitions
**Responsibility**: TypeScript type definitions

**Current Exports**:
```typescript
export type Task = { /* Task structure */ }
export type User = { /* User structure */ }
```

**Usage**: 
- Type definitions across all packages
- Ensures consistency
- Single source of truth

---

## 🔗 Why This Structure?

### ✅ Benefits

| Benefit | How it helps |
|---------|------------|
| **Code Reusability** | UI components used across apps without duplication |
| **Maintainability** | Clear separation of concerns |
| **Scalability** | Easy to add more apps or packages |
| **Type Safety** | Single source of truth for types |
| **Development Speed** | Workspace linking for instant updates |
| **Build Optimization** | Turborepo caching for faster builds |
| **Team Collaboration** | Clear module boundaries |

### 🚀 Scalability

Easily extend this structure:

```
├── apps/
│   ├── web/          (existing)
│   ├── mobile/       (add React Native)
│   ├── admin/        (add admin dashboard)
│   └── docs/         (add documentation site)
│
├── packages/
│   ├── ui/           (existing)
│   ├── utils/        (existing)
│   ├── types/        (existing)
│   ├── api-client/   (add API client)
│   ├── hooks/        (add shared hooks)
│   ├── database/     (add DB utilities)
│   └── auth/         (add auth module)
```

## 📦 Workspace Link Protocol

The `workspace:*` protocol ensures:

```json
{
  "dependencies": {
    "@task-manager/ui": "workspace:*"
  }
}
```

**What it does**:
- ✅ Links to local package instead of npm
- ✅ Changes are instantly available
- ✅ Full type information in IDE
- ✅ No build/publish needed during development
- ✅ When published to npm, converts to version number

## 🔄 Development Workflow

```
Developer writes code in apps/web
        ↓
Needs UI component
        ↓
Imports from @task-manager/ui
        ↓
pnpm resolves to local package via workspace:*
        ↓
IDE shows types and autocomplete
        ↓
Changes to UI package instantly available (HMR)
        ↓
Dev server updates in real-time
```

## 📈 Build Process

```
Turborepo runs: pnpm build
        ↓
1. Builds packages/ (no dependencies)
   ├── @task-manager/types
   ├── @task-manager/utils
   └── @task-manager/ui
        ↓
2. Builds apps/ (depends on packages)
   └── apps/web (can use built packages)
        ↓
3. Output:
   └── .next/ (Next.js build)
        ↓
Ready to deploy to Vercel/Server
```

## 🎨 Visual Dependency Tree

```
apps/web
│
├─ @task-manager/ui
│  ├─ React
│  ├─ Radix UI
│  └─ @task-manager/utils
│     ├─ clsx
│     └─ tailwind-merge
│
├─ @task-manager/utils
│  ├─ clsx
│  └─ tailwind-merge
│
├─ @task-manager/types
│
├─ React
├─ Next.js
├─ Supabase
└─ Other external deps
```

## 🧪 Testing Strategy

Each package should have its own tests:

```
packages/
├── ui/
│   ├── button.tsx
│   ├── button.test.tsx
│   └── package.json
│
├── utils/
│   ├── index.ts
│   ├── index.test.ts
│   └── package.json
│
└── types/
    ├── index.ts
    └── package.json

apps/
└── web/
    ├── app/
    ├── __tests__/
    └── package.json
```

---

## 📚 Learn More

- **pnpm Workspaces**: Enables the monorepo structure
- **Turborepo**: Optimizes builds with caching
- **TypeScript Paths**: Makes imports clean and organized
- **Workspace Protocol**: Links packages during development

**Next**: Check `README.md` for complete documentation!