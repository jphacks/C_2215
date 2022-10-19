import cv2
import time
import numpy as np

# cap = cv2.VideoCapture(0)
# if not cap.isOpened():
#     print("Cannot open camera")
#     exit()

threshold = 150

try:
    while True:
        # ret,frame = cap.read()
        # cv2.imwrite('./camera/camera.jpg', frame)

        # if not ret:
        #     print("Can't receive frame")
        #     break

        img1 = cv2.imread("./camera/face.jpg", 0)
        img2 = cv2.imread('./camera/back.jpg',0)
        img_diff = cv2.absdiff(img1, img2)

        ret, img_thresh = cv2.threshold(img_diff, threshold, 255, cv2.THRESH_BINARY)
        cv2.imwrite('./camera/sabun-result.jpg',img_thresh)
        #cv2.imshow('Image', img_thresh)
        pixel_number = np.size(img_thresh)
        pixel_sum = np.sum(img_thresh)
        while_pixel_number = pixel_sum/255
        black_pixel_number = pixel_number - while_pixel_number
        used_table = (while_pixel_number/pixel_number) * 100
        print("使用率：",used_table)
        time.sleep(10)
except KeyboardInterrupt:
    print('FINISH!')

#cap.release()