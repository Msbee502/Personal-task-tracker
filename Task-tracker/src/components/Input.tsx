type InputProps = {
    value: string;
    onChange: (value: string) => void;
    placeholder: string;
    className?: string;
}

const Input = ({value, onChange, placeholder, className}: InputProps) => {
  return(
    <input value={value} onChange={(e) => onChange(e.target.value)}
    placeholder={placeholder} 
    className={`p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 ${className}`}/>
  );
};

export default Input;