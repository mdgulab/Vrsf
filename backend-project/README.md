# VRSF Backend

PHP + MySQL backend for VRSF Volunteer Management System.

## Folder Structure
```
backend/
├── admin/          # Admin panel PHP pages
├── api/            # REST API endpoints
├── assets/         # CSS & JS files
├── uploads/        # User uploaded files (not tracked in git)
│   ├── gallery/
│   └── documents/
├── db_config.php   # DB connection (uses .env)
└── .env            # Secret credentials (DO NOT COMMIT)
```

## Setup (Local)
1. Copy `.env.example` to `.env` and fill in your DB credentials
2. Import your SQL schema into MySQL
3. Run with XAMPP / WAMP / Laragon

## Setup (Hostinger)
1. Upload all files EXCEPT `.env` to `public_html/backend/`
2. Set DB credentials directly in `db_config.php` on server
3. Make sure `uploads/` folder has write permissions (chmod 755)
