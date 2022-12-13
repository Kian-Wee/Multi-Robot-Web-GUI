class UAV{

    constructor(uavnumber){
        this.uavnum=uavnumber;
        this.mode;
        this.battery;
        this.posx;
        this.posy;
        this.posz;

        // UAV Position
        this.uavposlistener = new ROSLIB.Topic({
        ros : ros,
        name : String(this.uavnum)+ '/mavros/local_position/pose',
        messageType : 'geometry_msgs/PoseStamped'
        });

        // UAV Battery
        this.uavbatlistener = new ROSLIB.Topic({
        ros : ros,
        name : String(this.uavnum)+ '/mavros/battery',
        messageType : 'sensor_msgs/BatteryState'
        });

        // UAV State
        thisuavstatelistener = new ROSLIB.Topic({
        ros : ros,
        name : String(this.uavnum)+ '/mavros/state',
        messageType : 'mavros_msgs/State'
        });
    
    }

    updateros(){
        this.uav1poslistener.subscribe(function(message) {
            //console.log('Received message on ' + uav1poslistener.name + ': ' + message.pose.position.x);
            this.posx = String(message.pose.position.x.toFixed(2));
            this.posy = String(message.pose.position.y.toFixed(2));
            this.posz = String(message.pose.position.z.toFixed(2));
            //uav1poslistener.unsubscribe();
            });

        this.uavbatlistener.subscribe(function(message) {
            //console.log('Received message on ' + uav1batlistener.name + ': ' + message.cell_voltage);
            var average = message.cell_voltage.reduce((a, b) => a + b, 0) / message.cell_voltage.length;
            var batper = (average-3.2)/(4.2-3.2) * 100
            this.battery = String(batper.toFixed(2));
            //uav1batlistener.unsubscribe();
            });
            
        this.uavstatelistener.subscribe(function(message) {
            //console.log('Received message on ' + uav1statelistener.name + ': ' + message.mode);
            this.mode = String(message.mode);
            //uav1statelistener.unsubscribe();
            });
            
    }

}


// var ros = new ROSLIB.Ros({
//     url : 'ws://192.168.1.3:9090'
//   });

//   ros.on('connection', function() {
//     console.log('Connected to websocket server.');
//   });

//   ros.on('error', function(error) {
//     console.log('Error connecting to websocket server: ', error);
//   });

//   ros.on('close', function() {
//     console.log('Connection to websocket server closed.');
//   });