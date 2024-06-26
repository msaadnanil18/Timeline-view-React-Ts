declare module 'react-calendar-timeline' {
    import { ComponentType } from 'react';
  
    export interface Group {
      id: number | string;
      title: string;
    }
  
    export interface Item {
      id: number | string;
      group: number | string;
      title: string;
      start_time: any;
      end_time: any;
      canMove?: boolean;
      canResize?: boolean | 'left' | 'right' | 'both';
      canChangeGroup?: boolean;
      className?: string;
      style?: React.CSSProperties;
      itemProps?: React.HTMLAttributes<HTMLDivElement>;
    }
  
    export interface TimelineProps {
      groups: Group[];
      items: Item[];
      defaultTimeStart: any;
      defaultTimeEnd: any;
      visibleTimeStart?: any;
      visibleTimeEnd?: any;
      onTimeChange?: (visibleTimeStart: any, visibleTimeEnd: any, updateScrollCanvas: (start: any, end: any) => void) => void;
      onItemMove?: (itemId: number | string, dragTime: any, newGroupOrder: number) => void;
      onItemResize?: (itemId: number | string, time: any, edge: 'left' | 'right') => void;
    }
  
    const Timeline: ComponentType<TimelineProps>;
  
    export default Timeline;
  }
  