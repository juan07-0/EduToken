# 📂 Guía Oficial: Tu Plataforma Lista en `index.html`

Todo el sistema ha sido unificado en **`index.html`**. Puedes descargarlo, abrirlo directamente con doble clic en **Google Chrome** y se ejecutará sin ningún error y sin necesidad de instalar programas adicionales.

---

## 🌟 1. El Archivo Principal que Necesitas

Solo necesitas:

```text
MiColegioLMS/
│
├── index.html            ⭐ (EL SISTEMA COMPLETO: Doble clic para abrir en Chrome)
└── abrir_en_chrome.bat   🚀 (Lanzador opcional para Windows con 1 solo clic)
```

> **¿Qué contiene `index.html`?**  
> Todo el colegio completo:
> - 🔑 **Acceso con Llaves Token** (Ej: `SOF-1P-4921`, `ALE-2P-8832`, `ADM-MASTER-2026`).
> - 🎈 **Aula Infantil de Primaria** (Grados 1° a 5°) con diseño alegre y lúdico.
> - 📐 **Aula Académica de Secundaria** (Grados 6° a 11°) con métricas y promedio.
> - 🧮 **Las 5 Materias Oficiales:** Matemáticas, Lenguaje, Ciencias Naturales, Ciencias Sociales e Inglés.
> - 📝 **Exámenes Interactivos** con calificación automática inmediata.
> - 🎉 **Animación con Confeti** al aprobar.
> - 🏆 **Generador y Descargador de Diplomas Oficiales en PDF** con firma del rector y folio legal.
> - 🔐 **Panel de Rectoría / Administración** para crear llaves de nuevos alumnos.

---

## 🛠️ 2. Cómo Usarlo en Visual Studio y Google Chrome

### Paso 1: Abrir en Visual Studio / VS Code
1. Abre **Visual Studio Code** (o Visual Studio).
2. Haz clic en **Archivo** $\to$ **Abrir archivo...** y selecciona `index.html`.
3. Ya puedes editar cualquier texto, nombre del colegio o rector.

### Paso 2: Ejecutar en Google Chrome
Tienes 3 opciones inmediatas:
1. **Doble clic:** Ve a la carpeta y haz doble clic sobre `index.html` (o sobre `abrir_en_chrome.bat`). Se abrirá directamente en Google Chrome.
2. **Arrastrar a Chrome:** Abre una pestaña en Google Chrome y arrastra el archivo `index.html` adentro.
3. **Clic derecho:** En Visual Studio, haz clic derecho en `index.html` $\to$ **Abrir con Google Chrome**.

---

## ✏️ 3. Cómo Personalizar los Datos de tu Colegio en `index.html`
Abre `index.html` en Visual Studio. En las líneas 80 a 90 encontrarás:

```javascript
window.COLEGIO_CONFIG = {
  institutionName: "Nombre de tu Colegio",
  rectorName: "Nombre del Rector o Rectora",
  rectorTitle: "Rector General",
  signatureText: "Resolución Oficial N° 1234",
  logoEmoji: "🎓",
  brandName: "EduToken LMS"
};
```
Cambia esos textos, guarda con **`Ctrl + S`**, recarga la pestaña en Google Chrome (**`F5`**) ¡y verás los cambios reflejados al instante!
