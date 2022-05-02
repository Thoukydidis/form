import _ from "lodash";
import { API } from "../utils/interfaces/index";
import { BASE_URL } from "./api";

type FetchPostsParams = {
  user_id?: string;
};

const apiPosts: API<FetchPostsParams, undefined> = ({
  endpoint,
  params = {},
}) => {
  const searchParams = new URLSearchParams(params);
  // searchParams.append("access_key", API_KEY);
  const queryString = _.isEmpty(params) ? undefined : searchParams.toString();

  return fetch(`${BASE_URL}${endpoint}?${queryString}`);
};

export const fetchPosts = async (userId?: string) => {
  try {
    const response = await apiPosts({
      endpoint: "/posts",
      params: {
        user_id: userId,
      },
    });
    const responseText: string = await response.text();
    const users: any = JSON.parse(responseText);
    const error: boolean = response.status !== 200;
    if (error) {
      // return response.status;
      throw new Error(response.status);
    }

    if (!users || !Object.keys(users).length) {
      throw new Error("Could not fetch users.");
    }

    return users;
  } catch (errorResponse) {
    throw errorResponse;
  }
};
