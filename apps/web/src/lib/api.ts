import { api } from "@elisya-micro/server";
import { useEffect, useState } from "react";

export const useServerArgs = () => {
    const [data, setData] = useState<string | null>(null);

    useEffect(() => {
        api.get().then((response) => {
            if (response.data) {
                setData(response.data.hello);
            }
        });
    }, []);

    return data;
}
