# 🛠️ Guía Rápida de Edición en HTML y Visual Studio · EduToken LMS

Esta guía explica de forma clara y sencilla cómo modificar y personalizar la plataforma utilizando **HTML directo** o **Visual Studio / VS Code**, y cómo abrirla en **Google Chrome** con un solo clic.

---

## ⚡ Cómo Abrir en Google Chrome con 1 Clic

- **En Windows:** Haz doble clic en el archivo `abrir_en_chrome.bat`. Iniciará el servidor y abrirá Google Chrome automáticamente en `http://localhost:3000`.
- **En Mac / Linux:** Ejecuta `./abrir_en_chrome.sh` en tu terminal.
- **En Visual Studio:** Abre el proyecto y presiona **`F5`** (perfil *Fullstack: Server + Chrome*).

---

## 🌐 Opción 1: Cómo Editar Directamente en HTML (`index.html`)

No necesitas saber programación avanzada para personalizar tu colegio o institución. Todo se puede editar directamente abriendo el archivo [`index.html`](index.html) con cualquier editor de texto o Visual Studio.

### 1. Modificar el Título de la Pestaña
En la línea 11 de `index.html`:
```html
<title>EduToken LMS | Tu Colegio Aquí</title>
```

### 2. Modificar los Datos del Colegio y Diplomas
Dentro de `index.html` encontrarás el bloque `window.EDUTOKEN_HTML_CONFIG` (alrededor de la línea 48):
```html
<script>
  window.EDUTOKEN_HTML_CONFIG = {
    // 1. Nombre oficial de tu colegio o institución:
    institutionName: "Liceo Moderno del Saber",

    // 2. Nombre y cargo de quien firma los certificados:
    rectorName: "Lic. Roberto Martínez",
    rectorTitle: "Rector Institucional",

    // 3. Texto legal para el diploma oficial:
    signatureText: "Firma Digital Autorizada - Resolución MEN N° 1234-2026",
    legalText: "Certifica que el estudiante culminó con éxito los logros curriculares correspondientes.",

    // 4. Logo o emoji institucional:
    logoEmoji: "🏫", // Puedes poner 🎓, 🏫, 📚, ⭐, etc.

    // 5. Título y subtítulo de la pantalla principal:
    appTitle: "Liceo Moderno LMS",
    appSubtitle: "Portal de acceso académico sin contraseñas",
  };
</script>
```

### 3. Crear Nuevas Llaves de Alumnos Directamente en HTML
En el mismo archivo `index.html`, dentro de `additionalKeys`:
```html
additionalKeys: [
  {
    keyCode: "ALUMNO-4P-2026",
    studentName: "Santiago Morales",
    grade: 5,                  // Grado escolar de 1 a 11
    allowedPeriods: [1, 2, 3], // Periodos habilitados
    role: "student"
  }
]
```
*(Guarda el archivo y al recargar la página la nueva llave ya estará activa).*

### 4. Herramienta Visual Asistida (`public/editor.html`)
Si prefieres una interfaz gráfica, abre en tu navegador el archivo `public/editor.html`. Podrás escribir los nombres y copiar el código generado directamente.

---

## 💻 Opción 2: Cómo Editar en Visual Studio / VS Code

El proyecto está preparado para abrirse con 1 solo clic en **Visual Studio Code** o **Visual Studio 2022**:

### 1. Abrir el Proyecto
- Haz doble clic en el archivo [`edutoken-lms.code-workspace`](edutoken-lms.code-workspace) o abre Visual Studio y selecciona **Archivo $\to$ Abrir carpeta...** eligiendo la raíz del proyecto.
- Presiona **`F5`** para iniciar el servidor de desarrollo y ver los cambios en tiempo real en `http://localhost:3000`.

### 2. Dónde Editar Cada Elemento del Sistema

| Qué deseas editar | Archivo a modificar | Qué encontrarás allí |
| :--- | :--- | :--- |
| **Preguntas de Exámenes** | `src/data/mockCurriculum.ts` | Preguntas de opción múltiple y preguntas abiertas con rúbricas para calificación con IA. |
| **Lecciones y Contenidos** | `src/data/mockCurriculum.ts` | Títulos, resúmenes, textos en Markdown y enlaces a videos explicativos. |
| **Asignaturas Troncales** | `src/data/mockCurriculum.ts` (línea 10) | Nombres, descripciones, colores de acento e iconos de las 5 materias. |
| **Llaves de prueba iniciales** | `src/data/mockCurriculum.ts` (línea 63) | Lista de tokens precargados como `SOF-1P-4921`, `ALE-2P-8832`, etc. |
| **Datos por defecto del colegio** | `src/data/mockCurriculum.ts` (línea 385) | Nombre del rector, resolución y membrete institucional. |
| **Diseño y Colores Globales** | `src/index.css` | Importación de Tailwind CSS v4, fuentes y variables de color. |
| **Pantalla de Inicio** | `src/App.tsx` | Formulario de login, textos del aula y modal de llaves demo. |
| **Barra Superior** | `src/components/common/TopBar.tsx` | Logotipo, selector de perfiles y botones de salida. |
| **Aula de Primaria (1°-5°)** | `src/components/student/PrimaryDashboard.tsx` | Estilo lúdico, medallas, botones alegres y selector de trimestres. |
| **Aula de Secundaria (6°-11°)** | `src/components/student/SecondaryDashboard.tsx` | Dashboard académico minimalista, indicadores KPIs y lecturas. |
| **Cuestionarios y Notas** | `src/components/student/ExamView.tsx` | Pantalla de examen, calificación automática, animación de confeti y feedback. |
| **Diploma Oficial en PDF** | `src/services/certificatePdf.ts` | Diseño del diploma descargable (márgenes, tipografía y sellos). |
| **Panel de Rectoría / Admin** | `src/components/admin/AdminDashboard.tsx` | Generador interactivo de llaves, editor visual de contenidos y monitor de notas. |

---

### 3. Ejemplo: Cómo Agregar una Pregunta a un Examen en Visual Studio
Abre [`src/data/mockCurriculum.ts`](src/data/mockCurriculum.ts) y busca `INITIAL_EXAMS`. Cada pregunta es un bloque como este:

```typescript
// Para una pregunta de selección múltiple:
{
  id: 'q-nueva-1',
  type: 'multiple_choice',
  prompt: '¿Cuál es el planeta más grande del sistema solar?',
  options: ['Marte', 'Júpiter', 'Saturno', 'Tierra'],
  correctOptionIndex: 1, // 0 = A, 1 = B, 2 = C, 3 = D
  points: 25,
}

// Para una pregunta abierta (evaluada con IA según rúbrica):
{
  id: 'q-nueva-2',
  type: 'open',
  prompt: 'Explica con tus palabras la importancia del ciclo del agua para los seres vivos.',
  points: 25,
  rubricCriteria: 'Evaluar que mencione evaporación, condensación y precipitación, así como el sustento vital para plantas y animales.',
}
```

---

### 4. Comandos Útiles en la Terminal de Visual Studio

```bash
# Iniciar servidor de desarrollo con recarga en vivo:
npm run dev

# Compilar para producción (generar carpeta dist/):
npm run build

# Verificar que no haya errores de tipado:
npm run lint
```
