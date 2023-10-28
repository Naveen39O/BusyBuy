import { useValue } from "../../itemContext";

const CheckBox = ({text, id})=> {
  const value = useValue();

  return (
    <div>
      <input className="form-check-input" type="checkbox" value={id} id={id}
        onChange = {value.handleCategoryCheck}
      />
      <label className="form-check-label" for={id}>
        {text}
      </label>
    </div>
  )
}

export default CheckBox;