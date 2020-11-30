import * as React from "react";
import { useLaunch_ListQuery } from "../../generated/graphql";
import LaunchList from "./LaunchList";
import {OwnProps} from './LaunchList'


const LaunchListContainer = (props: OwnProps) => {
  const { data, error, loading } = useLaunch_ListQuery();

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error || !data) {
    return <p>Error</p>;
  }
  return <LaunchList data={data} {...props} /> ;
};

export default LaunchListContainer;
