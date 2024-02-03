import { DataTable } from "./components/DataTable";
import WeatherSection from "./components/WeatherSection";

const data = [
  { id: 1, name: "John Doe", status: true, createdAt: "2/4/2024" },
  { id: 2, name: "Alice Smith", status: false, createdAt: "2/1/2024" },
];

const HomePage = () => {
  return (
    <>
      <WeatherSection />
      <DataTable data={data} />
    </>
  );
};

export default HomePage;
