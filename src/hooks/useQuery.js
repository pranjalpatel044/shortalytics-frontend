import { useQuery } from "react-query"
import api from "../api/api"
import dayjs from "dayjs";

export const useFetchMyShortUrls = (token, onError) => {
    return useQuery("my-shortenurls",
         async () => {
            return await api.get(
                "/api/urls/myurls",
            {
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    Authorization: "Bearer " + token,
                },
            }
        );
    },
          {
            select: (data) => {
                const sortedData = data.data.sort(
                    (a, b) => new Date(b.createdDate) - new Date(a.createdDate)
                );
                return sortedData;
            },
            onError,
            staleTime: 5000
          }
        );
};

export const useFetchTotalClicks = (token, onError) => {
    const endDate = dayjs().endOf("day").format("YYYY-MM-DDTHH:mm:ss");
    const startDate = dayjs().subtract(1, "year").startOf("day").format("YYYY-MM-DDTHH:mm:ss");

    return useQuery(["url-totalclick", startDate, endDate],
        async () => {
            return await api.get(
                `/api/urls/totalClicks?startDate=${startDate}&endDate=${endDate}`,  
                {
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                        Authorization: "Bearer " + token,
                    },
                }
            );
        },
        {
            select: (data) => {
                const convertToArray = Object.keys(data.data).map((key) => ({
                    clickDate: key,
                    count: data.data[key],
                }));
                return convertToArray;
            },
            onError,
            staleTime: 5000
        }
    );
};
