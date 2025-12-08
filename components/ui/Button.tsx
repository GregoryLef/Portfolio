'use client';

import Link from 'next/link';
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'back';
  type?: 'button' | 'submit';
  children: React.ReactNode;
  href?: string;
  external?: boolean;
}

export function Button({
  variant = 'primary',
  type = 'button',
  disabled = false,
  href,
  children,
  className,
  external = false,
  ...props
}: ButtonProps) {
  let variantClasses = '';
  switch (variant) {
    case 'primary':
      variantClasses =
        'bg-secondary text-primary border-2 border-primary hover:bg-accent hover:text-textPrimary hover:border-textPrimary';
      break;
    case 'back':
      variantClasses =
        'bg-background text-primary border-2 border-primary hover:bg-accent hover:text-textPrimary hover:border-textPrimary';
      break;
  }

  const fullClasses = `px-5 py-2.5 rounded-md font-bold transition-colors disabled:opacity-50 min-w-64 w-fit ${variantClasses} font-tittle text-xl text-center whitespace-nowrap ${className}`;

  if (href) {
    return (
      <Link
        href={href}
        className={fullClasses}
        target={external ? '_blank' : '_self'}
        rel={external ? 'noopener noreferrer' : undefined}
      >
        {children}
      </Link>
    );
  }

  return (
    <button type={type} disabled={disabled} className={fullClasses} {...props}>
      {children}
    </button>
  );
}
