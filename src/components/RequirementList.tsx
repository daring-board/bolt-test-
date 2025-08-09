import React from 'react';
import { List, ListItem, ListItemText, IconButton, Paper } from '@mui/material';
import { Trash2 } from 'lucide-react';

interface Requirement {
  id: string;
  title: string;
  description: string;
}

interface RequirementListProps {
  requirements: Requirement[];
  onDelete: (id: string) => void;
}

const RequirementList: React.FC<RequirementListProps> = ({ requirements, onDelete }) => {
  return (
    <List>
      {requirements.map((req) => (
        <Paper key={req.id} sx={{ mb: 2, p: 2 }}>
          <ListItem
            secondaryAction={
              <IconButton edge="end" aria-label="delete" onClick={() => onDelete(req.id)}>
                <Trash2 size={20} />
              </IconButton>
            }
          >
            <ListItemText primary={req.title} secondary={req.description} />
          </ListItem>
        </Paper>
      ))}
    </List>
  );
};

export default RequirementList;
