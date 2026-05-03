# 🛠️ SimpleService

> Marketplace de servicios profesionales — Proyecto Final del 
> Bootcamp Full Stack de Henry.

🌐 **Demo en vivo:** [simpleservice-six.vercel.app](https://simpleservice-six.vercel.app/)

---

## 📌 Sobre el proyecto

SimpleService es una plataforma web tipo marketplace donde los 
usuarios pueden ofrecer y contratar servicios profesionales 
(desarrolladores, trainers, abogados, reclutadores, entre otros).

Desarrollado como **proyecto final grupal** del bootcamp Full Stack 
de Henry, trabajando en equipo bajo metodología Ágil (Scrum) durante 
3 sprints intensivos.

> **Nota sobre este repositorio:** El código original fue desarrollado 
> en equipo y alojado en otra cuenta de GitHub. Este repositorio es 
> mi copia personal del proyecto, subida para mantener acceso al 
> código y mostrar el trabajo realizado.

## ✨ Funcionalidades principales

- 🔐 Autenticación de usuarios
- 💳 Integración de pagos con Stripe
- 📊 Dashboard de usuario y panel de administrador
- 🛒 Sistema CRUD de servicios
- 🤖 Chatbot integrado
- 🔍 Búsqueda y filtros de servicios
- ⭐ Sistema de validaciones

## 🛠️ Stack tecnológico

**Frontend:**
- React
- Redux
- JavaScript
- HTML5 / CSS3

**Backend:**
- Node.js
- Express
- PostgreSQL

**Servicios externos:**
- Stripe (pasarela de pagos)
- Firebase (autenticación con Google)
- Cloudinary (almacenamiento de imágenes)
- Nodemailer + Gmail (envío de correos)

**Herramientas:**
- Git / GitHub
- Vercel (deploy frontend)
- Render (deploy backend API)

## 👥 Mi rol en el equipo

Desarrollador Full Stack

## 🚀 Cómo correrlo localmente

### Prerequisitos
- Node.js v22+
- PostgreSQL
- Cuenta de Stripe (modo test)

### Variables de entorno

**`api/.env`**
```
PORT=3001
STRIPE_PRIVATE_KEY=sk_test_...
DB_USER=
DB_PASSWORD=
DB_HOST=
DB_NAME=
DB_PORT=5432
GMAIL_USER=
GMAIL_PASS=
FIREBASE_SERVICE_ACCOUNT_KEY=
```

**`client/.env`**
```
REACT_APP_STRIPE_PK=pk_test_...
REACT_APP_ADMIN_USER=
```

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/Edwards0307/simpleservice.git

# Backend
cd simpleservice/api
npm install
# Configurar variables de entorno (ver sección anterior)
npm start

# Frontend
cd ../client
npm install
npm start
```

## 📸 Capturas

<img width="1897" height="910" alt="image" src="https://github.com/user-attachments/assets/58fecc52-3b08-4be2-a7e2-7745a73911dd" />


<img width="1903" height="899" alt="image" src="https://github.com/user-attachments/assets/ddb9afbe-5c16-487f-b711-fcb62a844521" />


## 📝 Contexto

Este proyecto fue desarrollado en 2023 como parte del programa 
intensivo de formación Full Stack de Henry, un bootcamp 
latinoamericano enfocado en desarrollo web moderno.

---

⚡ Desarrollado por **Edwards Ardila** y equipo  
📫 [LinkedIn](https://www.linkedin.com/in/edwards-ardila-desarrollador-full-stack/)
