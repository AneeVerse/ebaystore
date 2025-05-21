// This file is no longer needed since we've moved revalidation to layout.js
// The error was caused by trying to export revalidation from a client component
// Keeping this file as a note, but it's not being used anymore

// Do NOT use this in client components (marked with 'use client')
// In client components, Next.js cannot properly handle the revalidate export
// Instead, use this in server components like layout.js
const REVALIDATION_TIME = 60 * 60; // 1 hour in seconds 