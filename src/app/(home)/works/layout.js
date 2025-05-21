import { metadata } from './metadata';

// Set revalidation time (in seconds)
export const revalidate = 3600; // 1 hour

export default function WorksLayout({ children }) {
  return <>{children}</>;
} 