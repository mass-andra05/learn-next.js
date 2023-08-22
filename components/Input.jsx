import React from "react";

export default function Input({ isInput, name, descAlert }) {
  return (
    <>
      <label className="block capitalize mb-[2px]">
        {name ?? "Judul Buku"}
      </label>
      <input name="book"
        className={`border w-full h-[2.25rem] px-2 rounded-md ${
          !isInput
            ? "border-red-500 focus:outline-red-500"
            : "focus:outline-none"
        }`}
      />
      {!isInput && (
        <div className="text-sm text-red-500">
          {descAlert ?? "Field ini tidak boleh kosong!"}
        </div>
      )}
    </>
  );
}
