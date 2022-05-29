import { TextField } from "@mui/material"

export const InputComponent = (props) => {
  const { name, label, variant = "standard", value, onChange } = props
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