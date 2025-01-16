import Button from "../button/Button";
import Text from "../text/Text";

type topBarProps = {
  text: string;
  buttons?: [];
};
const TopBar = ({ text, buttons }: topBarProps) => {
  return (
    <div className="flex justify-between items-center px-6 pb-2 pt-3   bg-[#FAFAFA]">
      <Text
        level={3}
        style={{ marginBottom: 0 }}
        className="capitalize font-semibold "
      >
        {text}
      </Text>
      <div>
        {buttons?.map((button) => (
          <Button key={button}>{button}</Button>
        ))}
      </div>
    </div>
  );
};

export default TopBar;
