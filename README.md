# 🎓 EduToken LMS · Plataforma Educativa Basada en Llaves

<p align="center">
  <img src="https://img.shields.io/badge/React-19.0-61DAFB?logo=react&logoColor=black" alt="React 19" />
  <img src="https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Vite-8.x-646CFF?logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/Google_Chrome-Ready-4285F4?logo=googlechrome&logoColor=white" alt="Google Chrome Ready" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Supabase-Ready-3ECF8E?logo=supabase&logoColor=white" alt="Supabase" />
  <img src="https://img.shields.io/badge/Gemini_AI-3.8_Flash-8E75B2?logo=google&logoColor=white" alt="Gemini AI" />
  <img src="https://img.shields.io/badge/License-Apache_2.0-blue.svg" alt="License Apache 2.0" />
</p>

---

## 📖 Descripción General

**EduToken LMS** es una plataforma modular de gestión de aprendizaje (Learning Management System), diseñada para **cero costo de inicio** y máxima optimización de recursos. Elimina las contraseñas tradicionales sustituyéndolas por **llaves de acceso únicas (tokens)** parametrizables por alumno, e incorpora dos modos visuales adaptativos según el nivel escolar:

- 🎨 **Modo Primaria (Grados 1° a 5°):** Entorno cálido, lúdico e interactivo para niños desde los 6 años, con botones amplios, medallas de logro y microinteracciones fluidas.
- 📐 **Modo Secundaria y Media (Grados 6° a 11°):** Interfaz minimalista, sobria y profesional estilo dashboard académico/universitario, enfocada en productividad sin distracciones.
- ✏️ **100% Editable en HTML y Visual Studio:** Consulta la guía paso a paso [`GUIA_EDICION.md`](GUIA_EDICION.md) para personalizar colegio, rector, diplomas y preguntas directamente en HTML o desde Visual Studio.

---

## 💻 Desarrollo y Edición en Visual Studio & HTML

Este proyecto está preconfigurado con el archivo de espacio de trabajo [`edutoken-lms.code-workspace`](edutoken-lms.code-workspace) y la carpeta `.vscode/` para ofrecer una experiencia de desarrollo lista para usar:

### 1. Abrir en Visual Studio / VS Code
- Abre **Visual Studio Code** o **Visual Studio**.
- Ve a **File** $\to$ **Open Folder...** (o `Archivo` $\to$ `Abrir carpeta...`) y selecciona la raíz del proyecto.
- Si VS Code muestra una notificación recomendando extensiones, pulsa **Install All** (incluye soporte para Tailwind CSS, TypeScript y ESLint).

### 2. Ejecutar con 1 Clic (Depuración y F5)
- Presiona **`F5`** o ve al panel de **Run & Debug** (icono de play con bicho en la barra lateral izquierda).
- Selecciona el perfil **`Dev Server (Fullstack Express + Vite)`** o **`Fullstack: Server + Chrome`** para levantar el servidor y abrir el navegador automáticamente en `http://localhost:3000`.

### 3. Tareas Automáticas (Tasks)
- Presiona **`Ctrl + Shift + B`** (o `Cmd + Shift + B` en Mac) para compilar el proyecto en modo producción (`npm run build`).

---

## 🌐 Cómo Abrir y Usar en Google Chrome (1 solo Clic)

EduToken LMS está 100% optimizado para **Google Chrome** (tanto en computadores de escritorio, portátiles y aulas de cómputo):

### Método 1: Lanzador de 1 Clic para Windows (`abrir_en_chrome.bat`)
1. Haz doble clic en el archivo **`abrir_en_chrome.bat`**.
2. El script iniciará automáticamente el servidor y abrirá Google Chrome en `http://localhost:3000`.

### Método 2: Lanzador para Mac y Linux (`abrir_en_chrome.sh`)
1. Abre tu terminal y ejecuta:
   ```bash
   ./abrir_en_chrome.sh
   ```
2. Detectará automáticamente tu sistema y abrirá Google Chrome.

### Método 3: Desde Visual Studio / VS Code con `F5`
1. Abre el archivo de proyecto [`edutoken-lms.code-workspace`](edutoken-lms.code-workspace) en Visual Studio.
2. Presiona la tecla **`F5`** (o selecciona el perfil **"Fullstack: Server + Chrome"**).
3. Se levantará el servidor local y abrirá la pestaña de Google Chrome de inmediato.

### Método 4: Manual en cualquier Navegador
1. En la consola ejecuta:
   ```bash
   npm run dev
   ```
2. Abre **Google Chrome** y escribe en la barra de direcciones:
   ```
   http://localhost:3000
   ```

> 🛡️ **Protección Total de Extensiones de Chrome:** El sistema incluye en [`index.html`](index.html) un interceptor de seguridad que neutraliza cualquier conflicto con extensiones instaladas en Chrome (como bloqueadores de anuncios o inyectores de red), garantizando una carga rápida y sin errores.

---

## 🐙 Cómo Compartir y Subir a GitHub

El proyecto está 100% preparado con `.gitignore` oficial y sin archivos temporales para subirlo directamente a GitHub:

### Opción A: Desde la interfaz de AI Studio
- Puedes hacer clic en el botón superior de **Compartir / Exportar a GitHub** directamente desde la interfaz para crear el repositorio con 1 solo clic.

### Opción B: Por línea de comandos en Visual Studio
Abre la terminal integrada en Visual Studio (`Ctrl + ~`) y ejecuta:

```bash
# 1. Inicializar git si aún no está inicializado
git init

# 2. Agregar todos los archivos limpios
git add .

# 3. Guardar el primer commit
git commit -m "feat: EduToken LMS - Plataforma completa con soporte React, Vite y Chrome"

# 4. Asignar rama principal
git branch -M main

# 5. Conectar con tu repositorio de GitHub (reemplaza con tu URL):
git remote add origin https://github.com/TU-USUARIO/TU-REPOSITORIO.git

# 6. Subir el proyecto
git push -u origin main
```

---

## 🚀 Despliegue Universal ("Publicable en Cualquier Lugar")

EduToken LMS está arquitecturado para ser **100% agnóstico de proveedor** y puede ser publicado en minutos en cualquier servicio de hosting moderno:

---

### 1. Despliegue con Docker (Cualquier Servidor o Nube)
El proyecto incluye un `Dockerfile` optimizado en múltiples etapas (multi-stage) basado en Node 20 Alpine:

```bash
# Compilar la imagen Docker
docker build -t edutoken-lms .

# Ejecutar el contenedor en el puerto 3000
docker run -d -p 3000:3000 --name edutoken edutoken-lms

# O bien, con docker compose:
docker compose up -d
```

### 2. Despliegue en Vercel
1. Ingresa a [vercel.com](https://vercel.com) o ejecuta `npx vercel`.
2. Vercel detectará automáticamente `Vite` y aplicará las reglas de [`vercel.json`](vercel.json).
3. Presiona **Deploy**. En 30 segundos tu LMS estará en vivo con HTTPS automático.

### 3. Despliegue en Netlify
1. Ingresa a [netlify.com](https://netlify.com) o ejecuta `npx netlify deploy`.
2. Netlify leerá [`netlify.toml`](netlify.toml) (`publish = "dist"` y redirecciones SPA).
3. Presiona **Deploy site**.

### 4. Despliegue en VPS Linux (Ubuntu/Debian con Nginx)
1. Compila la aplicación en tu máquina o servidor:
   ```bash
   npm install
   npm run build
   ```
2. Copia la carpeta `dist/` a `/var/www/edutoken/dist`.
3. Copia el archivo [`nginx.conf`](nginx.conf) a `/etc/nginx/sites-available/edutoken` y activa el sitio con:
   ```bash
   sudo ln -s /etc/nginx/sites-available/edutoken /etc/nginx/sites-enabled/
   sudo nginx -t && sudo systemctl reload nginx
   ```

---

## 📱 Diseño 100% Adaptable (Responsive Multi-Dispositivo)

EduToken LMS cuenta con diseño fluido testeado en todas las resoluciones:

- 📱 **Smartphones (360px - 640px):**
  - Barra superior compacta con badge de alumno y rol.
  - Teclado y formulario de llave táctil optimizados con áreas de toque de más de 44px.
  - Selector de periodos adaptable que se ajusta sin desbordar la pantalla.
  - Visualizador de diploma con desplazamiento asistido horizontal.
- 📱 **Tablets (768px - 1024px):**
  - Panel curricular con tarjetas de materias y lector en dos columnas cómodas.
  - Indicadores KPIs de promedio escolar y estado en barra consolidada.
- 💻 **Laptops y Pantallas de Escritorio (1024px+):**
  - Aprovechamiento amplio del viewport con visualización simultánea de rúbricas, lecciones y tablas administrativas completas.

---

## 🔑 Llaves de Prueba (Demo Tokens)

Usa cualquiera de estas llaves en la pantalla de inicio para probar cada perfil:

| Llave de Acceso | Estudiante / Docente | Grado Escolar | Modo Visual | Permisos Habilitados |
| :--- | :--- | :--- | :--- | :--- |
| `SOF-1P-4921` | **Sofía Gómez** | 3° Primaria | **Lúdico Primaria** | Todos los periodos (1, 2, 3) y las 5 materias |
| `MAT-1P-1044` | **Mateo Rivas** | 1° Primaria | **Lúdico Primaria** | Periodo 1 · Matemáticas, Lenguaje y Ciencias |
| `ALE-2P-8832` | **Alejandro Torres** | 9° Secundaria | **Académico Secundaria**| Todos los periodos y materias |
| `VAL-3P-9901` | **Valeria Castro** | 11° Media | **Académico Secundaria**| Periodos 1 y 2 · Matemáticas, Ciencias e Inglés |
| `ADM-MASTER-2026` | **Prof. Carlos Mendoza** | Rector / Admin | **Panel Administrador** | Acceso global: llaves, exámenes y reportes |

---

## ⚡ Estructura Curricular

- **11 Grados Escolares:** De 1° a 11°.
- **3 Periodos Académicos:** Periodo 1, Periodo 2 y Periodo 3.
- **5 Asignaturas Troncales por Periodo:**
  1. 🧮 **Matemáticas**: Operaciones, álgebra, pensamiento lógico y geometría.
  2. 📖 **Lenguaje y Comunicación**: Comprensión lectora, gramática y redacción.
  3. 🌿 **Ciencias Naturales**: Biología, física, química y medio ambiente.
  4. 🧭 **Ciencias Sociales**: Historia, geografía y convivencia ciudadana.
  5. 🌍 **Inglés Global**: Vocabulario, gramática y comunicación oral y escrita.

---

## 🛠️ Instalación y Ejecución por Comandos

```bash
# 1. Instalar dependencias
npm install

# 2. Configurar variables de entorno (opcional)
cp .env.example .env

# 3. Iniciar servidor de desarrollo (puerto 3000)
npm run dev
```

Abre tu navegador en `http://localhost:3000`.

---

## 🗄️ Base de Datos Supabase (PostgreSQL)

La plataforma opera de forma local inmediata, pero está 100% preparada para conectarse con **Supabase** de manera gratuita:

1. El script SQL con las 5 tablas (`users`, `keys`, `exams`, `results`, `certificates`) está disponible en el archivo [`supabase_schema.sql`](supabase_schema.sql).
2. En tu proyecto de Supabase, entra a **`SQL Editor`** $\to$ **`+ New query`**, pega el contenido de `supabase_schema.sql` y presiona **`Run`**.
3. En Supabase ve a ⚙️ **`Project Settings`** $\to$ **`Data API`**, copia tu **`Project URL`** y tu **`anon public key`**, e ingrésalas en el panel de administración (Pestaña 5) de la app para sincronizar tus datos en tiempo real.

---

## 📂 Arquitectura de Archivos del Proyecto

```
.
├── abrir_en_chrome.bat           # Lanzador directo para Google Chrome (Windows 1 clic)
├── abrir_en_chrome.sh            # Lanzador para Google Chrome (Mac / Linux)
├── .vscode/                      # Integración directa con Visual Studio & VS Code
│   ├── settings.json             # Formato y configuración de TypeScript
│   ├── launch.json               # Depuración F5 (Servidor Express + Chrome)
│   ├── tasks.json                # Tareas de compilación (Ctrl+Shift+B)
│   └── extensions.json           # Extensiones sugeridas
├── GUIA_EDICION.md               # Guía completa de edición en HTML y Visual Studio
├── server.ts                     # Servidor Express + API Gemini 3.8 Flash
├── supabase_schema.sql           # Esquema SQL oficial con las 5 tablas
├── index.html                    # Entrada HTML con configuración directa y protección Chrome
├── public/
│   └── editor.html               # Editor visual interactivo de configuración y diplomas
├── package.json                  # Dependencias y scripts multiplataforma
├── vite.config.ts                # Configuración de Vite con base relativa './'
├── README.md                     # Documentación oficial
├── LICENSE                       # Licencia Apache 2.0
├── src/
│   ├── main.tsx                  # Bootstrap de React
│   ├── App.tsx                   # Enrutador principal según la llave
│   ├── index.css                 # Tailwind CSS v4 y estilos tipográficos
│   ├── types/
│   │   └── lms.ts                # Modelos de datos TypeScript
│   ├── data/
│   │   └── mockCurriculum.ts     # Semillas iniciales curriculares
│   ├── services/
│   │   ├── storageService.ts     # Persistencia reactiva local (cero costo)
│   │   ├── supabaseClient.ts     # Cliente y sincronizador oficial de Supabase
│   │   ├── aiEvaluator.ts        # Corrección de preguntas abiertas con IA
│   │   └── certificatePdf.ts     # Generador de certificados PDF oficiales
│   └── components/
│       ├── common/
│       │   └── TopBar.tsx        # Barra de navegación
│       ├── student/
│       │   ├── PrimaryDashboard.tsx   # Modo Primaria (1°-5°) lúdico
│       │   ├── SecondaryDashboard.tsx # Modo Secundaria (6°-11°) académico
│       │   ├── ExamView.tsx           # Examen con calificación y confeti
│       │   └── CertificateModal.tsx   # Visualizador y descarga de diplomas PDF
│       └── admin/
│           └── AdminDashboard.tsx     # Panel de gestión, exámenes y alertas
```

---

## 📄 Licencia

Este proyecto está distribuido bajo la Licencia [Apache 2.0](LICENSE).
