my_img = Image.open("./passport2.jpg")

resized_img = img.resize((256, 356))
resized_img.save("./passport2.jpg")