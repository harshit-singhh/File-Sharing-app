
const File = require('../models/file');

const uploadImage = async(request , response) => {
    // example response
    // return res.status(200).json({ msg: 'hello' });

    const fileObj = {
      path: request.file.path,
      name: request.file.originalname,
    };

    console.log("request which came from frontend")
    console.log(fileObj);

    try {
        
        const file = await File.create(fileObj);

        console.log(file);
        
        response.status(200).json({path: `http://localhost:8000/file/${file._id}`})
    }

    catch (error) {
        console.log("error is ", error.message);
        response.status(500).json({ error: error.message });
    }
};


const downloadImage = async (request, response) => {
    try {
        const file = await File.findById(request.params.fileId);
        file.downloadContent++;
        

        // to save the updated downloadContent in the db.
        await file.save();

        response.download(file.path, file.name);



    }
    catch (error) {
        console.log(error.messege);
        return response.status(500).json({ error: error.message });
    }
}

module.exports = { uploadImage, downloadImage };