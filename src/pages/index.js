import {React, useEffect, useState} from "react";
import { Row, Col } from 'antd';
import 'antd/dist/antd.css';
import Keyboard from "./components/Keyboard";
import KeyboardPie from "./components/KeyboardPie";
import Mouse from "./components/Mouse";
import MouseScatter from "./components/MouseScatter";
import io from "socket.io-client";


function App3() {

    useEffect(()=>{
        const namespace = '/testnamespace';
        const socketUrl  = "ws://127.0.0.1:5000" + namespace;
        console.log(socketUrl);
        const socket  = io.connect(socketUrl, {
          //  reconnection: false, //关闭自动重连
        });
    
        //发送消息
        socket.emit('request_mouse',{'param':'value'});
        console.log("request mouse send!");
        //监听鼠标的消息
        socket.on('response_mouse',function(data){
          // console.log("listen msg:", data)
            if (data.code === '200'){
                console.log("get mouse data",data);
                // alert(data.msg);
            }
            else{
                alert('ERROR:' + data.msg);
            }
        });
      //  //监听键盘的消息
      //  socket.on('response_keyboard',function(data){
      //   // console.log("listen msg:", data)
      //     if (data.code === '200'){
      //         console.log("get keyboard data",data);
      //         // alert(data.msg);
      //     }
      //     else{
      //         alert('ERROR:' + data.msg);
      //     }
      // });
      // setInterval(()=>{
      //   socket.emit('request_keyboard',{'param':'keyboard'});
      //   console.log("request keyboard send!");
      // },10000)
    
        socket.on('connect', function() {
          // socket.emit('request', {data: 'I\'m connected!'});
          console.log(socket.id, '客户端连接成功-connect')
    
        });
        socket.on('disconnect', function() {
          // socket.emit('request', {data: 'I\'m connected!'});
          console.log("socket disconnected")
        });
        return()=>{
          socket.close();
          console.log("close");
        }
      },[])
    

    return(
        <div style={{padding:"20px 100px"}}>
            <Row gutter={[32, 32]}>
                <Col span={16}>
                    <Keyboard />
                </Col>
                <Col span={8}>
                <KeyboardPie />
                </Col>
                <Col span={24} justify="center">
                    <Mouse />
                </Col>
                <Col span={24}>
                    <MouseScatter/>
                </Col>
            </Row>
        </div>
    )
}
export default App3;