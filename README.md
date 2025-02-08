# Adriaansen Consulting Website

A modern consultancy website built with Next.js, TypeScript, and Tailwind CSS.

## Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun
- Git

## Tech Stack

- [Next.js](https://nextjs.org) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [React Intersection Observer](https://github.com/thebuilder/react-intersection-observer) - Scroll animations

## Getting Started

1. Clone the repository:
```bash
git clone [repository-url]
cd adriaansen-consulting-next
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Available Scripts

- `dev` - Runs the app in development mode
- `build` - Builds the app for production
- `start` - Runs the built app in production mode
- `lint` - Runs the linter to check code quality

## Project Structure

```
src/
├── app/              # App router pages and layouts
│   ├── components/   # React components
│   │   ├── Contact.tsx
│   │   ├── Engagement.tsx
│   │   ├── Footer.tsx
│   │   └── ...
│   ├── layout.tsx    # Root layout
│   └── page.tsx      # Home page
├── public/           # Static assets
└── styles/          # Global styles
```

## Contributing

1. Create a feature branch
2. Commit your changes
3. Push to the branch
4. Open a Pull Request

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## Deploy on Vercel

Deploy using [Vercel Platform](https://vercel.com/new) from the creators of Next.js.
