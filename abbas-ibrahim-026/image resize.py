
from PIL import Image
def imageResize():
{img} = Image.open('WA0006.jpg')
# WIDTH and HEIGHT are integers
resized_img = img.resize((600, 500))
resized_img.save("pictures/resized_image.jpg")

imageResize()