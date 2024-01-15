import { Box, Card, TextField } from "@mui/material";
import { DiseaseType } from "../types/DiseaseType";

const Disease = ({ diseaseName, overview, prescriptions }: DiseaseType) => {
  return (
    <Card>
      <TextField>{"Disease Name"}</TextField>
      <TextField>{diseaseName}</TextField>
      <TextField>{"Overview"}</TextField>
      <TextField>{overview}</TextField>

      {prescriptions.map((prescription, index) => (
        <Box key={index}>
          <TextField>{"Doctor Name"}</TextField>
          <TextField>{prescription.doctorName}</TextField>
          <TextField>{"Hospital Name"}</TextField>
          <TextField>{prescription.hospitalName}</TextField>
          {prescription.medicines.map((medicine, index) => (
            <Box key={index}>
              <TextField>{"Medicine Name"}</TextField>
              <TextField>{medicine.medicineName}</TextField>
              <TextField>{"Dose"}</TextField>
              <TextField>{medicine.dose}</TextField>
              <TextField>{"Days"}</TextField>
              <TextField>{medicine.days}</TextField>
            </Box>
          ))}
        </Box>
      ))}
    </Card>
  );
};

export default Disease;
