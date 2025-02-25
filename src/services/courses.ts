import { delayApiCall } from "./helper/delayApiCall";
import { courses } from "./mocks";

type GetCourseResponse = {
  data: string[];
};

export const getCourses = async (): Promise<GetCourseResponse> => {
  return delayApiCall(courses) as Promise<GetCourseResponse>;
};
