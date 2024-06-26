// import React, { useState } from "react";
// import Timeline from "react-calendar-timeline";
// import "react-calendar-timeline/lib/Timeline.css";
// import dayjs from "dayjs";
// import isBetween from "dayjs/plugin/isBetween";
// import advancedFormat from "dayjs/plugin/advancedFormat";

// dayjs.extend(isBetween);
// dayjs.extend(advancedFormat);

// const groups = [
//   { id: 1, title: "Group 1" },
//   { id: 2, title: "Group 2" },
//   { id: 3, title: "Group 3" },
// ];

// const initialItems = [
//   {
//     id: 1,
//     group: 1,
//     title: "Item 1",
//     start_time: dayjs(),
//     end_time: dayjs().add(1, "month"),
//   },
//   {
//     id: 2,
//     group: 2,
//     title: "Item 2",
//     start_time: dayjs().subtract(1, "month"),
//     end_time: dayjs(),
//   },
//   {
//     id: 3,
//     group: 3,
//     title: "Item 3",
//     start_time: dayjs().add(2, "months"),
//     end_time: dayjs().add(3, "months"),
//   },
// ];

// const TimelineComponent: React.FC = () => {
//   const [visibleTimeStart, setVisibleTimeStart] = useState(
//     dayjs().subtract(1, "month").valueOf()
//   );
//   const [visibleTimeEnd, setVisibleTimeEnd] = useState(
//     dayjs().add(3, "months").valueOf()
//   );
//   const [items, setItems] = useState(initialItems);

//   console.log(visibleTimeEnd, "visibleTimeEnd");
//   console.log(visibleTimeStart, "visibleTimeStart");
//   console.log(items, "items");

//   const onTimeChange = (
//     start: number,
//     end: number,
//     updateScrollCanvas: (start: number, end: number) => void
//   ) => {
//     setVisibleTimeStart(start);
//     setVisibleTimeEnd(end);
//     updateScrollCanvas(start, end);
//   };

//   const onItemMove = (
//     itemId: number | string,
//     dragTime: number,
//     newGroupOrder: number
//   ) => {
//     const updatedItems = items.map((item) =>
//       item.id === itemId
//         ? { ...item, start_time: dayjs(dragTime), group: newGroupOrder }
//         : item
//     );
//     setItems(updatedItems);
//   };

//   const onItemResize = (
//     itemId: number | string,
//     time: number,
//     edge: "left" | "right"
//   ) => {
//     const updatedItems = items.map((item) => {
//       if (item.id === itemId) {
//         if (edge === "left") {
//           return { ...item, start_time: dayjs(time) };
//         } else {
//           return { ...item, end_time: dayjs(time) };
//         }
//       }
//       return item;
//     });
//     setItems(updatedItems);
//   };

//   return (
//     <div>
//       <Timeline
//         groups={groups}
//         items={items}
//         defaultTimeStart={dayjs(visibleTimeStart)}
//         defaultTimeEnd={dayjs(visibleTimeEnd)}
//         onTimeChange={onTimeChange}
//         onItemMove={onItemMove}
//         onItemResize={onItemResize}
//       />
//     </div>
//   );
// };

// export default TimelineComponent;



import React, { useState } from "react";
import Timeline from "react-calendar-timeline";
import "react-calendar-timeline/lib/Timeline.css";
import dayjs from "dayjs";
import isBetween from "dayjs/plugin/isBetween";
import advancedFormat from "dayjs/plugin/advancedFormat";

dayjs.extend(isBetween);
dayjs.extend(advancedFormat);

const groups = [
  { id: 1, title: "Group 1" },
  { id: 2, title: "Group 2" },
  { id: 3, title: "Group 3" },
];

const tasks = [
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

const taskItems = tasks.map((task, index) => ({
  id: task.id,
  group: (index % 3) + 1, // Assign tasks to groups in a round-robin manner
  title: `${task.name} (${task.progress}%)`,
  start_time: dayjs(task.start),
  end_time: dayjs(task.end),
}));

const initialItems = [
  {
    id: 1,
    group: 1,
    title: "Item 1",
    start_time: dayjs(),
    end_time: dayjs().add(1, "month"),
  },
  {
    id: 2,
    group: 2,
    title: "Item 2",
    start_time: dayjs().subtract(1, "month"),
    end_time: dayjs(),
  },
  {
    id: 3,
    group: 3,
    title: "Item 3",
    start_time: dayjs().add(2, "months"),
    end_time: dayjs().add(3, "months"),
  },
];

const TimelineComponent: React.FC = () => {
  const [visibleTimeStart, setVisibleTimeStart] = useState(
    dayjs().subtract(1, "month").valueOf()
  );
  const [visibleTimeEnd, setVisibleTimeEnd] = useState(
    dayjs().add(3, "months").valueOf()
  );
  const [items, setItems] = useState([...initialItems, ...taskItems]);

  console.log(visibleTimeEnd, "visibleTimeEnd");
  console.log(visibleTimeStart, "visibleTimeStart");
  console.log(items, "items");

  const onTimeChange = (
    start: number,
    end: number,
    updateScrollCanvas: (start: number, end: number) => void
  ) => {
    setVisibleTimeStart(start);
    setVisibleTimeEnd(end);
    updateScrollCanvas(start, end);
  };

  const onItemMove = (
    itemId: number | string,
    dragTime: number,
    newGroupOrder: number
  ) => {
    const updatedItems = items.map((item) =>
      item.id === itemId
        ? { ...item, start_time: dayjs(dragTime), group: newGroupOrder }
        : item
    );
    setItems(updatedItems);
  };

  const onItemResize = (
    itemId: number | string,
    time: number,
    edge: "left" | "right"
  ) => {
    const updatedItems = items.map((item) => {
      if (item.id === itemId) {
        if (edge === "left") {
          return { ...item, start_time: dayjs(time) };
        } else {
          return { ...item, end_time: dayjs(time) };
        }
      }
      return item;
    });
    setItems(updatedItems);
  };

  return (
    <div>
      <Timeline
        groups={groups}
        items={items}
        defaultTimeStart={dayjs(visibleTimeStart)}
        defaultTimeEnd={dayjs(visibleTimeEnd)}
        onTimeChange={onTimeChange}
        onItemMove={onItemMove}
        onItemResize={onItemResize}
      />
    </div>
  );
};

export default TimelineComponent;
