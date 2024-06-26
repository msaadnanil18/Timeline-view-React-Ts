import React, { useState } from "react";
import { Moment } from "moment";
import { FrappeGantt, Task, ViewMode } from "frappe-gantt-react";
const initialTaks: Task[] | any = [
  {
    id: "Task 1",
    name: "Redesign website",
    start: "2023-01-01",
    end: "2023-02-31",
    progress: 20,
  },
  {
    id: "Task 2",
    name: "Develop table view app",
    start: "2023-01-10",
    end: "2023-02-28",
    progress: 50,
    dependencies: "Task 1",
  },
  {
    id: "Task 3",
    name: "Timeline view app",
    start: "2023-01-15",
    end: "2023-02-28",
    progress: 40,
    dependencies: "Task 1",
  },
  {
    id: "Task 4",
    name: "Develop mobile app",
    start: "2023-01-05",
    end: "2023-03-23",
    progress: 60,
    dependencies: "Task 1",
  },
  {
    id: "Task 5",
    name: "Buy hosting",
    start: "2023-01-22",
    end: "2023-03-23",
    progress: 80,
    dependencies: "Task 1",
  },
  {
    id: "Task 6",
    name: "Draw wireframes",
    start: "2023-01-23",
    end: "2023-01-25",
    progress: 100,
  },
];

const App: React.FC = () => {
  const [viewMode, setViewMode] = useState<ViewMode | any>("Day");
  const [tasks, setTasks] = React.useState(initialTaks)

  const handleTasksChange = (newTasks: Task[]) => {
    console.log("Tasks changed:", newTasks);
  };

  const handleClick = (task: Task) => {
    console.log("Clicked task:", task);
  };

  const handleDateChange = (task: Task, start: Moment, end: Moment) => {
    console.log("Date changed for task:", task, "Start:", start, "End:", end);
  };

  // const handleProgressChange = (task: Task, progress: number) => {
  //   console.log("Progress changed for task:", task, "Progress:", progress);
  // };

  const handleViewChange = (mode: ViewMode) => {
    console.log("View mode changed to:", mode);
    setViewMode(mode);
  };

  React.useEffect(() => {
    const styleBars = () => {
      document.querySelectorAll(".bar").forEach((bar) => {
        (bar as HTMLElement).style.fill = "#4CAF50";
      });

      document.querySelectorAll(".bar-progress").forEach((bar) => {
        const progress = parseInt(
          (bar as HTMLElement).getAttribute("width") || "0",
          10
        );

        const normalizedProgress = Math.min(Math.max(progress / 20, 0), 100);

        if (normalizedProgress >= 0 && normalizedProgress < 20) {
          (bar as HTMLElement).style.fill = "#FF5722"; // Red for 0-19% progress
        } else if (normalizedProgress >= 20 && normalizedProgress < 40) {
          (bar as HTMLElement).style.fill = "#FFC107"; // Orange for 20-39% progress
        } else if (normalizedProgress >= 40 && normalizedProgress < 60) {
          (bar as HTMLElement).style.fill = "#FFEB3B"; // Yellow for 40-59% progress
        } else if (normalizedProgress >= 60 && normalizedProgress < 80) {
          (bar as HTMLElement).style.fill = "#4CAF50"; // Green for 60-79% progress
        } else if (normalizedProgress >= 80 && normalizedProgress <= 100) {
          (bar as HTMLElement).style.fill = "#2196F3"; // Blue for 80-100% progress
        }
      });

      document.querySelectorAll(".bar-label").forEach((label) => {
        (label as HTMLElement).style.fill = "#FFFFFF";
        (label as HTMLElement).style.fontSize = "16px";
        (label as HTMLElement).style.fontWeight = "bold";
      });
    };

    styleBars();
  }, [tasks]);

  const handleProgressChange = (tas: Task, progress: number) => {
    const updatedTasks = tasks.map((t: Task) =>
      t.id === tas.id ? { ...t, progress } : t
    );
    setTasks(updatedTasks); 
  };

  return (
    <div className="App">
      <FrappeGantt
        tasks={tasks}
        viewMode={viewMode}
        onTasksChange={handleTasksChange}
        onClick={handleClick}
        onDateChange={handleDateChange}
        onProgressChange={handleProgressChange}
        onViewChange={handleViewChange}
        
      />
    </div>
  );
};

export default App;




