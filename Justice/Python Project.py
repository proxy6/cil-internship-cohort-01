def image_resize(location,new_size):
    """Function to receive image directory, list with image length
        and width in pixels and return resized image"""
    from PIL import Image

    im1 = Image. open(location)
    im2 = im1.copy()
    im2.show()
    return im2.resize(new_size)
