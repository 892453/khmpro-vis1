import React, { useEffect } from "react";
import * as echarts from 'echarts';
import axios from "axios"

function App() {

  const initChart = () => {
    let element = document.getElementById('main');
    let myChart = echarts.init(element);
    let option;
    myChart.clear()
    axios.get('flower.json').then(data => {
      console.log("res:",data);
      myChart.setOption(
        (option = {
          title: {
            text: '植物科属种分类',
            textStyle:{color:"#ffffff"}
          },
          textStyle:{
            fontSize:30,
          },
          tooltip: {
            trigger: 'item',
            triggerOn: 'mousemove'
          },
          series: [
            {
              type: 'sankey',
              data: data.data.nodes,
              links: data.data.links,
              emphasis: {
                focus: 'adjacency'
              },
              fontSize:24,
              levels: [
                {
                  depth: 0,
                  itemStyle: {
                    color: '#fbb4ae'
                  },
                  lineStyle: {
                    color: 'source',
                    opacity: 0.6
                  }
                },
                {
                  depth: 1,
                  itemStyle: {
                    color: '#b3cde3'
                  },
                  lineStyle: {
                    color: 'source',
                    opacity: 0.6
                  }
                },
                {
                  depth: 2,
                  itemStyle: {
                    color: '#ccebc5'
                  },
                  lineStyle: {
                    color: 'source',
                    opacity: 0.6
                  }
                },
                {
                  depth: 3,
                  itemStyle: {
                    color: '#decbe4'
                  },
                  lineStyle: {
                    color: 'source',
                    opacity: 0.6
                  }
                }
              ],
              lineStyle: {
                curveness: 0.5
              }
            }
          ]
        })
      );
    })
    

    option && myChart.setOption(option);
  }

  useEffect(() => {
    initChart()
  }, [])


  return (
    <div id='main' style={{ width: '70%', margin: '50px auto', height: '600px', background:"#131f48"}}></div>
  );
}

export default App;
