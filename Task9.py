img= cv2.imread(r"C:\Users\HP\funbiioye\animal.jpg", 1)
cv2.imshow(img)

imgcopy= img.copy()
cv2.imshow(imgcopy)

resized_imgcopy = cv2.resize(img, (600,600))
cv2.imshow(resized_imgcopy)