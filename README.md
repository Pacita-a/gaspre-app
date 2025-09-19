
# Gaspre App

Gaspre App es una aplicación desarrollada con **Angular 15**, creada para representar la vista de un sistema de reservas de turno para un gimnasio.
---

## 📦 Tecnologías

- **Framework:** Angular 15  
- **Lenguaje:** TypeScript  
- **Reactive Programming:** RxJS 7  
- **Gestión de dependencias:** npm  
- **Testing:** Jasmine + Karma  

---

## ⚡ Requisitos

- Node.js >= 18  
- npm >= 9  
- Angular CLI 15  

---

## 🚀 Instalación

1. Clonar el repositorio:  
```bash
git clone <URL_DEL_REPOSITORIO>
```

2. Entrar en la carpeta del proyecto:  
```bash
cd gaspre-app
```

3. Instalar dependencias:  
```bash
npm install
```

---

## 🏃‍♂️ Comandos disponibles

| Comando | Descripción |
|---------|-------------|
| `npm start` | Inicia la aplicación en modo desarrollo. Acceder en `http://localhost:4200/` |
| `npm run build` | Genera el build de producción de la app |
| `npm run watch` | Genera el build en modo desarrollo y observa cambios |
| `npm test` | Ejecuta los tests unitarios con Karma + Jasmine |

---

## 🧩 Estructura del proyecto

```text
src/
 ├─ app/          # Módulos y componentes de la aplicación
 ├─ assets/       # Recursos estáticos (imágenes, estilos, etc.)
 ├─ environments/ # Configuración de entornos
 └─ main.ts       # Entrada principal de la aplicación
```

---

## 🔧 Configuración de Angular

- Angular CLI versión: 15.2.11  
- TypeScript: 4.9.4

---


### 🧩 Comunicación entre componentes

En **Gaspre App**, la comunicación entre componentes se realiza mediante **@Input() y @Output()**:

- El **componente padre** `BookingList` envía al **componente hijo** `BookingDetail` los datos de la clase seleccionada mediante `@Input()`.  
- El **componente hijo** `BookingDetail` notifica al padre cuando el **modal fue cerrado** mediante `@Output()` con `EventEmitter`.  

> ⚡ Nota: Actualmente se usa Input/Output para la comunicación directa, pero para aplicaciones más grandes y robustas se podría incorporar **Redux / NgRx**. Esto permitiría manejar una **única fuente de datos centralizada**, facilitando la gestión del estado y la comunicación entre múltiples componentes sin depender de la jerarquía padre-hijo.