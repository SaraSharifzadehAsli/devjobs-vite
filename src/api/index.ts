import axios from "axios";
import IJobItems from "@src/types/IJobItems";

export function getPostsPaginated(page: number) {
  return axios
    .get("http://localhost:3001/items", {
      params: { _page: page, _limit: 6 },
    })
    .then((res) => {
      const hasNext = page * 6 <= parseInt(res.headers["x-total-count"]);
      return {
        nextPage: hasNext ? page + 1 : undefined,
        previousPage: page > 1 ? page - 1 : undefined,
        posts: res.data as IJobItems,
      };
    });
}
