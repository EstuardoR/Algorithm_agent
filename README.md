# Algorithm Agent Bot 

  En este proyecto se desarrollo un bot con interfaz grafica simulando un chat interactivo, construido con **React + Vite + Typescript**, Integrado con la **API de Gemini**
  de Google AI. Este proyecto demuestra cómo conectar un modelo de lenguaje a una interfaz web moderna con un diseño limpio y responsivo.

  ## 🚀 Características
  - Interfaz en tiempo real construida con **React + Vite**
  - Tipado fuerte con **Typescript**
  - Integración con **Gemini API**
  - Manejo de estado con **Hooks**
  - Diseño minimalista y adaptable
  - Respuestas dinamicas siguiento Etapas de solución de problemas

---

## 🛠️ Tecnologías

| Tecnología | Descripción |
|-------------|--------------|
| React | Librería para interfaces de usuario |
| Vite | Herramienta de build ultrarrápida |
| TypeScript | Tipado sobre JavaScript |
| Gemini API | Modelo de lenguaje de Google |
| Axios / Fetch | Llamadas HTTP a la API |

---

## 🧱 Arquitectura

1. El usuario escribe un mensaje en la interfaz.
2. El mensaje se envía al servicio `GeminiService`.
3. El backend de Gemini procesa el texto y devuelve una respuesta generada.
4. La UI actualiza la conversación en tiempo real.

--- 

## 🗺️ URL del Proyecto

Puedes probarlo en el siguiente enlace.
[Click aquí](https://algorithm-agent.vercel.app/)


--- 

## 📦 Diagrama de secuencia

```mermaid
sequenceDiagram
User->>Frontend: Escribe mensaje
Frontend->>Gemini API: Envía prompt
Gemini API-->>Frontend: Devuelve respuesta
Frontend-->>User: Muestra resultado en chat



