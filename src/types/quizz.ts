import type { ComponentType } from 'react';

export type SortKey = 'az' | 'za' | 'popular' | 'newest' | 'oldest';

export interface Level {
  label: string;
  bgClass: string;
  textClass: string;
  selectedClass: string;
  hoverClass: string;
}

export interface SortOptionConfig {
  key: SortKey;
  label: string;
  Icon: ComponentType;
}
