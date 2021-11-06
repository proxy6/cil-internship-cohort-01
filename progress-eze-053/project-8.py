# Simple function to copy and resize a jpg file

# function to copy and resize images
import shutil, os
from PIL import Image
def copy_and_resize_image(width, height):
   # picture should be in current directory, include file path if not
   # copy image
   shutil.copy('001.jpg')
   # open an image
   img = Image.open("001.jpg")
   # WIDTH and HEIGHT are integers
   resized_img = img.resize((width, height))
   resized_img.save("resized_image.jpg")

# to test function, call the function with arguments for resizing the picture
copy_and_resize_image(10, 14)

