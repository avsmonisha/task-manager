# Cleanup Guide - Old Directories

Your project has been successfully converted to a monorepo. The old root-level directories are now duplicated and can be safely removed.

## Safe to Delete ✅

These directories have been copied to `apps/web/` and are no longer needed at the root:

```bash
# You can delete these folders:
rm -r ./app
rm -r ./components
rm -r ./hooks
rm -r ./lib
rm -r ./styles
rm -r ./public
rm -r ./middleware.ts

# Remove these old build artifacts:
rm -r ./.next
rm -rf ./node_modules
rm ./package-lock.json
```

### Why safe to delete:
- `app/` → moved to `apps/web/app/`
- `components/` → moved to `apps/web/components/`
- `hooks/` → moved to `apps/web/hooks/`
- `lib/` → moved to `apps/web/lib/`
- `styles/` → moved to `apps/web/styles/`
- `public/` → moved to `apps/web/public/`
- `middleware.ts` → moved to `apps/web/middleware.ts`
- `.next/` → Will be regenerated on build
- `package-lock.json` → Replaced by pnpm lockfile

## Keep These ✅

Keep these files at the root - they're essential for the monorepo:

```
.
├── pnpm-workspace.yaml      ← Workspace config
├── turbo.json               ← Turborepo config
├── tsconfig.json            ← Root TypeScript config
├── package.json             ← Root dependencies
├── .npmrc                   ← pnpm config
├── .gitignore              ← Git ignore rules
├── apps/                   ← App folder (keep)
├── packages/               ← Packages folder (keep)
├── scripts/                ← Database migrations (keep)
├── .env.local              ← Env file (keep)
├── components.json         ← Component config (keep or move to apps/web)
├── pnpm-lock.yaml          ← Lock file (keep)
├── README.md               ← Monorepo README (updated)
├── MIGRATION.md            ← Migration guide
└── CLEANUP.md              ← This file
```

## Optional Cleanup

### `components.json` (Optional Move)
```bash
# You can move this to apps/web/components.json if it's Next.js specific
mv ./components.json ./apps/web/components.json
```

## Steps to Clean Up

### 1. Run pnpm install in the new structure
```bash
pnpm install
```

### 2. Verify everything works
```bash
pnpm dev --filter=task-manager-web
```

### 3. If no errors, delete old directories (on Windows):
```bash
# Using PowerShell
Remove-Item -Path '.\app' -Recurse -Force
Remove-Item -Path '.\components' -Recurse -Force
Remove-Item -Path '.\hooks' -Recurse -Force
Remove-Item -Path '.\lib' -Recurse -Force
Remove-Item -Path '.\styles' -Recurse -Force
Remove-Item -Path '.\public' -Recurse -Force
Remove-Item -Path '.\middleware.ts' -Force
Remove-Item -Path '.\.next' -Recurse -Force
Remove-Item -Path '.\node_modules' -Recurse -Force
Remove-Item -Path '.\package-lock.json' -Force
```

### 4. Verify after cleanup
```bash
# Should still work
pnpm dev --filter=task-manager-web
pnpm build --filter=task-manager-web
```

## Before & After Structure

### Before Cleanup:
```
project/
├── app/                  ← OLD - Delete
├── components/           ← OLD - Delete
├── hooks/               ← OLD - Delete
├── lib/                 ← OLD - Delete
├── styles/              ← OLD - Delete
├── public/              ← OLD - Delete
├── apps/web/            ← NEW - Keep (has copies)
├── packages/            ← NEW - Keep
├── scripts/             ← NEW - Keep
├── pnpm-workspace.yaml  ← NEW - Keep
├── turbo.json          ← NEW - Keep
└── package.json        ← NEW - Keep (root)
```

### After Cleanup:
```
project/
├── apps/
│   └── web/
│       ├── app/
│       ├── components/
│       ├── hooks/
│       ├── lib/
│       ├── styles/
│       ├── public/
│       └── ...
├── packages/
│   ├── ui/
│   ├── utils/
│   └── types/
├── scripts/
├── pnpm-workspace.yaml
├── turbo.json
├── package.json
├── README.md
└── MIGRATION.md
```

## Verification After Cleanup

After deleting old directories, verify:

```bash
# Should work fine
pnpm install
pnpm dev

# Should show no errors
pnpm lint

# Should build successfully
pnpm build
```

## Troubleshooting

If something breaks after cleanup:

1. **Check git**: All old files are in git history
   ```bash
   git status  # See what's gone
   git log --name-status  # See history
   ```

2. **Restore a file**: 
   ```bash
   git restore app/
   ```

3. **Reinstall dependencies**:
   ```bash
   rm -rf node_modules pnpm-lock.yaml
   pnpm install
   ```

---

**Ready to cleanup?** Follow the steps above! The old directories are safely copied to `apps/web/`.