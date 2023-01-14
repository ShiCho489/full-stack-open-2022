const Courses = ({ courses }) => {
    return (
      <div>
        <Header name={courses.name} />
        <Content parts={courses.parts} />
        <Total parts={courses.parts} />
      </div>
    );
  };
  
  const Header = (props) => {
    return <h2>{props.name}</h2>;
  };
  
  const Content = (props) => {
    return (
      <div>
        {props.parts.map((part, i) => (
          <Part key={part.id} name={part.name} exercises={part.exercises} />
        ))}
      </div>
    );
  };
  
  const Part = (props) => {
    return (
      <p>
        {props.part.name} {props.part.exercises}
      </p>
    );
  };
  
  const Total = ({ parts }) => {
    const total = parts.reduce((sum, part) => {
      return sum + part.exercises;
    }, 0);
  
    return <strong>total of {total} exercises</strong>;
  };
  
  export default Courses;
