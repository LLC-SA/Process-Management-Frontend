import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./shadcn_component/table";
import {
  useReactTable,
  flexRender,
  getCoreRowModel,
} from "@tanstack/react-table";
import DataTableMenu from "./DataTableMenu";

function DataTable({
  columns = [],
  data = [],
  textSize = "text-sm",
  columnWidth = "p-1",
  rowWidth = "p-1",
  actions = false,
}) {
  const table = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div>
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead
                    className={`border-b-2 border-gray-700
                              text-center font-roboto font-semibold text-gray-900 ${textSize} ${columnWidth}`}
                    key={header.id}
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}{" "}
                  </TableHead>
                );
              })}

              {actions && (
                <TableHead
                  className={`border-b-2 border-gray-700
                    ${columnWidth} font-roboto font-semibold text-gray-900 ${textSize}`}
                ></TableHead>
              )}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody className="text-center [&>*:nth-child(odd)]:bg-white">
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                className="border-gray-400 font-roboto"
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell
                    className={`${rowWidth} ${textSize}`}
                    key={cell.id}
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}

                {actions && (
                  <TableCell className={`${rowWidth} ${textSize}`}>
                    <DataTableMenu />
                  </TableCell>
                )}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell
                colSpan={columns.length}
                className="h-4 text-center"
              ></TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}

export default DataTable;
