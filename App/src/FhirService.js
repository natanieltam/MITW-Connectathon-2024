const baseUrl = 'https://hapi.fhir.tw/fhir';

export const createPatient = async (patient) => {
  const response = await fetch(`${baseUrl}/Patient`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/fhir+json',
    },
    body: JSON.stringify(patient),
  });
  return response.json();
};

export const readPatient = async (id) => {
  const response = await fetch(`${baseUrl}/Patient/${id}`, {
    method: 'GET',
  });
  return response.json();
};

export const updatePatient = async (patient) => {
  const response = await fetch(`${baseUrl}/Patient/${patient.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/fhir+json',
    },
    body: JSON.stringify(patient),
  });
  return response.json();
};

export const deletePatient = async (id) => {
  const response = await fetch(`${baseUrl}/Patient/${id}`, {
    method: 'DELETE',
  });
  return response;
};
