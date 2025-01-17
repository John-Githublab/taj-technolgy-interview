import { useMemo } from "react";
import Helpers from "../../utils/Helpers";

const strengthBarStyle = [
  "bg-red-500",
  "bg-yellow-500",
  "bg-yellow-400",
  "bg-green-400",
  "bg-green-600",
  "bg-green-800",
];

const PasswordStrengthBar = (props: { password: string }) => {
  const { password } = props;

  const strength = useMemo(() => {
    return Helpers.checkPasswordStrengthBar(password || "");
  }, [password]);

  return (
    <div className="flex flex-col ">
      <div className="relative w-full h-2 bg-gray-300 rounded-full">
        <div
          className={`h-full ${strengthBarStyle[strength]} rounded-full`}
          style={{ width: `${(strength / 5) * 100}%` }}
        ></div>
      </div>
      <div className="flex justify-between text-sm">
        <span>Weak</span>
        <span>Strong</span>
      </div>
    </div>
  );
};

export default PasswordStrengthBar;
