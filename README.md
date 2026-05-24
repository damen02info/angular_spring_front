# Inventory Stock Management Frontend - Explanation

This repository contains the frontend for a practice inventory stock application built with **Angular 21** and prepared to connect to the Spring Boot backend.

---

## Tech Stack Applied

- **Angular 21**: Core framework for the UI.
- **TypeScript**: Strong typing and application structure.
- **Angular Router**: Navigation between product list, add, and edit views.
- **Angular Forms**: Template-driven forms for creating and editing products.
- **HttpClient**: Communication with the backend REST API.

---

## Architecture & How It Works

The frontend follows a simple component-based structure:

```text
src/app/
├── app.config.ts
├── app.html
├── app.routes.ts
├── app.ts
├── components/
│   ├── agregar-producto/
│   │   ├── agregar-producto.ts
│   │   ├── agregar-producto.html
│   │   └── agregar-producto.css
│   ├── editar-producto/
│   │   ├── editar-producto.ts
│   │   └── editar-producto.html
│   └── producto-lista/
│       ├── producto-lista.ts
│       └── producto-lista.html
├── models/
│   └── producto.ts
└── services/
    └── producto.service.ts
```

---

## Data Flow Execution

### 1. Model Layer

The `Producto` class defines the product structure:

- `idProducto`
- `descripcion`
- `precio`
- `existencia`

It is used as the shared data model across forms, lists, and service requests.

---

### 2. Service Layer

`ProductoService` handles all HTTP communication with the backend using `HttpClient`.

Base API endpoint:

```ts
http://localhost:8080/api/productos
```

Available methods:

- `obtenerProductosLista()`
- `agregarProducto(producto)`
- `obtenerProductoPorId(id)`
- `editarProducto(id, producto)`
- `eliminarProducto(id)`

---

### 3. Component Layer

The frontend UI is composed of three main components:

#### ProductoLista

Responsible for:

- Loading all products
- Displaying the inventory table
- Deleting products
- Navigating to the edit view

#### AgregarProducto

Responsible for:

- Displaying the product creation form
- Sending new product data to the backend

#### EditarProducto

Responsible for:

- Loading a product by ID
- Updating product information
- Redirecting back to the product list

---

### 4. Routing

`app.routes.ts` defines the application routes:

```ts
{ path: 'productos', component: ProductoLista },
{ path: '', redirectTo: 'productos', pathMatch: 'full' },
{ path: 'agregar-producto', component: AgregarProducto },
{ path: 'editar-producto/:id', component: EditarProducto }
```

The root route redirects automatically to the product list.

---

### 5. Root Shell

`app.html` contains the main navigation bar and the `router-outlet` where each component view is rendered.

---

## Run the Application

From the frontend project directory:

```bash
npm install
npm start
```

Then open:

```text
http://localhost:4200
```

---

## Backend Connection

The frontend expects the backend REST API to be available at:

```text
http://localhost:8080/api/productos
```

If the backend runs on another port or host, update the base URL inside:

```text
src/app/services/producto.service.ts
```

---

## Summary

- Frontend developed with **Angular 21**
- CRUD interface for inventory products
- Component-based architecture
- Routing for listing, adding, and editing products
- HTTP communication with Spring Boot backend
- Uses Angular Forms and HttpClient

---
---

# Gestión de Stock de Inventario - Explicación del Frontend

Este repositorio contiene el frontend para una aplicación de gestión de stock de inventario desarrollada con **Angular 21**, preparada para conectarse a un backend en Spring Boot.

---

## Tecnologías Aplicadas

- **Angular 21**: Framework principal para la interfaz de usuario.
- **TypeScript**: Tipado fuerte y estructura de aplicación.
- **Angular Router**: Navegación entre lista, agregar y editar productos.
- **Angular Forms**: Formularios para crear y editar productos.
- **HttpClient**: Comunicación con la API REST del backend.

---

## Arquitectura y Funcionamiento

El frontend sigue una estructura simple basada en componentes:

```text
src/app/
├── app.config.ts
├── app.html
├── app.routes.ts
├── app.ts
├── components/
│   ├── agregar-producto/
│   │   ├── agregar-producto.ts
│   │   ├── agregar-producto.html
│   │   └── agregar-producto.css
│   ├── editar-producto/
│   │   ├── editar-producto.ts
│   │   └── editar-producto.html
│   └── producto-lista/
│       ├── producto-lista.ts
│       └── producto-lista.html
├── models/
│   └── producto.ts
└── services/
    └── producto.service.ts
```

---

## Flujo de Ejecución de los Datos

### 1. Capa Modelo

La clase `Producto` define la estructura del producto:

- `idProducto`
- `descripcion`
- `precio`
- `existencia`

Se utiliza como modelo compartido entre formularios, listas y peticiones HTTP.

---

### 2. Capa de Servicio

`ProductoService` gestiona toda la comunicación HTTP con el backend mediante `HttpClient`.

Endpoint base de la API:

```ts
http://localhost:8080/api/productos
```

Métodos disponibles:

- `obtenerProductosLista()`
- `agregarProducto(producto)`
- `obtenerProductoPorId(id)`
- `editarProducto(id, producto)`
- `eliminarProducto(id)`

---

### 3. Capa de Componentes

La interfaz está compuesta por tres componentes principales:

#### ProductoLista

Responsable de:

- Cargar todos los productos
- Mostrar la tabla de inventario
- Eliminar productos
- Navegar hacia la vista de edición

#### AgregarProducto

Responsable de:

- Mostrar el formulario de creación
- Enviar nuevos productos al backend

#### EditarProducto

Responsable de:

- Cargar un producto por ID
- Actualizar información del producto
- Regresar a la lista de productos

---

### 4. Enrutamiento

`app.routes.ts` define las rutas de la aplicación:

```ts
{ path: 'productos', component: ProductoLista },
{ path: '', redirectTo: 'productos', pathMatch: 'full' },
{ path: 'agregar-producto', component: AgregarProducto },
{ path: 'editar-producto/:id', component: EditarProducto }
```

La ruta raíz redirige automáticamente a la lista de productos.

---

### 5. Shell Principal

`app.html` contiene la barra principal de navegación y el `router-outlet` donde se renderiza cada vista.

---

## Ejecutar la Aplicación

Desde la carpeta del proyecto frontend:

```bash
npm install
npm start
```

Luego abrir:

```text
http://localhost:4200
```

---

## Conexión con el Backend

El frontend espera que la API REST del backend esté disponible en:

```text
http://localhost:8080/api/productos
```

Si el backend utiliza otro puerto o dirección, actualiza la URL base dentro de:

```text
src/app/services/producto.service.ts
```

---

## Resumen

- Frontend desarrollado con **Angular 21**
- Interfaz CRUD para productos de inventario
- Arquitectura basada en componentes
- Rutas para listar, agregar y editar productos
- Comunicación HTTP con backend Spring Boot
- Uso de Angular Forms y HttpClient
