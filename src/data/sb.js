const defSb = {
  矩阵研究站: 0,
  制作台: 1,
  冶炼设备: 0,
  采矿机: 1,
  能量枢纽: 0,
  轨道采集器: 1,
  化工厂: 0,
  原油精炼厂: 0,
  原油萃取站: 0,
  抽水机: 0,
  微型粒子对撞机: 0,
  射线接收站: 0
};
const sbMap = {
  射线接收站: [
    {
      name: "射线接收站",
      speed: 1
    }
  ],
  微型粒子对撞机: [
    {
      name: "微型粒子对撞机",
      speed: 1
    }
  ],
  抽水机: [
    {
      name: "抽水机(1/s)",
      baseName: "抽水机",
      speed: 1
    }
  ],
  原油萃取站: [
    {
      name: "原油萃取站(2/s)",
      baseName: "原油萃取站",
      speed: 2
    }
  ],
  化工厂: [
    {
      name: "化工厂",
      speed: 1
    }
  ],
  原油精炼厂: [
    {
      name: "原油精炼厂",
      speed: 1
    }
  ],
  矩阵研究站: [
    {
      name: "矩阵研究站",
      speed: 1
    }
  ],
  制作台: [
    {
      name: "制作台Mk.Ⅰ",
      speed: 0.75
    },
    {
      name: "制作台Mk.Ⅱ",
      speed: 1
    },
    {
      name: "制作台Mk.Ⅲ",
      speed: 1.5
    }
  ],
  冶炼设备: [
    {
      name: "电弧熔炉",
      speed: 1
    }
  ],
  采矿机: [
    {
      name: "采矿机",
      speed: 0.5 * 6
    },
    {
      name: "矿脉",
      speed: 0.5 * 1
    }
  ],
  能量枢纽: [
    {
      name: "能量枢纽",
      speed: 1
    }
  ],
  轨道采集器: [
    {
      name: "轨道采集器(1/s)",
      baseName: "轨道采集器",
      speed: 1
    },
    {
      name: "轨道采集器(0.5/s)",
      baseName: "轨道采集器",
      speed: 0.5
    }
  ]
};

export default name => {
  return sbMap[name][defSb[name]];
};
