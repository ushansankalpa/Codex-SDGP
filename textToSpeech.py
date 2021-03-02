from gtts import gTTS
import os

language = "en"


def run_voice(myText):
    output = gTTS(text=myText, lang=language, slow=False)
    output.save("output.mp3")

    return os.system("start output.mp3")
