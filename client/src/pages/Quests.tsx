import { useParams } from "react-router-dom";

const Quests = () => {
  const { id } = useParams();
  console.log("Quest ID:", id); // Debugging: Check if `id` is logged

  return (
    <div>
      <h2>Quest Details</h2>
      <p>
        You are viewing quest: <strong>{id}</strong>
      </p>
    </div>
  );
};

export default Quests;
