import cv2

img = cv2.read('billions.png') #Kindly link your image here, the image here is local to my system

scale = 0.50

width = int(img.shape[1]*scale)
height =  int(img.shape[0]*scale)

dimension = (width,height)

resized_image = cv2.resize(img,dimension, interpolation=INTER_AREA)

print(resized_image.shape)
