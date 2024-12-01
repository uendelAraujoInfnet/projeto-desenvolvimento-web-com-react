import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import DeleteIcon from '@mui/icons-material/Delete';

interface AppBarProps {
  title: string;
  onBack: () => void;
  onDelete?: () => void;
}

const CustomAppBar: React.FC<AppBarProps> = ({ title, onBack, onDelete }) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" onClick={onBack}>
          <ArrowBackIcon />
        </IconButton>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          {title}
        </Typography>
        {onDelete && (
          <IconButton edge="end" color="inherit" onClick={onDelete}>
            <DeleteIcon />
          </IconButton>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default CustomAppBar;
