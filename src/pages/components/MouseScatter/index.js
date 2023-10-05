import {React, useEffect, useState} from "react";
import { getmouse2, position, pose } from "../../../service/api";
import * as echarts from 'echarts';
import Websocket from "react-websocket/build/index";

function MouseScatter() {
    const [mousedata2, setMousedata2] = useState([]);
    const [headposition, setHeadposition] = useState([]);
    const [headpose, setHeadpose] = useState([]);
    

    //获取鼠标点击数据
    useEffect(()=>{
        try{
            getmouse2().then(res=>{
                // console.log("res:",res)
                setMousedata2(res.data);
            })
         }catch(e){
             console.log(e);
         }
    },[])
    //获取头部位置head_position数据
    useEffect(()=>{
        try{
            position().then(res=>{
                setHeadposition(res.position);
            })
         }catch(e){
             console.log(e);
         }
    },[])
     //获取头部姿态head_pose数据
     useEffect(()=>{
        try{
            pose().then(res=>{
                setHeadpose(res.pose);
            })
         }catch(e){
             console.log(e);
         }
    },[])
    useEffect(() => {
        var chartDom = document.getElementById('mouseScatter');
        var myChart = echarts.init(chartDom);
        var option;
        let xdata=[];
        for(let i = 0; i< 500; i++){
            xdata.push(i);
        }
        // console.log(xdata);

        option = {
            title: {
              text: 'A Visual Analytics of Online Exams'
            },
            tooltip: {
              trigger: 'axis'
            },
            legend: {},
            toolbox: {
              show: true,
              feature: {
                dataZoom: {
                  yAxisIndex: 'none'
                },
                dataView: { readOnly: false },
                magicType: { type: ['line', 'bar'] },
                restore: {},
                saveAsImage: {}
              }
            },
            xAxis: {
              type: 'category',
              boundaryGap: false,
              data: xdata
            },
            yAxis: {
                type: 'value',
            //   boundaryGap: false,
            //   data: ['-1', '0', '1', '', '-1', '0', '1'],
                axisLabel: {
                    formatter: function(value){
                        var TextY = [];
                        if(value == 0)TextY.push("-1");
                        else if(value == 1)TextY.push("0");
                        else if(value == 2)TextY.push("1");
                        else if(value == 3)TextY.push("");
                        else if(value == 4)TextY.push("-1");
                        else if(value == 5)TextY.push("0");
                        else if(value == 6)TextY.push("1");
                        return TextY;
                    }
                }
            },
              dataZoom: [
              {
                type: 'inside',
                start: 40,
                end: 60
              },
              {
                start: 0,
                end: 10
              }
            ],
            series: [
                //鼠标X轴坐标点
              {
                name: 'X轴坐标点',
                type: 'scatter',
                data: mousedata2[0],
                itemStyle: {    //点颜色
                    color:"#e433a4"
                },
                symbolSize: 5,
              },
               //鼠标y轴坐标点
              {
                name: 'Y轴坐标点',
                type: 'scatter',
                // itemStyle: {    //点颜色
                //     color:"#45d66d"
                // },
                data: mousedata2[1],
                symbolSize: 3,
              },

              //headpose--yaw [0,2]
              {
                data: headpose[0],
                type: 'line',
                smooth: true,
                symbolSize: 1,
              },
              //headpose--pitch [4,6]
              {
                data: headpose[1],
                type: 'line',
                smooth: true,
                symbolSize: 1,
              },

               {
                name: 'Direct',
                type: 'line',
                stack: 'Total',
                areaStyle: {    //底部区域颜色改为透明色
                  color: "#ffffff"
                },
                lineStyle: {    //折线图线条颜色
                    color: "#ffffff"
                },
                itemStyle: {    //点颜色
                    color:"#fff"
                  },
                // emphasis: {
                //   focus: 'series'
                // },
                data: headposition[1]  //小坐标
              },
              {
                name: 'Search Engine',
                type: 'line',
                stack: 'Total',
                // label: { //不显示坐标点y值
                //   show: true,
                //   position: 'top'
                // },
                areaStyle: {
                    color: "#c5d6e9",
                },
                lineStyle: {    //折线图线条颜色
                    color: "#ffffff"
                },
                itemStyle: {    //点颜色
                    color:"#fff"
                  },
                emphasis: {
                  focus: 'series'
                },
                data: headposition[0]  //大坐标
              }              
            ]
          };

        option && myChart.setOption(option);
    })


    return(
        <div id={"mouseScatter"} style={{background: "#F5F5F5", height:"400px", width:"100%"}}>
        </div>
    )
}
export default MouseScatter;