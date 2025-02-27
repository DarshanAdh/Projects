import RequestHelp from '../models/requestHelpModel';

export const createRequest = async (req, res) => {
  const { location, carDetails, name, phone, issue } = req.body;

  try {
    const newRequest = new RequestHelp({
      location,
      carDetails,
      name,
      phone,
      issue,
    });

    await newRequest.save();
    res.status(201).json({ message: 'Request created successfully', data: newRequest });
  } catch (error) {
    res.status(500).json({ message: 'Error creating request', error: error.message });
  }
};