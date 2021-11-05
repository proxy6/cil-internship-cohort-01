from PIL import Image

# Image.open() can also open other image types
image = Image.open("images/car5.jpg")
# WIDTH and HEIGHT are integers
resized_image = image.resize((round(image.size[0]*0.5), round(image.size[1]*0.5)))
resized_image.save("resized/car5.jpg")