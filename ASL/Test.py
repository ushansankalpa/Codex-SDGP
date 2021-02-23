import cv2
import numpy as np

aCascade = cv2.CascadeClassifier("Resources/cascade.xml")

cap = cv2.VideoCapture(0)

# coordinates for the rectangle drawn in screen
start_point = (10, 150)
end_point = (310, 450)

while(cap.isOpened()):
    success, image = cap.read()
    cv2.rectangle(image, start_point, end_point, (255, 0, 0), 2)  # Drawing a rectangle
    image1 = image[150:450, 10:310]

    imgGray = cv2.cvtColor(image1, cv2.COLOR_BGR2GRAY)
    imgBlur = cv2.GaussianBlur(imgGray, (11, 11), 0)
    imgCanny = cv2.Canny(imgBlur, 50, 50)

    faces = aCascade.detectMultiScale(imgCanny, 1.1, 4)

    for(x,y,w,h) in faces:
        cv2.rectangle(image1, (x, y), (x + w, y + h), (0, 255, 0), 2)

    cv2.imshow("Vide Result", image)

    if cv2.waitKey(1) & 0xFF ==ord('q'):
        break
