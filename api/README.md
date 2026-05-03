# SimpleService — Backend API

API REST con Node.js y Express para el marketplace SimpleService. Desplegada en Render.

## Stack

- Node.js 22
- Express
- PostgreSQL + Sequelize
- Passport.js + JWT (autenticación)
- Stripe (pagos)
- Firebase Admin (auth con Google)
- Nodemailer (correos)
- Cloudinary (imágenes)

## Scripts

```bash
npm start        # Inicia el servidor
npm run nodemon  # Servidor con recarga automática (desarrollo)
```

## Variables de entorno

Crea un archivo `.env` en esta carpeta:

```
PORT=3001

# Stripe
STRIPE_PRIVATE_KEY=sk_test_...

# Base de datos PostgreSQL
DB_USER=
DB_PASSWORD=
DB_HOST=
DB_NAME=
DB_PORT=5432

# Gmail (Nodemailer)
GMAIL_USER=
GMAIL_PASS=

# Firebase
FIREBASE_SERVICE_ACCOUNT_KEY=
```

## Deploy

Desplegado en Render como Web Service.
- **Root Directory:** `api`
- **Build Command:** `npm install`
- **Start Command:** `npm start`

Las variables de entorno deben configurarse en Render → Environment.
