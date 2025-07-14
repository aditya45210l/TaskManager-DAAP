import GreatingSec from "@/components/dashBoard/GreatingSec";
import DashProgressThree from "@/components/dashBoard/DashProgressThree";
import DashNotification from "@/components/dashBoard/DashNotification";
import DashTaskContain from "@/components/dashBoard/DashTaskContain";
import Filtter from "@/components/layout/Filtter";


const Dashboard = () => {
  console.log("i am re-rendring dashboard!");
  return (
    <div className="flex flex-col gap-10">
      {/* Dashboard Top section */}
      <section className="sectionTop flex flex-col gap-10">
        {/* Greating section */}
        <GreatingSec />
        {/* Progress bar with three grid element 1. active task 2. total balance 4. your rating */}
        <DashProgressThree />
        {/* Notifications */}
        <DashNotification />
      </section>

      {/* ----------------------------------------------------------- */}
      {/* Dashboard bottom section */}
      <section className="flex flex-col gap-10">
        <div className="flex flex-col gap-4">
          {/* heading "Live task Feed - With Input" */}

          {/* Filter Container */}
          <Filtter />
        </div>
        {/* Tasks Container */}
        <DashTaskContain type="dashboard" />
      </section>
    </div>
  );
};
export default Dashboard;
