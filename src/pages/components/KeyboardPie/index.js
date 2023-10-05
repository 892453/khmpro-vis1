import {React, useEffect, useState} from "react";
import * as echarts from 'echarts';
import {Tag} from "antd";

function KeyboardPie() {

    useEffect(() => {
        var chartDom = document.getElementById('keyboardpie');
        var myChart = echarts.init(chartDom);
        var option;
        option = {
            tooltip: {
              trigger: 'axis',
              axisPointer: {
                // Use axis to trigger tooltip
                type: 'shadow' // 'shadow' as default; can also be 'line' or 'shadow'
              }
            },
            legend: {},
            grid: {
              left: '3%',
              right: '4%',
              bottom: '3%',
              containLabel: true
            },
            xAxis: {
              type: 'value'
            },
            yAxis: {
              type: 'category',
              data: [ '8.10', '8.11', '8.12', '8.13', '8.14']
            },
            series: [
              {
                name: '微信',
                type: 'bar',
                stack: 'total',
                label: {
                  show: true
                },
                emphasis: {
                  focus: 'series'
                },
                data: [1979, 1089, 1632, 998, 1536]
              },
              {
                name: 'Google Chrome',
                type: 'bar',
                stack: 'total',
                label: {
                  show: true
                },
                emphasis: {
                  focus: 'series'
                },
                data: [4035, 5623, 3625, 2354, 4015]
              },
              {
                name: 'Wps Office',
                type: 'bar',
                stack: 'total',
                label: {
                  show: true
                },
                emphasis: {
                  focus: 'series'
                },
                data: [1489, 0, 530, 234, 290, 1698]
              },
              {
                name: 'Visual Studio',
                type: 'bar',
                stack: 'total',
                label: {
                  show: true
                },
                emphasis: {
                  focus: 'series'
                },
                data: [5903, 8415, 4123, 0, 0, 5236]
              },
              {
                name: 'Others',
                type: 'bar',
                stack: 'total',
                label: {
                  show: true
                },
                emphasis: {
                  focus: 'series'
                },
                data: [827, 832, 901, 934, 1290]
              }
            ]
          };
        option && myChart.setOption(option);
    }, [])

    return (
      
            // <Tag color="magenta">KeyboardPie</Tag>
            <div id="keyboardpie" style={{height:"100%", background:"#F5F5F5"}}></div>
    )
}
export default KeyboardPie;

// option = {
//     tooltip: {
//         trigger: 'item'
//     },
//     legend: {
//         top: '5%',
//         left: 'center'
//     },
//     series: [
//         {
//             name: 'Access From',
//             type: 'pie',
//             radius: ['40%', '70%'],
//             avoidLabelOverlap: false,
//             itemStyle: {
//                 borderRadius: 10,
//                 borderColor: '#fff',
//                 borderWidth: 2
//             },
//             label: {
//                 show: false,
//                 position: 'center'
//             },
//             emphasis: {
//                 label: {
//                     show: true,
//                     fontSize: '40',
//                     fontWeight: 'bold'
//                 }
//             },
//             labelLine: {
//                 show: false
//             },
//             data: [
//                 { value: 1979, name: '微信' },
//                 { value: 4035, name: 'Google Chrome' },
//                 { value: 1489, name: 'Wps Office' },
//                 { value: 5903, name: 'Visual Studio' },
//                 { value: 617, name: 'Microsoft Edge' },
//                 { value: 827, name: 'Other' }
//             ]
//         },
//     ]
// };