type ScreenProps = {
    tasks: string [];
}

const Screen = ({tasks}: ScreenProps) => {
  return (
    <div className="screen">
        <ul>
    {tasks.map((task, index) => (
        <li key={index}>{task}</li>
    ))}
    </ul>
    </div>
  );
};


export default Screen;