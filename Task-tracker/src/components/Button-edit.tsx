type ButtonEditProps = {
    onClick: () => void;
  };
  
  const Button = ({ onClick }: ButtonEditProps) => {
    return (
      <button className="button" onClick={onClick}>
        Add Task
      </button>
    );
  };
  
  export default Button;