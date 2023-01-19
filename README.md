# Multi-Robot-Web-GUI
GUI used for monitoring multiple ROS robots through [roslibjs](http://wiki.ros.org/roslibjs).

![Imgur](https://imgur.com/h6uc5MN.png)

This specific website is for UAV's running mavros.

Uses [Semantic-UI](https://semantic-ui.com/) for styling

Dependencies

-  [rosbridge suite](https://wiki.ros.org/rosbridge_suite)
- python3



Installation

- Install roslibjs either through cloning the github repo and building or by installing (with ```sudo apt-get install ros-<rosdistro>-rosbridge-suite```)

  cd to this project folder, and run 

  ``` roslaunch rosbridge.launch ```

- In the same folder, host the webserver with python3(or any other software)

    ```python3 -m http.server```

  
