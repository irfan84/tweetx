interface ButtonProps {
  label: string
  secondary?: boolean
  fullWidth?: boolean
  large?: boolean
  onClick: () => void
  outline?: boolean
  disabled?: boolean
}

const Button: React.FC<ButtonProps> = ({
  label,
  secondary,
  fullWidth,
  large,
  onClick,
  outline,
  disabled,
}) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`disbaled:opacity-70 disabled:cursor-not-allowed font-semibold rounded-full hover:bg-opacity-80 border-2 transition ${
        fullWidth ? 'w-full' : 'w-fit'
      }
        ${
          secondary
            ? 'bg-white text-black border-black'
            : 'bg-sky-500 text-white border-sky-500'
        }
        ${large ? 'text-xl px-5 py-3' : 'text-ms px-4 py-2'}
        ${outline ? 'bg-transparent border-white text-white' : ''}
        `}
    >
      {label}
    </button>
  )
}

export default Button
