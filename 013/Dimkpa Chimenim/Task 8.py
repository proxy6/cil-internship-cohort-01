# Python function to resize images
from PIL import Image # pil is a python extension for image manipulation
basewidth = 300 # This is our basewidth
img = Image.open('Dummy1.jpg') # name of image and extension
# to set the intended size of the image
wsize = (basewidth/float(img.size[0])) # for width size
hsize = int((float(img.size[1])*float(wsize))) # for height size
# resize image and save
img = img.resize((basewidth,hsize), Image.ANTIALIAS)
img.save('Dummy1.jpg')
