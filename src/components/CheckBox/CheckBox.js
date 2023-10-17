
const CheckBox = ({text, id})=> {
  
  return (
    <div>
      <input className="form-check-input" type="checkbox" value="" id={id}/>
      <label className="form-check-label" for={id}>
        {text}
      </label>
    </div>
  )
}

export default CheckBox;