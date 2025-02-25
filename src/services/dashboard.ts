import { delayApiCall } from "./helper/delayApiCall";
import {
  totalUsers,
  percentageEntrantsPerCourse,
  totalEntrantsPerMonthAndCourse,
} from "./mocks";

interface GetTotalUsersResponse {
  data: number;
}

interface GetPercentageEntrantsPerCourseResponse {
  data: {
    course: string;
    value: number;
  }[];
}

interface GetTotalEntrantsPerMonthAndCourseResponse {
  data: {
    date: string;
    [key: string]: number | string;
  }[];
}

export function getTotalUsers(): Promise<GetTotalUsersResponse> {
  return delayApiCall(totalUsers) as Promise<GetTotalUsersResponse>;
}

export function getPercentageEntrantsPerCourse(): Promise<GetPercentageEntrantsPerCourseResponse> {
  return delayApiCall(
    percentageEntrantsPerCourse
  ) as Promise<GetPercentageEntrantsPerCourseResponse>;
}

export function getTotalEntrantsPerMonthAndCourse(): Promise<GetTotalEntrantsPerMonthAndCourseResponse> {
  return delayApiCall(
    totalEntrantsPerMonthAndCourse
  ) as Promise<GetTotalEntrantsPerMonthAndCourseResponse>;
}
