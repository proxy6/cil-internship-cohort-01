
img= cv2.imread(r"C:\Users\HP\Untitled Folder\nature picture.jpg", 1)
cv2.imshow(img)

#Making a copy of the previous image and displaying it
imgcopy= img.copy()
cv2.imshow(imgcopy)

#Resizing the copied image and displaying it
resized_imgcopy = cv2.resize(img, (600,600))
cv2.imshow(resized_imgcopy)