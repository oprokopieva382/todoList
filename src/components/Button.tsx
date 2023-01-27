import { FilterValuesType } from "../App";
import s from "./Button.module.css"
type PropsType = {
  name: string;
  callback: () => void;
  filter?: FilterValuesType;
};

export const Button = (props: PropsType) => {
  const onClickHandler = () => {
    props.callback();
  };
  return (
    <button className={props.filter === props.name ? s.activeFilter : ""} onClick={onClickHandler} >
      {props.name}
    </button>
  );
};
