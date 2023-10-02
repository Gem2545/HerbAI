from fastapi import FastAPI, File, UploadFile
from fastapi.responses import FileResponse
import tensorflow as tf
from tensorflow.keras.preprocessing.image import load_img, img_to_array
import numpy as np
from fastapi.middleware.cors import CORSMiddleware
from tensorflow.keras.applications.resnet_v2 import preprocess_input

# Instantiate app FastAPI App
app = FastAPI()

origins = [
    "https://localhost",
    "https://localhost:3000",
    "https://herb-d62hjlt52-gem2545s-projects.vercel.app",
]

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,  # Add your React app's URL here
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

hash_table = {
    0: "Chaplu",
    1: "Fahthalinejol",
    2: "Horapa",
    3: "Krapao",
    4: "Lemon",
    5: "Magrud",
    6: "Plu",
    7: "Sabtiger",
    8: "Saranae",
    9: "Yanang",
}

# Load the pre-trained model
model = tf.keras.models.load_model("ResNet152V2.h5")


# Predicting the image from users
@app.post("/image")
def predict_img(image: UploadFile):
    print(f"Received image: {image.filename}")
    with open(f"uploaded_{image.filename}", "wb") as f:
        f.write(image.file.read())

    img = load_img(f"uploaded_{image.filename}", target_size=(256, 256))
    img = img_to_array(img)
    img = np.expand_dims(img, axis=0)
    img = preprocess_input(img)

    # Make a prediction
    result = model.predict(img)
    result_list = np.ndarray.flatten(result)
    result_list = result_list.tolist()
    # Assuming result_list is a list of floating-point numbers
    result_list_converted = [1 if elem > 0.5 else 0 for elem in result_list]
    if 1 in result_list_converted:
        found_index = result_list_converted.index(1)
        label = hash_table[found_index]
        print(f"Predicted Label: {label}")
        return label, result_list, result_list_converted
    else:
        label = "Not a herb"
        result_list = result_list
        print(f"Predicted Label: {label}")
        return label, result_list, result_list_converted


if __name__ == "__main__":
    import uvicorn

    uvicorn.run(app, host="0.0.0.0", port=8080)
