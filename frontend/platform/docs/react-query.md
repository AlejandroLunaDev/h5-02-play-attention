# React Query (TanStack Query) Documentation

Este proyecto utiliza [TanStack Query v5](https://tanstack.com/query/latest) (anteriormente React Query) para la gestión de estado del servidor y operaciones asíncronas.

## Configuración

La configuración de React Query está implementada en `shared/providers/QueryProvider.jsx`. Este proveedor ya está integrado en el layout principal de la aplicación.

Las opciones por defecto configuradas son:

```js
{
  queries: {
    staleTime: 60 * 1000, // 1 minuto
    gcTime: 5 * 60 * 1000, // 5 minutos
    retry: 1,
    refetchOnWindowFocus: false,
  }
}
```

## Uso básico

### Hooks disponibles

Hemos creado hooks personalizados en `shared/lib/hooks/useQuery.js` para simplificar el uso de React Query:

- `useApiQuery`: Para realizar consultas (GET)
- `useApiMutation`: Para realizar mutaciones (POST, PUT, DELETE, etc.)

### Ejemplos de uso

#### Consulta básica (GET)

```jsx
import { useApiQuery } from '@/shared/lib/hooks';

function MiComponente() {
  const { data, isLoading, error } = useApiQuery('clave-unica', '/ruta-api');

  if (isLoading) return <div>Cargando...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return <div>{data.nombre}</div>;
}
```

#### Consulta con parámetros

```jsx
const { data } = useApiQuery(['usuarios', userId], `/users/${userId}`, {
  queryOptions: {
    enabled: !!userId
  }
});
```

#### Mutación (POST, PUT, DELETE)

```jsx
import { useApiMutation } from '@/shared/lib/hooks';
import { useQueryClient } from '@tanstack/react-query';

function CrearUsuario() {
  const queryClient = useQueryClient();

  const { mutate, isPending, isSuccess } = useApiMutation({
    endpoint: '/users',
    fetchOptions: { method: 'POST' },
    mutationOptions: {
      onSuccess: () => {
        // Invalidar consultas relacionadas para refrescar datos
        queryClient.invalidateQueries({ queryKey: ['users'] });
      }
    }
  });

  function handleSubmit(data) {
    mutate(data);
  }

  return (
    <button onClick={() => handleSubmit({ name: 'Nuevo usuario' })}>
      {isPending ? 'Creando...' : 'Crear usuario'}
    </button>
  );
}
```

## DevTools

Las DevTools de React Query están habilitadas en entornos de desarrollo. Puedes hacer clic en el icono flotante en la esquina inferior derecha para abrirlas.

## Funcionalidades avanzadas

### Invalidación de consultas

```js
// Invalidar una consulta específica
queryClient.invalidateQueries({ queryKey: ['usuarios'] });

// Invalidar consultas que comparten un prefijo
queryClient.invalidateQueries({ queryKey: ['usuarios'] });

// Invalidar todas las consultas
queryClient.invalidateQueries();
```

### Precarga de datos

```js
// Precargar datos para mejorar la experiencia de usuario
queryClient.prefetchQuery({
  queryKey: ['usuario', 1],
  queryFn: () => fetchApi('/users/1')
});
```

### Actualización manual del caché

```js
// Actualizar manualmente datos en caché sin hacer fetch
queryClient.setQueryData(['usuario', 1], oldData => ({
  ...oldData,
  nombre: 'Nuevo nombre'
}));
```

## Más información

Para documentación completa, visita [TanStack Query Documentation](https://tanstack.com/query/latest/docs/react/overview).
