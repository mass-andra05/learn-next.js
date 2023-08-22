import Button from "@/components/Button";
import React, { useState } from "react";
import Input from "@/components/Input";

export default function FormBook() {
  const [FormBook, setFormBook] = useState({});
  console.log(FormBook.book);
  return (
    <>
      <div className="max-w-xl mt-[4rem] mx-auto">
        <form>
          <div className="border rounded bg-white shadow-lg">
            <div className="px-6 pt-4">
              <div className="text-xl">Form Buku</div>
            </div>
            <div className="px-6 py-4">
              <div className="mb-2">
                {/* TITLE */}
                <Input
                  isInput={FormBook.book}
                  onChange={(e) => {
                    // setFormBook(e.target.value)
                    setFormBook((prev) => {
                      return {
                        ...prev,
                        book: e.target.value,
                      };
                    });
                  }}
                  name={"Judul Buku bro"}
                  descAlert={"Field ini tidak boleh kosong! bro"}
                />

                <label className="block capitalize mb-[2px]">Judul Buku</label>
                <input
                  className={`border w-full h-[2.25rem] px-2 rounded-md ${
                    !FormBook.title
                      ? "border-red-500 focus:outline-red-500"
                      : "focus:outline-none"
                  }`}
                  onChange={(e) => {
                    // setFormBook(e.target.value)
                    setFormBook((prev) => {
                      return {
                        ...prev,
                        title: e.target.value,
                      };
                    });
                  }}
                />
                {!FormBook.title && (
                  <div className="text-sm text-red-500">
                    Field ini tidak boleh kosong!
                  </div>
                )}
              </div>

              {/* CONTENT */}
              <div>
                <label className="block capitalize mb-[2px]">Isi Buku</label>
                <input
                  className={`border w-full h-[4.25rem] px-2 rounded-md ${
                    !FormBook.content
                      ? "border-red-500 focus:outline-red-500"
                      : "focus:outline-none"
                  }`}
                  onChange={(e) => {
                    // setFormBook(e.target.value)
                    setFormBook((prev) => {
                      return {
                        ...prev,
                        content: e.target.value,
                      };
                    });
                  }}
                />
                {!FormBook.content && (
                  <div className="text-sm text-red-500">
                    Field ini tidak boleh kosong!
                  </div>
                )}
              </div>
            </div>

            {/* BUTTON */}
            <div className="px-6 py-4 flex">
              <Button
                isDisabled={!(FormBook.title && FormBook.content)}
                name={"anjay"}
              />
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
