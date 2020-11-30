import React from "react";
import { Launch_ListQuery } from "../../generated/graphql";
import "./Style.css";


export interface OwnProps {
  handleIdChange: (newId: number) => void;
}

interface Props extends OwnProps {
  data: Launch_ListQuery;

}
const className = "LaunchList";

const LaunchList: React.FC<Props> = ({ data, handleIdChange }) => (
  <div className={className}>
    <h3>Launches</h3>
    <ol className={`${className}__List`}>
      {!!data.launches &&
        data.launches.map(
          (launch, i) =>
            !!launch && (
              <li key={i} className={`${className}__item`} onClick={() => handleIdChange(launch.flight_number!)}>
                {launch.mission_name}({launch.launch_year})
              </li>
            )
        )}
    </ol>
  </div>
);

export default LaunchList;
