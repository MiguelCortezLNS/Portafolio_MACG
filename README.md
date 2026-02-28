# Portafolio Personal - React + TypeScript + Vite

Este es un portafolio web moderno construido con React, TypeScript y Vite.

## 🚀 Configuración Inicial

### 1. Clonar el repositorio
```bash
git clone <tu-repositorio>
cd portafolio
```

### 2. Instalar dependencias
```bash
npm install
```

### 3. **IMPORTANTE: Configurar información personal**

Este proyecto protege tu información personal. Necesitas crear tu propio archivo de configuración:

```bash
# En Windows PowerShell
Copy-Item src\config\personalInfo.example.ts src\config\personalInfo.ts

# En Linux/Mac
cp src/config/personalInfo.example.ts src/config/personalInfo.ts
```

Luego edita `src/config/personalInfo.ts` con tu información:
- Nombre completo y corto
- Teléfono y email
- Perfil de LinkedIn
- Ruta de tu CV y foto

**⚠️ El archivo `personalInfo.ts` NO se sube a GitHub por seguridad.**

### 4. Iniciar servidor de desarrollo
```bash
npm run dev
```

## 🔒 Seguridad de Datos Personales

- ✅ `src/config/personalInfo.ts` - **Protegido** (incluido en `.gitignore`)
- ✅ `src/config/personalInfo.example.ts` - **Público** (plantilla de ejemplo)

Lee más en [src/config/README.md](src/config/README.md)

---

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
