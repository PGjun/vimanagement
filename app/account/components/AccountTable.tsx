import { useEffect, useState } from "react";

export const AccountTable = ({ currentItems }: any) => {
  const [selectedRows, setSelectedRows] = useState<number[]>([]);

  const handleRowClick = (rowId: number) => {
    const isSelected = selectedRows.includes(rowId);
    if (isSelected) {
      setSelectedRows(selectedRows.filter((id) => id !== rowId));
    } else {
      setSelectedRows([...selectedRows, rowId]);
    }
  };
  useEffect(() => {
    console.log(`선택된 ID 목록 ${selectedRows}`);
  }, [selectedRows]);
  return (
    <>
      <div className="font-bold text-[20px] mb-[20px]">계정 관리 - 목록</div>
      <table className="w-full">
        <thead>
          <tr className="h-[30px] text-[12px] border-y border-[#979797] text-center">
            <td></td>
            <td>번호</td>
            <td>권한</td>
            <td>이름</td>
            <td>아이디</td>
            <td>부서명</td>
            <td>최종 로그인 일자</td>
            <td>등록일자</td>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((item: any) => (
            <tr
              key={item.id}
              className="h-[48px] text-[14px] text-center border-b border-[#D8D8D8]"
            >
              <td>
                <input
                  type="checkbox"
                  checked={selectedRows.includes(item.id)}
                  onChange={() => handleRowClick(item.id)}
                />
              </td>
              <td className="text-[12px] text-[#979797]">{item.column1}</td>
              <td className="text-[#7988B8]">{item.column2}</td>
              <td>{item.column3}</td>
              <td>{item.column4}</td>
              <td>{item.column5}</td>
              <td>{item.column6}</td>
              <td>{item.column7}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
