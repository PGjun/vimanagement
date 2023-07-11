import { useRouter } from "next/navigation";

export const NotiTable = ({ currentItems }: any) => {
  const router = useRouter();

  return (
    <>
      <div className="font-bold text-[20px] mb-[20px]">긴급공지 관리</div>
      <table className="w-full">
        <thead>
          <tr className="h-[30px] text-[12px] border-y border-[#979797] text-center">
            <td className="w-[70px]">번호</td>
            <td className="w-1/2 text-left">제목</td>
            <td>공지기간</td>
            <td>등록자</td>
            <td>등록일자</td>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((item: any) => (
            <tr
              key={item.id}
              className="h-[48px] text-[14px] text-center border-b border-[#D8D8D8] cursor-pointer hover:bg-[#F5F8FF]"
              onClick={() => router.push(`/notification/detail?id=${item.id}`)}
            >
              <td className="text-[12px] text-[#979797]">{item.column1}</td>
              <td className="text-left text-[16px]">{item.column2}</td>
              <td>{item.column3}</td>
              <td>{item.column4}</td>
              <td>{item.column5}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
