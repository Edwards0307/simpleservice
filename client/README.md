# SimpleService — Frontend

Aplicación React del marketplace SimpleService. Desplegada en Vercel.

## Stack

- React 18
- Redux Toolkit
- React Router v6
- Stripe.js
- Firebase (autenticación Google)
- Axios
- Recharts / Chart.js

## Scripts

```bash
npm start        # Servidor de desarrollo en localhost:3000
npm run build    # Build de producción
npm test         # Tests
```

## Variables de entorno

Crea un archivo `.env` en esta carpeta:

```
REACT_APP_STRIPE_PK=pk_test_...
REACT_APP_ADMIN_USER=email@ejemplo.com
```

## Deploy

El frontend se despliega automáticamente en Vercel al hacer push a `master`.
Las variables de entorno deben estar configuradas en Vercel → Settings → Environment Variables.
