'use client';
 
import {useSelectedLayoutSegment} from 'next/navigation';
import {ComponentProps} from 'react';
import {Link as IntlLink} from '@/i18n/routing';
 
export default function Link({
  href,
  ...rest
}: ComponentProps<typeof IntlLink>) {
  const selectedLayoutSegment = useSelectedLayoutSegment();
  const pathname = selectedLayoutSegment ? `/${selectedLayoutSegment}` : '/';
  const isActive = pathname === href;
 
  return (
    <IntlLink
      aria-current={isActive ? 'page' : undefined}
      href={href}
      style={{fontWeight: isActive ? 'bold' : 'normal'}}
      {...rest}
    />
  );
}