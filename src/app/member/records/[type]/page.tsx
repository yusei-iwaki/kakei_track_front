"use client";

import DateSwitcher from "@/components/date_switcher/date";
import { format } from "date-fns";
import { useSearchParams } from "next/navigation";

const RecordsPage = ({ params }: { params: { type: string } }) => {
  const searchParams = useSearchParams();
  return (
    <>
      <DateSwitcher />
    </>
  );
};

export default RecordsPage;
