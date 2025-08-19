import { addSchool, listSchool } from "../services/school.service.js";

const addSchoolController = async (req, res) => {
  const payload = req.body;
  const result = await addSchool(payload);
  return res.status(201).json({
    success: true,
    data: result,
  });
};

const getSchoolsByDistance = async (req, res) => {
  const { lat, lng } = req.query;
  const result = await listSchool({ lat, lng });
  return res.status(200).json({
    success: true,
    data: result,
  });
};

export  {
  addSchoolController,
  getSchoolsByDistance,
};
