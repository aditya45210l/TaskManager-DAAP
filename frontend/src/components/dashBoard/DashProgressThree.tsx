import UserDetailsCard from "../layout/UserDetailsCard";

const DashProgressThree = () => {
  return (
    <section className="grid grid-rows-3 md:grid-rows-1 md:grid-cols-3 lg:gap-10 md:gap-6 gap-4">
      {/* Active Tasks Card */}

      <UserDetailsCard type="completed" />
      {/* Total Earning Card */}
      <UserDetailsCard type="earning" />

      {/* User Rating Card */}
      <UserDetailsCard type="rating" />
    </section>
  );
};
export default DashProgressThree;
