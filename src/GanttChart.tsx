


import React, { useEffect, useRef } from 'react';
import Gantt from 'frappe-gantt';
import 'frappe-gantt/dist/frappe-gantt.css'; // Import the SCSS file
import { Task, GanttOptions } from 'frappe-gantt';

const tasks: Task[] = [
  {
    id: 'Task 1',
    name: 'Redesign website',
    start: '2023-01-01',
    end: '2023-01-31',
    progress: 20,
  },
  {
    id: 'Task 2',
    name: 'Develop table view app',
    start: '2023-02-01',
    end: '2023-02-28',
    progress: 50,
  },
  {
    id: 'Task 3',
    name: 'time line view app',
    start: '2023-02-01',
    end: '2023-02-28',
    progress: 40,
  },
  {
    id: 'Task 4',
    name: 'Develop mobile app',
    start: '2023-02-01',
    end: '2023-02-28',
    progress: 60,
  },
];

const options: GanttOptions = {
  view_mode: 'Day',
  on_click: (task) => {
    console.log('Clicked on:', task);
  },
  on_date_change: (task, start, end) => {
    console.log('Date changed:', task, start, end);
  },
  on_progress_change: (task, progress) => {
    console.log('Progress changed:', task, progress);
  },
  on_view_change: (mode) => {
    console.log('View mode changed:', mode);
  },
};

const GanttChart: React.FC = () => {
  const ganttRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ganttRef.current) {
      new Gantt(ganttRef.current, tasks, options);
    }
  }, []);

  return <div ref={ganttRef} />;
};

export default GanttChart;
