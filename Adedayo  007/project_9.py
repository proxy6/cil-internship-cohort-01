from PIL import Image
def main():
    filename ='py.png';
    image = Image.open(filename);
    image = image.copy()
    size = width, height = image.size;

    image.resize((400,100))
if (__name__ == '_main_'):
    main()