# A function to copy and resize a jpg file 

import os 
from PIL import Image

basedir = os.path.abspath(os.path.dirname(__file__))
filepath = os.path.join(basedir, 'demo_image.jpg')

def resize_picture(filepath):
    '''creating the function for the new filepath to resize the image'''
    image_pic = Image.open(filepath)
    image_pic.thumbnail((100, 100))
    new_filepath = os.path.join(basedir, 'new_image.jpg')
    image_pic.save(new_filepath)
    image_pic.show()
    return new_filepath

print(resize_picture(filepath))
