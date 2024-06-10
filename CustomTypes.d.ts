export type StringWithAutocomplete<T> = T | (string & Record<never, never>);
