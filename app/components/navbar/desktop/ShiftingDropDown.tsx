import Tabs from "./Tabs";

type Props = {
  data: string[]
}

export const ShiftingDropDown = ({data}: Props) => {
  return (
    <div className="flex w-full justify-start ">
      <Tabs data={data} />
    </div>
  );
};