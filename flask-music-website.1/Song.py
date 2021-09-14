import os

class Song:
    def __init__(self, title, image, audio, id):
        self.title = title
        self.image = image 
        self.audio = audio 
        self.id = id

songs = []

title = None
imagepath = None
audiopath = None

count = 0

for subdir, dirs, files in os.walk('.'):

    for filename in files:
        filepath = subdir + os.sep + filename

        if filepath.endswith(".jpg") or filepath.endswith(".jpeg"):
            imagepath = filepath

        if filepath.endswith(".ogg"):
            audiopath = filepath
        
        title = os.path.basename(subdir)

        if title is not None and \
            imagepath is not None and \
                audiopath is not None:

            count += 1
            id = count

            mod_imagepath = imagepath[imagepath.find('songs'):]
            mod_audiopath = audiopath[audiopath.find('songs'):]

            song = Song(title, mod_imagepath, mod_audiopath, id)
            songs.append(song)

            title = None
            imagepath = None
            audiopath = None

# test
for x in songs:
    print(x.title)
    print(x.image)
    print(x.audio)
    print(x.id)
    print()