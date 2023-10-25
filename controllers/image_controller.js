import Image from "../db/models/image.js";

const createImage = (request, response) => {
  const { title, path } = request.body;

  const newImage = {
    title,
    path,
  };

  Image.create(newImage)
    .then((image) => {
      response.status(201).json(image);
    })
    .catch((error) => {
      response.status(500).send("An error occurred while creating image.");
      console.log("Error creating image: ", error);
    });
};

const getImage = (request, response) => {
  const { id } = request.body;

  Image.findOne({ where: id })
    .then((image) => {
      image
        ? response.status(200).send(image)
        : response.status(404).send("Image not found.");
    })
    .catch((error) => {
      response.status(500).send("An error occurred while getting image.");
      console.log("Error getting image: ", error);
    });
};

const updateImage = (request, response) => {
  const { id, title, path } = request.body;

  const updatedImage = {
    title,
    path,
  };

  Image.update(updatedImage, { where: { id } })
    .then((image) => {
      image[0] !== 0
        ? response.status(200).send()
        : response.status(404).send("Image not found.");
    })
    .catch((error) => {
      response.status(500).send("An error occurred while updating image.");
      console.log("Error updating image: ", error);
    });
};

const deleteImage = (request, response) => {
  const { id } = request.body;

  Image.destroy({ where: { id } })
    .then((image) => {
      image
        ? response.status(200).send()
        : response.status(404).send("Image not found.");
    })
    .catch((error) => {
      response.status(500).send("An error occurred while deleting image.");
      console.log("Error deleting image: ", error);
    });
};

const getImages = (request, response) => {
  Image.findAll()
    .then((images) => {
      images
        ? response.status(200).send(images)
        : response.status(404).send("Images not found.");
    })
    .catch((error) => {
      response.status(500).send("An error occurred while getting images.");
      console.log("Error getting images: ", error);
    });
};

export default {
  createImage,
  getImage,
  updateImage,
  deleteImage,
  getImages,
};
