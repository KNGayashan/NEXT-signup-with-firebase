import { SubmitButtonT } from "@/types/ButtonTypes";

const SubmitButton = ({ label }: SubmitButtonT) => {
  return (
    <div className="flex justify-center mt-6 mb-3">
      <button className="bg-gray-900 rounded-md px-3 py-2 text-white">
        {label}
      </button>
    </div>
  );
};

export default SubmitButton;
