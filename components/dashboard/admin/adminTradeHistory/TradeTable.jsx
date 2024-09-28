// components/Table.js
import React from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import Image from "next/image";
import { Icon } from "@iconify/react/dist/iconify.js";

const TradeTable = ({ data, columns }) => {
  const imageBodyTemplate = (rowData) => {
    return (
      <>
        <div className="flex justify-start items-center gap-[6px]">
          <Image src={rowData.icon} alt="Icon" style={{ width: "30px" }} />
          <span className="">{rowData.text}</span>
        </div>
      </>
    );
  };

  const buySellTemplate = (rowData) => {
    return (
      <>
        <div className="flex items-center justify-start gap-[6px]">
          <p className="text-[#335DD2]">{rowData.text}</p>
        </div>
      </>
    );
  };

  const profitLossTemplate = (rowData) => {
    return (
      <div className="flex items-center justify-start gap-[6px]">
        <span
          className={`${
            rowData.text[0] === "+" ? "text-[#16C784]" : "text-[#EA3943]"
          }`}
        >
          {rowData.text}
        </span>
        <div>
          {rowData.text[0] === "+" ? (
            <Icon icon={"mingcute:arrow-up-line"} className="text-[#16C784]"/>
          ) : (
            <Icon icon={"mingcute:arrow-down-line"} className="text-[#EA3943]"/>
          )}
        </div>
      </div>
    );
  };

  const getColumnBody = (field, rowData) => {
    switch (field) {
      case "wallets":
        return imageBodyTemplate(rowData[field]);
      case "token":
        return imageBodyTemplate(rowData[field]);
      case "profitLoss":
        return profitLossTemplate(rowData[field]);
      case "buyPrice":
      case "sellPrice":
        return buySellTemplate(rowData[field]);
      default:
        return rowData[field];
    }
  };

  return (
    <DataTable
  value={data}
 scrollable
  className="bg-[#0E151B] w-full justify-center items-center p-6"
  tableStyle={{ minWidth: "100%" }}
>
  {columns.map((col, i) => (
    <Column
      key={col.field}
      field={col.field}
      header={col.header}
      body={(rowData) => getColumnBody(col.field, rowData)}
      headerClassName="text-[#A1A1A1] text-[12px] font-medium leading-[16px] pb-[24px]"
      bodyClassName="text-[14px] text-[#FAFAFA] font-normal py-[10px]"
    />
  ))}
</DataTable>
  );
};

export default TradeTable;
