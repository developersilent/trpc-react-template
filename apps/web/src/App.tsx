import { Activity } from "react";
import { trpcClient } from "./utils/trpc"

export default function App() {
  const { data, isSuccess, isLoading } = trpcClient.test.sayHi.useQuery();
  return (
    <div className="w-full min-h-screen bg-black grid place-content-center">
      <Activity mode={isSuccess ? "visible" : "hidden"}>
        <h2 className="text-2xl font-bold text-purple-500">{isLoading ? "Loading..." : data?.msg}</h2>
      </Activity>
    </div>
  )
}
