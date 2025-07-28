# 🐼 Bambu Shop

**Bambu Shop** es una tienda e-commerce moderna desarrollada con **Angular 19**, **Firebase** y **Tailwind CSS v3**. Permite a los usuarios explorar productos, añadirlos al carrito o wishlist, registrarse, iniciar sesión, y mucho más. Soporta verificación por correo electrónico e internacionalización (ngx-translate).

---
## 🚀 Demo en vivo

Puedes probar la aplicación en el siguiente enlace:
```bash
https://ecomers---bambu-mobile.firebaseapp.com/Bambu-shop
   ```
---
## 📁 Pasos para ejecutar el proyecto localmente

1. Clona el repositorio:
   ```bash
   git clone https://github.com/jesus3004/Bambu-shop.git
   cd bambu-shop
   ```

2. Instala las dependencias del proyecto:
   ```bash
   npm install
   ```

3. Configura el entorno de Firebase:
   - Crea un archivo `src/environments/environment.ts` y otro `environment.prod.ts` con esta estructura:
     ```ts
     export const environment = {
       production: false,
       firebaseConfig: {
         apiKey: 'YOUR_API_KEY',
         authDomain: 'YOUR_AUTH_DOMAIN',
         projectId: 'YOUR_PROJECT_ID',
         storageBucket: 'YOUR_STORAGE_BUCKET',
         messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
         appId: 'YOUR_APP_ID'
       }
     };
     ```

4. Inicia el servidor de desarrollo:
   ```bash
   ng serve
   ```

5. Abre tu navegador en:
   ```
   http://localhost:4200/
   ```

---

## 🔥 Configuración de Firebase

Este proyecto utiliza los siguientes módulos de Firebase:

- **Authentication**: Registro, login, recuperación y verificación de correo.
- **Firestore**:
  - `/users`: Información del perfil de usuario.
  - `/carts/{uid}/items`: Productos del carrito.
  - `/wishlists/{uid}/items`: Lista de favoritos.

La configuración se carga desde el archivo `environment.ts`.

---

## ⚙️ Explicación breve de las decisiones técnicas

### 🧠 ¿Por qué usaste ese patrón de estado?

Se implementó un patrón de estado personalizado utilizando `BehaviorSubject` desde `RxJS` a través de un servicio centralizado (`StateService`). Las razones para esta elección fueron:

- Mayor **simplicidad** en comparación con herramientas como NgRx.
- Control total sobre el flujo y la mutación del estado.
- Ideal para un proyecto de tamaño mediano sin necesidad de boilerplate extra.
- Permite compartir el estado globalmente y reaccionar a cambios de manera reactiva.

Los estados centralizados incluyen:  
- Autenticación (`auth$`)  
- Productos (`products$`)  
- Carrito (`cart$`)  
- Wishlist (`wishlist$`)  
- Carga (`loading$`)

---

### 🧩 ¿Cómo estructuraste los módulos?

La aplicación está organizada de forma modular para facilitar el mantenimiento y escalabilidad:

```
src/
├── app/
│   ├── auth/              → Registro, login, recuperación de contraseña
│   ├── core/              → Servicios globales como AuthService, CartService, StateService
│   ├── pages/             → Páginas principales de la aplicación
│   ├── shared/            → Componentes reutilizables y utilidades (pipes, directivas)
│   └── app-routing.module.ts → Rutas con protección mediante guards (canActivate)
├── environments/          → Configuración de Firebase
```

También se implementó **lazy loading** para cargar módulos bajo demanda y **rutas protegidas** para evitar el acceso no autorizado a funcionalidades como el carrito o la wishlist.

---

## 🌍 Internacionalización

Se utiliza `ngx-translate` para soportar múltiples idiomas. Los archivos de traducción están en:

```
src/assets/i18n/
├── en.json
├── es.json
```

---

## 📦 API de productos

Se utiliza `https://dummyjson.com/products` para obtener productos, categorías y simular operaciones de búsqueda y filtrado.

---

## 📄 Licencia

Este proyecto está bajo la Licencia MIT.

---

## 👤 Autor

**Jesús Armando Rosario Luna**  
[GitHub](https://github.com/tu-usuario)
