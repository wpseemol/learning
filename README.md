## Learning Three.js – My Journey

This repository documents my personal journey learning **Three.js**, a JavaScript library for creating 3D graphics in the browser using WebGL.  
I will track my progress, experiments, successes, and mistakes here.

### Why I’m Learning Three.js

- **3D on the web**: I want to understand how 3D scenes, cameras, lights, and materials work in the browser.
- **Creative projects**: I’d like to build interactive visuals, animations, and maybe small games or data visualizations.
- **Stronger fundamentals**: While learning Three.js, I also want to improve my JavaScript, math for 3D (vectors, matrices), and graphics concepts.

### Goals

- **Short-term**
    - Understand the basic Three.js concepts: `Scene`, `Camera`, `Renderer`, `Mesh`, `Geometry`, and `Material`.
    - Render my first 3D object (a cube) and animate it.
    - Learn how to orbit around a scene and control the camera.

- **Medium-term**
    - Work with lights, shadows, textures, and environment maps.
    - Load 3D models (e.g. `.glb` / `.gltf`) into a scene.
    - Build at least one small interactive demo (e.g. a 3D portfolio scene or a mini game).

- **Long-term**
    - Feel comfortable starting a 3D project from scratch.
    - Understand performance basics and how to optimize scenes.
    - Publish one or more Three.js projects online.

### Prerequisites

I expect to use and improve these skills while learning:

- Basic **HTML**, **CSS**, and **JavaScript**
- Node.js and npm (optional, but helpful for running local dev servers and bundlers)
- A modern browser (Chrome, Firefox, Edge)

### Project Structure

(This is a template; I will adjust as my project grows.)

- `src/`
    - `01-basic-scene/` – first experiments (scene, camera, renderer, cube)
    - `02-lights-materials/` – lights, different materials, shadows
    - `03-textures-models/` – textures, loading 3D models
    - `04-interactions/` – camera controls, mouse/keyboard input, GUI
    - `experiments/` – random tests and prototypes
- `public/` – static files like textures, models, and images
- `README.md` – this learning journal

### How to Run the Examples

(Adjust these instructions to match your setup.)

- **Option 1 – Simple local server**
    - Use a simple static server (for example with `npm`):
      npm install -g serve
      serve .
