import Button from "../button/Button";
import Text from "../text/Text";
import { Input } from "antd";

const { Search } = Input;

type topBarProps = {
  text: string;
  buttons?: [];
};
const TopBar = ({ text, mainButtons, service, buttons }: topBarProps) => {
  return (
    <div>
      <div className="flex justify-between items-center px-8 pb-2 pt-3   bg-[#FAFAFA]">
        <Text
          level={3}
          style={{ marginBottom: 0, fontWeight: "bold" }}
          className="capitalize"
        >
          {text}
        </Text>
        <div className="flex flex-row gap-x-2">
          {mainButtons?.map((button: any) => (
            <>
              {button?.isComponent ? (
                <button.component {...button?.props} />
              ) : (
                <Button
                  className="!py-4 font-bold"
                  key={button?.label}
                  onClick={button?.onClick}
                >
                  {button?.label}
                </Button>
              )}
            </>
          ))}
        </div>
      </div>
      <div className="px-8 mt-3 flex justify-between ">
        <div className="pb-4 w-[30%]">
          <Search
            placeholder="Search here"
            loading={service?.loading}
            // search value is empty make a api call
            onChange={(e) =>
              e.target.value === "" && service?.getTableListWithPayload("")
            }
            enterButton
            onSearch={(value: string) =>
              service?.getTableListWithPayload(value)
            }
          />
        </div>
        <div className="flex gap-x-2">
          {buttons?.map((button: any) => (
            <div
              style={{ visibility: button?.isVisible ? "visible" : "hidden" }}
            >
              {button?.isComponent ? (
                <button.component {...button?.props} />
              ) : (
                <Button
                  className="!py-4 font-bold"
                  key={button?.label}
                  onClick={button?.onClick}
                >
                  {button?.label}
                </Button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopBar;
