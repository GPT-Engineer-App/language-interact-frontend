import { createClient } from '@supabase/supabase-js';
import { useQuery, useMutation, useQueryClient, QueryClient, QueryClientProvider } from '@tanstack/react-query';

const supabaseUrl = import.meta.env.VITE_SUPABASE_PROJECT_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_API_KEY;
export const supabase = createClient(supabaseUrl, supabaseKey);

import React from "react";
export const queryClient = new QueryClient();
export function SupabaseProvider({ children }) {
    return React.createElement(QueryClientProvider, { client: queryClient }, children);
}

const fromSupabase = async (query) => {
    const { data, error } = await query;
    if (error) throw new Error(error.message);
    return data;
};

/* supabase integration types

### objects

| name       | type        | format | required |
|------------|-------------|--------|----------|
| id         | int8        | number | true     |
| created_at | timestamptz | string | true     |
| key        | text        | string | true     |
| value      | jsonb       | object | false    |
| project_id | text        | string | true     |

*/

// Example hook for models

// Hooks for objects table

export const useObjects = () => useQuery({
    queryKey: ['objects'],
    queryFn: () => fromSupabase(supabase.from('objects').select('*')),
});

export const useObject = (id) => useQuery({
    queryKey: ['objects', id],
    queryFn: () => fromSupabase(supabase.from('objects').select('*').eq('id', id).single()),
});

export const useAddObject = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (newObject) => fromSupabase(supabase.from('objects').insert([newObject])),
        onSuccess: () => {
            queryClient.invalidateQueries('objects');
        },
    });
};

export const useUpdateObject = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (updatedObject) => fromSupabase(supabase.from('objects').update(updatedObject).eq('id', updatedObject.id)),
        onSuccess: () => {
            queryClient.invalidateQueries('objects');
        },
    });
};

export const useDeleteObject = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (id) => fromSupabase(supabase.from('objects').delete().eq('id', id)),
        onSuccess: () => {
            queryClient.invalidateQueries('objects');
        },
    });
};