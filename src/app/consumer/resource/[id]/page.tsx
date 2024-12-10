import { Metadata } from "next";
import ResourceHorizontalCard from '../../(dashboard)/components/ResourceHorizontalCard';



const LinkPage = async () => {
  // Awaiting params ensures proper dynamic route handling
  

  return (
    <>
      <div>
        {/* <h1>Consumer Link Page resource: {id}</h1> */}
      </div>

      <ResourceHorizontalCard />
      <ResourceHorizontalCard />
    </>
  );
};

export default LinkPage;
