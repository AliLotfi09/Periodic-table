# ChemSketch

A modern, full-stack chemistry structure sketching application powered by Cloudflare Workers. Draw, edit, and manage chemical structures with a responsive React frontend and scalable serverless backend.

[![Deploy to Cloudflare Workers][cloudflarebutton]]

## Features

- **Interactive Sketching Canvas**: Drag-and-drop molecule builder with bond editing and atom placement.
- **Real-time Collaboration**: Multi-user editing via Cloudflare Durable Objects (extensible).
- **API-First Backend**: RESTful endpoints for saving, loading, and analyzing structures using Hono.
- **Responsive UI**: Beautiful, accessible interface with shadcn/ui components and Tailwind CSS.
- **Theme Support**: Light/dark mode with system preference detection.
- **Error Handling & Logging**: Client-side error reporting and server-side logging.
- **Type-Safe**: Full TypeScript coverage for frontend and Workers.
- **Production-Ready**: Optimized for Cloudflare Pages/Workers deployment.

## Tech Stack

### Frontend
- **React 18** with **TypeScript**
- **Vite** for fast development and builds
- **Tailwind CSS** + **shadcn/ui** for styling and components
- **TanStack Query** for data fetching
- **React Router** for client-side routing
- **Zustand** for state management
- **Sonner** for toast notifications
- **Framer Motion** for animations
- **Lucide React** for icons

### Backend
- **Cloudflare Workers** with **Hono** routing
- **TypeScript** with Workers type definitions
- **CORS** and middleware support

### Tools
- **Bun** for package management and scripts
- **Wrangler** for Cloudflare deployment
- **ESLint** + **TypeScript** for linting/type-checking

## Quick Start

1. **Clone the repository**:
   ```bash
   git clone <your-repo-url>
   cd chem-sketch-qsn8st_kkn19jw4qmlgah
   ```

2. **Install dependencies** (using Bun):
   ```bash
   bun install
   ```

3. **Run in development**:
   ```bash
   bun dev
   ```
   Opens at `http://localhost:3000` (or `$PORT`).

4. **Build for production**:
   ```bash
   bun build
   ```

## Development

- **Frontend**: Edits in `src/` hot-reload automatically.
- **Backend Routes**: Add API endpoints in `worker/userRoutes.ts`. Core routing in `worker/index.ts` (do not modify).
- **Type Generation**: Run `bun cf-typegen` to update Worker types.
- **Linting**: `bun lint`
- **Preview**: `bun preview`

### Project Structure
```
├── src/                 # React frontend
│   ├── components/      # UI components (shadcn/ui + custom)
│   ├── hooks/           # Custom React hooks
│   ├── lib/             # Utilities and error reporting
│   └── pages/           # Route components
├── worker/              # Cloudflare Workers backend
│   ├── index.ts         # Main entry (do not modify)
│   └── userRoutes.ts    # Your custom API routes
├── tailwind.config.js   # Tailwind + shadcn configuration
├── vite.config.ts       # Vite + Cloudflare plugin
└── wrangler.jsonc       # Worker deployment config
```

### Environment Variables
Set via Cloudflare dashboard or `wrangler.toml`. Uses `ASSETS` binding for static assets.

## Deployment

Deploy to Cloudflare Workers with one command:

```bash
bun deploy
```

This builds the frontend and deploys the Worker. Assets are automatically served via Cloudflare Pages integration.

For custom deployments:
1. Install Wrangler: `bun add -g wrangler`
2. Login: `wrangler login`
3. Deploy: `wrangler deploy`

[![Deploy to Cloudflare Workers][cloudflarebutton]]

## Contributing

1. Fork the repo.
2. Create a feature branch (`bun dev`).
3. Commit changes (`git commit -m "feat: ..."`).
4. Push and open a PR.

## License

MIT License. See [LICENSE](LICENSE) for details.