# Configuración de Información Personal

## 📋 Configuración Inicial

Este proyecto protege tu información personal mediante archivos de configuración que **NO se suben a GitHub**.

### Pasos para configurar:

1. **Copia el archivo de ejemplo:**
   ```bash
   cp src/config/personalInfo.example.ts src/config/personalInfo.ts
   ```

2. **Edita `personalInfo.ts` con tu información:**
   - Nombre completo y nombre corto
   - Teléfono y email
   - Perfil de LinkedIn
   - Ruta de tu CV
   - Ruta de tu foto de perfil

3. **¡Listo!** El archivo `personalInfo.ts` está en `.gitignore` y no se subirá a GitHub.

## 🔒 Seguridad

- ✅ `personalInfo.ts` - **NO se sube** a GitHub (protegido)
- ✅ `personalInfo.example.ts` - **SÍ se sube** como referencia

## 📝 Estructura del archivo

```typescript
export const personalInfo = {
  nombreCompleto: "Tu Nombre Completo",
  nombreCorto: "Tu Nombre",
  telefono: "555-555-5555",
  email: "tu.email@ejemplo.com",
  linkedinNombre: "Tu Nombre en LinkedIn",
  linkedinUrl: "https://www.linkedin.com/in/tu-perfil/",
  cvPath: "/tu-cv.pdf",
  fotoPath: "@/assets/tu-foto.jpg",
  titulo: "Tu Profesión",
  descripcion: "Tu descripción profesional"
};
```

## ⚠️ Importante

**Nunca compartas o subas el archivo `personalInfo.ts` a repositorios públicos.**
