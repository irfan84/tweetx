interface InputProps {
  placeholder?: string
  value?: string
  type?: string
  disabled?: boolean
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Input: React.FC<InputProps> = ({
  placeholder,
  value,
  type,
  disabled,
  onChange,
}) => {
  return (
    <div>
      <input
        disabled={disabled}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className=' disabled:opacity-90 disabled:cursor-not-allowed bg-black p-4 text-lg text-white rounded-md border-2 w-full border-neutral-800 focus:border-2 focus:border-sky-500 disabled:bg-neutral-900 outline-none transition'
      />
    </div>
  )
}

export default Input
