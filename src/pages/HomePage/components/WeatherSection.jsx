import { useLocationContext } from "../../../context/LocationContext";

import { Button } from "../../../components/Button";
import { Grid } from "../../../layout-components/Grid";

import Astronaut from "../../../assets/illustrations/Astronaut";
import Laptop from "../../../assets/illustrations/Laptop";
import Refresh from "../../../assets/icons/Refresh";

import styled from "styled-components";
import { WeatherCard } from "./WeatherCard";

const WeatherComponent = ({ geoInfo }) => {
  if (geoInfo.error)
    return (
      <ErrorContainer>
        <Laptop />
      </ErrorContainer>
    );

  return (
    <>
      <Grid>
        <WeatherCard geoInfo={geoInfo} />
      </Grid>
    </>
  );
};

const ErrorComponent = ({ initiateRender, geoInfo }) => {
  return (
    <ErrorContainer>
      <Astronaut />
      <p
        style={{
          fontWeight: "var(--medium)",
          color: "var(--light-text)",
          textAlign: "center",
          marginBottom: "1rem",
        }}
      >{`${geoInfo?.error?.message}.Turn on your device's location,then hit refresh.`}</p>
      <Button
        size="sm"
        variant="primary"
        icon={<Refresh />}
        onClick={() => initiateRender()}
      >
        Refresh...
      </Button>
    </ErrorContainer>
  );
};

const WeatherSection = () => {
  const { initiateRender, geoInfo } = useLocationContext();

  const district = geoInfo.location.name;

  return (
    <PageWrapper>
      <p
        style={{
          fontSize: "var(--pagetitle-text)",
          color: "var(--dark-text)",
        }}
      >
        Weather around you
      </p>
      <p
        style={{
          fontSize: "var(--para-text)",
          color: "var(--light-text)",
          marginBottom: "1rem",
        }}
      >
        So you could go out Prepared.
      </p>

      {!geoInfo.error ? (
        district && <WeatherComponent geoInfo={geoInfo} />
      ) : (
        <ErrorComponent geoInfo={geoInfo} initiateRender={initiateRender} />
      )}
    </PageWrapper>
  );
};

export const PageWrapper = styled.div`
  margin: 1rem auto;
  margin-top: 0;
  min-height: 300px;
`;

const ErrorContainer = styled.figure`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 0.5rem;
`;

export default WeatherSection;
