import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Container, Box, Typography, Avatar, Button, Card, CardContent, Grid, TextField, List, ListItem, ListItemText } from '@mui/material';
import { LocationOn } from '@mui/icons-material';

const validationSchema = yup.object({
  phone: yup.string().matches(/^[0-9]{10}$/, "Phone number must be 10 digits").required("Phone number is required"),
  email: yup.string().email("Enter a valid email").required("Email is required"),
  resume: yup
    .mixed()
    .test("fileSize", "File size is too large", value => !value || (value && value.size <= 2000000)) // 2MB max
    .test("fileFormat", "Unsupported format", value =>
      !value || (value && ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"].includes(value.type))
    ),
  photo: yup
    .mixed()
    .test("fileSize", "Image size is too large", value => !value || (value && value.size <= 2000000)) // 2MB max
    .test("fileFormat", "Unsupported format", value =>
      !value || (value && ["image/jpeg", "image/png", "image/jpg"].includes(value.type))
    ),
});

const UserDashboard = () => {
  const { handleSubmit, control, formState: { errors } } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = data => {
    console.log("Form Submitted Data", data);
    
  };

  return (
    <Container maxWidth="md">
      <Box display="flex" alignItems="center" marginBottom={2}>
        <Avatar sx={{ width: 64, height: 64, marginRight: 2 }} />
        <Box>
          <Typography variant="h5">Sahaja Rani</Typography>
          <Typography variant="subtitle2" color="textSecondary">Profile last updated - 16 Dec, 2023</Typography>
          <Box display="flex" alignItems="center">
            <LocationOn fontSize="small" color="action" />
            <Typography variant="body2" color="textSecondary">Hyderabad, INDIA</Typography>
          </Box>
          <Typography variant="body2" color="textSecondary">Fresher</Typography>
          <Typography variant="body2" color="primary">Add availability to join</Typography>
        </Box>
      </Box>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2} marginBottom={2}>
         
          <Grid item xs={12} sm={6}>
            <Controller
              name="phone"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Mobile Number"
                  variant="outlined"
                  fullWidth
                  error={!!errors.phone}
                  helperText={errors.phone ? errors.phone.message : ''}
                />
              )}
            />
          </Grid>

      
          <Grid item xs={12} sm={6}>
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Email Address"
                  variant="outlined"
                  fullWidth
                  error={!!errors.email}
                  helperText={errors.email ? errors.email.message : ''}
                />
              )}
            />
          </Grid>

       
          <Grid item xs={12}>
            <Controller
              name="resume"
              control={control}
              render={({ field }) => (
                <>
                  <Button
                    variant="contained"
                    component="label"
                    color="primary"
                  >
                    Upload Resume
                    <input
                      type="file"
                      hidden
                      onChange={e => field.onChange(e.target.files[0])}
                    />
                  </Button>
                  {errors.resume && <Typography color="error" variant="body2">{errors.resume.message}</Typography>}
                </>
              )}
            />
            <Typography variant="body2" color="textSecondary" mt={1}>
              Supported Formats: doc, docx, pdf, up to 2MB
            </Typography>
          </Grid>

         
          <Grid item xs={12} sm={6}>
            <Controller
              name="photo"
              control={control}
              render={({ field }) => (
                <>
                  <Button
                    variant="contained"
                    component="label"
                    color="primary"
                  >
                    Add Photo
                    <input
                      type="file"
                      accept="image/jpeg, image/png, image/jpg"
                      hidden
                      onChange={e => field.onChange(e.target.files[0])}
                    />
                  </Button>
                  {errors.photo && <Typography color="error" variant="body2">{errors.photo.message}</Typography>}
                </>
              )}
            />
            <Typography variant="body2" color="textSecondary" mt={1}>
              Supported Formats: jpg, jpeg, png, up to 2MB
            </Typography>
          </Grid>
        </Grid>

      
        <Grid container spacing={2} marginBottom={2}>
          <Grid item xs={12}>
            <Box display="flex" alignItems="center" justifyContent="space-between" p={2} borderRadius={2} bgcolor="background.paper">
              <Typography variant="body2">Add resume headline</Typography>
              <Button size="small" variant="contained" color="primary">+8%</Button>
            </Box>
          </Grid>
        </Grid>

        <Card variant="outlined" sx={{ marginBottom: 2 }}>
          <CardContent>
            <Typography variant="h6">Resume</Typography>
            <Typography variant="body2" color="textSecondary">Sahaja.docx</Typography>
            <Typography variant="body2" color="textSecondary">Uploaded on Apr 27, 2021</Typography>
            <Box mt={2}>
              <Button variant="contained" color="primary" sx={{ marginRight: 1 }}>Update resume</Button>
              <Button variant="outlined" color="secondary">Download</Button>
            </Box>
          </CardContent>
        </Card>

       
        <Card variant="outlined" sx={{ marginBottom: 2 }}>
          <CardContent>
            <Typography variant="h6">Resume headline</Typography>
            <Typography variant="body2" color="textSecondary">
              Add a summary of your resume to introduce yourself to recruiters
            </Typography>
            <Button variant="contained" color="primary" sx={{ mt: 1 }}>Add resume headline</Button>
          </CardContent>
        </Card>

       
        <Card variant="outlined">
          <CardContent>
            <Typography variant="h6">Quick links</Typography>
            <List>
              {['Resume', 'Resume headline', 'Key skills', 'Education', 'Projects', 'Profile summary', 'Accomplishments', 'Career profile', 'Personal details'].map((text) => (
                <ListItem key={text} secondaryAction={
                  <Button size="small" color="primary">Add</Button>
                }>
                  <ListItemText primary={text} />
                </ListItem>
              ))}
            </List>
          </CardContent>
        </Card>

    
        <Box mt={3}>
          <Button type="submit" variant="contained" color="primary" fullWidth>Submit Profile</Button>
        </Box>
      </form>
    </Container>
  );
};

export default UserDashboard;