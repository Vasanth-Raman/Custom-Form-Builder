const Response = require("../model/responseModel");

//to createResponse

const createResponse = async (req, res) => {
  const { formId } = req.body;

  if (!formId) {
    return res
      .status(400)
      .json({ success: false, message: "Form ID is required" });
  }

  try {
    const formResponse = await Response.create({
      formId,
      responses: [],
      firstInteractionTime: format(new Date(), "MMM d, hh:mm a"),
    });

    res.status(201).json({ success: true, responseId: formResponse._id });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error creating response document",
      error,
    });
  }
};

//to updateResponse

const updateResponse = async (req, res) => {
  const { responseId } = req.params;
  const { title, response } = req.body;

  try {
    const formResponse = await Response.findById(responseId);
    console.log(formResponse);
    if (!formResponse) {
      return res
        .status(404)
        .json({ success: false, message: "Response not found" });
    }

    formResponse.responses.push({ title, response });
    await formResponse.save();

    res
      .status(200)
      .json({ success: true, message: "Response updated successfully" });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error updating response document",
      error,
    });
  }
};

//to read responses

const readResponses = async (req, res) => {
  const { formId } = req.params;
  try {
    const responses = await Response.findById(formId);

    if (!responses) {
      return res.status(404).json({
        success: false,
        message: "No responses for this form",
      });
    }

    res.status(200).json({
      success: true,
      data: responses,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching responses",
      error,
    });
  }
};

module.exports = { createResponse, updateResponse, readResponses };
