import React, { useState } from 'react';
import { Stepper, Step, StepLabel, Box, Button, useMediaQuery } from '@mui/material';
import { styled, useTheme } from '@mui/system';

import JobSeeker from './Registrations/Jobseeker';
import PersonalDetails from './Registrations/PersonalDetails';
import QualificationDetails from './Registrations/QualificationDetails';
import ProfessionalSkillsForm from './Registrations/ProfessionalSkills';

const steps = [
  'Job Seeker Details',
  'Personal Details',
  'Qualification Details',
  'Professional Details',
];


const ArrowStepLabel = styled(StepLabel)(({ theme, active, isSmallScreen }) => ({
  backgroundColor: active ? '#1e88e5' : '#2c6e91',
  color: 'white',
  padding: isSmallScreen ? '8px 8px' : '12px 10px',
  borderRadius: '15px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  fontSize: isSmallScreen ? '12px' : '14px',
  '&:after': {
    content: '""',
    position: 'absolute',
    top: '0',
    right: '-10px',
    borderTop: isSmallScreen ? '16px solid transparent' : '24px solid transparent',
    borderBottom: isSmallScreen ? '16px solid transparent' : '24px solid transparent',
    borderLeft: `20px solid ${active ? '#1e88e5' : '#2c6e91'}`,
    zIndex: '1',
  },
  '&:last-of-type:after': {
    display: 'none', 
  },
  '& .MuiStepLabel-label': {
    color: 'white',
    fontSize: isSmallScreen ? '10px' : '16px',
    fontWeight: active ? 'normal' : 'normal',
  
  },
}));

const CustomStepper = () => {
  const [activeStep, setActiveStep] = useState(0);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const handleNext = () => {
    setActiveStep((prevStep) => Math.min(prevStep + 1, steps.length - 1));
  };

  const handleBack = () => {
    setActiveStep((prevStep) => Math.max(prevStep - 1, 0));
  };
  const handleStepClick = (stepIndex) => {
    setActiveStep(stepIndex);
  };

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return <JobSeeker />;
      case 1:
        return <PersonalDetails />;
      case 2:
        return <QualificationDetails />;
      case 3:
        return <ProfessionalSkillsForm />;
      default:
        return null;
    }
  };

  return (
    <Box
      sx={{
        width: isSmallScreen ? '100%' : '50%',
        mx: 'auto',
        mt: 3,
        mb: 5,
        px: isSmallScreen ? 1 : 3,
      }}
    >
      <Stepper
        alternativeLabel
        nonLinear
        activeStep={activeStep}
        connector={null}
      >
        {steps.map((label, index) => (
          <Step key={label} completed={index < activeStep}
          sx={{ padding: 0.01, minWidth: 0 }}
            onClick={() => handleStepClick(index)}
          >
            <ArrowStepLabel
              StepIconComponent={() => null}
              active={index === activeStep}
              isSmallScreen={isSmallScreen}
            >
              {label}
            </ArrowStepLabel>
          </Step>
        ))}
      </Stepper>
      <Box sx={{ mb: 4 }}>
        {getStepContent(activeStep)}
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', px: 1 }}>
        <Button
          disabled={activeStep === 0}
          onClick={handleBack}
          variant="contained"
          color="secondary"
          sx={{
            fontSize: isSmallScreen ? '12px' : '14px',
            py: isSmallScreen ? 1 : 1.5,
          }}
        >
          Back
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={handleNext}
          sx={{
            fontSize: isSmallScreen ? '12px' : '14px',
            py: isSmallScreen ? 1 : 1.5,
          }}
        >
          {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
        </Button>
      </Box>
    </Box>
  );
};

export default CustomStepper;
