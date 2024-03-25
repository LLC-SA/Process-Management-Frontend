function SelectInput({
  field,
  values,
  disabled,
  selectMessage = "Elija una opción",
  selectStyle,
}) {
  return (
    <select {...field} className={selectStyle}>
      <option value="" disabled>
        {selectMessage}
      </option>
      {values.map((value) => (
        <option key={value} value={`${value}`} disabled={disabled}>
          {value}
        </option>
      ))}
    </select>
  );
}

export default SelectInput;
