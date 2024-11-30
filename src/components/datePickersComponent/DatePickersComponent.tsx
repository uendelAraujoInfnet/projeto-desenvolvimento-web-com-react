import React, { useState } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { DatePicker, DateTimePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs, { Dayjs } from 'dayjs';

const DatePickersComponent: React.FC = () => {
  const [date, setDate] = useState<Dayjs | null>(null);
  const [dateTime, setDateTime] = useState<Dayjs | null>(null);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div>
        <DatePicker
          label="Selecione a Data"
          value={date}
          onChange={(newValue) => setDate(newValue)}
        />
        <DateTimePicker
          label="Selecione Data e Hora"
          value={dateTime}
          onChange={(newValue) => setDateTime(newValue)}
        />
      </div>
    </LocalizationProvider>
  );
};

export default DatePickersComponent;
