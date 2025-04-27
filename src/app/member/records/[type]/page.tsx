"use client";

import DateSwitcher from "@/components/date_switcher";
import RecordChart from "@/components/records_chart";
import ToggleButton from "@/components/toggle_button";
import { format } from "date-fns";
import { useSearchParams, usePathname } from "next/navigation";
import { PAGE_TYPE_RECORDS } from "@/lib/content";
import RecordTable from "@/components/records_table";

const RecordsPage = ({ params }: { params: { type: string } }) => {
  const searchParams = useSearchParams();
  const type = usePathname().split("/")[3];
  return (
    <>
      <DateSwitcher />
      <ToggleButton route={type} pageType={PAGE_TYPE_RECORDS} />
      <RecordChart />
      <RecordTable />
    </>
  );
};

export default RecordsPage;
