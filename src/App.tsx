import React, { useState } from 'react';
import { ThemeProvider, CssBaseline, AppBar, Toolbar, Typography, Container, Box } from '@mui/material';
import { Book } from 'lucide-react';
import theme from './theme';
import RequirementForm from './components/RequirementForm';
import RequirementList from './components/RequirementList';

interface Requirement {
  id: string;
  title: string;
  description: string;
}

const App: React.FC = () => {
  const [requirements, setRequirements] = useState<Requirement[]>([]);

  const addRequirement = (title: string, description: string) => {
    const newReq: Requirement = {
      id: Date.now().toString(),
      title,
      description,
    };
    setRequirements((prev) => [...prev, newReq]);
  };

  const deleteRequirement = (id: string) => {
    setRequirements((prev) => prev.filter((req) => req.id !== id));
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="static" color="primary">
        <Toolbar>
          <Book size={24} style={{ marginRight: 8 }} />
          <Typography variant="h6" component="div">
            Requirement Definition App
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        sx={{
          minHeight: 'calc(100vh - 64px)',
          backgroundImage: 'url(https://images.unsplash.com/photo-1587614382346-5b1e5b5a7f6a?auto=format&fit=crop&w=800&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          p: 2,
        }}
      >
        <Container maxWidth="md" sx={{ backgroundColor: 'rgba(255,255,255,0.9)', borderRadius: 2, p: 4 }}>
          <RequirementForm onAdd={addRequirement} />
          <RequirementList requirements={requirements} onDelete={deleteRequirement} />
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default App;
