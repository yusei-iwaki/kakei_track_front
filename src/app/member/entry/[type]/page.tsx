import ToggleBtn from "@/components/toggle_button";
import EntryForm from "@/components/entry_form";
import { PAGE_TYPE_ENTRY } from "@/lib/content";

const EntryPage = async ({ params }: { params: { type: string } }) => {
  const { type } = await params;
  return (
    <>
      <ToggleBtn route={type} pageType={PAGE_TYPE_ENTRY} />
      <EntryForm route={type} />
    </>
  );
};

export default EntryPage;
