'use client';

import { useApiQuery, useApiMutation } from '@/shared/lib/hooks';
import { useQueryClient } from '@tanstack/react-query';

export function ExampleComponent() {
  const queryClient = useQueryClient();

  // Example of a query using our custom hook
  const { data, isLoading, error } = useApiQuery('users', '/users', {
    queryOptions: {
      enabled: true,
      refetchOnWindowFocus: false
    }
  });

  // Example of a mutation using our custom hook
  const {
    mutate: createUser,
    isPending,
    isSuccess,
    isError
  } = useApiMutation({
    endpoint: '/users',
    fetchOptions: { method: 'POST' },
    mutationOptions: {
      onSuccess: () => {
        // Invalidate the users query to refetch after mutation
        queryClient.invalidateQueries({ queryKey: ['users'] });
      }
    }
  });

  const handleSubmit = formData => {
    createUser(formData);
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>Users List</h1>
      <ul>
        {data?.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>

      <button
        onClick={() => handleSubmit({ name: 'New User' })}
        disabled={isPending}
      >
        {isPending ? 'Creating...' : 'Create User'}
      </button>

      {isSuccess && <div>User created successfully!</div>}
      {isError && <div>Failed to create user</div>}
    </div>
  );
}
