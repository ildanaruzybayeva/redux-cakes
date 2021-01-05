import React, { useCallback } from "react";
import Title from "./Title";
import Count from "./Count";
import Button from "./Button";

export default function Parentcomponent() {
  const [age, setAge] = React.useState(18);
  const [salary, setSalary] = React.useState(500);

  const incrementAge = useCallback(() => {
    setAge(age + 1);
  }, [age]);

  const incerementSalary = useCallback(() => {
    setSalary(salary + 1);
  }, [salary]);

  return (
    <div>
      <Title />
      <Count text="age" count={age} />
      <Button handleClick={incrementAge}>Increase age</Button>
      <Count text="salary" count={salary} />
      <Button handleClick={incerementSalary}>Increase salary</Button>
    </div>
  );
}
