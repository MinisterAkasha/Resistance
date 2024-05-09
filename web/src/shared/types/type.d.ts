declare type Nullable<T> = T | null;
declare type OmitID<T extends Record<PropertyKey & 'id', unknown>> = Omit<T, 'id'>;
