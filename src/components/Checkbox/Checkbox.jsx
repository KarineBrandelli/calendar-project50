import Checkbox from '@mui/material/Checkbox';
import { Square, CheckSquare } from 'phosphor-react';

export const CheckboxInput = () => {
  return (
    <Checkbox
      icon={<Square size={32} color="white"/>}
      checkedIcon={<CheckSquare size={32} color="white"/>}
    />
  )
} 