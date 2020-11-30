import  gql  from "graphql-tag";

export const Query_Launch_List = gql`
  query Launch_List {
    launches {
      flight_number
      mission_name
      launch_year
    }
  }
`
