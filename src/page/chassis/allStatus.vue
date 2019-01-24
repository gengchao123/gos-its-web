<template>
  <div id='allStatus' class="table">
    <transition name='show'>
      <div id="container" v-show='!showMap'>
        <el-row :gutter="30">
          <el-col :span="8">
            <div id="trendAnalysis"></div>
          </el-col>
          <el-col :span="8">
            <div id="onlineCount">
              <span class="count-title">机箱、设备在线情况统计</span>
              <el-row style="margin-top: 15px;border-bottom: 1px solid #1b2c4f;min-height: calc((((100vh - 214px) / 2) - 64px) / 2);">
                <el-col :span='8'>
                  <div id="dvOnline"></div>
                </el-col>
                <el-col :span='16'>
                  <el-row style="min-height: calc((((100vh - 214px) / 2) - 64px) / 4)">
                    <el-col :span='12'>
                      <span class="count-text">设备总数</span>
                    </el-col>
                    <el-col :span='12'>
                      <span class="count-number">2500</span>
                    </el-col>
                  </el-row>
                  <el-row style="min-height: calc((((100vh - 214px) / 2) - 64px) / 4)">
                    <el-col :span='12'>
                      <span class="count-text">在线设备</span>
                    </el-col>
                    <el-col :span='12'>
                      <span class="count-number">2300</span>
                    </el-col>
                  </el-row>
                </el-col>
              </el-row>
              <el-row style="margin-top: 15p;min-height: calc((((100vh - 214px) / 2) - 64px) / 2);">
                <el-col :span='8'>
                  <div id="chassisOnline"></div>
                </el-col>
                <el-col :span='16' style="margin-top: 15px">
                  <el-row style="min-height: calc((((100vh - 214px) / 2) - 64px) / 4);">
                    <el-col :span='12'>
                      <span class="count-text">机箱总数</span>
                    </el-col>
                    <el-col :span='12'>
                      <span class="count-number">2500</span>
                    </el-col>
                  </el-row>
                  <el-row style="min-height: calc((((100vh - 214px) / 2) - 64px) / 4);">
                    <el-col :span='12'>
                      <span class="count-text">在线机箱</span>
                    </el-col>
                    <el-col :span='12'>
                      <span class="count-number">2300</span>
                    </el-col>
                  </el-row>
                </el-col>
              </el-row>
            </div>
          </el-col>
          <el-col :span="8">
            <div id="alarmStatistics"></div>
          </el-col>
          <el-col :span='12' style="margin-top: 30px">
            <div id="faultTable">
              <span class="count-title">故障情况</span>
              <el-table
                :data="tableData"
                height="calc(((100vh - 214px) / 2) - 110px)"
                style="width: 100%">
                <el-table-column
                  prop="time"
                  show-overflow-tooltip
                  label="时间"
                  min-width="100">
                </el-table-column>
                <el-table-column
                  prop="number"
                  show-overflow-tooltip
                  label="机箱编号"
                  min-width="120">
                </el-table-column>
                <el-table-column
                  prop="thing"
                  show-overflow-tooltip
                  min-width="130"
                  label="异常事件">
                </el-table-column>
                <el-table-column
                  width="230"
                  label="操作">
                  <template slot-scope='scope'>
                    <div style="display: flex;" v-if="!scope.row.status">
                      <div v-for='(item, index) in 3' :key="item" class="action-area">
                        <i :class="iconAction + (index + 1)"></i>
                        <span>{{!index ? '派单' : index === 1 ? '忽略' : '重启'}}</span>
                      </div>
                    </div>
                    <div v-else class="have-action">
                      <span>{{scope.row.status === 1 ? '已派单' : scope.row.status === 2 ? '已忽略' : '已重启'}}</span>
                    </div>
                  </template>
                </el-table-column>
              </el-table>
              <split-lesspage></split-lesspage>
            </div>
          </el-col>
          <el-col :span='12' style="margin-top: 30px">
            <div id="smallMap">
              <i class="icon-enlarge" @click="showMap = true"></i>
            </div>
          </el-col>
        </el-row>
      </div>
    </transition>
    <transition name='fade'>
      <div id="mapBig" v-show='showMap'>
        <i class="icon-narrow" @click="showMap = false"></i>
      </div>
    </transition>
  </div>
</template>

<script>
import initEcharts from './initEcharts'
import splitLesspage from '../../components/splitLesspage'
// import echarts from 'echarts'

export default {
  name: 'allStatus',
  mixins: [initEcharts],
  data () {
    return {
      showMap: false,
      iconAction: 'iconAction',
      tableData: [{
        time: '2019-12-25 19:20',
        number: 'SJK908',
        thing: '端口5供电故障',
        status: 0
      }, {
        time: '2019-12-25 19:20',
        number: 'SJK908',
        thing: '端口5供电故障',
        status: 1
      }]
    }
  },
  components: {
    splitLesspage
  },
  created () {
  },
  mounted () {
    this.drawAnalysis()
    this.drawPie('device')
    this.drawPie('chassis')
    this.drawAlarm()
  },
  methods: {
  }
}
</script>

<style lang="scss">
  @import '../../css/table';
  #allStatus {
    padding: 30px 30px 0 30px;
    #mapBig {
      height: calc(100vh - 184px);
      background: #122140;
      border-radius: 8px;
      .icon-narrow {
        float: right;
        content: url('../../img/allStatus/narrow.png');
        margin: 20px 20px 0 0;
        cursor: pointer;
      }
    }
    #trendAnalysis {
      background: #122140;
      border-radius: 8px;
      height: calc((100vh - 214px) / 2);
      min-height: 270px;
      overflow: hidden;
    }
    #alarmStatistics {
      @extend #trendAnalysis;
    }
    #onlineCount {
      @extend #trendAnalysis;
      padding: 0 40px;
      .count-title {
        display: inline-block;
        margin-top: 10px;
        font-size: 18px;
        font-weight: 400;
        color: #c4c5ca;
      }
      #dvOnline, #chassisOnline {
        height: calc((((100vh - 214px) / 2) - 60px) / 2);
      }
      .count-text {
        height:18px;
        font-size:14px;
        font-weight:400;
        color:rgba(73,119,183,1);
        line-height:45px;
      }
      .count-number {
        height:26px;
        font-size:36px;
        font-family: dinproMedium;
        font-weight:500;
        color:rgba(209,146,29,1);
        line-height:45px;
      }
    }
    #faultTable {
      @extend #trendAnalysis;
      .count-title {
        display: inline-block;
        margin-top: 10px;
        font-size: 18px;
        font-weight: 400;
        color: #c4c5ca;
        margin-bottom: 20px;
      }
      .el-table thead {
        color: #c5c7cd;
      }
      .el-table tr {
        background-color: #122140;
      }
      .el-table--enable-row-hover .el-table__body tr:hover>td {
        background-color: #1b2c4f;
      }
      .el-table .cell {
        line-height: 38px;
      }
      .action-area {
        border: 1px solid #3d4b69;
        border-radius: 12px;
        color: #dde0e5;
        height: 25px;
        line-height: 24px;
        padding: 0 5px;
        margin-right: 5px;
        cursor: pointer;
        &:hover {
          border: 1px solid #19489a;
          color: #176cff;
          @for $i from 1 through 3 {
            .iconAction#{$i} {
              content: url('../../img/allStatus/action#{$i}-h.png');
            }
          }
        }
      }
      .have-action {
        display: flex;
        background: #101d38;
        color: #1561e6;
        border-radius: 10px;
        height: 25px;
        line-height: 24px;
        width: 63px;
        justify-content: center;
      }
    }
    #smallMap {
      @extend #trendAnalysis;
      .icon-enlarge {
        float: right;
        content: url('../../img/allStatus/enlarge.png');
        margin: 20px 20px 0 0;
        cursor: pointer;
      }
    }
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .15s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
  .show-enter-active, .show-leave-active {
    transition: opacity .15s;
  }
  .show-enter, .show-leave-to {
    opacity: 0;
  }

  @for $i from 1 through 3 {
    .iconAction#{$i} {
      content: url('../../img/allStatus/action#{$i}.png');
      vertical-align: middle;
      margin-top: -2px;
      // &:hover {
      //   content: url('../../img/allStatus/action#{$i}-h.png');
      // }
    }
  }

</style>
