import _ from "lodash";
import { API } from "../utils/interfaces/index";

export const BASE_URL = process.env.REACT_APP_FORUM_BASE_URL ?? "";

type FetchUsersQueryParams = {
  base?: string;
};

const api: API<FetchUsersQueryParams, undefined> = ({
  endpoint,
  params = {},
}) => {
  const searchParams = new URLSearchParams(params);
  // searchParams.append("access_key", API_KEY);
  const queryString = _.isEmpty(params) ? undefined : searchParams.toString();

  return fetch(`${BASE_URL}${endpoint}?${queryString}`);
};

export const fetchUsers = async (baseCurrency?: string) => {
  try {
    const response = await api({
      endpoint: "/users",
      params: {
        base: undefined,
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
