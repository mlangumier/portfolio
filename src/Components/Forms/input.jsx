import { TextField } from "@mui/material"

export const InputComponent = ({
  name, 
  label, 
  variant = "outlined", 
  value, 
  onChange
}) => {
  return (
    <TextField 
      name={name} 
      label={label}
      variant={variant}
      value={value} 
      onChange={(e) => onChange(e?.target)} 
    />
  )
}