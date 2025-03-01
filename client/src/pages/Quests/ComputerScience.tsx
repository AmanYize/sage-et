import { FaLaptopCode } from "react-icons/fa";
import QuestCard from "../../components/Challenges/QuestCard";

const ComputerScience = () => {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      <QuestCard
        title="Computer Programming"
        icon={<FaLaptopCode size={24} className="text-white" />}
        questPath="/quests/computer-programming"
        description="Conqure the realm of computer programming."
      />
      <QuestCard
        title="Computer Programming"
        icon={<FaLaptopCode size={24} className="text-white" />}
        questPath="/quests/computer-programming"
        description="Conqure the realm of computer programming."
      />
      <QuestCard
        title="Computer Programming"
        icon={<FaLaptopCode size={24} className="text-white" />}
        questPath="/quests/computer-programming"
        description="Conqure the realm of computer programming."
      />
    </div>
  );
};
export default ComputerScience;
