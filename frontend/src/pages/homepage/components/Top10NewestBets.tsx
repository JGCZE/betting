import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import useTop10NewestBetsApi from "../api/useTop10NewestBetsApi"

const Top10NewestBets = () => {
  const { data, isLoading } = useTop10NewestBetsApi()

  console.log("data from Top15NewestBets: ", data)

  return (
    <div>
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>

        <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">sázka</TableHead>
          <TableHead>vyzyvatel</TableHead>
          <TableHead>deadline</TableHead>
          <TableHead className="">o co</TableHead>
          <TableHead className="">detail</TableHead>
        </TableRow>
      </TableHeader>

       <TableBody>
        {isLoading && (
          <TableRow>
            <TableHead className="text-center" colSpan={4}>
              Loading...
            </TableHead>
          </TableRow>
        )}

        {!isLoading && data?.map((bet, index) => (
          <TableRow key={index}>
            <TableCell className="font-medium">{bet.betTitle}</TableCell>
            <TableCell className="font-medium">{bet.challanger_name}</TableCell>
            <TableCell className="font-medium">{bet.deadline}</TableCell>
            <TableCell className="font-medium">{bet.stack}</TableCell>
            <TableCell className="font-medium">D</TableCell>
          </TableRow>
        ))}

       </TableBody>
      </Table>
    </div>
  )
}

export default Top10NewestBets
