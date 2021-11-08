from PIL import Image

img = Image.open("img_resize.jpg")

re_img = img.resize((700,300))
re_img.show()
#img.show()
