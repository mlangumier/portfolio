import Button from '@mui/material/Button';

export const ButtonSimple = ({ text, handleClick }) => {
  return <Button variant="outlined" onClick={() => handleClick()} >{text}</Button>
}