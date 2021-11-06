def image_resize(image,width,height):
    from PIL import Image
    img = Image.open(image)
    resized_img = img.resize((width,height))
    resized_img.save("resized_image.jpg")
image_resize('rtg.jpeg',70,70)