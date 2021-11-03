from os import error
from PIL import Image

def main():
    try:
        image = open_image('image1.jpg')
        newImage = image.resize((200, 200))
        newImage.save('image2.jpg')
        print("done")
    except:
        print ("There was an error processing the image.")

def open_image(file_location):
    image = Image.open(file_location)
    return image

main()