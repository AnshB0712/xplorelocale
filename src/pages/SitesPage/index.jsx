import NativeLocationPlaces from "./components/NativeLocationPlaces";
import { DataTable } from "./components/DataTable";

const data = [
  { id: 1, name: "John Doe", status: true, createdAt: "2/4/2024" },
  { id: 2, name: "Alice Smith", status: false, createdAt: "2/1/2024" },
];

const SitesPage = () => {
  return (
    <>
      <NativeLocationPlaces />
      <DataTable data={data} />
    </>
  );
};

export default SitesPage;
