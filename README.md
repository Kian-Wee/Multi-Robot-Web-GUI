# Multi-Robot-Web-GUI
GUI used for monitoring and controlling multiple ROS robots through [roslibjs](http://wiki.ros.org/roslibjs).

This specific website is for UAV's running mavros.

Uses [Semantic-UI](https://semantic-ui.com/) for styling

Dependencies

-  [roslibjs](http://wiki.ros.org/roslibjs)
- python3



Installation

- Install roslibjs and cd to the source folder, and run 

  ``` roslaunch rosbridge.launch ```

- In the same folder, host the webserver with python3(or any other software)

    ```python3 -m http.server```

  
