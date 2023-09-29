from fastapi import FastAPI, File, UploadFile
from fastapi.responses import FileResponse
import tensorflow as tf
from tensorflow.keras.preprocessing.image import load_img, img_to_array
import numpy as np
from fastapi.middleware.cors import CORSMiddleware
from tensorflow.keras.applications.resnet_v2 import preprocess_input 
# Instantiate app FastAPI App
app = FastAPI()

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Add your React app's URL here
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

# # Root route
# @app.get("/")
# def root():
#   html_file_path = 'index.html'
#   return  FileResponse(html_file_path, media_type='text/html')

# Predicting the image from users
@app.post("/image")
def predict_img(image: UploadFile):

  with open(f"uploaded_{image.filename}", "wb") as f:
    f.write(image.file.read())

  # Load the pre-trained model
  model = tf.keras.models.load_model("ResNet152V2.h5")
  img = load_img(f'uploaded_{image.filename}', target_size=(256, 256))
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
    return label, result_list, result_list_converted
  else:
    label = 'Not a herb'
    result_list = result_list
    return label, result_list, result_list_converted