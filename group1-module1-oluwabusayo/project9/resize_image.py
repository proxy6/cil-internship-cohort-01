from PIL import Image

# Image.open() can also open other image types
img = Image.open("images/image.jpg")
# WIDTH and HEIGHT are integers
resized_img = img.resize((round(img.size[0]*0.5), round(img.size[1]*0.5)))
resized_img.save("resized_image/image.jpg")