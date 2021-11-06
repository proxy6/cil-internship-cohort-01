# for this function to work pillow must be installed in an enviroment
# install pillow with 'pip install pillow'
from PIL import Image


def image_resizer(w, h):

    image = Image.open('original path where the file is currently stored\file name.file extension')

    new_image = image.resize((w, h))

    new_image.save('target path where the file will be copied\file name.file extension')


print('hellow this is my image resizer function')

w = int(input('Enter width:', ))

h = int(input('Enter height:' ))



image_resizer(w, h)
