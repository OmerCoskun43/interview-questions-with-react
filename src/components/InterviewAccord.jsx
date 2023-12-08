import Ouestion from "./Question";
import datas from "../helper/data";

const InterviewAccord = () => {
  console.log(datas);
  return (
    <div className="row">
      {datas?.map((data) => {
        return <Ouestion key={data.id} data={data} />;
      })}
    </div>
  );
};

export default InterviewAccord;
