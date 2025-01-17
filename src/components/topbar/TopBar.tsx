import Button from "../button/Button";
import Text from "../text/Text";

type topBarProps = {
  text: string;
  buttons?: [];
};
const TopBar = ({ text, buttons }: topBarProps) => {
  return (
    <div className="flex justify-between items-center px-10 pb-2 pt-3   bg-[#FAFAFA]">
      <Text
        level={3}
        style={{ marginBottom: 0,fontWeight:"bold" }}
        className="capitalize font-semibold "
      >
        {text}
      </Text>
      <div className="flex flex-row gap-x-2">
        {buttons?.map((button: any) => (
          <>
            {button?.isComponent ? (
              <button.component {...button?.props} />
            ) : (
              <Button key={button?.label} onClick={button?.onClick}>
                {button?.label}
              </Button>
            )}
          </>
        ))}
      </div>
    </div>
  );
};

export default TopBar;
