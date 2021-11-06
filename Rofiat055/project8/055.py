import cv2
 


path = "C:\Users\User\Desktop\Rofiat055\project8\aboutpic.jpg"
img = cv2.imread("aboutpic.jpg");
print(img)

width , height =500 , 500
imgresize = cv2.resize(img , (width , height))
print(imgresize.shape)

print(imgresize)

cv2.imgshow("aboutpic", img)
cv2.imgshow("about resized" , imgresize)

cv2.waitkey(0)