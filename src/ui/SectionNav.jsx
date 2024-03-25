import { DatePickerForm } from "./DatePickerForm";

function SectionNav({ name, children }) {
  return (
    <div
      className="border-b-2 border-solid border-gray-200
                 pb-2
                 font-roboto"
    >
      <div className="text-center text-xl font-medium">{name}</div>
      <div className="flex">
        {children} <DatePickerForm style="ml-auto" />
      </div>
    </div>
  );
}

export default SectionNav;
