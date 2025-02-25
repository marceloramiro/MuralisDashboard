import { delayApiCall } from "./helper/delayApiCall";
import { citiesByState, states } from "./mocks";

type State = "SP" | "RJ" | "MG";

interface GetCityByStateResponse {
  data: {
    cities: string[];
  };
}

interface GetStatesResponse {
  data: {
    name: string;
    abbreviation: string;
  }[];
}

export const getStates = async (): Promise<GetStatesResponse> => {
  return delayApiCall(states) as Promise<GetStatesResponse>;
};

export const getCityByState = async (
  state: State
): Promise<GetCityByStateResponse> => {
  const cities = citiesByState[state];
  return delayApiCall({ cities }) as Promise<GetCityByStateResponse>;
};
