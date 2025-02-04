type ButtonProps = {
    onClick: () => void;
  };
  
  const Button = ({ onClick }: ButtonProps) => {
    return (
      <button className="button" onClick={onClick}>
        Add Task
      </button>
    );
  };
  
  export default Button;