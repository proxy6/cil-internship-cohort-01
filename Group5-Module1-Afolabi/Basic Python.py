# importing the required libraries
import shutil
from keras.preprocessing.image import load_img,save_img,img_to_array


def copy_and_resize(source_folder_with_file_name,destination_folder,target_image_size = (128,128)):
    """
    Use forward slashes for directoties
    """

    ### resizing the image
    
    img = load_img(source_folder_with_file_name, grayscale=False ,target_size=target_image_size)
    img_array = img_to_array(img)
    save_img(source_folder_with_file_name, img_array)
    ### coping the image file 
    shutil.copy2(source_folder_with_file_name, destination_folder)
