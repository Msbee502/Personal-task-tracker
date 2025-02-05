type ButtonProps = {
    onClick: () => void;
    label: string;
  };
  
  const Button = ({ onClick, label }: ButtonProps) => {
    return (
      <button className="button" onClick={onClick}>
        {label}
      </button>
    );
  };
  
  export default Button;
  