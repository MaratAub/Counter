
type Props = {
  title:string
  onClick: () => void
  className: string
  disabled?: boolean
}

export const Button = ({title, onClick,  className, disabled}:Props) => {
  return (
    <button onClick={onClick} className={className} disabled={disabled}>{title}</button>
  );
};

