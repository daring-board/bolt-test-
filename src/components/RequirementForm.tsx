import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';
import { Plus } from 'lucide-react';

interface RequirementFormProps {
  onAdd: (title: string, description: string) => void;
}

const RequirementForm: React.FC<RequirementFormProps> = ({ onAdd }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;
    onAdd(title, description);
    setTitle('');
    setDescription('');
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2, mb: 4 }}>
      <TextField
        label="Requirement Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <TextField
        label="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        multiline
        rows={3}
      />
      <Button type="submit" variant="contained" startIcon={<Plus size={20} />}>
        Add Requirement
      </Button>
    </Box>
  );
};

export default RequirementForm;
