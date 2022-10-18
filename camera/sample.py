import cv2
import time
import numpy as np

cap = cv2.VideoCapture(0)

while True:
    #ret,frame = cap.read()
    #ret = cv2.imwrite('camera.jpg', frame)

    img1 = cv2.imread("face.jpg", 0)
    img2 = cv2.imread('back.jpg',0)
    img_diff = cv2.absdiff(img1, img2)

    #threshold = 100

    #ret, img_thresh = cv2.threshold(img_diff, threshold, 255, cv2.THRESH_BINARY)
    cv2.imwrite('sabun-result.jpg',img_diff)

    key =cv2.waitKey(10)
    if key == 27:
        break

    time.sleep(10)

cap.release()