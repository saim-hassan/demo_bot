// components/Table.js
import React from "react";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

const Table = ({ data, columns }) => {
  const imageBodyTemplate = (rowData) => {
    return (
      <div className="flex justify-start items-center gap-[6px]">
        <span className="">{rowData?.text}</span>
        <span className="text-[#4C5357]">{rowData?.textPart}</span>
      </div>
    );
  };

  const buySellBodyTemplate = (rowData) => {
    return (
      <div className="flex items-center justify-start gap-[6px]">
        <span className="flex">{rowData?.exchange}</span>
      </div>
    );
  };

  const getColumnBody = (field, rowData) => {
    switch (field) {
      case 'pair':
        return imageBodyTemplate(rowData[field]);  // Access pair object properties
      case 'buy':
      case 'sell':
        return buySellBodyTemplate(rowData[field]);  // Access buy/sell object properties
      case 'pnl':
        return <span className="text-[#335DD2]">{rowData[field]}</span>;
      case 'buyPrice':
        return <span className="text-[#EA3943]">{rowData[field]}</span>;
      case 'sellPrice':
        return <span className="text-[#16C784]">{rowData[field]}</span>;
      default:
        return rowData[field];
    }
  };

  return (
    <DataTable
      value={data}
      scrollable
      className="bg-[#10171E] w-full flex flex-1 justify-center items-center rounded-3xl border-2 border-[#4C5357] p-[24px]"
      tableStyle={{ minWidth: "70vw" }}
    >
      {columns.map((col) => (
        <Column 
          key={col.field} 
          field={col.field} 
          header={col.header}  
          body={(rowData) => getColumnBody(col.field, rowData)}
          headerClassName=" text-[#A1A1A1] text-[12px] font-medium leading-[16px] pb-[24px]"
          bodyClassName= "text-[14px] text-[#FAFAFA] font-normal py-[24px] border-t border-[#4C5357]"
        />
      ))}
    </DataTable>
  );
};

export default Table;
