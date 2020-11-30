import * as React from "react";
import { useLaunchProfileQuery } from "../../generated/graphql";
import LaunchProfile from "./LaunchProfile";

interface OwnProps {
  id: number;
}

const LaunchProfileContainer = ({ id }: OwnProps) => {
  const { data, loading, error, refetch } = useLaunchProfileQuery({
    variables: { id: String(id) },
  });
  React.useEffect(() => {
    refetch();
  }, [id]);
  if (loading) {
    return <p>loading</p>;
  }
  if (error) {
    return <p>Error</p>;
  }
  if (!data) {
    return <p>Select a flight from pannel</p>;
  }
  return <LaunchProfile data={data} />;
};

export default LaunchProfileContainer;
