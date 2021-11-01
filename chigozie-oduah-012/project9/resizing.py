from PIL import Image

def main():
    image = open_image('image1.jpg')
    newImage = image.resize((200, 200))
    newImage.save('image2.jpg')

def open_image(file_location):
    image = Image.open(file_location)
    return image

main()