'use client';

import { PortableText } from '@portabletext/react';
import Image from 'next/image';
import Link from 'next/link';

// Custom components for portable text rendering
const components = {
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) {
        return null;
      }
      return (
        <div className="my-8 relative w-full aspect-video">
          <Image
            src={value.asset.url}
            alt={value.alt || ''}
            fill
            className="object-cover rounded-lg"
          />
          {value.caption && (
            <p className="text-sm text-gray-600 mt-2 text-center">
              {value.caption}
            </p>
          )}
        </div>
      );
    },
    table: ({ value }) => {
      const { rows = [], hasHeaderRow } = value;

      return (
        <div className="my-8 overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 border border-gray-200 rounded-lg">
            {rows.length > 0 && hasHeaderRow && (
              <thead className="bg-gray-50">
                <tr>
                  {rows[0].cells.map((cell, cellIndex) => (
                    <th
                      key={cellIndex}
                      className="px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider border border-gray-200"
                    >
                      {cell}
                    </th>
                  ))}
                </tr>
              </thead>
            )}
            <tbody className="bg-white divide-y divide-gray-200">
              {rows.slice(hasHeaderRow ? 1 : 0).map((row, rowIndex) => (
                <tr key={rowIndex} className={rowIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  {row.cells.map((cell, cellIndex) => (
                    <td
                      key={cellIndex}
                      className="px-6 py-4 whitespace-normal text-sm text-gray-700 border border-gray-200"
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    },
  },
  marks: {
    link: ({ children, value }) => {
      const target = (value?.href || '').startsWith('http') ? '_blank' : undefined;
      return (
        <Link 
          href={value?.href || '#'} 
          target={target} 
          rel={target === '_blank' ? 'noopener noreferrer' : undefined}
          className="text-primary-600 hover:underline"
        >
          {children}
        </Link>
      );
    },
    strong: ({ children }) => <strong className="font-semibold">{children}</strong>,
    em: ({ children }) => <em className="italic">{children}</em>,
    code: ({ children }) => (
      <code className="bg-gray-100 rounded px-1 py-0.5 font-mono text-sm">{children}</code>
    ),
  },
  block: {
    h1: ({ children }) => <h1 className="text-3xl font-bold mt-8 mb-4 text-[#101828]">{children}</h1>,
    h2: ({ children }) => <h2 className="text-2xl font-bold mt-8 mb-4 text-[#101828]">{children}</h2>,
    h3: ({ children }) => <h3 className="text-xl font-bold mt-6 mb-4 text-[#101828]">{children}</h3>,
    h4: ({ children }) => <h4 className="text-lg font-bold mt-6 mb-2 text-[#101828]">{children}</h4>,
    normal: ({ children }) => <p className="mb-4 text-gray-700">{children}</p>,
    blockquote: ({ children }) => (
      <blockquote className="pl-4 border-l-4 border-primary-500 italic my-6 text-gray-700">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => <ul className="list-disc pl-6 mb-6 text-gray-700">{children}</ul>,
    number: ({ children }) => <ol className="list-decimal pl-6 mb-6 text-gray-700">{children}</ol>,
  },
  listItem: {
    bullet: ({ children }) => <li className="mb-2">{children}</li>,
    number: ({ children }) => <li className="mb-2">{children}</li>,
  },
};

export default function SanityPortableText({ value }) {
  if (!value) {
    return null;
  }

  return (
    <div className="portable-text">
      <PortableText value={value} components={components} />
    </div>
  );
} 