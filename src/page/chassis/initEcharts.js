import echarts from 'echarts'

export default {
  data () {
    return {
      trendAnalysis: null,
      device: null,
      chassis: null,
      alarm: null
    }
  },
  mounted () {
    this.$nextTick(() => {
      window.onresize = () => {
        this.trendAnalysis.resize()
        this.device.resize()
        this.chassis.resize()
        this.alarm.resize()
      }
    })
    // var uploadedDataURL = './static/data-shangdong.json'
    // var myChart = echarts.init(document.getElementById('map'))
    // myChart.showLoading()
    // this.$.getJSON(uploadedDataURL, function (geoJson) {
    //   echarts.registerMap('jiangxi', geoJson)
    //   myChart.hideLoading()
    //   var geoCoordMap = {
    //     '济南市': [117.121225, 36.66466],
    //     '菏泽市': [115.480656, 35.23375],
    //     '德州市': [116.39, 37.45],
    //     '聊城市': [115.97, 36.45],
    //     '泰安市': [117.13, 36.18],
    //     '临沂市': [118.35, 35.05],
    //     '淄博市': [118.05, 36.78],
    //     '枣庄市': [117.57, 34.86],
    //     '滨州市': [118.03, 37.36],
    //     '潍坊市': [119.1, 36.62],
    //     '东营市': [118.49, 37.46],
    //     '青岛市': [120.3, 36.62],
    //     '烟台市': [120.9, 37.32],
    //     '威海市': [122.1, 37.2],
    //     '日照市': [119.1, 35.62],
    //     '济宁市': [116.7, 35.42],
    //     '莱芜市': [117.70, 36.28]
    //   }
    //   var data = [
    //     {name: '济南市', value: 390},
    //     {name: '菏泽市', value: 158},
    //     {name: '德州市', value: 252},
    //     {name: '聊城市', value: 99},
    //     {name: '泰安市', value: 189},
    //     {name: '临沂市', value: 52},
    //     {name: '淄博市', value: 158},
    //     {name: '枣庄市', value: 152},
    //     {name: '滨州市', value: 189},
    //     {name: '潍坊市', value: 160},
    //     {name: '东营市', value: 80},
    //     {name: '青岛市', value: 180},
    //     {name: '烟台市', value: 190},
    //     {name: '威海市', value: 290},
    //     {name: '日照市', value: 190},
    //     {name: '济宁市', value: 190},
    //     {name: '莱芜市', value: 290}
    //   ]

    //   var convertData = function (data) {
    //     var res = []
    //     for (var i = 0; i < data.length; i++) {
    //       var geoCoord = geoCoordMap[data[i].name]
    //       if (geoCoord) {
    //         res.push({
    //           name: data[i].name,
    //           value: geoCoord.concat(data[i].value)
    //         })
    //       }
    //     }
    //     return res
    //   }

    //   var option = {
    //     backgroundColor: '#020933',
    //     title: {
    //       top: 20,
    //       text: '“会员活跃度” - 山东省',
    //       subtext: '',
    //       x: 'center',
    //       textStyle: {
    //         color: '#ccc'
    //       }
    //     },

    //     tooltip: {
    //       trigger: 'item',
    //       formatter: function (params) {
    //         if (typeof (params.value)[2] === 'undefined') {
    //           return params.name + ' : ' + params.value
    //         } else {
    //           return params.name + ' : ' + params.value[2]
    //         }
    //       }
    //     },
    //     legend: {
    //       orient: 'vertical',
    //       y: 'bottom',
    //       x: 'right',
    //       data: ['pm2.5'],
    //       textStyle: {
    //         color: '#fff'
    //       }
    //     },
    //     visualMap: {
    //       show: false,
    //       min: 0,
    //       max: 500,
    //       left: 'left',
    //       top: 'bottom',
    //       text: ['高', '低'], // 文本，默认为数值文本
    //       calculable: true,
    //       seriesIndex: [1]
    //     },
    //     geo: {
    //       show: true,
    //       map: 'jiangxi',
    //       label: {
    //         normal: {
    //           show: false
    //         },
    //         emphasis: {
    //           show: false
    //         }
    //       },
    //       roam: true,
    //       itemStyle: {
    //         normal: {
    //           areaColor: 'transparent',
    //           borderColor: '#3fdaff',
    //           borderWidth: 2,
    //           shadowColor: 'rgba(63, 218, 255, 0.5)',
    //           shadowBlur: 30
    //         },
    //         emphasis: {
    //           areaColor: '#2B91B7'
    //         }
    //       }
    //     },
    //     series: [
    //       {
    //         name: 'light',
    //         type: 'scatter',
    //         coordinateSystem: 'geo',
    //         data: convertData(data),
    //         symbolSize: function (val) {
    //           return val[2] / 10
    //         },
    //         label: {
    //           normal: {
    //             formatter: '{b}',
    //             position: 'right',
    //             show: true
    //           },
    //           emphasis: {
    //             show: true
    //           }
    //         },
    //         itemStyle: {
    //           normal: {
    //             color: '#F4E925'
    //           }
    //         }
    //       },
    //       {
    //         type: 'map',
    //         map: 'jiangxi',
    //         geoIndex: 0,
    //         aspectScale: 0.75, // 长宽比
    //         showLegendSymbol: false, // 存在legend时显示
    //         label: {
    //           normal: {
    //             show: false
    //           },
    //           emphasis: {
    //             show: false,
    //             textStyle: {
    //               color: '#fff'
    //             }
    //           }
    //         },
    //         roam: true,
    //         itemStyle: {
    //           normal: {
    //             areaColor: '#031525',
    //             borderColor: '#FFFFFF'
    //           },
    //           emphasis: {
    //             areaColor: '#2B91B7'
    //           }
    //         },
    //         animation: false,
    //         data: data
    //       },
    //       {
    //         name: 'Top 5',
    //         type: 'effectScatter',
    //         coordinateSystem: 'geo',
    //         data: convertData(data.sort(function (a, b) {
    //           return b.value - a.value
    //         }).slice(0, 5)),
    //         symbolSize: function (val) {
    //           return val[2] / 10
    //         },
    //         showEffectOn: 'render',
    //         rippleEffect: {
    //           brushType: 'stroke'
    //         },
    //         hoverAnimation: true,
    //         label: {
    //           normal: {
    //             formatter: '{b}',
    //             position: 'right',
    //             show: true
    //           }
    //         },
    //         itemStyle: {
    //           normal: {
    //             color: '#F4E925',
    //             shadowBlur: 10,
    //             shadowColor: '#05C3F9'
    //           }
    //         },
    //         zlevel: 1
    //       }
    //     ]
    //   }
    //   myChart.setOption(option)
    // })
  },
  methods: {
    drawAnalysis (xData, yData) {
      this.trendAnalysis = echarts.init(document.getElementById('trendAnalysis'))
      this.trendAnalysis.setOption({
        title: {
          text: '近7天故障趋势',
          textStyle: {
            fontWeight: 'normal',
            fontFamily: 'Microsoft YaHei',
            fontSize: 18,
            color: '#c4c5ca'
          },
          top: '10',
          left: 'center'
        },
        grid: {
          left: '30',
          right: '40',
          bottom: '10',
          top: '50',
          containLabel: true
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            lineStyle: {
              color: '#2141a3'
            }
          }
        },
        // dataZoom: [{
        //   type: 'slider',
        //   start: 0,
        //   end: 100
        // }],
        xAxis: [{
          boundaryGap: false,
          axisLine: {
            show: false,
            lineStyle: {
              color: '#4977b7'
            }
          },
          axisTick: {
            show: false
          },
          data: ['12-05', '12-06', '12-07', '12-08', '12-09', '12-10', '12-11'],
          axisLabel: {
            interval: 0,
            textStyle: {
              fontSize: 14
            }
          },
          splitLine: {
            show: true,
            lineStyle: {
              type: 'dashed',
              color: '#1b2c4f'
            }
          }
        }],
        yAxis: [{
          axisTick: {
            show: false
          },
          axisLine: {
            show: false
          },
          axisLabel: {
            textStyle: {
              fontSize: 14,
              color: '#4977b7'
            }
          },
          splitLine: {
            show: false
          }
        }],
        series: [{
          type: 'line',
          name: '故障数',
          smooth: true,
          // lineStyle: {
          //   normal: {
          //     width: 2,
          //     color: '#00a2e5'
          //   }
          // },
          lineStyle: {
            normal: {
              width: 4,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: '#1561E6'
              }, {
                offset: 0.8,
                color: '#52EFF5'
              }], false),
              shadowColor: 'rgba(228, 139, 76, 0.1)',
              shadowBlur: 10
            }
          },
          showSymbol: false,
          itemStyle: {
            normal: {
              color: 'rgb(82, 191, 255)',
              borderColor: '#02236b'
            }
          },
          data: [220, 182, 191, 134, 150, 120, 110]
        }]
      })
    },
    drawPie (type, totalNum, onlineNum) {
      this.$data[type] = echarts.init(document.getElementById(type === 'device' ? 'dvOnline' : 'chassisOnline'))
      this.$data[type].setOption({
        series: [
          {
            type: 'pie',
            center: type === 'device' ? ['50%', '45%'] : ['50%', '55%'],
            radius: ['75%', '85%'],
            label: {
              normal: {
                position: 'center'
              }
            },
            hoverAnimation: false,
            data: [{
              value: 2300,
              tooltip: {
                show: false
              },
              itemStyle: {
                normal: {
                  color: type === 'device' ? '#1561e6' : '#41c8f1'
                }
              },
              label: {
                normal: {
                  fontSize: 12,
                  verticalAlign: 'top',
                  textStyle: {
                    color: '#c4c5ca'
                  },
                  formatter: type === 'device' ? '设备在线率' : '机箱在线率'
                }
              }
            }, {
              value: 200,
              itemStyle: {
                normal: {
                  color: '#0e1326'
                }
              },
              label: {
                normal: {
                  formatter: function (value) {
                    return `\n${100 - value.percent}%`
                  },
                  fontSize: 20,
                  textStyle: {
                    color: '#fff',
                    fontFamily: 'dinproBold'
                  }
                }
              }
            }]
          }]
      })
    },
    drawAlarm () {
      this.alarm = echarts.init(document.getElementById('alarmStatistics'))
      this.alarm.setOption({
        grid: {
          left: '30',
          right: '40',
          bottom: '10',
          top: '50',
          containLabel: true
        },
        title: {
          text: '今天告警情况',
          textStyle: {
            fontWeight: 'normal',
            fontFamily: 'Microsoft YaHei',
            fontSize: 18,
            color: '#c4c5ca'
          },
          top: '10',
          left: 'center'
        },
        xAxis: [{
          type: 'category',
          boundaryGap: true,
          axisLine: {
            show: true,
            lineStyle: {
              color: '#1b2c4f'
            }
          },
          axisLabel: {
            textStyle: {
              color: '#4977b7',
              margin: 15
            }
          },
          axisTick: {
            show: false
          },
          data: ['供电告警', '网络告警', '其他告警']
        }],
        yAxis: [{
          type: 'value',
          min: 0,
          // max: 140,
          splitNumber: 7,
          splitLine: {
            show: true,
            lineStyle: {
              color: '#1b2c4f'
            }
          },
          axisLine: {
            show: false
          },
          axisLabel: {
            margin: 20,
            textStyle: {
              color: '#4977b7'
            }
          },
          axisTick: {
            show: false
          }
        }],
        series: [{
          type: 'bar',
          barWidth: 40,
          zlevel: 2,
          tooltip: {
            show: false
          },
          label: {
            show: true,
            position: 'top',
            textStyle: {
              color: '#52eff5',
              fontSize: 20,
              fontWeight: 'bold',
              fontFamily: 'dinproBold'
            }
          },
          itemStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: '#524b40'
              }, {
                offset: 1,
                color: '#cf911d'
              }])
            }
          },
          data: [200, 285, 102]
        }, {
          type: 'bar',
          barWidth: 40,
          barGap: '-100%',
          zlevel: 1,
          stack: 'product',
          tooltip: {
            show: false
          },
          itemStyle: {
            normal: {
              color: '#1b2c4f'
            }
          },
          data: [350, 350, 350]
        }]
      })
    }
  }
}
