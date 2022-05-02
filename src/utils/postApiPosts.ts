import _ from "lodash";
import { API } from "../utils/interfaces/index";
import { BASE_URL } from "./api";

const postApiPosts: API<undefined, any> = ({
  endpoint,
  payload,
  params = {},
}) => {
  const searchParams = new URLSearchParams(params);
  // searchParams.append("access_key", API_KEY);
  const queryString = _.isEmpty(params) ? "" : searchParams.toString();
  const response = fetch(`${BASE_URL}${endpoint}?${queryString}`, {
    method: "POST",
    body: payload,
    headers: {
      Authorization: "Bearer ACCESS-TOKEN",
      "Content-Type": "application/json",
    },
  });

  return response;
};

export const createPost = async (payload?: any) => {
  try {
    const response = await postApiPosts({
      endpoint: "/users/3704/posts",
      payload: {
        user_id: payload?.id ?? "",
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
