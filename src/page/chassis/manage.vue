<template>
  <div id='manage' class="table">
    <div id="manageContent">
      <span class="manage-title">机箱管理</span>
      <el-row style="margin-top: 20px" type="flex">
        <el-col :span='12'>
          <el-input placeholder="请输入机箱相关信息" v-model="searchText" class="input-with-select">
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </el-col>
        <el-col :span='12' style="text-align: right">
          <span style="color: #fefeff;font-size: 14px;margin-right: 15px">筛选:</span>
          <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange" border>全部</el-checkbox>
          <el-checkbox-group v-model="checkedCities" style="display: inline-block">
            <el-checkbox v-for="city in cities" :label="city" :key="city" border>{{city}}</el-checkbox>
          </el-checkbox-group>
        </el-col>
      </el-row>
      <el-button type="primary" icon="el-icon-circle-plus-outline" style="float: left;margin: 24px 0">添加新机箱</el-button>
      <el-table
        :data="tableData"
        border
        stripe
        height='calc(100vh - 460px)'
        style="width: 100%;">
        <el-table-column
          fixed
          align="center"
          label="机箱编号"
          width="200px">
          <template slot-scope="scope">
            <i class="icon-uninit" v-if="!scope.row.monitorStatus"></i>
            <i class="icon-offline" v-if="scope.row.monitorStatus === 3"></i>
            <span :style="scope.row.monitorStatus === 0 ? 'color: #b27f24' : scope.row.monitorStatus === 3 ? 'color: #b27f24' : ''">{{scope.row.crateSn}}</span>
          </template>
        </el-table-column>
        <el-table-column
          prop="name"
          fixed
          align="center"
          label="机箱名称"
          width="260px">
        </el-table-column>
        <el-table-column
          align="center"
          width="80px"
          fixed
          label="输入">
          <template slot-scope="scope">
            <i class="icon-input-right" v-if="scope.row.inputDuplex === 1 && scope.row.mainSwitchStatus === 1"></i>
            <i class="icon-input-offline" v-else-if='scope.row.mainSwitchStatus !== 1'></i>
            <i class="icon-input-error" v-else></i>
          </template>
        </el-table-column>
        <el-table-column
          label="下接设备"
          prop="monitors"
          align="left"
          header-align="left"
          :width="deviceWidth"
          style="padding: 0">
          <template slot-scope="scope">
            <div v-for='(item, index) in scope.row.monitors' :key="index" class="device-area" @click="showDetail">
              <i :class="iconDevice + item.status"></i>
              <span>{{item.name}}</span>
            </div>
          </template>
        </el-table-column>
        <el-table-column
          fixed="right"
          align="center"
          label="操作"
          width="120">
          <template slot-scope="scope">
            <el-popover
              placement="right"
              width="400"
              trigger="click">
              <div style="background: red">xxx</div>
              <i slot="reference" class="icon-more">{{scope.row.inputDuplex}}</i>
            </el-popover>
          </template>
        </el-table-column>
      </el-table>
      <split-morepage></split-morepage>
    </div>
  </div>
</template>

<script>
import splitMorepage from '../../components/splitMorepage'
const cityOptions = ['正常', '告警', '离线', '未监测']
export default {
  name: 'manage',
  data () {
    return {
      searchText: '',
      checkAll: false,
      checkedCities: [],
      cities: cityOptions,
      isIndeterminate: true,
      iconDevice: 'iconDevice',
      deviceWidth: null,
      tableData: [{
        crateSn: '1000000039',
        name: '智高顺机箱1000000039',
        mainSwitchStatus: 1,
        inputDuplex: 1,
        monitorStatus: 3,
        monitors: [{
          name: '摄像头1',
          status: 1
        }, {
          name: '摄像头2',
          status: 2
        }, {
          name: '',
          status: 3
        }, {
          name: '摄像头1',
          status: 4
        }, {
          name: '摄像头1',
          status: 1
        }, {
          name: '摄像头1',
          status: 1
        }, {
          name: '摄像头1',
          status: 1
        }, {
          name: '摄像头1',
          status: 1
        }, {
          name: '摄像头1',
          status: 1
        }, {
          name: '摄像头1',
          status: 1
        }]
      }, {
        crateSn: '1000000039',
        name: '智高顺机箱1000000039',
        mainSwitchStatus: 2,
        inputDuplex: 1,
        monitorStatus: 0,
        monitors: [{
          name: '摄像头1',
          status: 1
        }, {
          name: '摄像头2',
          status: 2
        }, {
          name: '',
          status: 3
        }, {
          name: '摄像头1',
          status: 4
        }, {
          name: '摄像头1',
          status: 1
        }]
      }, {
        crateSn: '1000000039',
        name: '智高顺机箱1000000039',
        mainSwitchStatus: 1,
        inputDuplex: 2,
        monitorStatus: 1,
        monitors: [{
          name: '摄像头1',
          status: 1
        }, {
          name: '摄像头2',
          status: 2
        }, {
          name: '',
          status: 3
        }, {
          name: '摄像头1',
          status: 4
        }]
      }, {
        crateSn: '1000000039',
        name: '智高顺机箱1000000039',
        mainSwitchStatus: 1,
        inputDuplex: 2,
        monitorStatus: 1,
        monitors: [{
          name: '摄像头1',
          status: 1
        }, {
          name: '摄像头2',
          status: 2
        }, {
          name: '',
          status: 3
        }, {
          name: '摄像头1',
          status: 4
        }]
      }, {
        crateSn: '1000000039',
        name: '智高顺机箱1000000039',
        mainSwitchStatus: 1,
        inputDuplex: 2,
        monitorStatus: 1,
        monitors: [{
          name: '摄像头1',
          status: 1
        }, {
          name: '摄像头2',
          status: 2
        }, {
          name: '',
          status: 3
        }, {
          name: '摄像头1',
          status: 4
        }]
      }, {
        crateSn: '1000000039',
        name: '智高顺机箱1000000039',
        mainSwitchStatus: 1,
        inputDuplex: 2,
        monitorStatus: 1,
        monitors: [{
          name: '摄像头1',
          status: 1
        }, {
          name: '摄像头2',
          status: 2
        }, {
          name: '',
          status: 3
        }, {
          name: '摄像头1',
          status: 4
        }]
      }, {
        crateSn: '1000000039',
        name: '智高顺机箱1000000039',
        mainSwitchStatus: 1,
        inputDuplex: 2,
        monitorStatus: 1,
        monitors: [{
          name: '摄像头1',
          status: 1
        }, {
          name: '摄像头2',
          status: 2
        }, {
          name: '',
          status: 3
        }, {
          name: '摄像头1',
          status: 4
        }]
      }, {
        crateSn: '1000000039',
        name: '智高顺机箱1000000039',
        mainSwitchStatus: 1,
        inputDuplex: 2,
        monitorStatus: 1,
        monitors: [{
          name: '摄像头1',
          status: 1
        }, {
          name: '摄像头2',
          status: 2
        }, {
          name: '',
          status: 3
        }, {
          name: '摄像头1',
          status: 4
        }]
      }]
    }
  },
  components: {
    splitMorepage
  },
  created () {
    this.deviceWidth = Math.max(...this.tableData.map((v) => {
      return v.monitors.length
    })) * 160
  },
  methods: {
    handleCheckAllChange (val) {
      this.checkedCities = val ? cityOptions : []
      this.isIndeterminate = false
    },
    showDetail () {
    }
  }
}
</script>

<style lang="scss">
  @import "../../css/table.scss";
  #manage {
    padding: 30px 30px 0 30px;
    #manageContent {
      background: #122140;
      border-radius: 8px;
      height: calc(100vh - 184px);
      padding: 0 24px;
      .manage-title {
        font-size: 18px;
        font-weight: 400;
        color: rgba(21,97,230,1);
        line-height: 45px;
      }
      .device-area {
        display: inline-block;
        border-right: 1px solid #16294f;
        cursor: pointer;
        width: 150px;
        text-align: center;
        white-space: nowrap;
        overflow: hidden;
        // position: relative;
        text-overflow: ellipsis;
        vertical-align: middle;
        &:last-child {
          border-right: 0px;
        }
        // &::after {
        //   position: absolute;
        //   content: '';
        //   height: 56px;
        //   width: 1px;
        //   background: #16294f;
        //   top: 0;
        //   right: 0;
        // }
      }

      // 输入框
      .el-input-group {
        float: left;
        width: 50%;
        ::-webkit-input-placeholder { /* WebKit, Blink, Edge */
          color: #5084c9;
        }
        :-moz-placeholder { /* Mozilla Firefox 4 to 18 */
          color: #5084c9;
        }
        ::-moz-placeholder { /* Mozilla Firefox 19+ */
          color: #5084c9;
        }
        :-ms-input-placeholder { /* Internet Explorer 10-11 */
          color: #5084c9;
        }
        .el-input__inner, .el-input-group__append {
          background-color: #1b2c4f;
          border: 1px solid #1b2c4f;
          color: #5084c9;
        }
        .el-button {
          background: #1b2c4f;
          border: 1px solid #1b2c4f;
          border-radius: 0px;
        }
      }

      //多选框
      .el-checkbox.is-bordered {
        border: 1px solid #1b2c4f;
      }
      .el-checkbox {
        color: #4977b7;
      }
      .el-checkbox__inner {
        border: 1px solid #4977b7;
        background-color: #122140;
      }
      .el-checkbox.is-bordered.is-checked {
        border-color: #1561e6;
      }
      .el-checkbox__input.is-checked .el-checkbox__inner {
        background-color: #1561e6;
        border-color: #1561e6;
      }

      // 按钮
      .el-button--primary {
        background-color: #1561e6;
        border-color: #1561e6;
      }
      .icon-uninit {
        content: url('../../img/chassisManage/unInit.png');
        position: absolute;
        top: 0;
        right: 0;
      }
      .icon-offline {
        @extend .icon-uninit;
        content: url('../../img/chassisManage/offline.png');
      }
      .icon-input-right {
        content: url('../../img/chassisManage/input-right.png');
        vertical-align: middle;
      }
      .icon-input-error {
        content: url('../../img/chassisManage/input-error.png');
        vertical-align: middle;
      }
      .icon-input-offline {
        content: url('../../img/chassisManage/input-offline.png');
        vertical-align: middle;
      }
      .iconDevice3:hover {
        content: url('../../img/chassisManage/device3-h.png');
      }
      .icon-more {
        cursor: pointer;
        content: url('../../img/chassisManage/more.png');
        vertical-align: middle;
        &:hover {
          content: url('../../img/chassisManage/more-h.png');
        }
      }
    }
  }

  @for $i from 1 through 4 {
    .iconDevice#{$i} {
      cursor: pointer;
      vertical-align: middle;
      content: url('../../img/chassisManage/device#{$i}.png');
    }
  }
</style>
