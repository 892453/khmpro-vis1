import { React, useEffect, useState } from "react";
import * as echarts from 'echarts';
import { getmouseformatdata } from "../../../service/api";

function Mouse() {

    const [mouseformatdata, setmouseformatdata] = useState([]);
    
    useEffect(()=>{
      // 请求接口获取鼠标坐标数据
      try{
        getmouseformatdata().then((msg)=>{
            console.log("get mouseformat data");
            setmouseformatdata(msg.data);
        }); 
      }catch(e){
        console.log(e);
      }
    },[])

    useEffect(() => {
      var chartDom = document.getElementById('mouse');
      var myChart;
      myChart = echarts.init(chartDom);
      // console.log(myChart)
      var option;
        
        // prettier-ignore
        let hours = [];
        for(let i = 0;i < 16; i++){
            hours.push(i);
        }
        let days = [];
        for(let i = 0;i < 9; i++){
            days.push(i);
        }
        option = {
          tooltip: {
            position: 'top'
          },
          grid: {
            height: '50%',
            top: '10%'
          },
          xAxis: {
            type: 'category',
            data: hours,
            splitArea: {
              show: true
            }
          },
          yAxis: {
            type: 'category',
            data: days,
            splitArea: {
              show: true
            }
          },
          visualMap: {
            min: 0,
            max: 100,
            calculable: true,
            orient: 'horizontal',
            left: 'center',
            bottom: '15%',
            inRange:{
              color: ['#BBDEFF','yellow', '#FE1803']
            }
          },
          series: [
            {
              name: 'Count',
              type: 'heatmap',
              data: mouseformatdata,
              label: {
                show: true
              },
              emphasis: {
                itemStyle: {
                  shadowBlur: 10,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              }
            }
          ]
        };
        option && myChart.setOption(option);
    })

    return (
        <div id="mouse" style={{height:"600px",background: "#F5F5F5"}}>
            Mouse
        </div>
    )
}
export default Mouse;