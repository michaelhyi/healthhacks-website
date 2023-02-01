import { useEffect, useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const TrackRanking = () => {
  const [loaded, setLoaded] = useState(false);
  const [characters, updateCharacters] = useState([
    {
      id: "0",
      name: "Aging & Longevity",
    },
    {
      id: "1",
      name: "Mental Health & Addiction",
    },
    {
      id: "2",
      name: "Population & Preventative Health",
    },
  ]);

  useEffect(() => {
    setLoaded(true);
  }, []);

  function handleOnDragEnd(result: any) {
    if (!result.destination) return;

    const items = Array.from(characters);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    updateCharacters(items);
  }

  return (
    <div>
      <div className={`mt-4 mb-2 }`}>What is the best way to contact you?</div>
      <div
        className={`w-full bg-black border-[0.5px] border-white
         py-2 rounded-xl px-4 min-h-[15vh]`}
      >
        {loaded && (
          <DragDropContext onDragEnd={handleOnDragEnd}>
            <Droppable droppableId="characters" direction="horizontal">
              {(provided) => (
                <ul
                  className="flex characters"
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  {characters.map(({ id, name }, index) => {
                    return (
                      <Draggable key={id} draggableId={id} index={index}>
                        {(provided) => (
                          <li
                            className="bg-blue-400 p-4 m-4"
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            <p>{name}</p>
                          </li>
                        )}
                      </Draggable>
                    );
                  })}
                  {provided.placeholder}
                </ul>
              )}
            </Droppable>
          </DragDropContext>
        )}
      </div>
    </div>
  );
};

export default TrackRanking;
