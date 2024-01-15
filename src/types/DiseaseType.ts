export interface DiseaseType {
  diseaseName: string;
  overview: string;
  prescriptions: PrescriptionType[];
}

export interface PrescriptionType {
  doctorName: string;
  hospitalName: string;
  medicines: MedicineType[];
}

export interface MedicineType {
  medicineName: string;
  dose: string;
  days: number;
}
