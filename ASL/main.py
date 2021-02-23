import cv2
import numpy as np

count = 0;
label = "";

aCascade = cv2.CascadeClassifier("Resources/cascade_A.xml")

cap = cv2.VideoCapture(0)

# coordinates for the rectangle drawn in screen
start_point = (10, 100)
end_point = (270, 400)

while(cap.isOpened()):
    success, image = cap.read()
    cv2.rectangle(image, start_point, end_point, (255, 0, 0), 2)  # Drawing a rectangle
    image1 = image[100:400, 10:270]

    imgGray = cv2.cvtColor(image1, cv2.COLOR_BGR2GRAY)
    imgBlur = cv2.GaussianBlur(imgGray, (11, 11), 0)
    imgCanny = cv2.Canny(imgBlur, 50, 50)

    letter_a = aCascade.detectMultiScale(imgCanny, 1.1, 4)

    for x in letter_a:
        cv2.putText(image, "A", (500, 200), cv2.FONT_HERSHEY_COMPLEX, 2, (0, 0, 255), 2)
        count += 1;
        while count > 40:
            print("A")
            count = 0;
            label += str("A")
            print(label)
            break;
        break;

    cv2.putText(image, label, (500, 100), cv2.FONT_HERSHEY_COMPLEX, 2, (0, 0, 255), 2)
    cv2.imshow("Vide Result", image)

    if cv2.waitKey(1) & 0xFF ==ord('q'):
        break
