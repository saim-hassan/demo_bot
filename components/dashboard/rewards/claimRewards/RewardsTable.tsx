"use client";
import React from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

const columns = [
  { field: "time", header: "TIME" },
  { field: "amount", header: "AMOUNT (ETH)" },
  { field: "minAmount", header: "MIN AMOUNT XV" },
  { field: "status", header: "STATUS" },
  { field: "transactions", header: "TRANSACTIONS" },
];

const products = [
  {
    time: "46 min",
    amount: "88.10 ETH",
    minAmount: "27.88 XV",
    status: "ACTIVE",
    transactions: "N/A",
  },
  {
    time: "46 min",
    amount: "88.10 ETH",
    minAmount: "27.88 XV",
    status: "ACTIVE",
    transactions: "N/A",
  },
  {
    time: "46 min",
    amount: "88.10 ETH",
    minAmount: "27.88 XV",
    status: "ACTIVE",
    transactions: "N/A",
  },
];

const RewardsTable = () => {
  const getColumnBody = (field: string, rowData: any) => {
    switch (field) {
      case "status":
        return <span className="text-[#335DD2]">{rowData[field]}</span>;
      default:
        return rowData[field];
    }
  };

  return (
    <div>
      <DataTable
        value={products}
        tableStyle={{ minWidth: "50rem" }}
        scrollable
        className="bg-[#10171E] border border-[#4C5357] rounded-3xl p-4"
      >
        {columns.map((col, i) => (
          <Column
            key={col.field}
            field={col.field}
            header={col.header}
            body={(rowData) => getColumnBody(col.field, rowData)}
            headerClassName="text-[#4C5357] text-[12px] font-medium pb-4"
            bodyClassName="text-[#FAFAFA] text-[14px] font-normal border-t  border-[#4C5357] py-4"
          />
        ))}
      </DataTable>
    </div>
  );
};

export default RewardsTable;
