from PIL import Image

image = Image.open('max5.jpg')
image.show()

#Resizing Image

image = Image.open('max5.jpg')
new_image = image.resize((400, 400))
new_image.save('max5_New.jpg')

print(image.size) # Output: (1920, 1280)
print(new_image.size) # Output: (400, 400)