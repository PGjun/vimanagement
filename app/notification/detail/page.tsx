"use client";
import { useRouter, useSearchParams } from "next/navigation";

export default function NotiDetail() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentID = searchParams.get("id");
  const notidata = {
    title: "A병동 전체 공지 합니다.",
    content: "공지 내용입니다.",
    author: "관리자",
    duration: "2023.07.06~2023.07.26",
    registration_date: "2023.07.06",
  };
  return (
    <main className="mt-[98px]">
      <div className="text-[20px] font-bold">
        <div className="mb-[10px]">{notidata.title}</div>
        <div className="flex h-[30px] items-center text-[14px] font-normal gap-[30px] text-[gray]">
          <div>번호: {currentID}</div>
          <div>작성자: {notidata.author}</div>
          <div>공지기간: {notidata.duration}</div>
          <div>등록일: {notidata.registration_date}</div>
        </div>
      </div>
      <div className="min-h-[400px] border-y p-[10px]">{notidata.content}</div>

      <div className="w-full flex justify-center my-[51px] text-[14px]">
        <button
          onClick={() => router.back()}
          className="w-[82px] h-[36px] bg-[#D9D9D9] rounded-md"
        >
          목록
        </button>
      </div>
    </main>
  );
}
