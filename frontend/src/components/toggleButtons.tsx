export const ToggleButtons = ({
  data,
  selectedIndex,
  onSelectedIndexChange,
}: ToggleButtonsProps) => (
  <div className="flex gap-2 mb-4">
    {data.map((item, index) => (
      <button
        key={item}
        className={`px-4 py-2 rounded ${
          index === selectedIndex ? "bg-orange-300 text-white" : "bg-gray-200"
        }`}
        onClick={() => onSelectedIndexChange(index)}
      >
        {item}
      </button>
    ))}
  </div>
);

type ToggleButtonsProps = {
  data: string[];
  selectedIndex: number;
  onSelectedIndexChange: (selectedIndex: number) => void;
};
