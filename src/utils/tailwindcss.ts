import clsx, { ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export type IBreakpoint = 'sm' | 'md' | 'lg' | 'xl';

export enum EBreakpoints {
  sm = '576px',
  md = '768px',
  lg = '1024px',
  xl = '1280px',
}

export function cn(...args: ClassValue[]) {
  return twMerge(clsx(args));
}
