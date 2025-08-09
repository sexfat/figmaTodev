# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a figmaTodev project that uses Vite + Sass + PHP + MySQL stack. The project converts Figma designs into development-ready code.

## Repository Setup

The project is hosted on GitHub at: https://github.com/sexfat/figmaTodev.git

The repository has two branches:
- `master` (main branch)
- `dev` (development branch)

## Technology Stack

- **Frontend Build Tool**: Vite
- **CSS Preprocessor**: Sass
- **Backend**: PHP  
- **Database**: MySQL

## Development Commands

```bash
# Install dependencies
npm install

# Start development (both frontend and backend)
npm start

# Frontend development server only
npm run dev

# PHP backend server only
npm run php-server

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
figmaTodev/
├── src/                 # Frontend source code
│   ├── styles/         # Sass stylesheets
│   │   ├── main.scss   # Main stylesheet
│   │   └── variables.scss # SCSS variables
│   └── js/             # JavaScript files
│       └── main.js     # Main JS entry point
├── api/                # PHP backend API
│   ├── config/         # Configuration files
│   │   ├── config.php  # App configuration
│   │   └── database.php # Database connection
│   ├── models/         # Data models
│   └── controllers/    # API controllers
├── public/             # Static assets
├── database.sql        # Database schema
├── index.html          # Main HTML file
└── vite.config.js      # Vite configuration
```

## Database Setup

1. Create MySQL database named `figmatodev_db`
2. Import `database.sql` to set up tables
3. Update database credentials in `api/config/database.php`
4. Default admin login: admin@figmatodev.com / admin123

## API Endpoints

- `GET /api/` - API information
- `GET /api/test` - Test API connection

## Development Notes

- Frontend runs on port 5173 (Vite dev server)
- Backend PHP server runs on port 8000
- API requests are proxied from `/api` to `http://localhost:8000`
- Sass variables are automatically imported in all SCSS files