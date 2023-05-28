"use client";

interface Props {
  label?: string;
  value: string;
  setValue: (value: string) => void;
  error?: string;
  textarea?: boolean;
  placeholder?: string;
}

const ApplicationInput: React.FC<Props> = ({
  label,
  value,
  setValue,
  error,
  textarea,
  placeholder,
}) => {
  return (
    <div>
      <div
        className={`mt-8 mb-2 lg:text-lg md:text-small font-semibold ${
          error && error.length > 0 ? "text-red-400" : "text-white"
        }`}
      >
        {label}
      </div>
      {textarea ? (
        <textarea
          placeholder={placeholder}
          value={value}
          onChange={async (e) => {
            setValue(e.target.value);
          }}
          className={`w-full bg-[#202020] border-[0.5px] ${
            error && error.length > 0 ? "border-red-400" : "border-white"
          } py-2 rounded-xl px-4 min-h-[25vh]`}
        />
      ) : (
        <input
          placeholder={placeholder}
          type={`${label === "Password" ? "password" : ""}`}
          value={value}
          onChange={async (e) => {
            setValue(e.target.value);
          }}
          className={`w-full  bg-[#202020] border-[1px] ${
            error && error.length > 0 ? "border-red-400" : "border-white"
          } py-2 rounded-xl px-4`}
        />
      )}

      {error && error.length > 0 && (
        <div className="mt-4 font-poppins font-semibold text-red-400 text-sm">
          {error}
        </div>
      )}
    </div>
  );
};

export default ApplicationInput;
