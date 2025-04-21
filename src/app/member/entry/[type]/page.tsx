import ToggleBtn from "@/components/toggle_button/toggleBtn";
import Form from "@/components/entry_form/form";

const EntryPage = ({ params }: { params: { type: string } }) => {
  return (
    <>
      <ToggleBtn route={params.type} />
      <Form route={params.type} />
    </>
  );
};

export default EntryPage;
