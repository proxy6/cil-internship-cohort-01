#! /usr/bin/python3

from PIL import Image


def Image_resize():
    # Opens the image
    img = Image.open("Image.jpg")  # Opens the desired image.
    
    #Copy the image
    img_copy = img.copy()
    
    # Resize the image (w = Width h = Height) Replace "w" and "h" with image size choice
    img_resize = img_copy.resize((w,h))
    
    # Saves the resize image as demo.jpg.
    img_save = img_resize.save("demo.jpg")
    
    # Prints the size of the resized image.
    img_size = print("New image size: {}".format(img_resize.size))
    
    # Preview the resized image.
    img_show = img_resize.show()  

Image_resize()
