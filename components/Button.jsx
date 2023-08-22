import React from 'react'

export default function Button({isDisabled, name}) {
  return (
    <button
        disabled ={isDisabled} type="submit"
        className={`rounded-lg text-white h-[2.25rem] px-[.5rem] ml-auto pb-[3px] ${!isDisabled ? 'bg-sky-500' : 'bg-gray-400' }`}>
        {name ?? "Simpan"}
    </button>
  )
}
